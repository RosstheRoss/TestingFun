A=[0   1/3 1/2 1/2 0;
   1/2 0   0   0   0;
   0   1/3 0   0   0;
   0   1/3 1/2 0   1;
   1/2 0   0   1/2 0];
%Matrix A from lab
p1=[1;0;0;0;0];
p2=[0;1;0;0;0];
p3=[0;0;1;0;0];
p4=[0;0;0;1;0];
p5=[0;0;0;0;1];
for n=1:600
     p1=A*p1;
     p2=A*p2;
     p3=A*p3;
     p4=A*p4;
     p5=A*p5;
end

