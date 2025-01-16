// Object.freeze() đóng băng một đối tượng, nghĩa là không cho phép thêm, sửa, xoá các thuộc tính của đối tượng.
const obj1 = { a: 1, b: 2 };
Object.freeze(obj1);
// 3 trường hợp thêm sửa xoá dưới đây đều không có tác dụng
obj1.c = 4; // thêm
obj1.a = 3; // sửa
delete obj1.b; // xoá
console.log('After freeze', obj1); // { a: 1, b: 2 }

// Object.isFrozen() kiểm tra xem 1 đối tượng đẫ được đóng băng freeze() hay chưa.
console.log('Object.isFrozen(obj1)', Object.isFrozen(obj1)); // true

//Object.seal() niêm phong một đối tượng, nghĩa là không cho phép thêm hoặc xoá  thuộc tính nhưng cho phép sửa đổi các giá trị của object.
const obj2 = { a: 1, b: 2 };
Object.seal(obj2);
// 3 trường hợp thêm sửa xoá dưới đây đều không có tác dụng
obj2.c = 4; // thêm
obj2.a = 3; // sửa => ok
delete obj2.b; // xoá
console.log('After seal', obj2); // { a: 3, b: 2 }

// Object.isSealed() kiểm tra xem 1 đối tượng đẫ được niêm phong seal() hay chưa.


//Object.is() so sánh xem hai giá trị có giống nhau hay không.
// Tương tự như toán tử ===, tuy nhiên sẽ có 1 số khác biệt trong việc so sánh (NaN) và (-0 với +0)


// Object.hasOwn() kiểm tra xem 1 đối tượng có chứa 1  thuộc tính cụ thể hay không.
const obj3 = {name: 'linhnd47', age: 25};
console.log('Object.hasOwn() > name: ', Object.hasOwn(obj3, 'name')); // true
console.log('Object.hasOwn() > hoa: ', Object.hasOwn(obj3, 'hoa')); // false

// Object.groupby() sử dụng để nhóm các giá trị trong 1 đối tượng dựa trên 1 tiêu chí cụ thể.
// Lưu ý:: Object.groupby() mới xuất hiện, cụ thể từ tháng 3 năm 2024.

const inventories = [
    {name: "asparagus", type: "vegetable", quantity: 5},
    {name: "banana", type: "fruit", quantity: 0},
    {name: "goat", type: "meat", quantity: 23},
    {name: "apple", type: "fruit", quantity: 5},
    {name: "carrot", type: "vegetable", quantity: 22},
];
// Test thử trên trình duyệt mới nhất theo hướng dẫn trong video của mình, hoặc nodejs version => v22.x.x

const groupByResult = Object.groupBy(inventories, {{ type }} => type);
console.log('Object.groupBy(inventories, {{ type }} => type)', groupByResult);