/**
- Có khá nhiều methods - Phương thức khi xử lý dữ liệu số trong JS.
- Dưới đây chúng ta sẽ tập trung vào những phương thức quan trọng và được dùng nhiều trong thực tế.
- Phần 1: toFixed(), toPrecision(), toString(radix), isFinite(), Number.isInteger(), Number.isSafeInteger(), Number.NaN, isNaN().
 */

// toFixed: làm tròn 1 số theo số lượng chữ số thập phân được chỉ định trước. trả về String.
const num1 = 1.123456789;
const fixedNum= num1.toFixed(2); // 1.12
console.log('After toFixed:', fixedNum);

// toPrecision: làm tròn 1 số theo số lượng chữ số thập phân được chỉ định trước ( bao gồm cả phần số nguyên và thập phân)
const num2 = 123.456;
const precisionNum = num2.toPrecision(4); 
console.log('After toPrecision:', precisionNum);