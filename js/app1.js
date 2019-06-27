class PongGame {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 1000;
        this.canvas.height = 500;
        this.cw = this.canvas.width;
        this.ch = this.canvas.height;
        this.ballSize = 20;
        this.ballX = this.cw / 2 - this.ballSize / 2;
        this.ballY = this.ch / 2 - this.ballSize / 2;
        this.paddelWidth = 20;
        this.paddelHeight = 100;
        this.playerX = 70;
        this.aiX = 910;
        this.playerY = 200;
        this.aiY = 200;
        this.lineWidth = 6;
        this.lineHeight = 16;
        this.ballSpeedX = 3;
        this.ballSpeedY = 3;
        this.numPlayer = 0;
        this.numAI = 0;
        this.start = 0;
    }
}

const pong = new PongGame();