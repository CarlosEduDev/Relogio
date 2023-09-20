const horas = document.querySelector('#horas');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');

const relogio = setInterval((function Time(){
   let dataAtual = new Date();

   let hours = dataAtual.getHours();
   let minutes = dataAtual.getMinutes();
   let seconds = dataAtual.getSeconds();

   if(hours < 10) hours = '0' + hours;
   if(minutes < 10) minutes = '0' + minutes;
   if(seconds < 10) seconds = '0' + seconds;

   horas.textContent = hours;
   minutos.textContent = minutes;
   segundos.textContent = seconds;
}))