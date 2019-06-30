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
            this.aiPosition();
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

        if (this.ballY >= this.ch - this.ballSize || this.ballY <= 0) {
            this.ballSpeedY = -this.ballSpeedY;
        }
        if (this.ballX >= this.cw - this.ballSize || this.ballX <= 0) {
            return
        }

        if (this.ballX + this.ballSize >= this.playerX && this.ballX <= this.playerX + this.paddelWidth && this.ballY < (this.playerY + this.paddelHeight) && (this.ballY + this.ballSize) > this.playerY) {
            this.ballSpeedX = -this.ballSpeedX;
        } else if (this.ballX <= (this.playerX + this.paddelWidth) && (this.ballX + this.ballSize) >= this.playerX) {
            if (this.ballY + this.ballSize === this.playerY) {
                this.ballSpeedY = -this.ballSpeedY;
                this.ballSpeedX = -this.ballSpeedX;
            } else if (this.ballY === this.playerY + this.paddelHeight) {
                this.ballSpeedY = -this.ballSpeedY;
                this.ballSpeedX = -this.ballSpeedX;
            }
        }

        if (this.ballX + this.ballSize >= this.aiX && (this.ballY < (this.aiY + this.paddelHeight) && (this.ballY + this.ballSize) > this.aiY)) {
            this.ballSpeedX = -this.ballSpeedX;
        } else if (this.ballX + this.ballSize <= (this.aiX) && (this.ballX) >= this.aiX + this.paddelWidth) {
            if (this.ballY + this.ballSize === this.aiY) {
                this.ballSpeedY = -this.ballSpeedY;
                this.ballSpeedX = -this.ballSpeedX;
            } else if (this.ballY === this.aiY + this.paddelHeight) {
                this.ballSpeedY = -this.ballSpeedY;
                this.ballSpeedX = -this.ballSpeedX;
            }
        }
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
    aiPosition = () => {
        const middleBall = this.ballY + this.ballSize / 2;
        const middlePaddel = this.aiY + this.paddelHeight / 2;

        if (this.ballX > 500) {
            if (middlePaddel - middleBall > 200) {
                this.aiY -= 20;
            } else if (middlePaddel - middleBall > 50) {
                this.aiY -= 10;
            }
            if (middlePaddel - middleBall < -200) {
                this.aiY += 20;
            } else if (middlePaddel - middleBall < -50) {
                this.aiY += 10;
            }
        } else if (this.ballX <= 500 && this.ballX > 100) {
            if (middlePaddel - middleBall > 100) {
                this.aiY -= 3;
            } else if (middlePaddel - middleBall < -100) {
                this.aiY += 3;
            }
        }
    }
    speedUp = () => {
        if (this.ballSpeedX > 0 && this.ballSpeedX < 16) {
            this.ballSpeedX += .2;
        } else if (this.ballSpeedY < 0 && this.ballSpeedY > -16) {
            this.ballSpeedY -= .2;
        }
    }
}

const pong = new PongGame();