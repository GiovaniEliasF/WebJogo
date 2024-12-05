export class GameLoop {
    constructor(update, render){
        this.lastFrameTime = 0;
        this.acumulaTempo = 0;
        this.timeStep = 1000/60; //60 frames por segundo
        
        this.update = update;
        this.render = render;

        this.rafId = null;
        this.isRunning = false;

    }

    mainLoop = (timestamp) => {
        if (!this.isRunning) return;

        let deltaTime = timestamp - this.lastFrameTime;
        this.lastFrameTime = timestamp;

        //Guarda tudo desde o ultimo frame
        this.acumulaTempo += deltaTime;

        //Atualizações em intervalos de tempo fixos
        while (this.acumulaTempo >= this.timeStep) {
            this.update(this.timeStep);
            this.acumulaTempo -= this.timeStep;
        }

        this.render();

        this.rafId = requestAnimationFrame(this.mainLoop);
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.rafId = requestAnimationFrame(this.mainLoop);
        }
    }

    stop() {
        if(this.rafId) {
            cancelaAnimacaoFrame(this.rafId);
        }
        this.isRunnig = false;
    }
}