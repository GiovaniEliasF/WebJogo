// import { BAIXO, CIMA, DIREITA, ESQUERDA, Input } from "../../Input.js";
// import { recursos } from "../../Resources.js";
// import { Sprite } from "../../Sprites.js";
// import { Vector2 } from "../../Vector2.js";
// import { GameLoop } from "../../gameLoop.js";
// import { gridCelss } from "../../helpers/grid.js"
// import { direcaoMovimento } from "../../helpers/moveTowards.js";
// import { espacoLivre } from "../../helpers/grid.js";
// import { paredes } from "../../levels/level1.js";
// import { FrameIndexPattern } from "../../frameIndexPattern.js";
// import { ANDANDO_BAIXO, ANDANDO_CIMA, ANDANDO_DIREITA, ANDANDO_ESQUERDA } from "./playerAnimations.js";
// import { PARADO_CIMA,PARADO_DIREITA,PARADO_ESQUERDA,PARADO_BAIXO } from "./playerAnimations.js";
// import { Animacoes } from "../../Animations.js";
// import { GameObject } from "../../gameObjects.js";


// export class Player extends GameObject {
//     constructor(x, y) {
//         super({
//             posicao: new Vector2(x, y)
//         });  

//         this.corpo = new Sprite({
//             recurso: recursos.imagens.player.img,
//             tamFrame: new Vector2(48,48),
//             hFrames: 6,
//             vFrames: 13,
//             frame:0,
//             posicao: new Vector2(gridCelss(37), gridCelss(13)),
//             animacoes: new Animacoes({
//                 andarCima: new FrameIndexPattern(ANDANDO_CIMA),
//                 andarBaixo: new FrameIndexPattern(ANDANDO_BAIXO),
//                 andarDireita: new FrameIndexPattern(ANDANDO_DIREITA),
//                 andarEsquerda: new FrameIndexPattern(ANDANDO_ESQUERDA),
//                 paradoCima: new FrameIndexPattern(PARADO_CIMA),
//                 paradoBaixo: new FrameIndexPattern(PARADO_BAIXO),
//                 paradoDireita: new FrameIndexPattern(PARADO_DIREITA),
//                 paradoEsquerda: new FrameIndexPattern(PARADO_ESQUERDA),
//             })
//         })

//         this.children.push(this.corpo);

//         this.direcaoOlhar = BAIXO;
//         this.posicaoDestino = this.posicao.duplicar()
//     }
    
    
    
//     step(delta, root) {
//         const distancia = direcaoMovimento(this, this.posicaoDestino, 1);
//     const chegou = distancia <= 1;
//     if (chegou){
//         this.tentarMover(root)
//     }
//     console.log(this.posicao);
    
//     }
    
//     tentarMover(root) {
//         const input = root;

//         if(!input.direcao){
//             if(this.direcaoOlhar === BAIXO) {this.corpo.animacoes.play("paradoBaixo")}
//             if(this.direcaoOlhar === DIREITA) {this.corpo.animacoes.play("paradoDireita")}
//             if(this.direcaoOlhar === ESQUERDA) {this.corpo.animacoes.play("paradoEsquerda")}
//             if(this.direcaoOlhar === CIMA) {this.corpo.animacoes.play("paradoCima")}
//             return;
//         }
    
//         let proximoY = this.posicaoDestino  .y;
//         let proximoX = this.posicaoDestino  .x;
        
//         const tamGrade = canvas.width/70;
    
//         if (input.direcao == BAIXO){
//             proximoY += tamGrade;
//             this.corpo.animacoes.play("andarBaixo");
//         }
//         if (input.direcao == CIMA){
//             proximoY -= tamGrade;
//             this.corpo.animacoes.play("andarCima");
//         }
//         if (input.direcao == DIREITA){
//             proximoX += tamGrade;
//             this.corpo.animacoes.play("andarDireita");
//         }
//         if (input.direcao == ESQUERDA){
//             proximoX -= tamGrade;
//             this.corpo.animacoes.play("andarEsquerda");
//         }
//         this.direcaoOlhar = input.direcao ?? this.direcaoOlhar;
        
//         //testando para onde o player está indo
//         //const proximaPosicao = `${Math.round(proximoX)},${Math.round(proximoY)}`;
//         //console.log(`Tentando mover para: ${proximaPosicao}`);
    
//         //resposta do chat
//         // if (espacoLivre(walls, proximoX, proximoY)) {
//         //     this.posicaoDestino  .x = proximoX;
//         //     this.posicaoDestino  .y = proximoY;
//         //     console.log("Movimento permitido");
//         // } else {
//         //     console.log("Colidiu");
//         // }
    
    
//         //testa se a proxima posição é livre
//         if (espacoLivre(paredes, proximoX, proximoY)) {
//             this.posicaoDestino .x = proximoX;
//             this.posicaoDestino .y = proximoY;
//             console.log("Movimento Permitido")
//         } else {
//             console.log ("Colidiu")
//         }
//     }
// }