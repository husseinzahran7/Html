
// =========== print on console =============
// console.log(`Hello`);

// console.log(`i like pizza`);

// ==========================================

// =========== window alert =============

// window.alert(`This is alert!`);
// window.alert(`I like pizza!`);

// ======================================

// comment is //

/* this is  a comment too */
// ======================================


// ================= Document ================

// document: means document of web page
// Elementbyid : used to create an id that we can use to set data for html pages

// document.getElementById("h1").textContent=`Hello M.R ${name}`;
// document.getElementById("p1").textContent=`we are creating pizza`;

// ===========================================

// ================= variables ================
// there is 2 ways of creating a variables 
// 1. declaration       let x;
// 2. assignment        x=100;

// let x;
// x=100;

//  we can use `` for string that can pares data through it using ${} 
// let age = 25;
// let price = 29.99;
// let name =`hussein`;


// console.log(`you are ${age} years old`);
// console.log(`the price is $${price}`);

// for data type
// console.log(typeof(age)); // number
// console.log(typeof(price)); //number
//console.log(typeof(name)); // string

// let online=true;
// console.log(`online is ${online}`);

// ===========================================

// =============== arithmetic operators =================
/*

operator precedence
1. parenthesis ()
2. exponents 
3. multiplication & division & modulo
4. addition & subtraction


let student = 30;
student= student +1;

student+=1;
student++;// plus 1
student--;//minus
student/student;// division
student*student;// multiplication
student%3;// modulus
student**3;// power of 3

console.log(student);
*/
// ===========================================

// =================== how to accept user input ====================

/*
1. Easy way = window prompt // window prompt looks like the alert but we can write input in it
2. Professional way = HTML textbox
*/

// let username;

// username= window.prompt("what is your name? "); 

// in Professional way we need to access the html by document

// let username;

// document.getElementById("submit").onclick = function(){
//     username = document.getElementById("input1").value;
//     console.log(username);
//     document.getElementById("h4").textContent=`Hello M.R ${username}`;

// };

// ===========================================

// ==================== type conversion =====================
/*
let age = window.prompt("how old are you?");// user input is string
age=Number(age);//convert to number
age+=1;
console.log(age, typeof age);


x= Number(x);
y= String(y);
z= Boolean(z);
*/
// ===========================================

// ================= const ===================
/*
 const is a variable that can not be changed

 note for good practices when we set a number that const we set it capital
*/

/*
const PI = 3.14;
let radius;
let circumference;

radius = window.prompt('Enter the radius of a circle');
radius = Number(radius);

circumference= 2*pi *radius;

console.log(circumference);
*/
// ===========================================

// ================= counter program ===================
/*
const dec = document.getElementById("dec");
const reset = document.getElementById("reset");
const inc = document.getElementById("inc");
const counter = document.getElementById("counter");
let count =0;

inc.onclick=function(){
    count++;
    counter.textContent=count;
}

dec.onclick=function(){
    count--;
    counter.textContent=count;
}

reset.onclick=function(){
    count=0;
    counter.textContent=count;
}
*/
// ===========================================

// ==================== Math =====================
/*

console.log(Math.PI);
console.log(Math.E);
let x= 3.2;
console.log(Math.round(x));// to close of 5 as usual 
console.log(Math.floor(x));// to down =3
console.log(Math.ceil(x));// to up =4
console.log(Math.trunc(x));// to down
console.log(Math.pow(2,3));
console.log(Math.sqrt(16));
console.log(Math.sin(x));
console.log(Math.cos(x));
console.log(Math.tan(x));

console.log(Math.abs(x));
console.log(Math.sign(x));
let max = Math.max(x,y,z);
console.log(max);
let min = Math.min(x,y,z);
console.log(min);
*/
// ===========================================

// ==================== Random =====================
/*
let random = Math.random();// between 0 and 1 like 0.64684
let random2 = Math.random()*6;// between 0 and 6 like 4.4456146
let random3 = Math.floor(Math.random()*6); // between 0 and 6 like 4
let random4 =Math.floor(Math.random()*100)+1;// between 1 and 100 like 45


console.log(random);
*/
// ===========================================

// ==================== If statements =====================
/*
let age = 25;
if (age >= 18) {
    console.log("you can vote");
} else {
    console.log("you can not vote");
}
*/
/*
let hasLicense = false;
if (hasLicense) {
    console.log("you have your license");
} else {
    console.log("you do not have your license");
}
*/
// ===========================================

// ==================== Radio Btn & Check Box =====================

// .checked property
/*
const checkBox = document.getElementById("checkbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const submit = document.getElementById("submit2");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submit.onclick = function () {
    if (checkBox.checked) {
        subResult.textContent=`you are subscribed!`;
    }
    else{
        subResult.textContent=`you are not subscribed!`;
}

    if (visaBtn.checked) {
        paymentResult.textContent=`you are paying with Visa`;
    }
    else if (masterCardBtn.checked) {
        paymentResult.textContent=`you are paying with MasterCard`;
    }
    else if (payPalBtn.checked) {
        paymentResult.textContent=`you are paying with PayPal`;
     
        }
      else{
        paymentResult.textContent=`you must select a payment type`;
      }  
        }
*/
// ===========================================

// ==================== ternary operator =====================

/*
let age = 21;
// condition ? codeIfTrue : codeIfFalse;
let message = age>=18 ? console.log("you can vote") : console.log("you can not vote");

console.log(message);
*/
// ===========================================

// ==================== Switch =====================
/*
let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log(`invalid day`);
        break;
}

*/
/*
let testScore = 92;
let letterGrade;

switch (true) {
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
         letterGrade = "F";
        break;

   
}
*/
// =========================================

// ==================== string methods =====================
/*
let userName = "hussein";

// charAt: select index 
console.log(userName.charAt(0));

// indexOf("s") : the first s index in the string
console.log(userName.indexOf("s"));

// lastIndexOf("s") : the last s index in the string
console.log(userName.lastIndexOf("s"));

// slice(0,3) : cut from index 0 to 3
console.log(userName.slice(0, 3));

// toUpperCase() : to upper case
console.log(userName.toUpperCase());

// toLowerCase() : to lower case
console.log(userName.toLowerCase());

// replace("hussein","ahmed") : replace hussein with ahmed
console.log(userName.replace("hussein", "ahmed"));

// length : the length of the string
console.log(userName.length);

// trim to delete spaces in string
userName=userName.trim();
console.log(userName);

// repeat : repeats string 
userName=userName.repeat(2);
console.log(userName);

// startsWith : it used for boolean like you can check if name starts with ' ' then adding if statement for action
let result = userName.startsWith(" ");
if (result) {
    console.log("your username cant begin with ' '");
}
else{
    console.log("your username can begin with ' '");
    
}

//endsWith : it used for boolean like you can check if name ends with ' ' then adding if statement for action
let result2 = userName.endsWith(" ");
if (result2) {
    console.log("your username cant begin with ' '");
}
else{
    console.log("your username can begin with ' '");
    
}

//  includes : it used for boolean like you can check if name includes with ' ' then adding if statement for action
let result3 = userName.includes(" ");
if (result3) {
    console.log("your username cant begin with ' '");
}
else{
    console.log("your username can begin with ' '");
    
}

// replaceAll : first thing with second thing you add
let phoneNumber= "132-456-7890";
phoneNumber = phoneNumber.replaceAll("-","");
console.log(phoneNumber);

// padstart : it add to start of string the input we added until it reach string number needed
let phoneNumber2= "132-456-7890";
phoneNumber2 = phoneNumber2.padStart(14,"*");
console.log(phoneNumber2);

// padend : it add to end of string the input we added until it reach string number needed
let phoneNumber3= "132-456-7890";
phoneNumber3 = phoneNumber3.padEnd(14,"*");
console.log(phoneNumber3);

*/

// =========================================

// ==================== method chaining =====================

/*
// method chaining is calling one method after another in one line of code

// no method chaining 
let userName = window.prompt("enter your username");
userName= userName.trim();
let letter = userName.charAt(0);
letter= letter.toUpperCase();

let extraChars= userName.slice(1);
extraChars=extraChars.toLowerCase();
userName=letter+extraChars;

console.log(userName);
*/

/*
// method chaining

userName=userName.trim().charAt(0).toUpperCase()+ userName.trim().slice(1).toLowerCase();
console.log(userName);
*/

// =========================================

// ==================== Logical operators =====================
/*
// And = &&     Or = ||     Not = !
let temp=20;
if (temp>=0 && temp<=30) {
    console.log("The weather is good");
}
else{
    console.log("The weather is bad");    
}

if (temp<=0 || temp>=30) {
    console.log("The weather is bad");
}
else{
    console.log("The weather is good");
}
const isSunny = true;
if (!isSunny) {
    console.log("The weather is cloudy");
}
else{
    console.log("The weather is Sunny");
}
*/
// =========================================

// ==================== strict equality =====================

//   = assignment operator
//  == equality operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
//  != inequality operator
// !== strict inequality operator 

/*
const PI = 3.14;

if (PI === 3.14) {
    console.log("That is Pi");
}
else{
    console.log("That is not Pi")
}
*/

// =========================================

// ==================== while loop =====================
/*  unlimited amount of time
let username = "";

while (username === "" || username === null) {
    username = window.prompt("enter your name");
    
} 
console.log(`hello ${username}`);
*/
/*

let username = "";
do {
    username = window.prompt("enter your name");
} while (username === "" || username === null);
*/

/*
let username ;
let password;
let loggedIn = false;
while (!loggedIn) {
    username = window.prompt("enter your name");
    password = window.prompt("enter your name");

    if (username === "admin" && password === "password") {
        loggedIn= true;
        console.log("you are logged in");
    }
    else{
        console.log("you are not logged in");
        
    }

}
  */  

// =========================================

// ==================== for loop =====================
/* limited amount of time */ 
/*
for (let i = 10; i >= 1; i--) {
    console.log(`${i} `);

}
console.log("HAPPY NEW YEAR");
*/

/*
for (let i =1; i <=20 ; i++) {
    
    if (i == 13) {
        continue
    }
    else{
        console.log(i);
    }
    
}
*/

/*
for (let i =1; i <=20 ; i++) {
    
    if (i == 13) {
        break
    }
    else{
        console.log(i);
    }
    
}
*/


// =========================================

// ==================== Number guessing game =====================
/*
const minNum = 1;
const maxNum = 100;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Please enter a valid number");
    }
    else if (guess < minNum || guess > maxNum) {
        window.alert(`Please enter a number between ${minNum} - ${maxNum}`);
    }
    else{
        attempts++;
        if (guess<answer) {
            window.alert(`Too low! try again!`);   
        }
        else if (guess > answer) {
            window.alert(`too high! try again!`)
            
        }
        else{
            window.alert(`correct! the answer was ${answer} and you guessed it in ${attempts} attempts`);
            
            running =false;
        }
    }
}
*/

// =========================================

// ==================== Function =====================

/*
function happyBirthday(username, age) {
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${username} !`);
    console.log("Happy Birthday to you!");
    console.log("you are now " + age + " years old!");
    console.log(`you are now ${age} years old!`);
    
}
    */ 
    
 /* to send something to function when we call it we send it using parameters */ 
// happyBirthday("hussein",25);
/*
function add(x,y) {
    let result =x+y;
    return result;
    
}

console.log(add(2,6));
*/

// =========================================

// ==================== variable scope =====================
// local vs global 
/*

//local
function f1() {
    let x =1;
    console.log(x);
    
}
f1();

function f2() {
    let x =2;
    console.log(x);
    
}
f2();

//global
let x = 3;
console.log(x);

*/

// =========================================

// ==================== temperature conversion =====================

/*
const tempInput = document.getElementById("tempInput");
const toCelsius = document.getElementById("toCelsius");
const toFahrenheit = document.getElementById("toFahrenheit");
const result = document.getElementById("result");
let temp;


function convertTemp() {
    if (toFahrenheit.checked) {

        temp = Number(tempInput.value);

        result.textContent = (temp * 9/5) + 32;

    }else if (toCelsius.checked) {

        temp = Number(tempInput.value);
        temp = (temp - 32) * 5/9;
        result.textContent = temp;
    
        
    }
    else{
        result.textContent="Select a unit";
    }
}
        
*/
// =========================================

// ==================== temperature conversion =====================


