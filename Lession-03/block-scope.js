// Sự khác nhau về Scope- Phạm vi giữa let, const và var
// Scope được xác định bởi cặp dấu {}

const testScope= () => {
    {
        var scopeVar = "TrungQuanDev - Var";
        let scopeLet = "TrungQuanDev - Let";
        const scopeConst = "TrungQuanDev - Const";
        console.log('scopeVAr: ', scopeVar);
        console.log('scopeLet: ', scopeLet);
        console.log('scopeConst: ', scopeConst);
    }
}
testScope();

// Kết luận về Scope - phạm vi một khối ( block scope):
// Biến khai báo bằng let và const có phạm vi trong 1 khối(block scope), nghĩa là nó chỉ tồn tại trong khối mã mà nó được khai báo.
/** Biến khai báo bằng var có 2 trường hợp:
 * Phạm vi toàn cục nếu nó được khai báo bên ngoài bất kỳ hàm nào ( ngoài cùng của file)
 * Phạm vi cụ thể trong một hàm nếu nó được khai báo trong 1 hàm. Điều này khiến cho var lỏng lẻo.
 ---> Thực thế thì chủ yếu chúng ta sẽ sử dụng const và let để khai báo biến, tránh các vấn đề liên quan tới scope của var.
 */