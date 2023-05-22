const movingButton = document.getElementById('moving-button');

movingButton.addEventListener('click', () => {
  const containerWidth = document.querySelector('.container').offsetWidth - movingButton.offsetWidth;
  const containerHeight = document.querySelector('.container').offsetHeight - movingButton.offsetHeight;

  const x = Math.floor(Math.random() * containerWidth);
  const y = Math.floor(Math.random() * containerHeight);

  movingButton.style.transform = `translate(${x}px, ${y}px)`;
});
