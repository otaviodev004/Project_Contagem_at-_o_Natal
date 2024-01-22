// variaveis para pegar os ids presentes na tela
const secondsContainer = document.querySelector('#seconds');
const minutesContainer = document.querySelector('#minutes');
const hoursContainer = document.querySelector('#hours');
const daysContainer = document.querySelector('#days');

// variavel para pegar a data
const nextNatal = new Date().getFullYear();
// varaivel para pegar a data do natal
const newNatalTime = new Date(`December 25 ${nextNatal} 00:00:00`);


const updateCountdown = () => {
    const currentTime = new Date();
    // diferença entre as datas
    const difference = newNatalTime - currentTime;

    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(difference / 1000 / 60) % 60;
    const seconds = Math.floor(difference / 1000) % 60;


    // console.log({ days, hours, minutes, seconds});

    // inserindo 0 na esquerda se for abaixo de 10s
    secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds;
    minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes;
    hoursContainer.textContent = hours < 10 ? '0' + hours : hours;
    daysContainer.textContent = days < 10 ? '0' + days : days;

}

// funcao para disparar o uptade a cada secundo, ou seja, renovar o horario a cada 1s
setInterval(updateCountdown, 1000);

window.onload = function(){
    updateCountdown;
}