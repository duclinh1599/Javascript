/** 3 cách khai báo biến trong JavaScipt var - let - const */


/** -------------------- LET ------------------- */
/**  
Hosting: Biến khai báo bằng let sẽ được hoisted (di chuyển lên đầu phạm vi khối (scope) của nó) nhưng lại
không được khởi tạo giá trị mặc định ban đàu nào cả. Nên không thể sử dụng biến trước khi khai báo.
*/ 
//console.log('nameLet: ', nameLet);

// Khai báo biến
let nameLet = "Linhnd-Platform"
console.log('nameLet: ',nameLet);

// Tái khai báo: Không thể tái khai báo cùng 1 biến nhiều lần với let
// let nameLet = "Linhnd-Platform-abc"
// console.log('nameLet: ',nameLet);

// Gán lại: Có thể gán lại giá trị của biến 
nameLet = " Linhnd47-abc"
console.log('nameLet: ',nameLet);