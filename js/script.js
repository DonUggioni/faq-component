'use strict';

const questionEl = document.querySelectorAll('.question');
const answerEl = document.querySelectorAll('.answer');
const iconEl = document.querySelectorAll('.icon');

function removeClass() {
  for (let i = 0; i < questionEl.length; i++) {
    questionEl[i].classList.remove('question--selected');
  }
  for (let i = 0; i < questionEl.length; i++) {
    answerEl[i].classList.remove('answer--show');
  }
  for (let i = 0; i < iconEl.length; i++) {
    iconEl[i].classList.remove('icon--reverse');
  }
}

for (let i = 0; i < questionEl.length; i++) {
  questionEl[i].addEventListener('click', function () {
    removeClass();
    questionEl[i].classList.toggle('question--selected');
    answerEl[i].classList.toggle('answer--show');
    iconEl[i].classList.toggle('icon--reverse');
  });
}
