let questions = [
  {
    id: 1,
    question: 'What is the full form of RAM ?',
    answer: 'Random Access Memory',
    options: [
      'Random Access Memory',
      'Randomely Access Memory',
      'Run Aceapt Memory',
      'None of these',
    ],
  },

  {
    id: 2,
    question: 'What is the full form of CPU?',
    answer: 'Central Processing Unit',
    options: [
      'Central Program Unit',
      'Central Processing Unit',
      'Central Preload Unit',
      'None of these',
    ],
  },
  {
    id: 3,
    question: 'What is the full form of E-mail',
    answer: 'Electronic Mail',
    options: [
      'Electronic Mail',
      'Electric Mail',
      'Engine Mail',
      'None of these',
    ],
  },
  {
    id: 4,
    question:
      'Which of the following option leads to the portability and security of Java?',
    answer: 'Bytecode is executed by JVM',
    options: [
      'Bytecode is executed by JVM',
      'The applet makes the Java code secure and portable',
      'Use of exception handling',
      'Dynamic binding between objects',
    ],
  },

  {
    id: 5,
    question: 'Which of the following is not a Java feature?',
    answer: 'Use of pointers',
    options: [
      'Dynamic',
      'Architecture Neutral',
      'Use of pointers',
      'Object_oriented',
    ],
  },
  {
    id: 6,
    question: `The \u0021 article referred to as a`,
    answer: 'Unicode escape sequence',
    options: [
      'Octal escape',
      'Hexadecimal',
      'Unicode escape sequence',
      'None of these',
    ],
  },
  {
    id: 7,
    question: '_____ is used to find and fix bugs in the Java programs.',
    answer: 'JDB',
    options: ['JVM', 'JDB', 'JRE', 'None of these'],
  },

  {
    id: 8,
    question: 'Which of the following is a valid declaration of a char?',
    answer: "char ch = '\\utea';",
    options: [
      "char ca = 'tea';",
      "char cr = '\\u0223';",
      "char ch = '\\utea';",
      "char cc = '\\itea';",
    ],
  },
  {
    id: 9,
    question:
      ' What is the return type of the hashCode() method in the Object class?',
    answer: 'Object',
    options: ['Object', 'int', 'long', 'void'],
  },
  {
    id: 10,
    question: 'Which of the following is a valid long literal?',
    answer: '0xnf029L',
    options: ['0xnf029L', 'ABH8097', 'L990023', '904423'],
  },
];

let question_count = 0;
let points = 0;

window.onload = function () {
  show(question_count);
};
let time = 30; // timer

function next() {
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    location.href = 'end.html';
  }
  console.log(question_count);
  if (time != 0) {
    let user_answer = document.querySelector('li.option.active').innerHTML;
    // check if the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
      points += 1;
      sessionStorage.setItem('points', points);
    }
    time = 30;
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById('questions');

  question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li class="option">${questions[count].options[0]}</li>
    <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li>
  </ul> 
    `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll('li.option');
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains('active')) {
          option[i].classList.remove('active');
        }
      }
      option[i].classList.add('active');
    };
  }
}
//timer ///
let mytime = setInterval(function () {
  if (time == 0) {
    next();
    time = 30;
  }
  if (time > 0) {
    time--;
  }
  document.querySelector('span.time').innerHTML = `00 : ${time}`;
}, 1000);
