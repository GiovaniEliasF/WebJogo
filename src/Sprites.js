import {Vector2} from "./Vector2.js";
//import { GameObject } from "./gameObjects.js";

export class Sprite {
	constructor({
		recurso, //Imagem que será carregada
		tamFrame, //Tamanho do corte da imagem
		hFrames, //Quantidade de frames horizontais
		vFrames, //Quantidade de frames verticais
		frame, //Qual frame que será desenhado
		escala, //Tamanho da escala da imagem
		posicao, //Posição que será desenhada a imagem (Borda Superior Esquerda)
		animacoes,
	}) {
		

		this.recurso = recurso;
		this.tamFrame = tamFrame?? new Vector2(16,16);
		this.hFrames = hFrames?? 1;
		this.vFrames = vFrames?? 1;
		this.frame = frame ?? 0;
        this.mapaFrames = new Map();
		this.escala = escala ?? 1;
		this.posicao = posicao ?? new Vector2(0,0);
		this.animacoes = animacoes ?? null;
        this.construirMapaFrame();
        this.desenharImagem();
	}
    
	construirMapaFrame() {
		let contarFrame = 0;
		for (let v = 0; v < this.vFrames; v++) {
			for (let h = 0; h < this.hFrames; h++) {
				this.mapaFrames.set(
					contarFrame,
					new Vector2(this.tamFrame.x * h, this.tamFrame.y * v)
				);
				contarFrame++;
			}
		}
	}
	
	passo(delta){
		if (!this.animacoes){
			return;
		}
		this.animacoes.passo(delta);
		this.frame = this.animacoes.frame;
		//console.log("atualizando frames")
	}

	desenharImagem(ctx, x, y){
		if (!this.recurso.estaCarregado){
			return;
		}
		//Procurar o Sprite correto no Mapa de Sprites
		let frameCoordX = 0;
		let frameCoordY = 0;
		const frame = this.mapaFrames.get(this.frame);
		if (frame){
			frameCoordX = frame.x;
			frameCoordY = frame.y;
		}
		const tamFrameX = this.tamFrame.x;
		const tamFrameY = this.tamFrame.y;
		
		ctx.drawImage(
			this.recurso.img,
			frameCoordX, //Canto Superior X do Frame
			frameCoordY, //Canto Superior Y do Frame
			tamFrameX, //Quanto cortar do mapa de sprite (X)
			tamFrameY, //Quanto cortar do mapa de sprite (Y)
			x, //Onde será desenhado no Canvas (X)
			y, //Onde será desenhado no Canvas (Y)
            tamFrameX * this.escala, //Quanto será Escalado
			tamFrameY * this.escala, //Quanto será Escalado
		)
	}	
}

	// sprite.js (ajuste do construirMapaFrame e desenharImagem)
	// *resposta do chat*
	/*
	desenharImagem(ctx, x, y) {
		if (!this.recurso.estaCarregado) {
			return;
		}
	
		const frame = this.mapaFrames.get(this.frame) ?? new Vector2(0, 0);
		const { x: frameCoordX, y: frameCoordY } = frame;
	
		const tamFrameX = this.tamFrame.x;
		const tamFrameY = this.tamFrame.y;
		
		ctx.drawImage(
			this.recurso.img,
			frameCoordX, frameCoordY,
			tamFrameX, tamFrameY,
			x, y,
			frameCoordX * this.escala,
			frameCoordY * this.escala
		);
	}
	*/
	
		
	/*
		//*seu codigo antigo (não lembro se mexi em algo*
		construirMapaFrame() {
			let contarFrame = 0;
			for (let v = 0; v < this.vFrames; v++) {
				for (let h = 0; h < this.hFrames; h++) {
					this.mapaFrames.set (
						contarFrame,
						new Vector2(this.tamFrame * h, this.tamFrame *v)
					)
					contarFrame++;
				}
			}
		}
	*/
