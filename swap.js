let a = 3;
let b = 6

console.log(a, b)
const temp = a;
a = b
b = temp;

console.log(a, b)

// --------------------
// array destructuring
let x = 3
let y = 6
console.log(x, y);
[x, y] = [y, x];
console.log(x, y);