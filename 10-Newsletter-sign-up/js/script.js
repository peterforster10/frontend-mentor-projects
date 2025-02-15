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

  try {
    validateFormData(data);
    signUp(data);
  } catch (e) {
    $emailError.textContent = e.message;
    $emailInput.classList.add('has-error');
  }
}

const validateFormData = (data) => {
  const { email } = data;
  if (!email || !email.trim() || !validateEmail(email)) {
    throw new Error('Valid email required.');
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

}

init();