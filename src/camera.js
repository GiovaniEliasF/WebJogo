// // camera.js

// let cameraX = 0;
// let cameraY = 0;
// const cameraSpeed = 5;  // A velocidade de movimento da câmera

// // Função para atualizar a posição da câmera com base no personagem
// function updateCamera(player, canvas, mapa) {
//     // Atualiza a posição da câmera para seguir o personagem
//     cameraX = player.posicao.x - canvas.width / 2;
//     cameraY = player.posicao.y - canvas.height / 2;

//     // Limita a posição da câmera dentro dos limites do mapa
//     cameraX = Math.max(0, Math.min(cameraX, mapa.width - canvas.width));
//     cameraY = Math.max(0, Math.min(cameraY, mapa.height - canvas.height));
// }

// // Função para desenhar o mapa e o personagem com base na posição da câmera
// function followPlayer(player, canvas, mapa) {
//     updateCamera(player, canvas, mapa);
// }

// export { cameraX, cameraY, updateCamera, followPlayer };
