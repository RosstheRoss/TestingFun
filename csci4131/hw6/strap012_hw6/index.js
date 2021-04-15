// YOU CAN USE THIS FILE AS REFERENCE FOR SERVER DEVELOPMENT
const createError = require('http-errors');

// Include the express module
const express = require('express');

// helps in extracting the body portion of an incoming request stream
var bodyparser = require('body-parser');

// Path module - provides utilities for working with file and directory paths.
const path = require('path');

// Helps in managing user sessions
const session = require('express-session');

// include the mysql module
var mysql = require('mysql');

// Bcrypt library for comparing password hashes
const bcrypt = require('bcrypt');

// Include the express router. 
const utilities = require('./api/utilities');

const port = 9001;

// create an express application
const app = express();

// Use express-session
// In-memory session is sufficient for this assignment
app.use(session({
        secret: "csci4131secretkey",
        saveUninitialized: true,
        resave: false
    }
));

// middle ware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// server listens on port for incoming connections
app.listen(port, () => console.log('Listening on port', port));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/welcome.html'));
});

// GET method route for the contacts page.
// It serves contact.html present in public folder
app.get('/contacts', function(req, res) {
    if(!req.session.value) {
        res.redirect('/login');
    } else {
        res.sendFile(path.join(__dirname, 'public/contacts.html'));
    }
});

app.get('/stock', function (req, res) {
    if (!req.session.value) {
        res.redirect('/login');
    } else {
        res.sendFile(path.join(__dirname, 'public/stock.html'));
    }
});

app.get('/addContact', function (req, res) {
    if (!req.session.value) {
        res.redirect('/login');
    } else {
        res.sendFile(path.join(__dirname, 'public/addContact.html'));
    }
});

app.get('/login', function (req, res) {
    if (req.session.value) {
        res.redirect('/contacts');
    } else {
        res.sendFile(path.join(__dirname, 'public/login.html'));
    }
});

app.post('/logintry', function(req, res) {

});


// TODO: Add implementation for other necessary end-points



// Makes Express use a router called utilities
app.use('/api', utilities);

// function to return the 404 message and error to client
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    // res.render('error');
    res.send();
});