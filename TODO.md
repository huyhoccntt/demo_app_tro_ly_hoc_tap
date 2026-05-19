# TODO

- [x] Cập nhật `signup.html` để debug lỗi fetch rõ ràng (in endpoint, phân biệt network lỗi vs backend lỗi)
- [x] Chỉnh `signup.html` để gọi backend theo origin hiện tại (giảm sai port/host) nhưng vẫn fallback `http://localhost:5000`

- [ ] (Tuỳ chọn) Chỉnh `server.js` response/route để chắc chắn mọi lỗi vẫn trả JSON và không “treo” endpoint
- [ ] Test: đăng ký student + teacher, xác nhận hết lỗi “Failed to fetch”
