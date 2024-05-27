/*
O programa deve escrever os números de 1 até 100
Se o número é divisível por 3, no lugar do número escreva Fizz
Se o número é divisível por 5, no lugar do número escreva Buzz
Se o número é divisível por 3 e 5, no lugar do número escreva FizzBuzz

Program FizzBuzz;
var
I : Byte;
begin
for i := 1 to 100 do
begin
if ((i mod 3) <> 0) and ((i mod 5) <> 0) then
writeln (i)
else
begin
if (i mod 3) = 0 then
write(‘Fizz’);
if (i mod 5) = 0 then
write(‘Buzz’);
writeln;
end;
end;
end.
*/
//Loop de 1 a 100
const num=100;
for(let i=0;i<=100;i++){
    //Se divisível por 3 Fizz
    if(i % 3==0){
        console.log('\x1b[31m',"======================")
        console.log('\x1b[31m',"|       Bizz          |")
       
        console.log('\x1b[31m',"======================")
    }
       //Se divisível por 3 Bizz
   else if(i % 5==0){
    console.log('\x1b[32m',"======================")
    console.log('\x1b[32m',"|          Bizz       |")
   
    console.log('\x1b[32m',"======================")

    }
       //Se divisível por 3 e 5 FizzBizz
    if(i % 3==0 && i % 5==0){
        console.log('\x1b[34m',"======================")
        console.log('\x1b[34m',"|       FizzBizz      |")
       
        console.log('\x1b[34m',"======================")
    }else{
        console.log('\x1b[0m',i)
    }
}
