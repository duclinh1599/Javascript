/**
    - Có khá nhiều methods - Phương thức khi xử lý dữ liệu chuỗi trong JS.
    - Dưới đây chúng ta sẽ tập trung vào những phương thức quan trọng và được dùng nhiều trong thực tế.
    - Phần 1: charAt(), concat(), includes(), indexOf(), slice(), split(), substring()
 */
// charAt(): Trả về ký tự tại 1 vị trí cụ thể trong chuỗi. Vị trí bắt đầu từ 0. Trả về string rỗng nếu vtri k tồn tại.
const str1= "Hello World";
console.log(str1.charAt(0)); // H
console.log(str1.charAt(1)); // e
console.log(str1.charAt(70)); 

// concat() dùng để nối 2 hoặc nhiều chuỗi với nhau. Không làm thay đổi chuỗi ban đầu
// Có phân biệt chữ hoa chữ thường.
const str2 = "Hello";
const separator = " ";
const str3 = "Lap Trinh Vien";
const concatResult = str2.concat(separator).concat(str3); // HelloLap Trinh Vien
console.log('After concat:', concatResult);

// Includes() kiểm tra xem chuỗi có chứa một chuỗi con cụ thể hay không. Trả về boolean
const str4 = "linhnd";
const includesResult = str4.includes("linh"); // 
console.log('After includes:', includesResult);

// IndexOf() trả về index của lần xuất hiện đầu tiên của chuỗi con trong chuỗi. Nếu chuỗi con không được tìm thấy, nó trả về -1.
const str5 = "Hello World";
const indexOfResult = str5.indexOf("World"); // 6
console.log('After indexOf:', indexOfResult);

// slice() trả về chuỗi con từ một vị trí đến một vị trí khác. Vị trí bắt đầu từ 0.
const str7 = 'Javascript is fun but not easy!';
const sliceResult_1 = str7.slice(0, 10); // Javascript
const sliceResult_2 = str7.slice(10, 0); // 
console.log('After slice: 01', sliceResult_1);
console.log('After slice: 02', sliceResult_2);

// substring() trả về chuỗi con từ một vị trí đến một vị trí khác. Vị trí bắt đầu từ 0. Khác với slice() 1 điểm là nó se hoán đổi startindex và endindex nếu chúng ta vô tình để start > end.