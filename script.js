let imgBox = document.querySelector('.imgBox');
let qrImg = document.getElementById('qrImg');
let qrText = document.getElementById('qrText');
let btn= document.querySelector('.btn');

function getQRcode(){
    if(qrText.value.length > 0){
        qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value;
        imgBox.classList.add('show-img');
    } else{
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000)
    }
}

getQRcode();

qrText.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        btn.click();
    }
})