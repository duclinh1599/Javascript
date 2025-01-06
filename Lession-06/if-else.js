// Câu lệnh điều kiện
// if - else: Nếu A thì làm gì... không phải A thì làm gì
// if - else if - else: Nếu A thì làm gì... không phải A thì lại néu B... không phải B tiếp nữa thì ...vv


/** -------------------- IF ------------------- */
let weather = 'heavy rain';

if (weather === 'heavy rain') {
    console.log('Stay home and play games!');
} else {
    console.log('Go to school!');
}

let score = 9;
if (score >= 9) {
    console.log('A');
} else if (score >= 7) {
    console.log('B');
} else if (score >= 5) {
    console.log('C');
} else if (score >= 3) {
    console.log('D');
} else {
    console.log('F');
}