// for-in: Dùng khi muốn lặp lại các thuộc tính của một đối tượng.

let developer = {
    username: 'linhnd',
    age: 17,
    gender: 'Male',
    country: 'Vietnam',
    hobbies: ['Coding', 'Reading', 'Playing games']
}
for (let key in developer) {
    console.log(`${key}: ${developer[key]}`);
    console.log('----------------------------------');
}