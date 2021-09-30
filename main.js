const startBtn = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')


const questionContainerElement = document.getElementById('question-container')
const questionElemnt = document.getElementById('question')
const answerBtn = document.getElementById('answer-buttons')

let shuffleQuestions, currentQestionIndex 

startBtn.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQestionIndex++
    setNextQuestion()
})


function startGame(){
console.log('Started');
startBtn.classList.add('hide')
shuffleQuestions = questions.sort(() =>Math.random() -.5)
currentQestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion() 
}

function setNextQuestion(){
    resetState()
  showQuestion(shuffleQuestions[currentQestionIndex])
}
function showQuestion(question){
    questionElemnt.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBtn.appendChild(button)
    })
}

function selectAnswer(e){
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerBtn.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
  })
  if(shuffleQuestions.length > currentQestionIndex +1) {
    nextButton.classList.remove('hide')
  } else {
      startBtn.innerText = 'Restart'
      startBtn.classList.remove('hide')
  }
  
}
function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerBtn.firstChild){
        answerBtn.removeChild
        (answerBtn.firstChild)
    }
}
function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong')
    }
}
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is round and red ?',
        answers: [
           {text: 'Apple', correct: true},
           {text: 'Banana', correct: false}

        ]
    },
    {
        question: 'What is JavaScript ?',
        answers: [
           {text: 'Song', correct: false},
           {text: 'Language', correct: true}

        ]
    },
    {
        question: 'What year are we at now ?',
        answers: [
           {text: '2021', correct: true},
           {text: '2398', correct: false}

        ]
    },
    {
        question: 'Did you like my Quiz ?',
        answers: [
           {text: 'Yes!', correct: true},
           {text: 'No', correct: false}

        ]
    }
]