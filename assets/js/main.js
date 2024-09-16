const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let seg;


function showTime(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone: 'UTC'
    });
}

function iniciaRelogio(){
    seg = setInterval(function(){
        segundos++;
        relogio.innerHTML = showTime(segundos);
    }, 1000)
    return seg
}

iniciar.addEventListener('click', function(event) {
    // alert('cliquei no iniciar');
    clearInterval(seg);
    iniciaRelogio()
});



pausar.addEventListener('click', function(event){
    // alert('cliquei no pausar');
    clearInterval(seg);

});

zerar.addEventListener('click', function(){
    // alert('cliquei no zerar');
    clearInterval(seg);
    segundos = 0;
    relogio.innerHTML = "00:00:00"
});