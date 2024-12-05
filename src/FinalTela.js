const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');


const backgroundImage = new Image();
backgroundImage.src = 'https://as1.ftcdn.net/v2/jpg/09/17/94/48/1000_F_917944861_KkzO1G2Nag1WS58igSgkFYjcLe6ntZkj.jpg';
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


backgroundImage.onload = function() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

ctx.fillStyle = 'white';
ctx.font = 'bold 64px Franchise';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle'; 
ctx.fillText('FIM DE JOGO', canvas.width / 2, 260);


// Contorno do texto
ctx.strokeStyle = 'black'; // Cor do contorno
ctx.lineWidth = 2; // Espessura do contorno
ctx.strokeText('FIM DE JOGO', canvas.width / 2, canvas.height / 2.7);

    
    // Aqui você pode chamar outras funções de renderização do jogo
    requestAnimationFrame(draw);
};

// Seleciona o elemento de áudio
const backgroundMusic = document.getElementById('background-music');
    


// Inicia a animação
draw();
