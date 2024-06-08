
const startButton = document.getElementById("start-btn"); 
startButton.addEventListener("click", startGame); 

const introHeading = document.getElementById("intro");

const questionContainer = document.getElementById("question-container"); 

function startGame() {
    
    startButton.classList.add("hide");     
    introHeading.classList.add("hide");
     
    questionContainer.classList.remove("hide");
    answerButtonsElement.classList.remove("hide");
}


const questions = [{
    question: "In 'The Matrix', what color pill does Neo take?",
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
    question: "",
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
    question: "",
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
    question: "",
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
    question: "",
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
    question: "",
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
    question: "",
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
    question: "",
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
    question: "",
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
    question: "",
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
    question: "",
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
    question: "",
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
    question: "",
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
    question: "",
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
    question: "",
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


];