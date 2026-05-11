# StudyMate AI

Ban hien co the chay phien ban HTML truc tiep trong XAMPP ma khong can backend rieng.

## Tep chinh

- `index.html`: trang gioi thieu
- `login.html`: dang nhap bang du lieu luu trong `localStorage`
- `signup.html`: dang ky tai khoan moi ngay trong trinh duyet
- `dashboard.html`: bang dieu khien, chat offline va thu vien tai lieu
- `quiz-dataset.xlsx`: file nguon bo cau hoi
- `quiz-dataset.sql`: seed SQL cho bang `quiz_questions`
- `scripts/convert-quiz-xlsx-to-sql.js`: chuyen Excel sang SQL khi can cap nhat dataset

## Cach chay

1. Mo XAMPP va bat Apache.
2. Dat project trong `c:\xampp\htdocs`.
3. Import `backend/schema.sql`, sau do import `quiz-dataset.sql` vao database PostgreSQL.
4. Chay backend Node o cong 5000 de dashboard doc cau hoi tu `/api/questions`.
5. Truy cap `http://localhost/` hoac mo truc tiep `http://localhost/dashboard.html`.

## Ghi chu

- Dang nhap, dang ky va cau hoi giao vien duoc luu bang `localStorage` tren trinh duyet hien tai.
- Chat AI trong `dashboard.html` dang chay o che do offline, khong goi backend.
- Phan tao de thi trong `dashboard.html` doc cau hoi tu bang SQL `quiz_questions` thong qua backend.

