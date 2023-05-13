
        function ktma() {
            let ma = document.getElementById('txMa').value;
            let patten = /^[0-9]{10}/;
            if(patten.test(ma)) {
                document.getElementById('tbMa').innerHTML = '*'
                return true;
            }else {
                document.getElementById('tbMa').innerHTML = 'ma sai!!!'
                return false
            }
        }

        function kthoten() {
            let ten = document.getElementById('txhoten').value;
            let patten = /^[A-Z][a-z]*( [A-Z][a-z]*)*$/
            if(patten.test(ten)) {
                document.getElementById('tbhoten').innerHTML = '*'
                return true;
            }else {
                document.getElementById('tbhoten').innerHTML = 'ma sai!!!'
                return false
            }
        }

        function ktngay() {
            let ngay = new Date();
            let ngaydat = new Date(document.getElementById('txNgay').value)
            if(ngaydat - ngay <= 7) {
                document.getElementById('tbNgay').innerHTML = 'ngay dat phai sua ngay hien tai 7 ngay!!!'
                return false
                
            }else {
                document.getElementById('tbNgay').innerHTML = '*'
                return true;
            }
        }

        function ktEmail() {
            let ten = document.getElementById('txEmail').value;
            let patten = /\w+@gmail\.com/
            if(patten.test(ten)) {
                document.getElementById('tbEmail').innerHTML = '*'
                return true;
            }else {
                document.getElementById('tbEmail').innerHTML = 'ma sai!!!'
                return false
            }
        }

        function ktsdt() {
            let ma = document.getElementById('txsdt').value;
            let patten = /^[0-9]{10}/;
            if(patten.test(ma)) {
                document.getElementById('tbsdt').innerHTML = '*'
                return true;
            }else {
                document.getElementById('tbsdt').innerHTML = 'sdt sai!!!'
                return false
            }
        }
        let stt  = 1;
        function ketqua() {
            if(ktma() && ktEmail() && kthoten() && ktngay() && ktngay()){
                let ma = document.getElementById('txMa').value
                let ten = document.getElementById('txhoten').value
                let ngay = document.getElementById('txNgay').value
                let email = document.getElementById('txEmail').value
                let sdt = document.getElementById('txsdt').value

                var htmls = '<tr><td>'+ stt+ '</td> <td>' + ma + '</td> <td>'+ ten +'</td> <td>'+ ngay+ '</td> <td>'+ email + '</td> <td>'+sdt +'</td> </tr>'
                document.querySelector('.table').innerHTML+= htmls
                stt ++;
            }
        }


   