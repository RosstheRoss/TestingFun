var input = document.getElementById("password");
var result = document.querySelector("span");
// result.onload = function() {setResult()};
// function setResult() {
//     result = document.querySelector("span");
// }
function checkStrength() {
    var password = document.getElementById("password").value;
    var strength = 0;
    if (password.length < 6) {
        result.removeAttribute("class");
        result.classList.add('short');
        result.innerHTML = "Too short";
    }
    if (password.length > 7) { strength += 1;}
    // If password contains both lower and uppercase characters, increase strength value.
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) { strength += 1;}
    // If it has numbers and characters, increase strength value.
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) { strength += 1;}
    // If it has one special character, increase strength value.
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) { strength += 1;}
    // If it has two special characters, increase strength value.
    if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) { strength += 1;}
    // Calculated strength value, we can return messages
    // If value is less than 2
    if (strength < 2) {
        result.removeAttribute("class");
        result.classList.add('weak');
        result.innerHTML = 'Weak';
    } else if (strength == 2) {
        result.removeAttribute("class");
        result.classList.add('good');
        result.innerHTML = 'Good';
    } else {
        result.removeAttribute("class");
        result.classList.add('strong');
        result.innerHTML = 'Strong';
    }
}
