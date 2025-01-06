/** Nhóm các kiểu dữ liệu tham chiếu - Reference Types */

/** 
- Các giá trị tham chiếu không được lưu trữ trực tiếp trong ngăn xếp (Stack) mà tham chiếu tới địa chỉ của đối tượng trong Heap Memory.
- Các giá trị tham chiếu có thể được thay đổi sau khi chúng được tạo ra.
- Khi gán 1 đối tượng A cho B, thì cả A và B sẽ tham chiếu tới cùng 1 đối tượng, chứ không tạo ra bản sao độc lập.
- Reference Types bao gồm các kiểu dữ liệu sau:
*/

// Object: Đại diện cho một tập hợp các thuộc tính và phương thức.
let developer = {
    username: 'linhnd',
    age: 17,
    productPrice: 10.99,
    country: 'Vietnam',
    getUsername: function() {
        console.log(`Hi Aliens, I am ${this.username} from ${this.country}`);
    }
}
developer.getUsername();
console.log('----------------------------------');

// Array(mảng): Một loại đối tượng đặc biệt để lưu trữ danh sách các giá trị.
let colors = ['red', 'green', 'blue', 'yellow', 'orange'];
console.log('colors: ', colors);
console.log('colors[0]: ', colors[0]);
console.log('colors[1]: ', colors[1]);
console.log('colors[2]: ', colors[2]);
console.log('----------------------------------');

// Function: Đại diện cho hàm xử lý, cũng được coi là 1 loại đối tượng đặc biệt.
function weatherInfo(city) {
    console.log(`The weather in ${city} is hot!`);
}
weatherInfo('Ho Chi Minh');
console.log('----------------------------------');