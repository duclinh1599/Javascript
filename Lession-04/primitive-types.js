/** Nhóm các kiểu dữ liệu nguyên thuỷ - Primitive Types */

/**
- Các giá trị Primitive được lưu trữ trực tiếp trong ngăn xếp (Stack).
- Khi một giá trị nguyên thuỷ được gán cho 1 biến, giá trị này không thể thay đổi.
- Khi thay đổi giá trị của biến, một bản sao độc lập của giá trị sẽ được tạo ra.
- Primitive Types bao gồm các kiểu dữ liệu phổ biến sau: 
*/

// Number: Đại diện cho các số, bao gồm các số nguyên và số thập phân.
let age = 17;
let productPrice=10.99;
console.log('age:', age);
console.log('typeof age: ', typeof age);
console.log('productPrice:', productPrice);
console.log('typeof productPrice: ', typeof productPrice);
console.log('----------------------------------');


// String: Đại diện cho chuỗi ký tự.
let userName = "Linhnd";
console.log('username: ', userName);
console.log('typeof username: ', typeof userName);
console.log('----------------------------------');

// Boolean: Đại diện cho giá trị true và false.


// Null: Đại diện cho giá trị kiểu rỗng hoặc không có gì.
let nullValue = null;
console.log('nullValue: ', nullValue);
console.log('typeof nullValue: ', typeof nullValue);
console.log('----------------------------------');

// Undefined: Đại diện cho một biến chưa được gán giá trị.
let undefinedValue;
console.log('undefinedValue: ', undefinedValue);
console.log('typeof undefinedValue: ', typeof undefinedValue);
console.log('----------------------------------');  

// Symbol: Đại diện cho 1 giá trị Unique: độc nhất và bất biến, thường được sử dụng làm khoá hoặc id cho Object.
let symbolValue = Symbol('id-1503-1999-abc');
console.log('symbolValue: ', symbolValue);
console.log('typeof symbolValue: ', typeof symbolValue);

// BigInt: Đại diện cho các số nguyên có giá trị rất lớn, lớn hơn Number.