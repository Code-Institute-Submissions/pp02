# Personal Project 2: Quiz App

This quiz app is designed to test the users general knowlege.

![Website Mockup](/assets/Images/mockup.jpg)




# Features

**Score:** 


![score page](/assets/Images/score.png)


When the user gets an answer correct, their score is increased by 100 points. If the answer is incorrect no points are given. This score can then be saved and viewed on the leaderboard.



**Progress Bar:** 


![progress bar](/assets/Images/progress.png)


The progress bar will fill up as the user completes each question giving a visual indication of how many questions are left.



------

## Usage
The quiz was designed with an intuitive design in mind.
The user simply clicks on the answer they deem to be correct and the app will display green for a correct answer and red for incorrect.
A correct answer will also give them 100 points.
Reguardless of correct or incorrect answer the progress bar will increase as you move on to the next question.
Once the user has finished the quiz they will be directed to the end page. From here they can save their score, play again or return to the homepage.
![end page](/assets/Images/end.png)


 # Testing

## User Testing
    When hosting on github pages all of the internal links returned a 404 error. This was due to relative paths. Adding the repo name to the paths resolved this issue.
    
    The HighScore orginially didn't work. This was due to using the query selector method for this statement by mistake. Once it was corrected the issue was resolved.


 ## Validator Testing

 - HTML 
    - Running the html through the w3school validator returned no errors.

- CSS
    - One error was found but this was due to the validator being unable to verify the linked Font Awesome stylesheet.

- JavaScript
    - JSHint returned errors for missing semicolons. However, this was a choice as they were not necessary since the JavaScript parsers automatically include them.

# Deployment
-   The site was deployed using GitHub and GitHub pages.
    - Each change was documented with a commit to GitHub and a description was given on each change.
    - The site was hosted on GitHub pages.
        - The live link for the GitHub pages site is as follows - https://conorpbecton.github.io/pp02/



# Credits
- The Progress Bar
    - The idea for how to impliment this was taken from [this youtube video:](https://www.youtube.com/watch?v=f4fB9Xg2JEY).
## Content
-   The questions and answers were taken from the following site:  [Fun Quizzes ](https://www.funquizzes.uk/)
- The icons in the buttons were taken from [Font Awesome ](https://fontawesome.com/)

## Code 
 - The code for localStorage to store the score and re-display your final score in the final page was taken from [This guide ](https://blog.logrocket.com/localstorage-javascript-complete-guide/)
