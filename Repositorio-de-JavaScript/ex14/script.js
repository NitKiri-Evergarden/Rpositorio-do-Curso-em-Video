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
        
        if ()
    }
        
}