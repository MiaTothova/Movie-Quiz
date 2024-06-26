/** Youtube Tutorial:https://www.youtube.com/watch?v=riDzcEQbX6k
 * Some code is customised by me and some was writen by me. You will see aprppriate comments regarding this.
  */

const nextButton = document.getElementById("next-btn");  //tutorial
const homeButton = document.getElementById("home-btn");  //tutorial
const shortGameButton = document.getElementById("short-game-btn"); //mine
const longGameButton = document.getElementById("long-game-btn"); //mine
const gameOver = document.getElementById("game-over"); //mine
const introHeading = document.getElementById("intro");  //mine
const questionImageElement = document.getElementById("question-image"); //today

const questionContainerElement = document.getElementById("question-container");  //tutorial
const questionElement = document.getElementById("question"); //tutorial                     
const answerButtonsElement = document.getElementById("answer-buttons");  //tutorial          


shortGameButton.addEventListener("click", () => startGame('short'));  //mine
longGameButton.addEventListener("click", () => startGame('long'));   //mine

//tutorial
nextButton.addEventListener("click", () => {  
    currentQuestionIndex++;
    setNextQuestion();
});

nextButton.classList.add("hide"); //tutorial
homeButton.classList.add("hide"); //mine


//mine
document.querySelector('#home-btn').addEventListener('click', () => {
    window.location.href = 'index.html';
});

//mine
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;


//tutorial --- customised
function startGame(gameType) {
    currentQuestionIndex = 0 ; 
    score = 0; 
    introHeading.classList.add("hide");  
    shortGameButton.classList.add("hide");
    longGameButton.classList.add("hide");

    if (gameType === "short") {
        shuffledQuestions = shortGameQuestions.sort(() => Math.random() - 0.5);
    } else if (gameType === "long") {
        shuffledQuestions = longGameQuestions.sort(() => Math.random() - 0.5);
    }
    questionContainerElement.classList.remove("hide");   
    setNextQuestion();  
}

//tutorial
function setNextQuestion() {
    resetState();  
    showQuestion(shuffledQuestions[currentQuestionIndex]);  
}

//tutorial
function resetState() {        
    nextButton.classList.add("hide");

    while (answerButtonsElement.firstChild) { 
        answerButtonsElement.removeChild(answerButtonsElement.firstChild); 
}
   
}

//tutorial
function showQuestion(question) {        
    questionElement.innerText = question.question;  
    questionImageElement.src = question.image;

    question.answers.forEach(answer => {   
        const button = document.createElement("button");   
        button.innerText = answer.text;    
        button.classList.add("btn");  
        
        if (answer.correct) {  
            button.dataset.correct = answer.correct;  
        }
        button.addEventListener("click", selectAnswer);  
        answerButtonsElement.appendChild(button);  
    });
}

//mine
function showScore() {   
    resetState(); 
    questionElement.innerText = `You scored ${score} out of ${shuffledQuestions.length}!`; 

    questionImageElement.classList.add("hide");

    homeButton.classList.remove("hide");
    gameOver.classList.remove("hide");
} 

//tutorial --- customised
function selectAnswer(e) {    
    const selectedButton = e.target;  
    const correct = selectedButton.dataset.correct === "true";  

    if (correct) {
        score++; 
        setStatusClass(selectedButton, true); 
    } else {
        setStatusClass(selectedButton, false); 
        Array.from(answerButtonsElement.children).forEach(button => {
            if (button.dataset.correct === "true") {  
                setStatusClass(button, true);
            }
            button.disabled = true; 
        });
         
    }
   
    if (shuffledQuestions.length > currentQuestionIndex + 1) { 
        nextButton.classList.remove("hide");
    } else {
        setTimeout(() => {
            showScore();
            answerButtonsElement.classList.add("hide"); 

        }, 1000); 
    }
}


//tutorial
function setStatusClass(element, correct){  
    clearStatusClass(element);  
    if (correct) {   
        element.classList.add("correct");  
    } else { 
        element.classList.add("wrong"); 
    }
}


//tutorial
function clearStatusClass(element) {   
    element.classList.remove("correct"); 
    element.classList.remove("wrong");
}



// Array of questions


//mine
const shortGameQuestions = [{
    question: "In 'The Matrix', what color pill does Neo take?",
    image: "assets/images/q1.webp",
    answers: [{
            text: "Blue",
            correct: false
        },
        {
            text: "Green",
            correct: false
        },
        {
            text: "Yellow",
            correct: false
        },
        {
            text: "Red",
            correct: true
        }

    ]

},
{
    question: "What is the name of the kingdom where the 2013 animated movie 'Frozen' is set?",
    image: "assets/images/q2.webp",
    answers: [{
            text: "Atlantis",
            correct: false
        },
        {
            text: "Arendelle",
            correct: true
        },
        {
            text: "Eldorado",
            correct: false
        },
        {
            text: "Fantasia",
            correct: false
        }

    ]
    
},
{
    question: " In 'Titanic,' what is the name of Leonardo DiCaprio's character? ",
    image: "assets/images/q3.webp",
    answers: [{
            text: "Billy",
            correct: false
        },
        {
            text: "Jack",
            correct: true
        },
        {
            text: "Sam",
            correct: false
        },
        {
            text: "Frank",
            correct: false
        }

    ]
    
},
{
    question: "Which 1994 film features the quote, 'Life is like a box of chocolates'?",
    image: "assets/images/q4.webp",
    answers: [{
            text: "The Shawshank Redemption",
            correct: false
        },
        {
            text: "Pulp Fiction ",
            correct: false
        },
        {
            text: "The Lion King ",
            correct: false
        },
        {
            text: "Forrest Gump",
            correct: true
        }

    ]
    
},
{
    question: "What is the highest-grossing film of all time as of 2023?",
    image: "assets/images/q5.webp",
    answers: [{
            text: "Avengers: Endgame",
            correct: false
        },
        {
            text: "Avatar: The Way of Water",
            correct: true
        },
        {
            text: "Star Wars: The Force Awakens ",
            correct: false
        },
        {
            text: "Titanic",
            correct: false
        }

    ]
    
},
{
    question: "Who played the Joker in the 2008 film 'The Dark Knight'? ",
    image: "assets/images/q6.webp",
    answers: [{
            text: "Heath Ledger ",
            correct: true
        },
        {
            text: "Jack Nicholson ",
            correct: false
        },
        {
            text: "Joaquin Phoenix ",
            correct: false
        },
        {
            text: "Jared Leto ",
            correct: false
        }

    ]
    
},
{
    question: " In 'Jurassic Park,' what type of dinosaur is the main antagonist?",
    image: "assets/images/q7.webp",
    answers: [{
            text: "Velociraptor ",
            correct: false
        },
        {
            text: "T. rex ",
            correct: true
        },
        {
            text: "Triceratops ",
            correct: false
        },
        {
            text: "Stegosaurus ",
            correct: false
        }

    ]
    
},

];

//mine
const longGameQuestions = [
{
    question: "What is the name of the hobbit played by Elijah Wood in 'The Lord of the Rings' series? ",
    image: "assets/images/q8.webp",
    answers: [{
            text: "Bilbo Baggins ",
            correct: false
        },
        {
            text: "Samwise Gamgee ",
            correct: false
        },
        {
            text: "Frodo Baggins ",
            correct: true
        },
        {
            text: "Peregrin Took ",
            correct: false
        }

    ]
    
},
{
    question: "Who directed the 1977 movie 'Star Wars' (later retitled 'Star Wars: Episode IV – A New Hope)? ",
    image: "assets/images/q9.webp",
    answers: [{
            text: "Steven Spielberg",
            correct: false
        },
        {
            text: "James Cameron ",
            correct: false
        },
        {
            text: "George Lucas ",
            correct: true
        },
        {
            text: "Ridley Scott ",
            correct: false
        }

    ]
    
},
{
    question: "What is the name of the school that Harry Potter attends?",
    image: "assets/images/q10.webp",
    answers: [{
            text: "Durmstrang Institute ",
            correct: false
        },
        {
            text: "Beauxbatons Academy ",
            correct: false
        },
        {
            text: "Ilvermorny School ",
            correct: false
        },
        {
            text: "Hogwarts School of Witchcraft and Wizardry ",
            correct: true
        }

    ]
    
},
{
    question: "In which movie does Tom Hanks character say, “Houston, we have a problem”? ",
    image: "assets/images/q11.webp",
    answers: [{
            text: "Cast Away ",
            correct: false
        },
        {
            text: "Apollo 13 ",
            correct: true
        },
        {
            text: "Saving Private Ryan ",
            correct: false
        },
        {
            text: "Captain Phillips ",
            correct: false
        }

    ]
    
},
{
    question: "What’s the name of the skyscraper in 'Die Hard'? ",
    image: "assets/images/q12.webp",
    answers: [{
            text: "Willis Tower ",
            correct: false
        },
        {
            text: "Empire State Building ",
            correct: false
        },
        {
            text: "Nakatomi Plaza ",
            correct: true
        },
        {
            text: "Stark Tower ",
            correct: false
        }

    ]
    
},
{
    question: "Who is the actress that plays Katniss Everdeen in 'The Hunger Games' series? ",
    image: "assets/images/q13.webp",
    answers: [{
            text: "Emma Stone ",
            correct: false
        },
        {
            text: "Kristen Stewart ",
            correct: false
        },
        {
            text: "Shailene Woodley",
            correct: false
        },
        {
            text: "Jennifer Lawrence ",
            correct: true
        }

    ]
    
},
{
    question: " What is the fictional African country where 'Black Panther' is set? ",
    image: "assets/images/q14.webp",
    answers: [{
            text: "Zamunda ",
            correct: false
        },
        {
            text: "Wakanda ",
            correct: true
        },
        {
            text: "Genovia ",
            correct: false
        },
        {
            text: "Latveria",
            correct: false
        }

    ]
    
},
{
    question: "What animated film features the song “Let It Go”? ",
    image: "assets/images/q15.webp",
    answers: [{
            text: "Moana ",
            correct: false
        },
        {
            text: "Tangled",
            correct: false
        },
        {
            text: "Frozen",
            correct: true
        },
        {
            text: "Brave",
            correct: false
        }

    ]
    
},
{
    question: " In 'Back to the Future,' what is the name of the scientist who invents the time machine?",
    image: "assets/images/q16.webp",
    answers: [{
            text: "Frankenstein",
            correct: false
        },
        {
            text: "Strange",
            correct: false
        },
        {
            text: "Jekyll",
            correct: false
        },
        {
            text: "Emmet Brown",
            correct: true
        }

    ]
    
},
{
    question: " Which movie features the character Jack Sparrow? ",
    image: "assets/images/q17.webp",
    answers: [{
            text: "The Mummy ",
            correct: false
        },
        {
            text: "National Treasure ",
            correct: false
        },
        {
            text: "Indiana Jones ",
            correct: false
        },
        {
            text: "Pirates of the Caribbean ",
            correct: true
        }

    ]
    
},
{
    question: "In 'The Godfather,' what is the name of the character played by Marlon Brando? ",
    image: "assets/images/q18.webp",
    answers: [{
            text: "Michael Corleone ",
            correct: false
        },
        {
            text: "Sonny Corleone ",
            correct: false
        },
        {
            text: "Vito Corleone ",
            correct: true
        },
        {
            text: "Fredo Corleone ",
            correct: false
        }

    ]
    
},
{
    question: "Which film features the iconic line, “Here’s looking at you, kid”? ",
    image: "assets/images/q19.webp",
    answers: [{
            text: "Gone with the Wind ",
            correct: false
        },
        {
            text: "Citizen Kane ",
            correct: false
        },
        {
            text: "Casablanca ",
            correct: true
        },
        {
            text: "Breakfast at Tiffany's ",
            correct: true
        }

    ]
    
},
{
    question: " In 'E.T. the Extra-Terrestrial,' what does E.T. use to phone home? ",
    image: "assets/images/q20.webp",
    answers: [{
            text: "Walkie-Talkie ",
            correct: false
        },
        {
            text: "Homemade communication device ",
            correct: true
        },
        {
            text: "Radio",
            correct: false
        },
        {
            text: "Cell Phone",
            correct: false
        }

    ]
    
},

];