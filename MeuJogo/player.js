let canvas = document.getElementById("tela");
let ctx = canvas.getContext("2d");

const imagem = new Image();
imagem.src = "./Characters/Player/player.png";

const largura = 32*3;
const altura = 32*3;

imagem.onload = function() {
	ctx.drawImage(imagem, 0, 0, largura, altura, 0, 0, largura, altura);
};

let estado = 0;
let walkx = canvas.width/2;
let walky = canvas.height/2;
let direcao = 0;
function draw2() {
    ctx.clearRect(0, 0, 300, 300);
	ctx.drawImage(
        imagem,
		estado * largura,
		direcao * altura,
		largura,
		altura,
		walkx,
		walky,
		largura,
		altura
	);
	if (direcao == 4) walky += 2;
	if (direcao == 5) walkx += 2;
	if (direcao == 6) walky -= 2;
	if (direcao == 7) walkx -= 2;
	estado++;
    if (direcao > 7){
        if (estado == 4) {
            estado = 0;
        }
    } else {
        if (estado == 6) {
            estado = 0;
        }
    }
}

let rungame = setInterval(draw2, 100);

document.addEventListener("keydown", movement);

function movement(event) {
	if (event.keyCode == 37) {
		console.log(event)
        //right
		direcao = 7;
	} else if (event.keyCode == 38) {
		console.log(event)
		//up
		direcao = 6;
	} else if (event.keyCode == 39) {
		console.log(event)
		//left
		direcao = 5;
	} else if (event.keyCode == 40) {
		console.log(event)
		//up
		direcao = 4;
	}
    else if (event.keyCode == 67) {
		//up
		direcao -= 4;
	}
    else if (event.keyCode == 66) {
		//up
		direcao += 4;
	}
}

    /*
    function draw() {
        ctx.clearRect(0, 0, 300, 300);
        ctx.drawImage(
            imagem,
            estado * largura,
            0,
            largura,
            altura,
            walkx,
            walky,
            largura,
            altura
        );
    
        estado++;
        if (estado == 6) {
            estado = 0;
        }
    }
    */
//}
//context.drawImage(img, sx, sy, swidth, sheight, x, y, width, height);