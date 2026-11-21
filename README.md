# Bài 3.1.3 - Đổi năm dương lịch sang năm âm lịch

Bài tập chương 3 - JavaScript, sách *Bài tập Thiết kế Web* (NXB ĐHSP TP.HCM, 2023), học phần COMP1802.

Sinh viên thực hiện: Phan Văn Thịnh

## Chức năng
- Nhập năm dương lịch vào ô nhập, nhấn **Đổi năm** (hoặc Enter) để xem năm âm lịch = Can + Chi.
- Can tra theo năm % 10, Chi tra theo năm % 12 bằng `switch...case`.
- Ô Can và ô Chi tương ứng được tô màu trong hai bảng tra cứu.
- Khi mở trang, năm hiện tại được đổi sẵn.

## Kiến thức sử dụng
- Toán tử `%`, câu lệnh `switch...case`
- `document.getElementById`, `value`, `innerHTML`, `classList`, `querySelectorAll`
- Sự kiện `onclick`, `keydown`
- Đối tượng `Date` (`getFullYear`)

## Ví dụ
| Năm dương lịch | Năm âm lịch |
|---|---|
| 2000 | Canh Thìn |
| 2024 | Giáp Thìn |
| 2025 | Ất Tỵ |
| 2026 | Bính Ngọ |

## Cách chạy
Mở thư mục bằng VS Code, chuột phải `index.html` → **Open with Live Server**.
