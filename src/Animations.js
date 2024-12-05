export class Animacoes{
	constructor(patterns){
		this.patterns = patterns;
		this.teclaAtivacao = Object.keys(this.patterns)[0];
	}

	get frame() {
		return this.patterns[this.teclaAtivacao].frame;
	}

	play(key, iniciaNoTempo = 0){
		//Pronto para iniciar a animação
		if (this.teclaAtivacao === key){
			return;
		}
		this.teclaAtivacao = key;
		this.patterns[this.teclaAtivacao].tempoAtual = iniciaNoTempo;
	}

	passo(delta){ 
		this.patterns[this.teclaAtivacao].passo(delta);
	}
}