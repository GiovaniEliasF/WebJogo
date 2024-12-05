class NPC {
    constructor(x, y, nome) {
        this.posicao = { x, y };
        this.nome = nome;
    }

    interagir() {
        console.log(`Você interagiu com o NPC: ${this.nome}`);
    }
}

const npcs = [
    new NPC(200, 300, "NPC 1"),
    new NPC(400, 500, "NPC 2"),
    new NPC(600, 700, "NPC 3")
];

export { npcs };  