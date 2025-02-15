'use strict';


const init = async () => {
  const userData = await loadUserData();
  console.log(userData);
  initUser(userData);
}


const loadUserData = async () => {
  const response = await fetch('user_data.json');
  const userData = await response.json();
  return userData;
}

const initUser = (userData) => {
  const $userImgBox = document.querySelector('.user-img-box');
  const $userImg = document.createElement('img');
  const $userFullName = document.querySelector('.user-full-name');

  const fullName = `${userData.firstName} ${userData.lastName}`;

  $userImg.setAttribute('src', userData.imageUrl);
  $userImg.setAttribute('alt', fullName);
  $userImgBox.append($userImg);

  $userFullName.textContent = fullName;
}

init();