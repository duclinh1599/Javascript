/**
 * https://www.youtube.com/watch?v=kR5l2Do0rko&list=PLKzNGvIJtUDZBuzicDGM_PUq2Z4FMrcsa&index=6  - tham khảo
- Những bài học liên tiếp về Bất đồng bộ trong JS:
    + Asynchronous
    + Callback (Callback Hell)
    + Promise (Promise hell)
    + Async/Await
    + Event Loop
 */
//------------- CallBack --------------------
function fetchData(callback) {
    console.log("Đang lấy dữ liệu...");
    setTimeout(() => {
        const data = { id: 1, name: "Product A" };
        console.log("Dữ liệu đã được lấy");
        callback(data); // Gọi hàm callback sau khi hoàn tất
    }, 2000); // Giả lập tác vụ mất 2 giây
}
      
function displayData(data) {
    console.log("Hiển thị dữ liệu:", data);
}
      
fetchData(displayData);

