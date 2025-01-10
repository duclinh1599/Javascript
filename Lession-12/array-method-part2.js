/**
    - Có khá nhiều methods - Phương thức khi xử lý dữ liệu mảng trong JS.
    - Dưới đây chúng ta sẽ tập trung vào những phương thức quan trọng và được dùng nhiều trong thực tế.
    - Phần 2: concat(), slice(), splice(), every(), findIndex(), toString(), join()
*/

/**  concat() dùng để nối hai hoặc nhiều mảng lại với nhau, không làm thay đổi 
các mảng gốc mà trả về 1 mảng mới chứa các phần tử của các mảng được nối*/
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concatResult = arr1.concat(arr2);
console.log('After concat: ', concatResult); // Kết quả là [1, 2, 3, 4, 5, 6]

/** Slice() trả về một mảng con của mảng ban đầu, từ vị trí startIndex (không bao gồm endIndex), không
làm thay đổi mảng gốc ban đầu.
 */
const arr3 = [1, 2, 3, 4, 5, 6];
const sliceResult = arr3.slice(1, 4);
console.log('After slice: ', sliceResult); // Kết quả là [2, 3, 4]

/** Splice() dùng để thay đổi nội dung của mảng bằng cách xoá, thay thế hoặc thêm phần tử mới. Sẽ làm 
thay đổi mảng gốc ban đầu
 */
const arr4 = [1, 2, 3, 4, 5, 6];
const spliceResult = arr4.splice(2,3, 'a', 'b', 'c'); // bắt đầu từ vị trí index 2, xoá 3 phần tử (3,4,5), thêm 3 phần tử mới (a,b,c)
console.log('After splice: ', spliceResult); // Kết quả là [3, 4, 5]
console.log('After splice: ', arr4); // Kết quả là [1, 2, 3, 'a', 'b', 'c', 6]

/** Every() kiểm tra xem tất cả các phần tử trong mảng có thoả mãn điều kiện của hàm callback hay không.
Trả về nếu true tất cả thoả mãn, ngược lại là false.
 */
const arr5 = [1, 2, 3, 4, 5, 6];
const allPostive = arr5.every((num) => {
    return num > 0;
});
console.log('allPostive: ', allPostive); // Kết quả là true

/** findIndex() trả về chỉ số index của phần tử đầu tiên trong mảng thoả mãn điều kiện trong hàm callback. 
Nếu không có phần tử nào thoả mãn, trả về -1.
 */
const arr6 = [1, 2, 3, 4, 5, 6];
const findIndexResult = arr6.findIndex(num => num > 3)
console.log('After findIndex: ', findIndexResult); // Kết quả là 3


// toString() Nối tất cả phần tử trong mảng thành 1 chuỗi String
const arr7 = [1, 2, 3, 4, 5, 6];
const toStringResult = arr7.toString();
console.log('After toString: ', toStringResult); // Kết quả là 1,2,3,4,5,6

// Join() Nối tất cả các phần tử trong mảng thành 1 chuỗi String (khác với toString() ở điểm có thể chỉ định thêm dấu phân cách)
const arr8 = [1, 2, 3, 4, 5, 6];
const joinResult = arr8.join(' - ');
console.log('After join: ', joinResult); 