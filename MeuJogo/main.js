import { BAIXO, CIMA, DIREITA, ESQUERDA,ATACAR, Input, INTERAGIR } from "../src/Input.js";
import { recursos } from "../src/Resources.js";
import { Sprite } from "../src/Sprites.js";
import { Vector2 } from "../src/Vector2.js";
import { GameLoop } from "../src/gameLoop.js";
import { gridCelss } from "../src/helpers/grid.js";
import { direcaoMovimento } from "../src/helpers/moveTowards.js";
import { espacoLivre } from "../src/helpers/grid.js";
import { paredes } from "../src/levels/level1.js";
import { FrameIndexPattern } from "../src/frameIndexPattern.js";
import { ANDANDO_BAIXO, ANDANDO_CIMA, ANDANDO_DIREITA, ANDANDO_ESQUERDA } from "../src/Objects/Player/playerAnimations.js";
import { PARADO_CIMA,PARADO_DIREITA,PARADO_ESQUERDA,PARADO_BAIXO } from "../src/Objects/Player/playerAnimations.js";
import { ATACANDO_CIMA,ATACANDO_DIREITA,ATACANDO_ESQUERDA,ATACANDO_BAIXO } from "../src/Objects/Player/playerAnimations.js";
import { Animacoes } from "../src/Animations.js";
import { npcs } from "./npc.js";
//import { cameraX, cameraY, updateCamera, followPlayer } from "../src/camera.js";

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");


canvas.width = 1680;
canvas.height = 960;

const mapaSprite = new Sprite({
    recurso: recursos.imagens.mapa,
    tamFrame: new Vector2(canvas.width,canvas.height)
})

const playerSprite = new Sprite({
    recurso: recursos.imagens.player,
    tamFrame: new Vector2(48,48),
    hFrames: 6,
    vFrames: 13,
    frame:0,
    posicao: new Vector2(gridCelss(37), gridCelss(13)),
    animacoes: new Animacoes({
        andarCima: new FrameIndexPattern(ANDANDO_CIMA),
        andarBaixo: new FrameIndexPattern(ANDANDO_BAIXO),
        andarDireita: new FrameIndexPattern(ANDANDO_DIREITA),
        andarEsquerda: new FrameIndexPattern(ANDANDO_ESQUERDA),
        paradoCima: new FrameIndexPattern(PARADO_CIMA),
        paradoBaixo: new FrameIndexPattern(PARADO_BAIXO),
        paradoDireita: new FrameIndexPattern(PARADO_DIREITA),
        paradoEsquerda: new FrameIndexPattern(PARADO_ESQUERDA),
        atacandoCima: new FrameIndexPattern(ATACANDO_CIMA),
        atacandoBaixo: new FrameIndexPattern(ATACANDO_BAIXO),
        atacandoDireita: new FrameIndexPattern(ATACANDO_DIREITA),
        atacandoEsquerda: new FrameIndexPattern(ATACANDO_ESQUERDA),
    })
})


const npcSprite = new Sprite({
    recurso: recursos.imagens.player,  // Imagem do NPC
    tamFrame: new Vector2(48, 48), // Tamanho do sprite do NPC
    hFrames: 6,                    // Número de frames horizontais
    vFrames: 1,                    // Número de frames verticais (se o NPC tiver animações diferentes)
    frame: 0,
    posicao: new Vector2(gridCelss(14), gridCelss(24)),  // Posição inicial do NPC
    animacoes: new Animacoes({
        parado: new FrameIndexPattern([0])  // Animação de estar parado
    })
});

const verificarInteracaoComNpc = () => {
    const distancia = Math.hypot(playerSprite.posicao.x - npcSprite.posicao.x, playerSprite.posicao.y - npcSprite.posicao.y);
    
    if (distancia < 50 && input.interagir) { 
        // Se a distância entre o jogador e o NPC for menor que 50 pixels
        // Adicione lógica para mostrar uma caixa de diálogo ou outras interações aqui
        console.log("estou interagindo");
    }
};


const posicaoDestinoPlayer = playerSprite.posicao.duplicar();
let direcaoPlayer = BAIXO;
    
// Criação do inimigo
const enemieSprite = new Sprite({
    recurso: recursos.imagens.player, // Reutilizando o recurso do player como exemplo
    tamFrame: new Vector2(48, 48),
    hFrames: 6,
    vFrames: 13,
    frame: 0,
    posicao: new Vector2(gridCelss(30), gridCelss(10)), // Posição inicial
    animacoes: new Animacoes({
        andarCima: new FrameIndexPattern(ANDANDO_CIMA),
        andarBaixo: new FrameIndexPattern(ANDANDO_BAIXO),
        andarDireita: new FrameIndexPattern(ANDANDO_DIREITA),
        andarEsquerda: new FrameIndexPattern(ANDANDO_ESQUERDA),
        paradoCima: new FrameIndexPattern(PARADO_CIMA),
        paradoBaixo: new FrameIndexPattern(PARADO_BAIXO),
        paradoDireita: new FrameIndexPattern(PARADO_DIREITA),
        paradoEsquerda: new FrameIndexPattern(PARADO_ESQUERDA),
    }),
});

// Destino inicial do inimigo
const posicaoDestinoEnemie = enemieSprite.posicao.duplicar();
let direcaoEnemie = BAIXO;


// Função de atualização para movimentação automática do inimigo
const moverEnemie = (delta) => {
    const distancia = direcaoMovimento(enemieSprite, posicaoDestinoEnemie, 1);
    const chegou = distancia <= 1;

    if (chegou) {
        // Define uma nova posição aleatória na grade como destino
        definirNovoDestinoEnemie();
    }
    
    enemieSprite.passo(delta);
};

// Define um novo destino na grade para o inimigo
const definirNovoDestinoEnemie = () => {
    const tamGrade = canvas.width / 70;

    let proximoX = posicaoDestinoEnemie.x;
    let proximoY = posicaoDestinoEnemie.y;
    // Inimigo movendo Aleatoriamente
    const direcaoAleatoria = Math.floor(Math.random() * 4);
    if (direcaoAleatoria === 0) {
        proximoY -= tamGrade; // Cima
        enemieSprite.animacoes.play("andarCima");
    } else if (direcaoAleatoria === 1) {
        proximoY += tamGrade; // Baixo
        enemieSprite.animacoes.play("andarBaixo");
    } else if (direcaoAleatoria === 2) {
        proximoX -= tamGrade; // Esquerda
        enemieSprite.animacoes.play("andarEsquerda");
    } else if (direcaoAleatoria === 3) {
        proximoX += tamGrade; // Direita
        enemieSprite.animacoes.play("andarDireita");
    }
    
    
    // Verifica se o próximo movimento é permitido (sem colidir com paredes)
    if (espacoLivre(paredes, proximoX, proximoY)) {
        posicaoDestinoEnemie.x = proximoX;
        posicaoDestinoEnemie.y = proximoY;
    };
}
//fim enemie

const input = new Input();

const update = (delta) => {
    const distancia = direcaoMovimento(playerSprite, posicaoDestinoPlayer, 1);
    const chegou = distancia <= 1;
    if (chegou){
        tentarMover()
    }
    console.log(playerSprite.posicao);
    
    //Aqui funciona as animações
    playerSprite.passo(delta);

    verificarInteracaoComNpc();

     // Atualiza o movimento do inimigo
     moverEnemie(delta);
     
     // Verifica se a tecla de ataque foi pressionada
    npcs.forEach(npc => {
         verificarInteracaoComNpc(playerSprite, npc);
    });

}

const tentarMover = () => {

    if(!input.direcao){
        if(direcaoPlayer === BAIXO) {playerSprite.animacoes.play("paradoBaixo")}
        if(direcaoPlayer === DIREITA) {playerSprite.animacoes.play("paradoDireita")}
        if(direcaoPlayer === ESQUERDA) {playerSprite.animacoes.play("paradoEsquerda")}
        if(direcaoPlayer === CIMA) {playerSprite.animacoes.play("paradoCima")}
        if (direcaoPlayer === ATACAR) {
            realizarAtaque(); // Chama a função de ataque
        }
        return;
    }

    let proximoY = posicaoDestinoPlayer.y;
    let proximoX = posicaoDestinoPlayer.x;
    
    const tamGrade = canvas.width/70;

    if (input.direcao == BAIXO){
        proximoY += tamGrade;
        playerSprite.animacoes.play("andarBaixo");
    }
    if (input.direcao == CIMA){
        proximoY -= tamGrade;
        playerSprite.animacoes.play("andarCima");
    }
    if (input.direcao == DIREITA){
        proximoX += tamGrade;
        playerSprite.animacoes.play("andarDireita");
    }
    if (input.direcao == ESQUERDA){
        proximoX -= tamGrade;
        playerSprite.animacoes.play("andarEsquerda");
    }
    direcaoPlayer = input.direcao ?? direcaoPlayer;
    

    const realizarAtaque = () => {
        // Verifica a direção atual e executa a animação correspondente de ataque
        if (direcaoPlayer === BAIXO) {
            playerSprite.animacoes.play("atacandoBaixo");
        } else if (direcaoPlayer === CIMA) {
            playerSprite.animacoes.play("atacandoCima");
        } else if (direcaoPlayer === DIREITA) {
            playerSprite.animacoes.play("atacandoDireita");
        } else if (direcaoPlayer === ESQUERDA) {
            playerSprite.animacoes.play("atacandoEsquerda");
        }
    };
    
    //testa se a proxima posição é livre
    if (espacoLivre(paredes, proximoX, proximoY)) {
        posicaoDestinoPlayer.x = proximoX;
        posicaoDestinoPlayer.y = proximoY;
        console.log("Movimento Permitido")
    } else {
        console.log ("Colidiu")
    }
    
   
}

const desenhar = () => {

    
    mapaSprite.desenharImagem(ctx, 0, 0);

    //Centralizar Player em Celulas
    const deslocamentoPlayer = new Vector2 (-8,-21);
    const posPlayerX = playerSprite.posicao.x+1+deslocamentoPlayer.x;
    const posPlayerY = playerSprite.posicao.y+1+deslocamentoPlayer.y;

    npcSprite.desenharImagem(ctx, npcSprite.posicao.x, npcSprite.posicao.y);
    playerSprite.desenharImagem(ctx,posPlayerX, posPlayerY);
    //console.log(mapaSprite.desenharImagem.ctx, x, y);

     // Centralizar Enemy em Células
     const deslocamentoEnemie = new Vector2(-8, -21);
     const posEnemieX = enemieSprite.posicao.x + 1 + deslocamentoEnemie.x;
     const posEnemieY = enemieSprite.posicao.y + 1 + deslocamentoEnemie.y;
 
     enemieSprite.desenharImagem(ctx, posEnemieX, posEnemieY);

    
}


const gameLoop = new GameLoop(update, desenhar);
gameLoop.start();

