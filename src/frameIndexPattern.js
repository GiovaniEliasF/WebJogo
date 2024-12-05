export class FrameIndexPattern {
	constructor (configuracaoAnimacao){
		this.tempoAtual = 0;
		this.configuracaoAnimacao = configuracaoAnimacao;
		this.duracao = configuracaoAnimacao.duracao ?? 600;
	}

	get frame() {
		const {frames} = this.configuracaoAnimacao;
		for (let i = frames.length - 1; i >= 0; i--){
			if (this.tempoAtual >= frames[i].time){
				return frames[i].frame;
				console.log("atualizando frame")
			}
		}
		//throw "Time is before the first keyframe";
	}

	passo(delta) {
		this.tempoAtual += delta;
		if (this.tempoAtual >= this.duracao){
			this.tempoAtual = 0;
		}
	}
}