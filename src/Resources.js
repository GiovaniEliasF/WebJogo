class Recursos {
	constructor(){
		this.paraCarregar = {
			player: "../Sprites/player.png",
			mapa: "../Sprites/MapaCompleto.png"
		};
		
		this.imagens = {};

		Object.keys(this.paraCarregar).forEach(key => {
			const imagem = new Image();
			imagem.src = this.paraCarregar[key];
			this.imagens[key] = {
				img: imagem,
				estaCarregado: false
			}
			imagem.onload = () => {
				this.imagens[key].estaCarregado = true;
			}
		})
	}
}

export const recursos = new Recursos;