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

    question: 'What is 2 * 2?',

    answers: [

      { text: '4', correct: true },

      { text: '5', correct: false }

    ]

  },

  {

    question: 'What is 2*8?',

    answers: [

      { text: '16', correct: true },

      { text: '19', correct: false}

    ]

  },

  {

    question: 'what is 6*3?',

    answers: [

      { text: '16', correct: false },

      { text: '18', correct: true }

    ]

  },

  {

    question: 'What is 4 * 2?',

    answers: [

      { text: '9', correct: false },

      { text: '8', correct: true }

    ]

  },
   {

    question: 'What is 5 * 2?',

    answers: [

      { text: '10', correct: true },

      { text: '9', correct: false }

    ]

  } ,{

    question: 'What is 7*3?',

    answers: [

      { text: '23', correct: false },

      { text: '21', correct: true }

    ]

  },{

    question: 'What is 8*4 ?',

    answers: [

      { text: '23', correct: false },

      { text: '32', correct: true }

    ]

  },{

    question: 'What is 7*5?',

    answers: [

      { text: '42', correct: false },

      { text: '35', correct: true }

    ]

  },{

    question: 'What is 6*8?',

    answers: [

      { text: '49', correct: false },

      { text: '48', correct: true }

    ]

  },{

    question: 'What is 9*8?',

    answers: [

      { text: '79', correct: false },

      { text: '72', correct: true }

    ]

  },{

    question: 'What is 7*7?',

    answers: [

      { text: '51', correct: false },

      { text: '49', correct: true }

    ]

  },{

    question: 'What is 8*8?',

    answers: [

      { text: '16', correct: false },

      { text: '64', correct: true }

    ]

  },{

    question: 'What is 9*9?',

    answers: [

      { text: '88', correct: false },

      { text: '81', correct: true }

    ]

  },{

    question: 'What is 11*4?',

    answers: [

      { text: '46', correct: false },

      { text: '44', correct: true }

    ]

  },{

    question: 'What is 11*9?',

    answers: [

      { text: '88', correct: false },

      { text: '99', correct: true }

    ]

  },{

    question: 'What is 14*5?',

    answers: [

      { text: '65', correct: false },

      { text: '70', correct: true }

    ]

  },{

    question: 'What is 18*9?',

    answers: [

      { text: '122', correct: false },

      { text: '162', correct: true }

    ]

  },{

    question: 'What is 19*12?',

    answers: [

      { text: '153', correct: false },

      { text: '148', correct: true }

    ]

  },{

    question: 'What is 19*22?',

    answers: [

      { text: '288', correct: false },

      { text: '418', correct: true }

    ]

  },{

    question: 'What is 51*23?',

    answers: [

      { text: '1234', correct: false },

      { text: '1173', correct: true }

    ]

  },{

    question: 'What is 79*33?',

    answers: [

      { text: '2594', correct: false },

      { text: '2607', correct: true }

    ]

  },{

    question: 'What is 112*46?',

    answers: [

      { text: '5153', correct: false },

      { text: '5152', correct: true }

    ]

  },{

    question: 'What is 158*56?',

    answers: [

      { text: '9803', correct: false },

      { text: '8848', correct: true }

    ]

  },{

    question: 'What is 214*87?',

    answers: [

      { text: '18303', correct: false },

      { text: '18618', correct: true }

    ]

  },{

    question: 'What is 303*99?',

    answers: [

      { text: '23405', correct: false },

      { text: '29997', correct: true }

    ]

  },{

    question: 'What is 402*119?',

    answers: [

      { text: '47838', correct: true },

      { text: '33521', correct: false }

    ]

  },{

    question: 'What is 523*321?',

    answers: [

      { text: '86756', correct: false },

      { text: '167883', correct: true }

    ]

  },{

    question: 'What is 844*450?',

    answers: [

      { text: '379800', correct: true },

      { text: '321294', correct: false }

    ]

  },{

    question: 'What is 1292*706?',

    answers: [

      { text: '911235', correct: false },

      { text: '912152', correct: true }

    ]

  },{

    question: 'What is 1998*1292?',

    answers: [

      { text: '2563445', correct: false },

      { text: '2581416', correct: true }

    ]

  },{

    question: 'What is 3290*2563?',

    answers: [

      { text: '561221', correct: false },

      { text: '843270', correct: true }

    ]

  },{

    question: 'What is 5612*5853?',

    answers: [

      { text: '32229964', correct: false },

      { text: '32847036', correct: true }

    ]

  },{

    question: 'What is 11465*9964?',

    answers: [

      { text: '112221654', correct: false },

      { text: '114237260', correct: true }

    ]

  },{

    question: 'What is 21654*21429?',

    answers: [

      { text: '485442357', correct: false },

      { text: '464023566', correct: true }

    ]

  },{

    question: 'What is 42357*43083?',

    answers: [

      { text: '1822185342', correct: false },

      { text: '1824866631', correct: true }

    ]

  },{

    question: 'What is 85342*85440 ?',

    answers: [

      { text: '7166498122', correct: false },

      { text: '7291620480', correct: true }

    ]

  },{

    question: 'What is 166498*170782?',

    answers: [

      { text: '28434342682', correct: false },

      { text: '28434861436', correct: true }

    ]

  },{

    question: 'What is 342680*337266?',

    answers: [

      { text: '115574312880', correct: true },

      { text: '118855679946', correct: false }

    ]

  }
  
  
  
  
  
  

]