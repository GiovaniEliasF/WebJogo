const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = "./Map/MapaCompleto.png";
console.log(image);

const playerImage = new Image();
playerImage.src = "./Characters/Player/PlayerIdleFront.png";

function animate(){
    window.requestAnimationFrame(animate);
    ctx.drawImage(image, -62.5, -375);
    ctx.drawImage(
        playerImage,
        0,
        0,
        playerImage.width / 6,
        playerImage.height,
        canvas.width / 2 - (playerImage.width / 6) / 2,
        canvas.height / 2 - playerImage.height / 2,
        playerImage.width / 6,
        playerImage.height,
    );
}
animate();

window.addEventListener("keydown", (e) => {
    switch (e.key){
        case 'w':
        case 'ArrowUp':
            console.log("Andando para Cima")
            break;
        case 's':
        case 'ArrowDown':
            console.log("Andando para Baixo")
            break;
        case 'a':
        case 'ArrowLeft':
            console.log("Andando para Esquerda")
            break;
        case 'd':
        case 'ArrowRight':
            console.log("Andando para Direita")
            break;

    }
})