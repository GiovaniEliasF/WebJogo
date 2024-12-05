// Seleciona os elementos
const backgroundMusic = document.getElementById('background-music');
const playButton = document.getElementById('play-music');
const pauseButton = document.getElementById('pause-music');

// Função para tocar música
playButton.addEventListener('click', () => {
  backgroundMusic.play().then(() => {
    playButton.disabled = true; // Desativa o botão de tocar
    pauseButton.disabled = false; // Ativa o botão de pausar
  }).catch((error) => {
    console.log('Erro ao tocar a música:', error);
  });
});

// Função para pausar música
pauseButton.addEventListener('click', () => {
  backgroundMusic.pause();
  playButton.disabled = false; // Ativa o botão de tocar
  pauseButton.disabled = true; // Desativa o botão de pausar
});