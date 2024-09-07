
function noDuplicate(numbers) {
    const unique = [];
    for (const number of numbers) {
        if (unique.includes(number) === false) {
            unique.push(number)
        }
    }
    return unique
}

const numbers = [10, 20, 10, 20, 30, 40, 30, 50, 39, 20]
const result = noDuplicate(numbers);
console.log(result);