/** 3 cách khai báo biến trong JavaScipt var - let - const */


/** -------------------- VAR ------------------- */
/**  
Hosting: Biến khai báo bằng var sẽ được hosted (di chuyển lên đầu phạm vi khối (scope) của nó) và đồng thời biến đó được khởi tạo giá trị mặc định ban đầu là undefined. 
Cho nên chúng ta có thể sử dụng biến trước khi khai báo nó mà không gặp lỗi.
*/ 
console.log('nameVar: ', nameVar);

// Khai báo
var nameVar="Linhnd47";
console.log('nameVar: ', nameVar);
// Tái khai báo: Có thể tái khai báo biến var nhiều lần trong cùng một phạm vi mà không gặp lỗi.

var nameVar="Linhnd47-Platform"
console.log('nameVar: ', nameVar);
// Gán lại: có thể gán lại giá trị biến var