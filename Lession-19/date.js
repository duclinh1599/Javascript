/**
 *  JS cung cấp cho chúng ta 1 đối tượng Build-in(tích hợp sẵn) là Date để làm việc với ngày tháng và thời gian.
 * Đối tượng Date này có thể thao tác rất nhiều với thời gian, ví dụ: tạo, định dạng ngày tháng, thực hiện các phép toán thời gian...vv
 */

// Học phần 1: Có khá nhiều cách để khời tạo 1 đối tượng Date trong JS với những sự khác nhau như sau:
// Cách 1: Không có tham số: Tạo đối tượng Date với ngày và thời gian tại thời điểm hiện tại.

const now = new Date()
console.log(typeof now);
console.log('now: ', now);
console.log('now: ', now.toLocaleString());

// Cách 2: Với chuỗi ngày tháng (ISO hoặc các định dạng khác):
const specifiDate = new Date('2021-01-01 17:17:00');
console.log('specifiDate: ', specifiDate.toLocaleString());

// Cách 3: Với năm, tháng, ngày, giờ ,phút ,giây
const customDate = new Date( 2024, 10, 7, 17, 17, 0) // Lưu ý: 12 tháng sẽ chạy từ số 0-11
console.log('customDate: ', customDate.toLocaleString());

// Cách 4: Dùng dấu thời gian (timestamp): số mili-giây kể từ ngày 1/1/1970 00:00:00 UTC
const timestampDate = new Date(1736909820127);
console.log('timestampDate: ', timestampDate.toLocaleString());

// ----------------------------

// Học phần 2: Cách lấy từng phân dữ liệu cụ thể từ 1 đối tượng Date:
const currentDate= new Date()
console.log(currentDate.getFullYear()); // 2024
console.log(currentDate.getMonth()); // Tháng
console.log(currentDate.getDate()); // Ngày trong tháng

console.log(currentDate.getHours()); // Giờ
console.log(currentDate.getMinutes()); // Phút
console.log(currentDate.getSeconds()); // Giây

console.log(currentDate.getDay()); // Lấy ngày trong tuần

// ----------------------------

// Học phần 3: Cập nhật lại các thành phần của đối tượng Date
currentDate.setFullYear(2026)

console.log('After update: ', currentDate.toDateString());

// ----------------------------

// Học phần 4: Tính toán lại ngày tháng
// Ví dụ 1: Tính khoảng cách giữa 2 ngày
const startDate = new Date("2024-11-01")
const endDate = new Date("2024-11-06")
console.log(endDate-startDate);
const diffDays = Math.ceil((endDate-startDate) / (1000*60*60*24))
console.log('diffDays: ', diffDays);


// Ví dụ 2: Thêm hoặc bớt khoảng thời gian
const date= new Date() // lấy ngày hiện tại
date.setDate(date.getDate() + 5) // thêm 5 ngày
console.log('date: ', date.toLocaleString());

// ----------------------------

// Học phần 5: Định dạng dữ liệu Object thành chuỗi string
const formatDate = new Date()
// toISOString(): Chuỗi định dạng ISO (định dnagj này phổ biến khi làm việc với API Back-end)
console.log('toISOString: ', formatDate);
console.log('toISOString: ', formatDate.toISOString());


