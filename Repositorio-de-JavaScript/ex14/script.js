function Verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var formulaano = document.getElementById('textano');
    var resut = document.querySelector('div#resu');

    if (formulaano.value.length == 0 || Number(formulaano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente');
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(formulaano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked){
            genero = 'Homem';
            if (idade >= 0 && idade < 10){
                // bebe
                img.setAttribute('src', 'bebhomem.jpg');

            }else if(idade >= 10 && idade <= 17){
                // criança
                img.setAttribute('src', 'criancahomem.jpg');
                
            }else if (idade <= 18){
                //jovem
                img.setAttribute('src', 'jovemhome.jpg');

            }else if (idade <= 50){
                // adulto
                img.setAttribute('src', 'adutohomem.jpg');

            }else {
                // idoso
                img.setAttribute('src', 'idosohomem.jpg');
            }
        }else{
            genero = 'Mulher';
            if (idade >= 0 && idade < 10){
                // bebe
                img.setAttribute('src', 'bebemulher.jpg');

            }else if(idade >= 10 && idade <= 17){
                // criança
                img.setAttribute('src', 'criancamulher.jpg');
                
            }else if (idade <= 18){
                //jovem
                img.setAttribute('src', 'jovemmulher.jpg');

            }else if (idade <= 50){
                // adulto
                img.setAttribute('src', 'adutomulher.jpg');
                
            }else {
                // idoso
                img.setAttribute('src', 'idosomulhuer.jpg');
            }
        }
        resut.style.textAlign = 'center';
        resut.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        resut.style.gap = '10px';
        resut.appendChild(img);
        img.style.display = 'flex';
    }
        
}