const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

//questions
let questions = [{
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

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

//start game function and setting question counter/score to 0
startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}
//saving score locally
getNewQuestion = () => {
    if (availableQuestions.length == 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }
    //update question counter and progress bar
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']
        //toggling red/green css for correct/incorrect answer
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        //correct answer increasing score
        if (classToApply == 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)
        //delay to show answer and then fetch next question
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})
//increasing score
incrementScore = num => {
    score += num
    scoreText.innerText = score
}
//calling startGame function
startGame()