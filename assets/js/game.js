const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#scoreText');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
    question: 'The Panama Canal was officially opened by which US president?',
    choice1: 'Calvin Coolidge',
    choice2: 'Herbert Hoover',
    choice3: 'Theodore Roosevelt',
    choice4: 'Woodrow Wilson',
    answer: 4,
    },
{
    question: 'In which ocean is Madagascar?',
    choice1: 'Atlantic',
    choice2: 'Pacific',
    choice3: 'Indian',
    choice4: 'Arctic',
    answer: 3,
},
{
    question: 'Which one of the following actors did not play James Bond?',
    choice1: 'Daniel Craig',
    choice2: 'Pierce Brosman',
    choice3: 'Colin Firth',
    choice4: 'Sean Connery',
    answer: 3,
},
{
    question: 'Arnold Schwarzenegger was the governor of which American state?',
    choice1: 'Florida',
    choice2: 'Texas',
    choice3: 'Montana',
    choice4: 'California',
    answer: 4,
},
{
    question: 'Which animal is not part of the Chinese zodiac?',
    choice1: 'Horse',
    choice2: 'Cat',
    choice3: 'Monkey',
    choice4: 'Dog',
    answer: 2,
}

]