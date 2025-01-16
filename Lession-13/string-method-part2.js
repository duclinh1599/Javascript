/**
    - Có khá nhiều methods - Phương thức khi xử lý dữ dữ liệu chuỗi trong JS.
    - Dưới đây chúng ta sẽ tập trung vào những phương thức quan trọng và được dùng nhiều trong thực tế.
    - Phần 2: toLowerCase(), toUpperCase(), trim(), replace(), match(), search(), startsWith(), endsWith()
 */

// toLowerCase() chuyển chuỗi sang chữ thường, không thay đổi chuỗi ban đầu
const str8 = "Hello World";
const toLowerCaseResult = str8.toLowerCase(); // hello world
console.log('After toLowerCase:', toLowerCaseResult);

// toUpperCase() chuyển chuỗi sang chữ hoa, không thay đổi chuỗi ban đầu
const str9 = "Hello World";
const toUpperCaseResult = str9.toUpperCase(); // HELLO WORLD
console.log('After toUpperCase:', toUpperCaseResult);

// trim() xóa ký tự khoảng trắng từ chuỗi, không thay đổi chuỗi ban đầu
const str10 = "Hello World";
const trimResult = str10.trim(); // Hello World
console.log('After trim:', trimResult);

// replace() thay thế chuỗi con cụ thể trong chuỗi
const str11 = "Hello World";
const replaceResult = str11.replace("Hello", "Hi"); // Hi World
console.log('After replace:', replaceResult);

/**  mathch() tìm kiếm và trả về một mảng chứa kết quả khớp với biểu thức chính quy(regex). Nếu không khớp trả về null.
Chỉ trả về kết quả của lần đầu xuất hiện. Muốn trả về tất cả kết quả thì dùng flag g (global)
 */ 
const str12 = "trungquandev developer dev dev dev";
const matches = str12.match(/dev/g); 
console.log('After match():', matches);

// search(): giống match nhưng nó trả về vị trị từ đầu tiên của chuỗi con của kết quả tìm kiếm. Nếu không tìm thấy, trả về -1.

//startswith(): Kiểm tra xem có bắt đầu bằng 1 chuỗi con cụ thể hay không. Trả về boolean
const str13 = "Hello World";
const startsWithResult = str13.startsWith("Hello"); // true
console.log('After startsWith:', startsWithResult);

// endswith(): Kiểm tra xem có kết thúc bằng 1 chuỗi con cụ thể hay không. Trả về boolean
const str14 = "Hello World";
const endsWithResult = str14.endsWith("World"); // true     
console.log('After endsWith:', endsWithResult);