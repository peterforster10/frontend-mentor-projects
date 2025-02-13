const init = () => {
  const $shareLink = document.querySelector('.share-link');
  const $shareTooltip = document.querySelector('.share-tooltip');

  $shareLink.addEventListener('click', (e) => {
    e.preventDefault();
    $shareTooltip.classList.toggle('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.post-share')) {
      $shareTooltip.classList.add('hidden');
    }
  });

  document.addEventListener('keydown', (e) => {
    const keyName = e.key;
    if (keyName === 'Escape') {
      $shareTooltip.classList.add('hidden');
    }
  });
}

init();