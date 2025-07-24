// Coding challenge #1
/* 
// 1) Understading the problem
// - Array transformed to string, separated by ...
// - What is the x days Answer: Index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with C
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}C ... ${data1[1]}C ... ${data1[2]}C`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}C in ${i + 1} days ...`;
  }
  console.log('...' + str);
};

printForecast(data1);
printForecast(data2);
*/
