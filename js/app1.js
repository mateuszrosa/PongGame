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
        this.topCanvas = this.canvas.offsetTop;

        this.table();
        this.player();
        this.ai();
        this.ball();

        setInterval(() => {
            this.table();
            this.player();
            this.ai();
            this.ball();
        }, 10)

        this.canvas.addEventListener('mousemove', this.playerPosition);
    }
    table = () => {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.cw, this.ch);
        for (let linePosition = 20; linePosition < this.ch; linePosition += 30) {
            this.ctx.fillStyle = "white";
            this.ctx.fillRect(this.cw / 2 - this.lineWidth / 2, linePosition, this.lineWidth, this.lineHeight);
        }
    };
    player = () => {
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(this.playerX, this.playerY, this.paddelWidth, this.paddelHeight);
    }
    ai = () => {
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.aiX, this.aiY, this.paddelWidth, this.paddelHeight);
    }
    ball = () => {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(this.ballX, this.ballY, this.ballSize, this.ballSize);

        this.ballX += this.ballSpeedX;
        this.ballY += this.ballSpeedY;
    }
    playerPosition = event => {
        this.playerY = event.clientY - this.topCanvas - this.paddelHeight / 2;

        if (this.playerY <= 0) {
            this.playerY = 0;
        }
        if (this.playerY >= this.ch - this.paddelHeight) {
            this.playerY = this.ch - this.paddelHeight;
        }
    }
}

const pong = new PongGame();