/*
let js = "amazing";
console.log(40 + 8 + 23 - 18);

console.log("Jonas");
console.log("23");

let firstName = "jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions.
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = "3.1415";

let myFirstJob = "Programmer";
let MySecondJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof ture);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;
//const job

var job = "programmer";
job = "teacher";

lastName = "Schmedtmann";
console.log(lastName);

const now = 2037;
const ageJonas = now - 1991;
const agaSarah = now - 2018;
console.log(ageJonas, ageSarah);-

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2.

const firstName = "jonas";
const lastName = "schmedtmann";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators

console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = ageJonas + ageSarah / 2;
console.log(ageJonas, ageSarah, averageAge);

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a reagular string...`);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String
muliple
lines`);

// 018 Taking Decisions_if_else Statements
const age = 15;
if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

If else control structure
if(){

}else{

}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

//// 20 Type Conversion and Coercion

// Type conversion

const inputYear = "1991";
// Difference between number and number as a string
console.log(Number(inputYear), inputYear);
// You can add number as a string "99" to number
console.log(Number(inputYear) + 18);
// 'NaN' which appeard in the console = Not a number
console.log(Number("Jonas"));

console.log(typeof NaN);
// string appear in console in white, number in purble
console.log(String(23), 23);

// Type Coercion

// JavaScrip convert strings to numbers automaticaly
console.log("I am " + 23 + " years old");
console.log("23" - "18" - 3);
console.log("23" / "2");
console.log("23" > "18");

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);

//// 021 Truthy abd Falsy Values

// 5 falsy values: 0,'', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}



//// 022 Equality Operators_ == vs ===.

const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  // 22 === 23 -> FALSE
  console.log("Cool we is an amzaing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");


//// 024 Logical Operators.

const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// if (hasDriverLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false; // C
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!"); //true
} else {
  console.log("Someone else should drive..."); //false
}


// 026 The switch Statement

// More code, more readable.
const day = "tuesday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");

    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;

  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;

  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a vaild day!");
}


//// 027 Statements and Expressions.

3 + 4;
1991;
true && false && !false;

// All of these above are expressions

// Statment is bigger than expression
if (23 > 10) {
  const str = "23 is bigger";
}

// Statment Can accept only expreesions not statment.
const me = "Jonas";
console.log(`i'm ${2037 - 1991} years old ${me}`);



//// 028 The Conditional (Ternary) Operator.

const age = 18;
age >= 18
  ? console.log(" I like to drink juice 🥤")
  : console.log("I like t odring water 💧");

// ?  = if
// : = else

const drink = age >= 23 ? "juice 🥤" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "juice 🥤";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(` I like to drink ${age >= 18 ? "juice🥤" : "water 💧"}`);
*/
