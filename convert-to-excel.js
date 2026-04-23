const XLSX = require('xlsx');
const fs = require('fs');

// Đọc file JSON
const quizData = JSON.parse(fs.readFileSync('quiz-dataset.json', 'utf8'));

// Chuyển đổi dữ liệu thành format phù hợp cho Excel
const excelData = quizData.map(question => ({
    'ID': question.id,
    'Môn học': question.subject,
    'Lớp': question.grade,
    'Chủ đề': question.topic,
    'Độ khó': question.difficulty,
    'Câu hỏi': question.question,
    'Đáp án A': question.options[0] || '',
    'Đáp án B': question.options[1] || '',
    'Đáp án C': question.options[2] || '',
    'Đáp án D': question.options[3] || '',
    'Đáp án đúng': question.answer,
    'Giải thích': question.explanation
}));

// Tạo workbook và worksheet
const wb = XLSX.utils.book_new();
const ws = XLSX.utils.json_to_sheet(excelData);

// Đặt độ rộng cột
const colWidths = [
    { wch: 5 },  // ID
    { wch: 10 }, // Môn học
    { wch: 5 },  // Lớp
    { wch: 15 }, // Chủ đề
    { wch: 10 }, // Độ khó
    { wch: 50 }, // Câu hỏi
    { wch: 20 }, // Đáp án A
    { wch: 20 }, // Đáp án B
    { wch: 20 }, // Đáp án C
    { wch: 20 }, // Đáp án D
    { wch: 15 }, // Đáp án đúng
    { wch: 40 }  // Giải thích
];
ws['!cols'] = colWidths;

// Thêm worksheet vào workbook
XLSX.utils.book_append_sheet(wb, ws, 'Quiz Dataset');

// Xuất file Excel
XLSX.writeFile(wb, 'quiz-dataset.xlsx');

console.log('✅ Đã chuyển đổi thành công!');
console.log('📁 File Excel: quiz-dataset.xlsx');
console.log(`📊 Tổng số câu hỏi: ${quizData.length}`);