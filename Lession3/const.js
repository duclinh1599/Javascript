/** 3 cách khai báo biến trong JavaScipt var - let - const */


/** -------------------- CONST ------------------- */
/**  
Hosting: Biến khai báo bằng const sẽ được hoisted (di chuyển lên đầu phạm vi khối (scope) của nó) nhưng lại
không được khởi tạo giá trị mặc định ban đàu nào cả. Nên không thể sử dụng biến trước khi khai báo.
*/ 
//console.log('nameConst: ', nameLet);

// Khai báo biến
const nameConst= "Linhnd"
console.log('nameConst: ', nameConst);
// Tái khai báo: Không thể tái khai báo cùng 1 biến nhiều lần với let


// Gán lại: Không thể gán lại giá trị của biến 
