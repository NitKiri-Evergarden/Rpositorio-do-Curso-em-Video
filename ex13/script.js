function carregar(){
    var msg = window.document.getElementById('msg');
    var imag = window.document.getElementById('images');
    var data = new Date();
    var hora = data.getHours();
    //var hora = 22; // só para testa

    msg.innerHTML = `agora são: ${hora} Horas.`;
    if (hora >= 0 && hora <= 12){
        imag.src = 'manha.png';
        document.body.style.background = '#AA8096';
    }else if (hora >= 12 && hora <= 18){
        imag.src = 'tarde.png';
        document.body.style.background = '#FF9C02';
    }else {
        imag.src = 'noite.png';
        document.body.style.background = '#1F2837';
    }
        
}