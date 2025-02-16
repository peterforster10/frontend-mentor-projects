'use strict';

const state = {
  currentPeriod: 'weekly',
};

const periodLabels = {
  daily: 'Day',
  weekly: 'Week',
  monthly: 'Month',
}

const init = async () => {
  initPeriodNav();
  await initUser();
  await initTimeFrameCards();
}

const initPeriodNav = () => {
  const $periodNavLinks = document.querySelectorAll('.period-nav .nav-link');
  for (const $navLink of $periodNavLinks) {
    $navLink.addEventListener('click', handleNavClick);
  }
}

const handleNavClick = async (e) => {
  e.preventDefault();
  const $navLink = e.target;
  const newPeriod = $navLink.dataset.period;
  state.currentPeriod = newPeriod;
  updatePeriodNav();
  await initTimeFrameCards();
}

const updatePeriodNav = () => {
  const $periodNavLinks = document.querySelectorAll('.period-nav .nav-link');
  for (const $navLink of $periodNavLinks) {
    $navLink.classList.remove('active');
    if ($navLink.dataset.period === state.currentPeriod) {
      $navLink.classList.add('active');
    }
  }
}

const initUser = async () => {

  const userData = await loadUserData();
  console.log(userData);
  updateUser(userData);
}

const loadUserData = async () => {
  const response = await fetch('user_data.json');
  const userData = await response.json();
  return userData;
}

const updateUser = (userData) => {
  const $userImgBox = document.querySelector('.user-img-box');
  const $userImg = document.createElement('img');
  const $userFullName = document.querySelector('.user-full-name');

  const fullName = `${userData.firstName} ${userData.lastName}`;

  $userImg.setAttribute('src', userData.imageUrl);
  $userImg.setAttribute('alt', fullName);
  $userImg.classList.add('user-img')
  $userImgBox.append($userImg);

  $userFullName.textContent = fullName;
}

const initTimeFrameCards = async () => {
  const timeFrameData = await loadTimeframeData();
  console.log(timeFrameData);
  if (timeFrameData) {
    for (const timeFrameItem of timeFrameData) {
      updateTimeFrameCard(timeFrameItem);
    }
  }
}

const loadTimeframeData = async () => {
  const response = await fetch('timeframe_data.json');
  const timeFrameData = await response.json();
  return timeFrameData;
}

const updateTimeFrameCard = (timeFrameItem) => {
  const { title } = timeFrameItem;
  const cardTitle = title.toLowerCase().replace(' ', '-');
  
  const $card = document.querySelector(`.${cardTitle}-card`);
  const $cardHours = $card.querySelector('.card-hours');
  const $lastPeriod = $card.querySelector('.last-period');


  const timeFrame = timeFrameItem.timeframes[state.currentPeriod];

  $cardHours.textContent = `${timeFrame.current} hrs`;
  $lastPeriod.textContent = `Last ${periodLabels[state.currentPeriod]} - ${timeFrame.previous} hrs`;
}

init();