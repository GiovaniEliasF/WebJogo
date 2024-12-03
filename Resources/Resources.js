class Recursos {
	constructor(){
		this.paraCarregar = {
			player: "./Characters/Player/player.png"
		}
		this.imagens = {};

		Object.keys(this.paraCarregar).forEach(chave => {
			const imagem = new Image();
			imagem.src = this.paraCarregar[chave];
			this.imagens[chave] = {
				img: imagem,
				estaCarregado: false
			}
			imagem.onload = () => {
				this.imagens[chave].estaCarregado = true;
			}
		})
	}
}

export const recursos = new Recursos;