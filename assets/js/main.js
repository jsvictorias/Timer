const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let data;


function showTime(segundos){
    data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone: 'UTC'
    });
}

function iniciaRelogio(){
    const seg = setInterval(function(){
        segundos++;
        relogio.innerHTML = showTime(segundos);
    }, 1000)
    return seg
}

iniciar.addEventListener('click', function(event) {
    // alert('cliquei no iniciar');
    iniciaRelogio()
});



pausar.addEventListener('click', function(event){
    // alert('cliquei no pausar');
    

});

zerar.addEventListener('click', function(){
    alert('cliquei no zerar');
});