'use strict';

const questionEl = document.querySelectorAll('.question');
const answerEl = document.querySelectorAll('.answer');
const iconEl = document.querySelectorAll('.icon');
const illustrationDesktop = document.querySelector('.illustration-desktop');
const illustrationMobile = document.querySelector('.illustration-mobile');

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

window.addEventListener('resize', function () {
  if (this.window.innerWidth <= 864) {
    illustrationDesktop.classList.add('illustration--invisible');
    illustrationMobile.classList.remove('illustration--invisible');
  } else {
    illustrationDesktop.classList.remove('illustration--invisible');
    illustrationMobile.classList.add('illustration--invisible');
  }
});
