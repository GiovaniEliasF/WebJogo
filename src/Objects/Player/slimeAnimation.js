const fazerFramesParado = (frameRaiz=0) => {
	return {
		duracao: 600,
		frames: [
			{
				time: 0,
				frame: frameRaiz
			},
			{
				time: 100,
				frame: frameRaiz+1
			},
			{
				time: 200,
				frame: frameRaiz+2
			},
			{
				time: 300,
				frame: frameRaiz+3
			}
		]
	}
}
const fazerFramesAndando = (frameRaiz=0) => {
	return {
		duracao: 600,
		frames: [
			{
				time: 0,
				frame: frameRaiz
			},
			{
				time: 100,
				frame: frameRaiz+1
			},
			{
				time: 200,
				frame: frameRaiz+2
			},
			{
				time: 300,
				frame: frameRaiz+3
			},
			{
				time: 400,
				frame: frameRaiz+4
			},
			{
				time: 500,
				frame: frameRaiz+5
			},
		]
	}
}
const fazerFramesAtacando = (frameRaiz=0) => {
	return {
		duracao: 600,
		frames: [
			{
				time: 0,
				frame: frameRaiz
			},
			{
				time: 100,
				frame: frameRaiz+1
			},
			{
				time: 200,
				frame: frameRaiz+2
			},
			{
				time: 300,
				frame: frameRaiz+3
			},
			{
				time: 400,
				frame: frameRaiz+4
			},
			{
				time: 500,
				frame: frameRaiz+5
			},
		]
	}
}

export const PARADO_BAIXO = fazerFramesParado(0);
export const PARADO_CIMA = fazerFramesParado(12);
export const PARADO_ESQUERDA = fazerFramesParado(18);
export const PARADO_DIREITA = fazerFramesParado(6);

export const ANDANDO_BAIXO = fazerFramesAndando(24);
export const ANDANDO_CIMA = fazerFramesAndando(36);
export const ANDANDO_ESQUERDA = fazerFramesAndando(42);
export const ANDANDO_DIREITA = fazerFramesAndando(30);

export const ATACANDO_BAIXO = fazerFramesAtacando(48);
export const ATACANDO_CIMA = fazerFramesAtacando(60);
export const ATACANDO_ESQUERDA = fazerFramesAtacando(66);
export const ATACANDO_DIREITA = fazerFramesAtacando(54);
