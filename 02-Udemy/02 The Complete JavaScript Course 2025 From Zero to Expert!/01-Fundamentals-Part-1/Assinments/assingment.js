/*
const country = "Egypt";
const continent = "Africa";
let population = "110";

console.log(country);
console.log(continent);
console.log(population);

//// Data Types Assingment

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//// let,const and var

const language = "Arabic";
const country = "Egypt";
const continent = "Africa";
const isIsland = false;
isIsland = true;

//// Basic Operators

let population = 100;
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description1 =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description1);

//// String and Template Literals

const description = `${country} is in ${continent} , and its ${population} million people speak ${language}`;

console.log(description);

//// Taking Decisions: if / else Statements

if (population > 33) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}

//// 20 Type Conversion and Coercion ##

console.log("9" - "5"); // -> 4
// JavaScript treat with number between quotation "" as strings
console.log("19" - "13" + "17"); // -> '617'
// JavaScript convert number between quotations - strings - to numbers
console.log("19" - "13" + 17);// -> 23
console.log("123" < 57);// -> false
// I couldn't understand it
console.log(5 + 6 + "4" + 9 - 4 - 2); //-> 1143


//// Equality Operators: == vs ===.#

const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No border");
}


//// Logical Operators

// My Solution

const countrySpeaksEnglish = true;
const lessThan50Million = true;
const Island = false;

if (countrySpeaksEnglish && lessThan50Million && !Island) {
  console.log("You should live in Portugal :)");
} else {
  console.log("Portugal does not meet your criteria :(");
}

// Jonas Solution
const language = "english";
const population = 50;
const Island = false;
const country = "Egypt";

if (language === "english" && population < 50 && !island) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}


//// The switch Statement

const language = "english";

switch (language) {
  case "chinese":
    console.log("MOST number of native speakers!");
    break;

  case "spanish":
    console.log("2nd place in number of native speakers");
    break;

  case "english":
    console.log("3rd place");
    break;

  case "hindi":
    console.log("Number 4");
    break;

  case "arabic":
    console.log("5th most spoken language");
    break;

  default:
    console.log("Great language too:D");
}

//// The Conditional (Ternary) Operator #

const country = "egypt";
const population = 130;

population >= 33
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);

// jonas soluation

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
*/
