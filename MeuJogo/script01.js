const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

const colisoesDoMapa = [];
for (let i = 0; i < colisoes.length; i += 70) {
    colisoesDoMapa.push(colisoes.slice(i, 70 + i));
}

class Limite {
    static width = 48;
    static height = 48;
    constructor(position) {
        this.position = position;
        this.width = Limite.width;
        this.height = Limite.height;
    }

    draw() {
        ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

const limites = [];

colisoesDoMapa.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1025)
        limites.push(
            new Limite({
                position: {
                    x: j * Limite.width,
                    y: i * Limite.height
                }
            }))
    })
})

/*ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);
*/
const mapImage = new Image();
mapImage.src = './Map/MapaCompleto.png';

const characterImage = new Image();
characterImage.src = './sprites/character.png';

const characterSize = 32;
const characterX = canvas.width / 2 - characterSize / 2;
const characterY = canvas.height / 2 - characterSize / 2;

class Sprite {
    constructor({ position, mapImage }) {
        this.position = position;
        this.mapImage = mapImage;
    }

    draw() {
        ctx.drawImage(this.mapImage, this.position.x, this.position.y);
    }
}

const background = new Sprite({
    position: {
        x: -1300,
        y: -300
    },
    mapImage: mapImage
});

const keys = {
    w: { pressed: false },
    s: { pressed: false },
    a: { pressed: false },
    d: { pressed: false }
};

function drawCharacter() {
    ctx.drawImage(characterImage, characterX, characterY, characterSize, characterSize);
}

function animate() {
    window.requestAnimationFrame(animate);

    /*ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);*/

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    limites.forEach(limite => {
        limite.draw()
    })
    background.draw();
    drawCharacter();

    if (keys.w.pressed && lastKey == 'w') background.position.y += 3;
    if (keys.s.pressed && lastKey == 's') background.position.y -= 3;
    if (keys.a.pressed && lastKey == 'a') background.position.x += 3;
    if (keys.d.pressed && lastKey == 'd') background.position.x -= 3;
}

let lastKey = '';
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = true;
            lastKey = 'w';
            break;
        case 's':
            keys.s.pressed = true;
            lastKey = 's';
            break;
        case 'a':
            keys.a.pressed = true;
            lastKey = 'a';
            break;
        case 'd':
            keys.d.pressed = true;
            lastKey = 'd';
            break;
    }
});

document.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = false;
            break;
        case 's':
            keys.s.pressed = false;
            break;
        case 'a':
            keys.a.pressed = false;
            break;
        case 'd':
            keys.d.pressed = false;
            break;
    }
});

animate();
