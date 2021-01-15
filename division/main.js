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

    question: 'What is 2 /2?',

    answers: [

      { text: '1', correct: true },

      { text: '2', correct: false }

    ]

  },

  {

    question: 'What is 8/2?',

    answers: [

      { text: '4', correct: true },

      { text: '5', correct: false}

    ]

  },

  {

    question: 'what is 6/3?',

    answers: [

      { text: '8', correct: false },

      { text: '2', correct: true }

    ]

  },

  {

    question: 'What is 4 / 2?',

    answers: [

      { text: '8', correct: false },

      { text: '2', correct: true }

    ]

  },
   {

    question: 'What is 5 / 2?',

    answers: [

      { text: '2.5', correct: true },

      { text: '1.5', correct: false }

    ]

  } ,{

    question: 'what is 7/2?',

    answers: [

      { text: '8', correct: false },

      { text: '3.5', correct: true }

    ]

  },{

    question: 'What is 5/1 ?',

    answers: [

      { text: '5', correct: true },

      { text: '6', correct: false }

    ]

  },{

    question: 'What is 3/3?',

    answers: [

      { text: '5', correct: false },

      { text: '1', correct: true }

    ]

  },{

    question: 'What is 15/5?',

    answers: [

      { text: '9', correct: false },

      { text: '3', correct: true }

    ]

  },{

    question: 'What is 10/5?',

    answers: [

      { text: '7', correct: false },

      { text: '2', correct: true }

    ]

  },{

    question: 'What is 14/2?',

    answers: [

      { text: '5', correct: false },

      { text: '7', correct: true }

    ]

  },{

    question: 'What is 18/2?',

    answers: [

      { text: '12', correct: false },

      { text: '9', correct: true }

    ]

  },{

    question: 'What is 18/6?',

    answers: [

      { text: '18', correct: false },

      { text: '3', correct: true }

    ]

  },{

    question: 'What is 21/7?',

    answers: [

      { text: '13', correct: false },

      { text: '3', correct: true }

    ]

  },{

    question: 'What is 9/3?',

    answers: [

      { text: '2', correct: false },

      { text: '3', correct: true }

    ]

  },{

    question: 'What is 12/4?',

    answers: [

      { text: '14', correct: false },

      { text: '3', correct: true }

    ]

  },{

    question: 'What is 24/12?',

    answers: [

      { text: '33', correct: false },

      { text: '2', correct: true }

    ]

  },{

    question: 'What is 32/4?',

    answers: [

      { text: '39', correct: false },

      { text: '8', correct: true }

    ]

  },{

    question: 'What is 33/11?',

    answers: [

      { text: '48', correct: false },

      { text: '3', correct: true }

    ]

  },{

    question: 'What is 51/10?',

    answers: [

      { text: '79', correct: false },

      { text: '5.1', correct: true }

    ]

  },{

    question: 'What is 165/33?',

    answers: [

      { text: '9', correct: false },

      { text: '5', correct: true }

    ]

  },{

    question: 'What is 368/46?',

    answers: [

      { text: '153', correct: false },

      { text: '8', correct: true }

    ]

  },{

    question: 'What is 495/45?',

    answers: [

      { text: '12', correct: false },

      { text: '11', correct: true }

    ]

  },{

    question: 'What is 1218/87?',

    answers: [

      { text: '13', correct: false },

      { text: '14', correct: true }

    ]

  },{

    question: 'What is 1287/99?',

    answers: [

      { text: '14', correct: false },

      { text: '13', correct: true }

    ]

  },{

    question: 'What is 1666/119?',

    answers: [

      { text: '15', correct: false },

      { text: '14', correct: true }

    ]

  },{

    question: 'What is 1800/15?',

    answers: [

      { text: '220', correct: false },

      { text: '120', correct: true }

    ]

  },{

    question: 'What is 2160/120',

    answers: [

      { text: '19', correct: false },

      { text: '18', correct: true }

    ]

  },{

    question: 'What is 4096/16?',

    answers: [

      { text: '32', correct: false },

      { text: '256', correct: true }

    ]

  },{

    question: 'What is 8192/32?',

    answers: [

      { text: '16384', correct: false },

      { text: '256', correct: true }

    ]

  },{

    question: 'What is 16384/32?',

    answers: [

      { text: '522', correct: false },

      { text: '512', correct: true }

    ]

  },{

    question: 'What is 32768/32?',

    answers: [

      { text: '1022', correct: false },

      { text: '1024', correct: true }

    ]

  },{

    question: 'What is 65536/32?',

    answers: [

      { text: '2165', correct: false },

      { text: '2048', correct: true }

    ]

  },{

    question: 'What is 131072/32?',

    answers: [

      { text: '4357', correct: false },

      { text: '4096', correct: true }

    ]

  },{

    question: 'What is 262144/32?',

    answers: [

      { text: '9825', correct: false },

      { text: '8192', correct: true }

    ]

  },{

    question: 'What is 524288/32 ?',

    answers: [

      { text: '16498', correct: false },

      { text: '16384', correct: true }

    ]

  },{

    question: 'What is 1048576/32?',

    answers: [

      { text: '34262', correct: false },

      { text: '32768', correct: true }

    ]

  },{

    question: 'What is 2097152/64?',

    answers: [

      { text: '33856', correct: false },

      { text: '32768', correct: true }

    ]

  }
  
  
  
  
  
  

]