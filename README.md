 Movie Quiz

[View the live project here.]([View the live project here.](https://miatothova.github.io/Movie-Quiz/index.html))

![alt text](https://github.com/MiaTothova/Movie-Quiz/blob/main/readme-images/am-i-esponsive.png)
The image is from [Am I responsive?](http://ami.responsivedesign.is/)


Movie Quiz is an interactive quiz game mainly aimed at adults but also any child movie lover 12+ years of age. Its main purpose is to provide a fun environment in which the player can test out their knowledge about movies. The user has the choice to pick the Short / Long game option and based on the user's selection an array of questions and images appears. The user then has the choice to answer and based on the user's selections the score is added at the end. This is a fun interactive game for any movie lover.


## UX
I aimed to create a simple quiz application, with a simplistic design that is fun and engages the user at the same time.


#### The ideal client:
* Adults
* children 12+ years old
* English speaker
* Movie lover
* Likes Quiz games


### The website will help clients to:
* Navigate easily through the website
* Test their knowledge

## Owner Stories
1. As the owner, I want to give the user the option to choose the game type.
2. As the owner I want the game to be educational and fun for the user
3. As the owner I want to encourage the player to keep playing

### User Stories
1. As a new visitor, I want to easily navigate the site to start the game.
2. As a visitor, I want to be able to play the game and see my score at the end.
3. As a visitor, I want to see images based on the questions I am answering.
4. As a visitor, I want to know when I answered wrong or correctly.


## The Scope and skeleton
To achieve my goal, I included the following features my website:

1. A game container where all the headings, questions, butons and score will be nested.
2. Fully functioning Buttons to navigate, and control the game.
3. Image area where the relevant image is displayed.


### The skeleton
The Quiz consists of only 1 page index.html which is the main page. I am using Javascript for user functionality. To make selection of buttons possible.

* [Desktop view](https://github.com/MiaTothova/Movie-Quiz/blob/main/readme-images/desktop.png)

* [Tablet view](https://github.com/MiaTothova/Movie-Quiz/blob/main/readme-images/tablet.png)

* [Mobile view](https://github.com/MiaTothova/Movie-Quiz/blob/main/readme-images/mobile.png)

## Features 
* Responsive on all Devices
* Introduction page
* Image, question and answer display
* Pointer with hover effect
* Short game, Long game option
* Score feedback and Home page navigation

### The Design
I went for a very minimalistic design that is easy on the eyes and doesn't overwhelm the user. There is a nice blue background with black lettering that is easy to see. The hover option adds color to the game.  I didn't choose a background image because I am already using images in my question container, therefore I felt like it would look too messy. 

* I have chosen a simple but bright color pallet and I based the colors of the application on that. I find that they look nice and sleek but cheerful at the same time.
![](https://github.com/MiaTothova/Movie-Quiz/blob/main/readme-images/color3.png)

The Quiz has 3 areas:
1. Home Page which displays the heading and 2 buttons for Short / Long game.
2. Game area after choosing a game option, a list of questions with appropriate images and avaialable answers. These questions are shuffled  so that the order is random each time.
3. End page where the questions are hiden and only displays the score panel and Home buttons.

### Future features
* Video playback on all questions
* Game dificulty level option
* Update the selected button functionality, and disable hover once a question is selected.
* User name input
* Top scores 

## Testing

1. As a new visitor, I want to easily navigate the site to start the game.
1. As the owner, I want to give the user the option to choose the game type.

* On the home page, we have an easily identifiable heading that tells the user what the site is about and what type of game they can expect.
* We have 2 buttons with Short and Long game options where the user can choose which game they want to play.

![](https://github.com/MiaTothova/Movie-Quiz/blob/main/readme-images/startpage.png)


2. As the owner I want the game to be educational and fun for the user
3. As a visitor, I want to see images based on the questions I am answering.

* Here we have a nice clear image being displayed above the answer buttons and under the question. 

![](https://github.com/MiaTothova/Movie-Quiz/blob/main/readme-images/unselected.png)

3. As the owner I want to encourage the player to keep playing
4. As a visitor, I want to know when I answered wrong or correctly.

* In this instance the question has been answered correctly, therefore the button is green.

![](https://github.com/MiaTothova/Movie-Quiz/blob/main/readme-images/correct.png)

* In this instance the question has been answered wrong, therefore the button incorrect button turned red but the correct answer turned green letting the user know which button was the correct answer.

![](https://github.com/MiaTothova/Movie-Quiz/blob/main/readme-images/incorect.png)

2. As a visitor, I want to be able to play the game and see my score at the end.
2. As the owner I want the game to be educational and fun for the user

* Here we have a clear message displaying Game Over! This lets the user know the game has finished and they can see the score based on how well they did. 

![](https://github.com/MiaTothova/Movie-Quiz/blob/main/readme-images/score.png)


## Aditional Testing

## Validation

* Lighthouse in Chrome DevTools used to check performance. No significant errors were found.

Lighthouse score
![](https://github.com/MiaTothova/Movie-Quiz/blob/main/readme-images/lighthouse.png)

* Used W3C Markup Validation Service to validate index.html page. The page passed with no errors or warnings.

Html checker
![](https://github.com/MiaTothova/Movie-Quiz/blob/main/readme-images/html.png)

* Used W3C CSS Validation Service to validate CSS file. File passed with no errors.

Css checker
![](https://github.com/MiaTothova/Movie-Quiz/blob/main/readme-images/css.png)

* Used JS Hint to check my javascript. No errors found, but I have 28warnings. 

Javascript checker
![](https://github.com/MiaTothova/Movie-Quiz/blob/main/readme-images/js-lint.png)


* A11y contrast checker. Everything passed without any issues.
![](https://github.com/MiaTothova/Movie-Quiz/blob/main/readme-images/contrast.png)


## Technologies Used

* [Balsamiq](https://balsamiq.com/) I used the low-fidelity wireframing tool to create structure of the website layout.
* [Gitpod](https://gitpod.io/workspaces)I used this developer to write the code for this website.
* [Github](https://github.com/) Was used to host my code that was created and pushed to Gitpod.
* [Google Fonts](https://fonts.google.com/) Was used to style the website's fonts.
* [Fontawesome](https://fontawesome.com/v5.15/icons?d=gallery&p=2) The use of the film icon from this website made the website more appealing.
* [W3C Markup Validation Service](https://validator.w3.org/#validate_by_input) Was use to check the markup of the web documents in HTLM.
* [W3C jigsaw Validation Service](https://jigsaw.w3.org/css-validator/validator) Was used to chech and validate the CSS in my project.
* [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/)Was used to inspect any issues and inspect the responsiveness of the website.
* [a11y Contrast Checker](https://color.a11y.com/) This was used to make sure that the project meets visual standards.
* [js hint](https://jshint.com/) Was use to check for any errors in the Javascript code.


## Compatibility
To ensure that a broad range of users can successfully view and use the application, I tested it across all major browsers on both desktop and mobile.
* Chrome
* Mozila Firefox
* Edge
* Internet explorer
* Safari

### Bugs



## Deplopyment

This project was developed using Gitpod, committed to git and pushed to GitHub using git commands. You can clone this repository using [https://github.com/MiaTothova/Movie-Quiz](https://github.com/MiaTothova/Movie-Quiz)

1. Select the Settings tab in my GitHub repository. 

![](https://github.com/MiaTothova/Movie-Quiz/blob/main/readme-images/step1.png)

2. Find GitHub Pages in the menu.
![](https://github.com/MiaTothova/Movie-Quiz/blob/main/readme-images/step2.png) 

3. Go to Source > select Deploy from a branch. Then Choose the Main branch, Then select root folder and save. After this wait few minutes and refresh the page.
![](https://github.com/MiaTothova/Movie-Quiz/blob/main/readme-images/step3.png)

4. After the page re-freshed, I got a message "Your site is live at 4. After the page re-freshed, I got a message "Your site is live at https://miatothova.github.io/Movie-Quiz/index.html".

![](https://github.com/MiaTothova/Movie-Quiz/blob/main/readme-images/step4.png)

5. Clicking on the link takes us to the deployed website.
![](https://github.com/MiaTothova/Movie-Quiz/blob/main/readme-images/step5.png)

## Content




## Credits





