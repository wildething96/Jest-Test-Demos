let answer = true;

let function1 = (word1, word2) => {
  let object1 = new Object();
  object1.word1 = word1;
  object1.word2 = word2;

  return object1.word1 + " " + object1.word2;
};

let objectWords = function1("Hello", "World");

let letters = "abcdefghijklmno";

let function2 = () => {
  let array1 = [];
  let wordLength = Math.floor(Math.random() * 100 + 6);

  for (let i = 0; i < wordLength; i++) {
    array1.push(letters[Math.floor(Math.random() * 15)]);
  }
  return array1;
};

let num = 5;

let numberToString = num.toString();

let planets = [
  "Sun",
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

let students = [true, true, false, true, false];
let numPresent = 0;

students.forEach((element) => {
  element ? numPresent++ : 0;
});

const sqCon = (num) => {
  let string = String(num);
  let num1;
  let num2;
  num1 = String(parseInt(string[0]) * parseInt(string[0]));
  num2 = String(parseInt(string[1]) * parseInt(string[1]));
  return num1 + num2;
};

const getCentry = (year) => {
  let string = String(year);
  console.log(parseInt(string[(0, 2)]));
  return parseInt(string.substring(0, 2));
};

binaryConverter = (list) => {
  let binray = list.map(String).join("");
  let answer = parseInt(binray, 2);
  return answer;
};

module.exports = {
  answer,
  objectWords,
  function2,
  numberToString,
  planets,
  numPresent,
  sqCon,
  getCentry,
  binaryConverter,
};
