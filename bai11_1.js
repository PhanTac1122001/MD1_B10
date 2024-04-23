let ly= parseInt(prompt("Nhập điểm Lý:"))

let hoa= parseInt(prompt("Nhập điểm Hóa:"))

let sinh= parseInt(prompt("Nhập điểm Sinh:"))

let trungBinh=(ly+hoa+sinh)/3;

let sum=ly+hoa+sinh;

document.writeln(`Điểm trung bình:`+trungBinh);
document.writeln("</br>");
document.writeln(`Điểm tổng:`+sum);