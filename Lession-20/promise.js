// ----------------- Promise ----------------

function fetchData() {
    console.log("Đang lấy dữ liệu...");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { id: 2, name: "Product B" };
        console.log("Dữ liệu đã được lấy");
        resolve(data); // Thành công, trả về dữ liệu
      }, 2000);
    });
  }
  
  fetchData()
    .then(data => {
      console.log("Hiển thị dữ liệu:", data);
    })
    .catch(error => {
      console.error("Có lỗi xảy ra:", error);
    });