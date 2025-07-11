/*

// #Chanllenge1

// Data 1

let massOfMark = 78;
let heightOfMark = 1.69;
let massOfJohn = 92;
let heightOfJohn = 1.95;

// Data 2

const massOfMark = 95;
const heightOfMark = 1.88;
const massOfJohn = 85;
const heightOfJohn = 1.76;

const BMIMark = massOfMark / heightOfMark ** 2;
const BMIJohn = massOfJohn / heightOfJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

// #Chanllenge2

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI(${BMIMark}) is higher than John's BMI(${BMIJohn})!`);
} else {
  console.log(`John's BMI(${BMIJohn}) is higher than Mark's (${BMIMark}) !`);
}


// #Chanllenge3

const dolphinsAverage = 96 + 108 + 89 / 3;
const koalasAverage = 88 + 91 + 110 / 3;
console.log(dolphinsAverage, koalasAverage);

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log("Dolphins team wins!");
} else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
  console.log("Koalas team wins!");
} else if (
  dolphinsAverage === koalasAverage &&
  dolphinsAverage >= 100 &&
  koalasAverage >= 100
) {
  console.log("Both win the trophy!");
} else {
  console.log("No one wins the trophy😭");
}

// #Chanllenge4

const bill = 275;
const tip = bill * 0.15;
const total = bill + tip;
console.log(tip);

// if (bill >= 50 && bill <= 300) {
//   console.log(
//     `The bill was ${bill}, the tip was ${tip}, and the total value ${total}`
//   );
// }

console.log(
  `The bill was ${bill} the tip was ${
    bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
  }, and the total value ${total}`
);
// console.log(` I like to drink ${age >= 18 ? "juice🥤" : "water 💧"}`);

// Jonas soluation
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill} the tip was ${tip} and the total value ${bill + tip} `
);
*/
