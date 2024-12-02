'use strict';

const refresh = 90;

const header = document.querySelector('.header');
const headerb = document.querySelector('.headerb');
const footer = document.querySelector('.footer');
const footerb = document.querySelector('.footerb');
const timerElement = document.getElementById('timer');

let time = refresh;

function updateTimer() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  if (time === 0) {
    toggle();
    time = refresh;
  }

  time--;
  setTimeout(updateTimer, 1000);
}

function toggle() {
  header.classList.toggle('header--hidden');
  headerb.classList.toggle('headerb--hidden');
  footer.classList.toggle('footer--hidden');
  footerb.classList.toggle('footerb--hidden');
}

updateTimer();
