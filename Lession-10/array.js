/**
 - Trong JS 'mảng' (array) là 1 kiểu dữ liệu dùng để lưu trữ danh sách các giá trị.
 - Các giá trị trong mảng có thể là bất kỳ dữ liệu nào, number, string, object, thậm chí là các mảng khác.
 - Mảng trong JS có các chỉ số index bắt đàu từ 0, nghĩa là phần tử đầu tiên của mảng có index là 0, phần tử thứ 2 có index là 1.
 */

 /** Ví dụ về mảng */
 let numbers = [1, 2, 3, 4, 5];
console.log('Độ dài của numbers: ', numbers.length);
 // Truy cập phần tử đầu tiên của mảng (theo index = 0) 
console.log('First item of numbers: ', numbers[0]); // Kết quả là 1

 // Truy cập phần tử cuối cùng của mảng ( theo index = array.length - 1)
console.log('Last item of numbers: ', numbers[numbers.length - 1]); // Kết quả là 5

// Mảng có thể chứa bất kì kiểu dữ liệu nào, ví dụ:
let mixedArray = [1, 'two', true, null, undefined, {username: 'linhnd'}, [1, 2, 3]];
console.log('Mixed array: ', mixedArray);