/*
//// Challenge#1

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test1

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win🏆 (${avgDolphins}) vs. (${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win🏆 (${avgDolphins}) vs. (${avgKoalas})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);


//// Challenge #2

const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill} the tip was ${tip} and the total value ${bill + tip} `
);

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[0]), calcTip(bills[0])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/

/*
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

// #Chanllenge3


const MarkMiller = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const JohnSmith = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

MarkMiller.calcBMI();
JohnSmith.calcBMI();

console.log(MarkMiller.bmi, JohnSmith.bmi);

if (MarkMiller.bmi > JohnSmith.bmi) {
  console.log(
    `" ${MarkMiller.fullName}'s BMI (${MarkMiller.bmi}) is higher than ${JohnSmith.fullName}'s (${JohnSmith.bmi})!"`
  );
} else {
  console.log(
    `" ${JohnSmith.fullName}'s BMI (${JohnSmith.bmi}) is higher than ${MarkMiller.fullName}'s (${MarkMiller.bmi})!"`
  );
}

//"John's BMI (28.3) is higher than Mark's (23.9)!"


//////////////////////////////////
// #Chanllenge4

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/
