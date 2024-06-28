console.log("Hello World");

//PRIMITIVE DATA TYPES

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

let s=BigInt(123)
console.log(s);
console.log(typeof(s));

let z=Symbol("hello!");
console.log(z);
console.log(typeof(z));

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



//NON PRIMITIVE DATA TYPES

//Array

arrayOne= ["john",30,true,null,undefined];
console.log(arrayOne);

//push
arrayOne.push("Apple");
console.log(arrayOne);

//pop
arrayOne.pop();
console.log(arrayOne);

//unshift
arrayOne.unshift("Mango");
console.log(arrayOne);

console.log(arrayOne[0]);
console.log(arrayOne[1]);

arrayOne[3]="banana";
console.log(arrayOne);

console.log(arrayOne.length);

//splice
arrayOne.splice(3,1); //start index to no of element getting deleted
console.log(arrayOne);
arrayOne.splice(2,2); //start index to no of element getting deleted
console.log(arrayOne);

//Objects

let person={
    firstname:"John",
    lastname:"Dougls",
    age:32,
    
};
console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);

//COMPARISON OPERATORS

let x="2";
let y=2;
console.log(x==y);//(loose equality).
console.log(x===y);// (strict equality).
console.log(x!=y);//(loose inequality).
console.log(x!==y);//(strict inequality).

let t=2;
let g=3;
console.log(t>g);
console.log(t<g);

let q=3;
let p=3;
console.log(q>=p);
console.log(q<=p);

//CONDITIONAL STATEMENTS

//If 

let legal_Age=19;
if(legal_Age>=18){
    console.log("you are an adult");
    }
 
 //If Else
 
 let legalAge=16;
 if(legalAge>=18){
    console.log("you are an adult");
 }
 else {
    console.log("you are an minor");
 }

 //If-else if-else

 let time=5;
 if(time<12){
    console.log("Good morning");
     }
  else if(time>16){
    console.log("Good afternoon");
     }  
     else{
        console.log("Good night");
     } 

//Switch

   let output=0;
   switch(output)  {
    case 0:
        console.log("low");
        break;
    case 1:
        console.log("high");
        break;   
    default:
        console.log("invalid");
        break;     
   }

   //Ternary 
   let AGE=20;
   let type=(AGE>21)?"Adult":"Minor";
   console.log(type);
