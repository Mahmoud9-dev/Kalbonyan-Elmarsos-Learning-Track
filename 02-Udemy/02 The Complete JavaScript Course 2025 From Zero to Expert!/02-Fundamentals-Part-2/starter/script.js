/*
//// 031 Strict Mode  

// help to make deveolper write a secure code
// secure = Mean that strict mode makes it easier for us developer to avoid accidental errors
// Why That? = 2 resons
// -- strict mode forbids us to do certain things
// -- Create visible errors
// Without 'strict mode' JavaScript will simply fail silently without letting us know

"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

const interface = "Audio";
const private = 534;


//// 033 Functions

function logger() {
  console.log("My name is Mahmoud");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProccers(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProccers(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProccers(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");


//// 034 Function Declarations vs Expressions

// Function declaration
function calcAge1(birhtYear) {
  return 2037 - birhtYear;
}

const age1 = calcAge1(1991);

//Function Expression
const calcAge2 = function (birhtYear) {
  return 2037 - birhtYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

//// 035 Arrow function

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Joans"));
console.log(yearsUntilRetirement(1980, "Bob"));

//// 036 Function Calling Other Functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProccers(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces or orange.`;
  return juice;
}

console.log(fruitProccers(2, 3));

//// 047 reviewing Functions.

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));

//// 039 Introduction to Arrays.

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice"];

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

//// 040 Basic Array Operations (Methods)

const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements

friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

// No arguments
friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));


//// 042 Introduction to Objects
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// Object
const jonas = {
  firstName: "jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

//// 043 Dot vs. Bracket Notation

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jonas.'Last' +nameKey);

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and friends"
//   );
// }

jonas.location = "Portugal";
jonas["Twitter"] = "@jonasschmedtman";
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
const Challenge = `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`;

console.log(Challenge);

//// 044 Object Methods

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }

  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    // console.log(this);
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}- year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// console.log(jonas["calcAge"](1991));

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"

console.log(jonas.getSummary());

///////////////////////////////////////
// 046 Iteration: The for Loop.

console.log("Lifting weights repetition 1 🏋️‍♂️");
console.log("Lifting weights repetition 2 🏋️‍♂️");
console.log("Lifting weights repetition 3 🏋️‍♂️");
console.log("Lifting weights repetition 4 🏋️‍♂️");
console.log("Lifting weights repetition 5 🏋️‍♂️");
console.log("Lifting weights repetition 6 🏋️‍♂️");
console.log("Lifting weights repetition 7 🏋️‍♂️");
console.log("Lifting weights repetition 8 🏋️‍♂️");
console.log("Lifting weights repetition 9 🏋️‍♂️");
console.log("Lifting weights repetition 10 🏋️‍♂️");

// For llop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep}🏋️‍♂️`);
}

///////////////////////////////////////
// 047 Looping Arrays, Breaking and Continuing
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break

console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log("--- BRREAK WITH NUMBER ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}

///////////////////////////////////////
// 048 Looping Backwards and Loops in Loops
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// 0, 1, ..., 4
// 4, 3. ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: lifting weight repetition ${rep}🏋️‍♂️`);
  }
}


///////////////////////////////////////
// 049 The while Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
*/
