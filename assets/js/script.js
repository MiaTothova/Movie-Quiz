
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
    question: " In 'Jurassic Park,' what type of dinosaur is the main antagonist?",
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
{
    question: "What is the name of the hobbit played by Elijah Wood in 'The Lord of the Rings' series? ",
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