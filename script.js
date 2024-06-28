console.log("Hello World");

let a=20;
console.log(a);

 a="name";//let keyword can be updated but not redeclared-hence we only use 'a' not 'let a'
console.log(a);

let Name="tony";
console.log(Name);
console.log(typeof name);

let c=null;
console.log(c);

let d=undefined;
console.log(d);

let k;
console.log(k);//since we did not give any value to k by default it becomes undefied

let notPossible=true;
console.log(notPossible);

let isPossible=false;
console.log(isPossible);

const PI=3.14;
console.log(PI);
//cant update or redeclare const variables

let valueone=2;
let valuetwo="2";
console.log(valueone+valuetwo);/*JavaScript performs string concatenation when you use the + operator with a string and a number. 
In this case, it treats the number 2 as a string and concatenates it with the string “2”, resulting in “22”*/

console.log(valueone+parseInt(valuetwo));//parseInt converts string to integer and does the calculation 

let value=2;
let val="a";
console.log(value+parseInt(val));/*NaN not an integer when attempting to parse the string “a” as an integer, 
JavaScript encounters a non-numeric character and cannot convert it to a valid number*/

let firstname="John";
let middlename="Micheal";
const lastname="Dom";
const age=32;
//both let and const can be used
console.log("My name is " + firstname + " " + middlename + " " + lastname + " and my age is " +age);
console.log(`My name is ${firstname} ${middlename} ${lastname} and my age is ${age}`);//note we use backticks here 
