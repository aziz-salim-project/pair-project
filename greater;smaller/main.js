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

    question: 'Which is bigger 6 or 4?',

    answers: [

      { text: '4', correct: true },

      { text: '6', correct: false }

    ]

  },

  {

    question: 'Which is bigger 6 or 11??',

    answers: [

      { text: '11', correct: true },

      { text: '6', correct: false}

    ]

  },

  {

    question: 'Which is bigger 13 or 18??',

    answers: [

      { text: '13', correct: false },

      { text: '18', correct: true }

    ]

  },

  {

    question: 'Which is bigger 6 or 12??',

    answers: [

      { text: '6', correct: false },

      { text: '12', correct: true }

    ]

  },
   {

    question: 'Which is bigger 26 or 12?',

    answers: [

      { text: '26', correct: true },

      { text: '12', correct: false }

    ]

  } ,{

    question: 'Which is bigger 32 or 22?',

    answers: [

      { text: '22', correct: false },

      { text: '32', correct: true }

    ]

  },{

    question: 'Which is bigger 34 or 42?',

    answers: [

      { text: '42', correct: true },

      { text: '32', correct: false }

    ]

  },{

    question: 'Which is bigger 100 or 92?',

    answers: [

      { text: '92', correct: false },

      { text: '100', correct: true }

    ]

  },{

    question: 'Which is smaller 100 or 92?',

    answers: [

      { text: '100', correct: false },

      { text: '92', correct: true }

    ]

  },{

    question: 'Which is smaller 100 or 88?',

    answers: [

      { text: '100', correct: false },

      { text: '88', correct: true }

    ]

  },{

    question: 'Which is smaller -2 or -1',

    answers: [

      { text: '-1', correct: false },

      { text: '-2', correct: true }

    ]

  },{

    question: 'Which is smaller -8 or -21?',

    answers: [

      { text: '-8', correct: false },

      { text: '-21', correct: true }

    ]

  },{

    question: 'Which is smaller -2 or -9/3?',

    answers: [

      { text: '-2', correct: false },

      { text: '-9/3', correct: true }

    ]

  },{

    question: 'Which is smaller -27 or -100/4?',

    answers: [

      { text: '-100/4', correct: false },

      { text: '-27', correct: true }

    ]

  },{

    question: 'Which is smaller -5/2 or -4/2?',

    answers: [

      { text: '-4/2', correct: false },

      { text: '-5/2', correct: true }

    ]

  },{

    question: 'Which is smaller -14 or -8/2?',

    answers: [

      { text: '-8/2', correct: false },

      { text: '-14', correct: true }

    ]

  },{

    question: 'Which is smaller -32 or -21?',

    answers: [

      { text: '-21', correct: false },

      { text: '-32', correct: true }

    ]

  },{

    question: 'Which is smaller -48 or -92?',

    answers: [

      { text: '-48', correct: false },

      { text: '-92', correct: true }

    ]

  },{

    question: 'Which is smaller -142/2 or -77?',

    answers: [

      { text: '-142/2', correct: false },

      { text: '-77', correct: true }

    ]

  },{

    question: 'Which is smaller -122 or -123?',

    answers: [

      { text: '-122', correct: false },

      { text: '-123', correct: true }

    ]

  },{

    question: 'Which is smaller -3/2 or -1.75?',

    answers: [

      { text: '-3/2', correct: false },

      { text: '-1.75', correct: true }

    ]

  },{

    question: 'Which is smaller -35/5 or -24/6?',

    answers: [

      { text: '-24/6', correct: false },

      { text: '-35/5', correct: true }

    ]

  },{

    question: 'Which is smaller -6 or -14/2?',

    answers: [

      { text: '-6', correct: false },

      { text: '-14/2', correct: true }

    ]

  },{

    question: 'Which is smaller 100 or 80?',

    answers: [

      { text: '100', correct: false },

      { text: '80', correct: true }

    ]

  },{

    question: 'are 35/5 = 49/7 ?',

    answers: [

      { text: 'no', correct: false },

      { text: 'yes', correct: true }

    ]

  },{

    question: 'are 81/9 = 54/6 ?',

    answers: [

      { text: 'no', correct: false },

      { text: 'yes', correct: true }

    ]

  },{

    question: 'are 90/10 = 99/11?',

    answers: [

      { text: 'no', correct: false },

      { text: 'yes', correct: true }

    ]

  },{

    question: 'are 80/5 = 65/2?',

    answers: [

      { text: 'yes', correct: false },

      { text: 'no', correct: true }

    ]

  },{

    question: 'are 65/4 = 62/4?',

    answers: [

      { text: 'yes', correct: false },

      { text: 'no', correct: true }

    ]

  },{

    question: 'are 32/4 = 29/3?',

    answers: [

      { text: 'yes', correct: false },

      { text: 'no', correct: true }

    ]

  },{

    question: 'are 28/7 =32/8?',

    answers: [

      { text: 'no', correct: false },

      { text: 'yes', correct: true }

    ]

  }
    ]

  
  
  
  
  
  
  

