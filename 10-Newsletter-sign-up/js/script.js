const init = () => {
  const $postFooter = document.querySelector('.post-footer');
  const $shareLink = document.querySelector('.share-link');

  $shareLink.addEventListener('click', (e) => {
    e.preventDefault();
    $postFooter.classList.toggle('show-tooltip');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.post-share')) {
      $postFooter.classList.remove('show-tooltip');
    }
  });

  document.addEventListener('keydown', (e) => {
    const keyName = e.key;
    if (keyName === 'Escape') {
      $postFooter.classList.remove('show-tooltip');
    }
  });
}

init();