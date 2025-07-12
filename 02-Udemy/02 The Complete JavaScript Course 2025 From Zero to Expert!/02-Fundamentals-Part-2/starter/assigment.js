/*

//// Functoins

function describeCountry(country, population, capitalCity) {
  return `${country}has ${population} million people and its capital city is ${capitalCity}`;
}

const descPortugal = describeCountry("Portugal", 10, "Lisbon");
const descGermany = describeCountry("Germany", 83, "Berlin");
const descFinland = describeCountry("Finland", 6, "Helsinki");
console.log(descPortugal, descGermany, descFinland);


//// Function Declarations vs Expressions

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
const percPorgual1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);

console.log(percPorgual1, percChina1, percUSA1);


//// Arrow Functions

const percentageOfWorld1 = (population) => (population / 7900) * 100;

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percPorgual1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);

console.log(percPorgual1, percChina1, percUSA1);

//// Functions Calling Other Functions

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
  console.log(description);
}

describePopulation("Portugal", 10);
describePopulation("China", 1441);
describePopulation("Usa", 332);


//// Introduction to Arrays

const USA = 332;
const china = 1441;
const portugal = 10;
const germany = 83;

const population = [332, 1441, 10, 83];

console.log(population.length === 4);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentages = [
  percentageOfWorld1(population[0]),
  percentageOfWorld1(population[1]),
  percentageOfWorld1(population[2]),
  percentageOfWorld1(population[3]),
];
console.log(percentages);

//// Basic Array Operations (Methods).

const neighbours = ["Lybia", "Sodan"];
neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

const elementToFound = "Germany";

if (neighbours.indexOf(elementToFound) !== -1) {
  console.log("Element found in the array.");
} else {
  console.log("Probably not a central European country :D");
}

neighbours[neighbours.indexOf("Sweden")] = "Republic of Sweden";
console.log(neighbours);


//// Introduction to Objects

const myCountry = {
  country: "Egypt",
  capital: "Cairo",
  language: "Arabic",
  population: 110,
  neighbours: ["Lybia", "Sodan"],
};

//// Dot vs. Bracket Notation
const myCountry = {
  country: "Egypt",
  capital: "Cairo",
  language: "Arabic",
  population: 110,
  neighbours: ["Lybia", "Sodan"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million finnish-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry.population);


//// Object Methods

const myCountry = {
  country: "Egypt",
  capital: "Cairo",
  language: "Arabic",
  population: 110,
  neighbours: ["Lybia", "Sodan"],
  neighboringCountries: [],

  describe: function () {
    `${this.country} has ${this.population} million finnish-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
  },

  checkIsland: function () {
    this.isIsland = this.neighboringCountries.length === 0 ? true : false;
  },
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);


//// Iteration: The for loop

for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}


////Looping Arrays, Breaking and Continuing

const population = [332, 1441, 10, 83];
const percentages2 = [];

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

for (let i = 0; i <= population.length; i++) {
  const perc = percentageOfWorld1(population[i]);
  percentages2.push(perc);
}
console.log(percentages2);

//// Looping Backwards and Loops in Loops

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}


const population = [332, 1441, 10, 83];
const percentages3 = [];

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

// for (let i = 0; i <= population.length; i++) {
//   const perc = percentageOfWorld1(population[i]);
//   percentages2.push(perc);
// }
// console.log(percentages2);

let i = 0;
while (i <= population.length) {
  const perc = percentageOfWorld1(population[i]);
  percentages3.push(perc);
}
i++;
*/
