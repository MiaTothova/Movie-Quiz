
const startButton = document.getElementById("start-btn"); 
startButton.addEventListener("click", startGame); 

const introHeading = document.getElementById("intro");

const questionContainer = document.getElementById("answer-buttons"); 

function startGame() {
    
    startButton.classList.add("hide");     
    introHeading.classList.add("hide");
     
    questionContainer.classList.remove("hide");
    answerButtonsElement.classList.remove("hide");
}

