const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 500;

const cw = canvas.width;
const ch = canvas.height;

const ballSize = 20;
let ballX = cw / 2 - ballSize / 2;
let ballY = ch / 2 - ballSize / 2;

const paddleWidth = 20;
const paddleHeight = 100;

const playerX = 70;
const aiX = 910;

let playerY = 200;
const aiY = 200;

const lineWidth = 6;
const lineHeight = 16;

let ballSpeedX = 1;
let ballSpeedY = 1;

const player = () => {
    ctx.fillStyle = 'green';
    ctx.fillRect(playerX, playerY, paddleWidth, paddleHeight);
}

const ai = () => {
    ctx.fillStyle = 'green';
    ctx.fillRect(aiX, aiY, paddleWidth, paddleHeight);
}

const table = () => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cw, ch);
    for (let linePosition = 20; linePosition < ch; linePosition += 30) {
        ctx.fillStyle = "white";
        ctx.fillRect(cw / 2 - lineWidth / 2, linePosition, lineWidth, lineHeight);
    }
};

const ball = () => {
    ctx.fillStyle = "white";
    ctx.fillRect(ballX, ballY, ballSize, ballSize);

    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballY >= ch - ballSize || ballY <= 0) {
        ballSpeedY = -ballSpeedY;
    }
    if (ballX >= cw - ballSize || ballX <= 0) {
        ballSpeedX = -ballSpeedX;
    }
}

topCanvas = canvas.offsetTop;

const playerPosition = event => {
    playerY = event.clientY - topCanvas - paddleHeight / 2;

    if (playerY <= 0) {
        playerY = 0;
    }
    if (playerY >= ch - paddleHeight) {
        playerY = ch - paddleHeight;
    }
    console.log('work');
}

canvas.addEventListener('mousemove', playerPosition);

const game = () => {
    table();
    ball();
    player();
    ai();
}

setInterval(game, 10);