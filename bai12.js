let firstName = ("Academy")

let lastName = ("Rikkei")

let fullName = lastName + " " + firstName

alert(fullName)

let a = String(prompt("Nhập Chữ:"));

let b = Number(prompt("Nhập Số:"));

let c = true;

let d = null;

let f = undefined;

const car = { type: "Fiat", model: "500" }

alert(car)

let ly= parseInt(prompt("Nhập điểm Lý:"))

let hoa= parseInt(prompt("Nhập điểm Hóa:"))

let sinh= parseInt(prompt("Nhập điểm Sinh:"))

let trungBinh=(ly+hoa+sinh)/3;

let sum=ly+hoa+sinh;

document.writeln(`Điểm trung bình:`+trungBinh);
document.writeln("</br>");
document.writeln(`Điểm tổng:`+sum);


let celsius= parseInt(prompt("Mời bạn nhập độ C:"))

let fahrenheit= (celsius*9/5)+32;

alert(`Độ F của bạn là:`+fahrenheit);

let chieuDai = parseInt(prompt("Nhập chiều dài:"))

let chieuRong= parseInt(prompt("Nhập chiều rộng:"))

let chuVi= (chieuDai+chieuRong)*2

let dienTich=chieuDai*chieuRong;

alert("Chu vi Hình Chữ Nhật:"+chuVi)

alert("Diện tích Hình Chữ Nhật:"+dienTich)

let r =parseInt(prompt("Mời nhập bán kính:"))
let chuViHinhTron=2*Math.PI*r;

let dienTichHinhTron=Math.PI*r**2;

alert("Chu Vi Hình Tròn:"+chuViHinhTron)

alert("Diện tích Hình Tròn:"+dienTichHinhTron)