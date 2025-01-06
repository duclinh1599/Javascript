/**
 - Trong JS, vòng lặp(loop) là một cấu trúc điều khiển dùng để lặp lại một đoạn code nhiều lần.
 - Thường sử dụng khi cần thực hiện một hành động nhiều lần cho đến khi 1 điều kiện thoả mãn.
 */

 // do-while: Giống như while nhưng đoạn mã sẽ được thực hiện ít nhất một lần.
let i = 0;
do {
    console.log(`Count: ${i}`);
    i++;
} while(i < 11);