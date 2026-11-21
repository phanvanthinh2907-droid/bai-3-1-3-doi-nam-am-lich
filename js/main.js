function xoaDanhDau() {
  let oCu = document.querySelectorAll(".chon");
  for (let i = 0; i < oCu.length; i++) {
    oCu[i].classList.remove("chon");
  }
}

function doiNam() {
  let nam_duong_lich = parseInt(document.getElementById("nam_duong_lich").value);
  let ketQua = document.getElementById("ket_qua");
  xoaDanhDau();

  if (isNaN(nam_duong_lich) || nam_duong_lich <= 0) {
    ketQua.innerHTML = "Vui lòng nhập năm dương lịch hợp lệ (số nguyên dương)!";
    ketQua.className = "result loi";
    return;
  }

  let soCan = nam_duong_lich % 10;
  let soChi = nam_duong_lich % 12;
  let can = "";
  let chi = "";

  switch (soCan) {
    case 0: can = "Canh"; break;
    case 1: can = "Tân"; break;
    case 2: can = "Nhâm"; break;
    case 3: can = "Quý"; break;
    case 4: can = "Giáp"; break;
    case 5: can = "Ất"; break;
    case 6: can = "Bính"; break;
    case 7: can = "Đinh"; break;
    case 8: can = "Mậu"; break;
    case 9: can = "Kỷ"; break;
  }

  switch (soChi) {
    case 0: chi = "Thân"; break;
    case 1: chi = "Dậu"; break;
    case 2: chi = "Tuất"; break;
    case 3: chi = "Hợi"; break;
    case 4: chi = "Tý"; break;
    case 5: chi = "Sửu"; break;
    case 6: chi = "Dần"; break;
    case 7: chi = "Mẹo"; break;
    case 8: chi = "Thìn"; break;
    case 9: chi = "Tỵ"; break;
    case 10: chi = "Ngọ"; break;
    case 11: chi = "Mùi"; break;
  }

  let nam_am_lich = can + " " + chi;

  let noiDung = "Năm " + nam_duong_lich + " là năm <b>" + nam_am_lich + "</b><br>";
  noiDung += nam_duong_lich + " % 10 = " + soCan + " → Can: " + can + "<br>";
  noiDung += nam_duong_lich + " % 12 = " + soChi + " → Chi: " + chi;

  ketQua.innerHTML = noiDung;
  ketQua.className = "result";

  document.getElementById("can" + soCan).classList.add("chon");
  document.getElementById("chi" + soChi).classList.add("chon");
}

document.getElementById("nam_duong_lich").addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    doiNam();
  }
});

document.getElementById("nam_duong_lich").value = new Date().getFullYear();
doiNam();
