const startButton = document.getElementById('start-btn')

const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')

const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () => {

  currentQuestionIndex++

  setNextQuestion()

})

function startGame() {

  startButton.classList.add('hide')

  shuffledQuestions = questions.sort(() => Math.random() - .5)

  currentQuestionIndex = 0

  questionContainerElement.classList.remove('hide')

  setNextQuestion()

}

function setNextQuestion() {

  resetState()

  showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {

  questionElement.innerText = question.question

  question.answers.forEach(answer => {

    const button = document.createElement('button')

    button.innerText = answer.text

    button.classList.add('btn')

    if (answer.correct) {

      button.dataset.correct = answer.correct

    }

    button.addEventListener('click', selectAnswer)

    answerButtonsElement.appendChild(button)

  })

}

function resetState() {

  clearStatusClass(document.body)

  nextButton.classList.add('hide')

  while (answerButtonsElement.firstChild) {

    answerButtonsElement.removeChild(answerButtonsElement.firstChild)

  }

}

function selectAnswer(e) {

  const selectedButton = e.target

  const correct = selectedButton.dataset.correct

  setStatusClass(document.body, correct)

  Array.from(answerButtonsElement.children).forEach(button => {

    setStatusClass(button, button.dataset.correct)

  })

  if (shuffledQuestions.length > currentQuestionIndex + 1) {

    nextButton.classList.remove('hide')

  } else {

    startButton.innerText = 'Restart'

    startButton.classList.remove('hide')

  }

}

function setStatusClass(element, correct) {

  clearStatusClass(element)

  if (correct) {

    element.classList.add('correct')

  } else {

    element.classList.add('wrong')

  }

}

function clearStatusClass(element) {

  element.classList.remove('correct')

  element.classList.remove('wrong')

}

const questions = [

  {
    question: 'What is 4 - 2?',
    answers: [
    { text: '2', correct: true },
    { text: '6', correct: false }
    ]
},
{
    question: 'what is 3 - 1',
    answers: [
    { text: '2', correct: true },
    { text: '4', correct: false },
    ]
},
{
    question: 'what is 6 - 1 ?',
    answers: [
    { text: '5', correct: true },
    { text: '7', correct: false },
    ]
  },
  {

    question: 'What is 5 - 3?',

    answers: [
      { text: '8', correct: false },
      { text: '2', correct: true }
      ]
  },
   {

    question: 'What is 8 - 4?',

    answers: [
     { text: '4', correct: true },
     { text: '12', correct: false }
     ]
  },
  {
    question: "what is 1 - 1 ?",

      answers: [
    { text: "0" , correct:true},
    { text: "2", correct : false }
    ]
  },
  { 
    question:"what is 18 - 6 ? ",

    answers: [
   {text:'12', correct:true },
   {text:'20', correct:false} 
   ]

  },
  { 
    question:'what is 13 - 1 ?',

    answers:[
    {text:'12', correct:true},
    {text:'10', correct:false}
    ]

  },
  {
    question:'what is 16 - 2 ?',

    answers:[
    {text:'14',correct:true},
    {text:'18',correct:false}
    ]
  },
  {
    question:'what is 13 - 2 ?',
    answers:[
    {text:'11',correct:true},
    {text:'9', correct:false}
    ]
  },
  {
    question:'what is 84 - 2 ?',
    answers:[
    {text:'82',correct:true},
    {text:'100',correct:false}
    ]
  },
  {
    question:'what is 69 - 5?',

    answers:[
    {text:'64', correct:true},
    {text:'74', correct:false}
    ]
  },
  {
    question:'what is 95 -10 ?',

    answers:[
    {text:'85',correct:true},
    {text:'105',correct:false}
    ]
  },
  {
    question:'what is 90 - 40 ?',

    answers:[
    {text:'50',correct:true},
    {text:'130', correct:false}
    ]
  },
  {
    question:'what is 30 - 20 ?',

    answers:[
    {text:'10',correct:true},
    {text:'50',correct:false}
    ]
  },
  {
    question:'what 60 - 20?',

    answers:[
    {text:'40',correct:true},
    {text:'80',correct:false}
    ]
  },
  {
    question: 'what is 1200 - 200?',

    answers: [
    {text:'1000',correct:true},
    {text:'200',correct:false}
    ]
  },
  {
    question:'what is 3000-500 ?',

    answers: [
    {text:'2500',correct:true},
    {text:'3500', correct:false}
    ]
  },
   {
    question: 'What is 5000 - 2500?',
    answers: [
    { text: '2500', correct: true },
    { text: '7500', correct: false }
    ]
},
{
    question: 'what is 6000 - 3000?',
    answers: [
    { text: '3000', correct: true },
    { text: '3500', correct: false },
    ]
},
{
    question: 'what is 7500 - 3000 ?',
    answers: [
    { text: '4500', correct: true },
    { text: '4000', correct: false },
    ]
  },
  {

    question: 'What is 8000 - 7500?',

    answers: [
      { text: '400', correct: false },
      { text: '500', correct: true }
      ]
  },
   {

    question: 'What is 9500 - 500?',

    answers: [
     { text: '9000', correct: true },
     { text: '8000', correct: false }
     ]
  },
  {
    question: "what is 10000 - 2500 ?",

      answers: [
    { text: "7500" , correct:true},
    { text: "8500", correct : false }
    ]
  },
  { 
    question:"what is 15000 - 10000 ? ",

    answers: [
   {text:'5000', correct:true },
   {text:'10000', correct:false} 
   ]

  },
  { 
    question:'what is 17500 - 7500 ?',

    answers:[
    {text:'10000', correct:true},
    {text:'12000', correct:false}
    ]

  },
  {
    question:'what is 18000 - 5000 ?',

    answers:[
    {text:'13000',correct:true},
    {text:'15000',correct:false}
    ]
  },
  {
    question:'what is 20000 - 5000 ?',
    answers:[
    {text:'15000',correct:true},
    {text:'16000', correct:false}
    ]
  },
  {
    question:'what is 24000 - 4000 ?',
    answers:[
    {text:'20000',correct:true},
    {text:'19000',correct:false}
    ]
  },
  {
    question:'what is 25000 - 4500?',

    answers:[
    {text:'20500', correct:true},
    {text:'20000', correct:false}
    ]
  },
  {
    question:'what is 27500 - 500 ?',

    answers:[
    {text:'27000',correct:true},
    {text:'26000',correct:false}
    ]
  },
  {
    question:'what is 29000 - 5000 ?',

    answers:[
    {text:'24000',correct:true},
    {text:'24500', correct:false}
    ]
  },
  {
    question:'what is 30000 - 20000 ?',

    answers:[
    {text:'10000',correct:true},
    {text:'20000',correct:false}
    ]
  },
  {
    question:'what 30000 - 15000?',

    answers:[
    {text:'15000',correct:true},
    {text:'16000',correct:false}
    ]
  },
  {
    question: 'what is 35000 - 15000?',

    answers: [
    {text:'20000',correct:true},
    {text:'25000',correct:false}
    ]
  },
  {
    question:'what is 100000-100000 ?',

    answers: [
    {text:'0',correct:true},
    {text:'90000', correct:false}
    ]
  }

]