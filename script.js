const card = document.querySelector('.card');
const openBtn = document.getElementById('openCardBtn');
const bgMusic = document.getElementById('bg-music');

openBtn.addEventListener('click', () => {
  card.classList.toggle('open');
  bgMusic.play();
});
