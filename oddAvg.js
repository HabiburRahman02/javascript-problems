
function oddAvg(numbers) {
    let odds = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            odds.push(number)
        }
    }
    let sum = 0;
    for (const number of odds) {
        console.log(number)
        sum += number;
    }
    const avg = sum / odds.length
    return avg

}

const numbers = [42, 13, 58, 65, 81, 96, 7,23];
const avg = oddAvg(numbers);
console.log('sum of odd num: ', avg);