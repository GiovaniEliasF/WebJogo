const playerImage = new Image();
playerImage.src = "./Characters/Player/PlayerIdleFront.png";

function animate(){
    window.requestAnimationFrame(animate);
    ctx.drawImage(
        playerImage,
        6,
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
		default:
			break;

    }
})