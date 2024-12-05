export const ESQUERDA = "ESQUERDA";
export const DIREITA = "DIREITA";
export const CIMA = "CIMA";
export const BAIXO = "BAIXO";
export const INTERAGIR = "INTERAGIR";
export const ATACAR = "ATACAR";


export class Input {
	constructor(){

		this.direcaoMantida = [];

		document.addEventListener("keydown", (e) =>{
			//Verificando a lista de direções
			if (e.code === "ArrowUp" || e.code === "KeyW") {
				this.teclaPressionada(CIMA);
			}
			if (e.code === "ArrowDown" || e.code === "KeyS") {
				this.teclaPressionada(BAIXO);
			}
			if (e.code === "ArrowLeft" || e.code === "KeyA") {
				this.teclaPressionada(ESQUERDA);
			}
			if (e.code === "ArrowRight" || e.code === "KeyD") {
				this.teclaPressionada(DIREITA);
			}
			if (e.code === "KeyQ") {
				this.teclaPressionada(INTERAGIR);
			}
			if (e.code === "KeySpace") {
				this.teclaPressionada(ATACAR);
			}
			if (e.code === "KeyQ") {  // Quando a tecla Q for pressionada
                this.teclaPressionada(INTERAGIR); // Marca que o jogador quer interagir
            }
		})

		document.addEventListener("keyup", (e) =>{
			//Verificando a lista de direções
			if (e.code === "ArrowUp" || e.code === "KeyW") {
				this.teclaLiberada(CIMA);
			}
			if (e.code === "ArrowDown" || e.code === "KeyS") {
				this.teclaLiberada(BAIXO);
			}
			if (e.code === "ArrowLeft" || e.code === "KeyA") {
				this.teclaLiberada(ESQUERDA);
			}
			if (e.code === "ArrowRight" || e.code === "KeyD") {
				this.teclaLiberada(DIREITA);
			}
			if (e.code === "KeyQ") {
				this.teclaLiberada(INTERAGIR);
			}
			if (e.code === "Space") {
				this.teclaLiberada(ATACAR);
			}
		})
	}

	get direcao() {
		return this.direcaoMantida[0];
	}

	teclaPressionada(direcao){
		//Adicionar tecla à lista de direções a ser mantidas caso seja uma nova tecla
		if(this.direcaoMantida.indexOf(direcao) === -1){
			this.direcaoMantida.unshift(direcao);
		}
	}
	
	teclaLiberada(direcao){
		const indice = this.direcaoMantida.indexOf(direcao);
		if (indice === -1){
			return;
		}
		this.direcaoMantida.splice(indice, 1);
	}
}