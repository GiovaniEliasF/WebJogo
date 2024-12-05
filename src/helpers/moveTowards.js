export function direcaoMovimento(personagem, posicaoDestino, velocidade){
	let distanciaCaminhadaY = posicaoDestino.y - personagem.posicao.y;
	let distanciaCaminhadaX = posicaoDestino.x - personagem.posicao.x;

	let distancia = Math.sqrt(distanciaCaminhadaY**2 + distanciaCaminhadaX**2);
	
	if (distancia <= velocidade) {
		//Se estiver perto o suficiente, ir diretamente para o destino
		personagem.posicao.y = posicaoDestino.y;
		personagem.posicao.x = posicaoDestino.x;
	} else {
		//Caso contrário, mova-se pelo campo especificado na direção do destino
		let normalizadoy = distanciaCaminhadaY / distancia;
		let normalizadox = distanciaCaminhadaX / distancia;

		personagem.posicao.y += normalizadoy * velocidade;
		personagem.posicao.x += normalizadox * velocidade;

		distanciaCaminhadaY = posicaoDestino.y - personagem.posicao.y;
		distanciaCaminhadaX = posicaoDestino.x - personagem.posicao.x;

		distancia = Math.sqrt(distanciaCaminhadaX**2 + distanciaCaminhadaY**2);
	}

	return distancia;
}