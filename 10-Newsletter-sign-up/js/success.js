'use strict';

const $emailOutput = document.querySelector('.email-output');
const $dismissBtn = document.querySelector('.dismiss-btn');

const init = () => {
  setEmail();
  $dismissBtn.addEventListener('click', dismissSuccess);
}

const setEmail = () => {
  const storedUser = localStorage.getItem('user');
  if (!storedUser) {
    redirectToSignUp();
    return;
  }
  const { email } = JSON.parse(storedUser);
  if (!email) {
    redirectToSignUp();
    return;
  }
  $emailOutput.textContent = email;
}

const redirectToSignUp = () => {
  window.location.href = 'index.html';
}

const dismissSuccess = () => {
  localStorage.clear();
  redirectToSignUp();
}

init();