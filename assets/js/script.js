
const startButton = document.getElementById('start-btn'); 
startButton.addEventListener('click', startGame); 

const introHeading = document.getElementById('intro');

function startGame() {
    
    startButton.classList.add('hide');     
    introHeading.classList.add('hide');
}

