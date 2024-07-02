let colorButton = document.getElementById('color-button');
let hexCode = document.getElementById('hex-code');

colorButton.addEventListener('click', () => {
  let randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  hexCode.textContent = randomColor;
  colorButton.classList.add('wiggle'); // add wiggle animation on click
  setTimeout(() => {
    colorButton.classList.remove('wiggle'); // remove wiggle animation after 0.5s
  }, 500);
});

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
