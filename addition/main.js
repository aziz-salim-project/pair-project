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

    question: 'What is 2 + 2?',

    answers: [

      { text: '4', correct: true },

      { text: '5', correct: false }

    ]

  },

  {

    question: 'What is 2+8?',

    answers: [

      { text: '10', correct: true },

      { text: '9', correct: false}

    ]

  },

  {

    question: 'what is 6+3?',

    answers: [

      { text: '8', correct: false },

      { text: '9', correct: true }

    ]

  },

  {

    question: 'What is 4 + 2?',

    answers: [

      { text: '8', correct: false },

      { text: '6', correct: true }

    ]

  },
   {

    question: 'What is 5 + 2?',

    answers: [

      { text: '7', correct: true },

      { text: '9', correct: false }

    ]

  } ,{

    question: 'what is 7+2?',

    answers: [

      { text: '8', correct: false },

      { text: '9', correct: true }

    ]

  },{

    question: 'What is 5+1 ?',

    answers: [

      { text: '6', correct: true },

      { text: '7', correct: false }

    ]

  },{

    question: 'What is 3+3?',

    answers: [

      { text: '-5', correct: false },

      { text: '6', correct: true }

    ]

  },{

    question: 'What is 3+5?',

    answers: [

      { text: '9', correct: false },

      { text: '8', correct: true }

    ]

  },{

    question: 'What is 6+5?',

    answers: [

      { text: '7', correct: false },

      { text: '11', correct: true }

    ]

  },{

    question: 'What is 4+4?',

    answers: [

      { text: '5', correct: false },

      { text: '8', correct: true }

    ]

  },{

    question: 'What is 7+7?',

    answers: [

      { text: '12', correct: false },

      { text: '14', correct: true }

    ]

  },{

    question: 'What is 8+6?',

    answers: [

      { text: '18', correct: false },

      { text: '14', correct: true }

    ]

  },{

    question: 'What is 9+7?',

    answers: [

      { text: '13', correct: false },

      { text: '16', correct: true }

    ]

  },{

    question: 'What is 6+9?',

    answers: [

      { text: '12', correct: false },

      { text: '15', correct: true }

    ]

  },{

    question: 'What is 12+4?',

    answers: [

      { text: '14', correct: false },

      { text: '16', correct: true }

    ]

  },{

    question: 'What is 22+12?',

    answers: [

      { text: '33', correct: false },

      { text: '34', correct: true }

    ]

  },{

    question: 'What is 32+4?',

    answers: [

      { text: '39', correct: false },

      { text: '36', correct: true }

    ]

  },{

    question: 'What is 39+11?',

    answers: [

      { text: '48', correct: false },

      { text: '50', correct: true }

    ]

  },{

    question: 'What is 51+23?',

    answers: [

      { text: '79', correct: false },

      { text: '74', correct: true }

    ]

  },{

    question: 'What is 79+33?',

    answers: [

      { text: '94', correct: false },

      { text: '112', correct: true }

    ]

  },{

    question: 'What is 112+46?',

    answers: [

      { text: '153', correct: false },

      { text: '158', correct: true }

    ]

  },{

    question: 'What is 158+56?',

    answers: [

      { text: '203', correct: false },

      { text: '214', correct: true }

    ]

  },{

    question: 'What is 214+87?',

    answers: [

      { text: '303', correct: false },

      { text: '301', correct: true }

    ]

  },{

    question: 'What is 303+99?',

    answers: [

      { text: '405', correct: false },

      { text: '402', correct: true }

    ]

  },{

    question: 'What is 402+119?',

    answers: [

      { text: '523', correct: false },

      { text: '521', correct: true }

    ]

  },{

    question: 'What is 523+321?',

    answers: [

      { text: '756', correct: false },

      { text: '844', correct: true }

    ]

  },{

    question: 'What is 844+450?',

    answers: [

      { text: '1292', correct: false },

      { text: '1294', correct: true }

    ]

  },{

    question: 'What is 1292+706?',

    answers: [

      { text: '1980', correct: false },

      { text: '1998', correct: true }

    ]

  },{

    question: 'What is 1998+1292?',

    answers: [

      { text: '2563', correct: false },

      { text: '3290', correct: true }

    ]

  },{

    question: 'What is 3290+2563?',

    answers: [

      { text: '5612', correct: false },

      { text: '5853', correct: true }

    ]

  },{

    question: 'What is 5612+5853?',

    answers: [

      { text: '9964', correct: false },

      { text: '11465', correct: true }

    ]

  },{

    question: 'What is 11465+9964?',

    answers: [

      { text: '21654', correct: false },

      { text: '21429', correct: true }

    ]

  },{

    question: 'What is 21654+21429?',

    answers: [

      { text: '42357', correct: false },

      { text: '43083', correct: true }

    ]

  },{

    question: 'What is 42357+43083?',

    answers: [

      { text: '85342', correct: false },

      { text: '85440', correct: true }

    ]

  },{

    question: 'What is 85342+85440 ?',

    answers: [

      { text: '166498', correct: false },

      { text: '170782', correct: true }

    ]

  },{

    question: 'What is 166498+170782?',

    answers: [

      { text: '342682', correct: false },

      { text: '337280', correct: true }

    ]

  },{

    question: 'What is 342680+337266?',

    answers: [

      { text: '731423', correct: false },

      { text: '679946', correct: true }

    ]

  }
  
  
  
  
  
  

]