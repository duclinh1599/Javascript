// Arithmetic Operators: Toán tử số học

let x = 10;
let y = 5;

console.log('x + y: ', x + y); // 10 + 5 = 15
console.log('x - y: ', x - y); // 10 - 5 = 5
console.log('x * y: ', x * y); // 10 * 5 = 50
console.log('x / y: ', x / y); // 10 / 5 = 2
console.log('x % y: ', x % y); // 10 % 5 = 0
console.log('x ** y: ', x ** y); //Luỹ thừa 10 ** 5 = 100000
console.log('----------------------------------');

// Assign operators: Toán tử gán

let a = 10; //gan 10 vào a
a += 5; // a = a + 5 => a = 15
console.log('a: ', a);

a -= 5; // a = a - 5 => a = 10
console.log('a: ', a);

a *= 5; // a = a * 5 => a = 50
console.log('a: ', a);

a /= 5; // a = a / 5 => a = 10
console.log('a: ', a);

a %= 5; // a = a % 5 => a = 0
console.log('a: ', a);

a **= 5; // a = a ** 5 => a = 0
console.log('a: ', a);
console.log('----------------------------------');

// Comparison operators: So sánh

let c = 10;
let d = 5;

console.log(c == d); // false
console.log(c === d); // Bằng nhau và phải cùng kiểu dữ liệu false

// Logical operators: AND, OR, NOT

let e = 10;
let f = 5;

console.log(e && f); // false
console.log(e || f); // true
console.log(!e); // false
console.log('----------------------------------');