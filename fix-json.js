const fs = require('fs');

let content = fs.readFileSync('quiz-dataset.json', 'utf8');

// Sửa các dấu ngoặc kép không được escape trong chuỗi JSON
// Tìm pattern: "text"content"text" và thay thế thành \"text\"content\"text\"
content = content.replace(/"([^"]*?)"([^",}\]]*?)"([^"]*?)"/g, '\\"$1\\"$2\\"$3\\"');

fs.writeFileSync('quiz-dataset.json', content);
console.log('Đã sửa lỗi JSON');