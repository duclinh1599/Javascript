// Khởi tạo mảng lưu danh sách công việc
let todoList = [];

// Hàm thêm công việc
function addTask(task) {
  todoList.push(task);
  console.log(`Đã thêm: ${task}`);
}

// Hàm hiển thị danh sách công việc
function showTasks() {
  if (todoList.length === 0) {
    console.log("Danh sách công việc rỗng!");
    return;
  }
  console.log("Danh sách công việc:");
  todoList.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}

// Hàm xóa công việc theo chỉ số
function deleteTask(index) {
  if (index < 1 || index > todoList.length) {
    console.log("Chỉ số không hợp lệ!");
    return;
  }
  const removedTask = todoList.splice(index - 1, 1);
  console.log(`Đã xóa: ${removedTask}`);
}

// Thực thi
addTask("Học JavaScript");
addTask("Làm bài tập");
showTasks(); // Hiển thị danh sách công việc
//deleteTask(1); // Xóa công việc thứ nhất
showTasks(); // Hiển thị lại danh sách sau khi xóa
