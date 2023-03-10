const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');


let currentQuestion = {}
let acceptingAnswer = false;
let score = 0
let questionCounter = 0;
let availableQuestion = [];
let questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript??',
        choice1: '<script>',
        choice2: '<javascript>',
        choice3: '<js>',
        choice4: '<scripting>',
        answer: 1,
    },
    {
        question:
            "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<script file='xxx.js'>",
        answer: 3,
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4,
    },
];
// Constsnts

const correctBonus = 10;
const maxQuestion = questions.length;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestion = [...questions]
    // console.log(availableQuestion)
    getNewQuestion();
}
getNewQuestion = () =>{
    if(availableQuestion.length == 0 || questionCounter >= maxQuestion){
        
        localStorage.setItem('mostRecentScore', score)

        // go to the end page 
        return window.location.assign("end.html");
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} / ${maxQuestion}`;

        // Update pprogressBarFull
        progressBarFull.style.width =  `${(questionCounter / maxQuestion) * 100}%`;


    const questionIndex = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion =availableQuestion[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })

    availableQuestion.splice(questionIndex, 1);

    acceptingAnswer = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        // console.log(e.target);
        if(!acceptingAnswer) return;
        
        acceptingAnswer = false;
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        // console.log(classApply)
        if(classToApply == 'correct'){    
            incrementScore(correctBonus);
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {            
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion();
        }, 1000)


    })
})

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}
startGame();