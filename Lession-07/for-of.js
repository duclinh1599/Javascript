// for-of: Dùng để lặp qua các giá trị của một iterable object (những đối tượng có thể lặp), phổ biến như Array, String...vv

let colors = ['red', 'green', 'blue', 'yellow', 'orange'];
for (let color of colors) {
    console.log('Corlor:',color);
    console.log('----------------------');
}

let username = 'linhnd';
for (let char of username) {
    console.log(`Char: ${char}`);
}