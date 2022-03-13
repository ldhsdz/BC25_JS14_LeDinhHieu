// Bài 1
document.getElementById('btnXuat').onclick = function(){
    // Đầu vào
    var number_1 = document.getElementById('number1').value*1;
    var number_2 = document.getElementById('number2').value*1;
    var number_3 = document.getElementById('number3').value*1;
    
    var tam;
    // Xử Lý
    if (number_1>number_2){
        tam = number_1;
        number_1 = number_2;
        number_2 = tam;
    }
    if(number_1>number_3){
        tam = number_1;
        number_1=number_3;
        number_3=tam;
    }
    if(number_2>number_3){
        tam = number_2;
        number_2=number_3;
        number_3=tam;
    }
    // Đầu Ra
    ketQua1 = "Số thứ tự tăng dần là: "+number_1 + '  '+number_2+'  '+number_3;
    document.getElementById('txtKQ1').innerHTML = ketQua1;
    
};



// Bài 2
document.getElementById('btnChao').onclick = function(){
    // Đầu Vào
    var thanhVien = document.getElementById('thanhVien').value;
    // Xử Lý
    switch(thanhVien){
        case 1:
            console.log('Bố');
        break;
        case 2:
            console.log('Mẹ');
        break;
        case 3:
            console.log('Anh Trai');
        break;
        case 4:
            console.log('Em Gái');
        break;
        default:
            console.log('Phải Nhập Đúng Tên Gọi');
        break;
    }
    // Đầu ra
    ketQua2 = 'Xin Chào : ' + thanhVien;
    document.getElementById('txtKQ2').innerHTML = ketQua2;
};


// Bài 3
function kiemTraSoChanLe(number){
    if(number % 2 === 0){
        // so chan
        return true;
    }else{
        // so le
        return false;
    }
}
document.getElementById('btnXuatSoCL').onclick = function(){
    // Đầu Vào
    var so_1 = document.getElementById('soThu1').value*1;
    var so_2 = document.getElementById('soThu2').value*1;
    var so_3 = document.getElementById('soThu3').value*1;
    // Xử Lý
    var kiemTra = kiemTraSoChanLe(so_1);
    if(kiemTra){
        kqCL1 = ' Số '+ so_1 +' Là Số Chẵn; ';
    }else{
        kqCL1 = ' Số '+ so_1 +' Là Số Lẻ; ';
    }
    var kiemTra = kiemTraSoChanLe(so_2);
    if(kiemTra){
        kqCL2 = ' Số '+ so_2 +' Là Số Chẵn; ';
    }else{
        kqCL2 = ' Số '+ so_2 +' Là Số Lẻ; ';
    }
    var kiemTra = kiemTraSoChanLe(so_3);
    if(kiemTra){
        kqCL3 = ' Số '+ so_3 +' Là Số Chẵn; ';
    }else{
        kqCL3 = ' Số '+ so_3 +' Là Số Lẻ; ';
    }
    // Đầu Ra
    document.getElementById('txtKQ3').innerHTML = kqCL1 + kqCL2 + kqCL3;

};

// Bài 4
document.getElementById('btnTamGiac').onclick = function(){
    //Đầu vào
    var a = document.getElementById('canhA').value*1;
    var b = document.getElementById('canhB').value*1;
    var c = document.getElementById('canhC').value*1;
    var loaiTamGiac;
    // Xử Lý
    if(a+b <=c || a+c<=b||b+c<=a){
        console.log('Đây không phải là tam giác. Vui lòng kiểm tra lại !');
        loaiTamGiac = "Đây Không Phải là Tam giác"
    }else{
        if(a == b && b == c){
            console.log('Tam Giác Đều');
            loaiTamGiac = 'Đều'
        }else if(a * a + b * b == c * c || a * c + c * c == b * b || b * b + c * c == a * a){
            console.log('Tam Giác Vuông');
            loaiTamGiac = 'Vuông'
        }else if (a == b || a == c || b == c){
            console.log('Tam Giác Cân');
            loaiTamGiac = 'Cân'
        }else{
            console.log('Tam Giác Thường');
            loaiTamGiac = 'Thường'
        }
        
    }
    // Đầu ra
    ketqua4 = "Loại Tam Giác Là : " + loaiTamGiac;
    document.getElementById('txtKQ4').innerHTML = ketqua4;
};