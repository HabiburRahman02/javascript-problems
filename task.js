// Write a function to convert temperature from
//  Celsius to Fahrenheit.

function convertTemp(celsius) {
  const fahrenHeight = (celsius * 9 / 5) + 32
  return fahrenHeight;
}

const temp = convertTemp(120);
// console.log(temp);




// task-02
function getRepeatNumber(numbers) {

  for (const number of numbers) {

  }
}

// const result = getRepeatNumber([5, 6, 11, 12, 98, 5]);
// console.log(result);




// task - 03
function getVowels(numbers) {
  const vowel = ['a', 'e', 'i', 'o', 'u']
  let arr = [];
  for (const number of numbers.toLowerCase()) {
    if (vowel.includes(number)) {
      arr.push(number)
    }
  }
  return arr.length;
}

// const result = getVowels('SHARMIN');
// console.log(result);




// TASK - 04
function getLongestNumber(string) {
  const splitStr = string.split(' ');
  let bigWord = '';
  for (const str of splitStr) {
    if (str.length > bigWord.length) {
      bigWord = str
    }
  }
  console.log(bigWord)
}

// const result = getLongestNumber('I am learning Programming to become a programmer')
// console.log(result);

// task - 05
function randomNumber() {
  const random = Math.round(Math.random() * (20 - 10) + 10);
  return random
}

const result = randomNumber();
console.log(result);