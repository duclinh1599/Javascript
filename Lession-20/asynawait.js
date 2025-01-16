function fetchData() {
    console.log("Đang lấy dữ liệu...");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { id: 3, name: "Product C" };
        console.log("Dữ liệu đã được lấy");
        resolve(data);
      }, 2000);
    });
}
  
async function displayData() {
    try {
      const data = await fetchData(); // Chờ Promise hoàn tất
      console.log("Hiển thị dữ liệu:", data);
    } catch (error) {
      console.error("Có lỗi xảy ra:", error);
    }
}
  
displayData();
  