const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');


const backgroundImage = new Image();
backgroundImage.src = 'https://as2.ftcdn.net/v2/jpg/09/07/37/41/1000_F_907374104_gPMnUbmeJYOiKW2cHVjJgBLOicLo6KLK.jpg';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Função de exemplo para iniciar o jogo
function startGame() {
    console.log('Jogo iniciado!');
    // Adicione a lógica de inicialização do jogo aqui
}


document.getElementById('startButton').addEventListener('click', startGame);

const gameContainer = document.getElementById("gameContainer");

document.getElementById('closeTabButton').addEventListener('click', function () {
    window.close();
  });


  
  document.getElementById('startButton').addEventListener('click', () => {
    window.location.href = '../MeuJogo/index.html'; // Substitua pelo caminho do seu arquivo HTML
  });

backgroundImage.onload = function() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

ctx.fillStyle = 'white';
ctx.font = 'bold 64px Franchise';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle'; 
ctx.fillText('AVENTURAS', canvas.width / 2, 260);
ctx.fillText('DO', canvas.width / 2, 318);
ctx.fillText('JÓSE', canvas.width / 2,  387);

// Contorno do texto
ctx.strokeStyle = 'black'; // Cor do contorno
ctx.lineWidth = 2; // Espessura do contorno
ctx.strokeText('AVENTURAS', canvas.width / 2, canvas.height / 2.7);
ctx.strokeText('DO', canvas.width / 2, canvas.height / 2.2);
ctx.strokeText('JÓSE', canvas.width / 2, canvas.height / 1.8);

    
    // Aqui você pode chamar outras funções de renderização do jogo
    requestAnimationFrame(draw);
};

// Seleciona o elemento de áudio
const backgroundMusic = document.getElementById('background-music');
    
// Seleciona os botões
const playButton = document.getElementById('play-music');
const pauseButton = document.getElementById('pause-music');

// Função para tocar música
playButton.addEventListener('click', () => {
  backgroundMusic.play().then(() => {
    playButton.disabled = true; // Desativa o botão "Tocar"
    pauseButton.disabled = false; // Ativa o botão "Pausar"
  }).catch((error) => {
    console.log('Erro ao tocar música:', error);
  });
});

// Função para pausar música
pauseButton.addEventListener('click', () => {
  backgroundMusic.pause();
  playButton.disabled = false; // Ativa o botão "Tocar"
  pauseButton.disabled = true; // Desativa o botão "Pausar"
});


// Inicia a animação
draw();
