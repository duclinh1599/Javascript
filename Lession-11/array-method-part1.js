/**
    - Có khá nhiều methods - Phương thức khi xử lý dữ liệu mảng trong JS.
    - Dưới đây chúng ta sẽ tập trung vào những phương thức quan trọng và được dùng nhiều trong thực tế.
    - Phần 1: push(), pop(), shift(), unshift(), foreach(), map(), filter(), find(), reduce(), some().
*/

let numbers = [1, 2, 3, 4, 5];
console.log('length of numbers: ', numbers.length);

// push(): thêm phần tử vào cuối cùng của mảng
numbers.push(6);
console.log('After pushing : ', numbers); // Kết quả là [1, 2, 3, 4, 5, 6]

// pop(): xóa phần tử cuối cùng của mảng
numbers.pop();
console.log('After poping : ', numbers); // Kết quả là [1, 2, 3, 4, 5]

// shift(): xóa phần tử đầu tiên của mảng
numbers.shift();
console.log('After shifting : ', numbers); // Kết quả là [2, 3, 4, 5]

// unshift(): thêm phần tử đầu tiên vào bắt đầu của mảng
numbers.unshift(1);
console.log('After unshifting : ', numbers); // Kết quả là [1, 2, 3, 4, 5]

// forEach(): Lặp qua từng phần tử của mảng
numbers.forEach((number, index) => {
    console.log(`Index: ${index} -- Value: ${number}`)
});

// map(): Lặp qua từng phần tử của mảng và trả về một mảng mới 
let squaredNumbers = numbers.map((number) => {
    return number * number;
});
console.log('numbers: ', numbers); // Kết quả là [1, 2, 3, 4, 5]    
console.log('squaredNumbers: ', squaredNumbers); // Kết quả là [1, 4, 9, 16, 25]

// filter(): Tạo ra 1 mảng mới với các phần tử thoả mãn điều kiện, ví dụ lấy các số chẵn
let evenNumbers = numbers.filter(number => { 
    return number % 2 === 0;
});
console.log('After filtering: ', evenNumbers); // Kết quả là [2, 4]

// find(): Tìm phần tử dầu tiên thoả mãn điều kiện.
let foundNumber = numbers.find((number) => {
    return number > 3
})
console.log('After finding: ', foundNumber); // Kết quả là 4

// reduce(): Tính toán 1 giá trị duy nhất từ mảng, ví dụ tính tổng các số trong mảng
let sum = numbers.reduce((total, number) => {
    return total + number;
}, 0);
console.log('sum: ', sum); // Kết quả là 15

// some(): Kiểm tra mảng có ít nhất 1 phần tử thoả mãn điều kiện hay không, trả về boolean
let hasEvenNumber = numbers.some((number) => {
    console.log('Test method some: ', number);
    return number % 2 === 0;
});
console.log('hasEvenNumber: ', hasEvenNumber); // Kết quả là true
