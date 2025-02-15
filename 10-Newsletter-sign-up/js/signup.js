'use strict';

const $signUpForm = document.querySelector('.sign-up-form');
const $emailInput = document.querySelector('.email');
const $emailError = document.querySelector('.email-error');

const init = () => {

  $emailInput.focus();
  $signUpForm.addEventListener('submit', submitSignUp);
}

const submitSignUp = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  const validation = validateFormData(data);
  if (validation) {
    $emailError.textContent = validation.message;
    $emailInput.classList.add('has-error');
    return;
  }

  signUp(data);
}

const validateFormData = (data) => {
  const { email } = data;
  if (!email || !email.trim() || !validateEmail(email)) {
    return {
      message: 'Valid email required.',
    };
  }
}

const validateEmail = (email) => {
  return email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const signUp = (data) => {
  const { email } = data;
  const user = {
    email,
  };
  localStorage.setItem('user', JSON.stringify(user));
  window.location.href = 'success.html';
}

init();