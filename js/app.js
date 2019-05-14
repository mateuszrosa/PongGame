const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 500;

const cw = canvas.width;
const ch = canvas.height;

const ballSize = 20;
let ballX = cw / 2 - ballSize / 2;
let ballY = ch / 2 - ballSize / 2;

const paddelWidth = 20;
const paddelHeight = 100;

const playerX = 70;
const aiX = 910;

let playerY = 200;
let aiY = 200;

const lineWidth = 6;
const lineHeight = 16;

let ballSpeedX = 3;
let ballSpeedY = 3;

const player = () => {
    ctx.fillStyle = 'green';
    ctx.fillRect(playerX, playerY, paddelWidth, paddelHeight);
}

const ai = () => {
    ctx.fillStyle = 'green';
    ctx.fillRect(aiX, aiY, paddelWidth, paddelHeight);
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
        speedUp();
    }
    if (ballX >= cw - ballSize || ballX <= 0) {
        ballSpeedX = -ballSpeedX;
        speedUp();
    }
}

topCanvas = canvas.offsetTop;

const playerPosition = event => {
    playerY = event.clientY - topCanvas - paddelHeight / 2;

    if (playerY <= 0) {
        playerY = 0;
    }
    if (playerY >= ch - paddelHeight) {
        playerY = ch - paddelHeight;
    }
}

const aiPosition = () => {
    const middleBall = ballY + ballSize / 2;
    const middlePaddel = aiY + paddelHeight / 2;

    if (ballX > 500) {
        if (middlePaddel - middleBall > 200) {
            aiY -= 30;
        } else if (middlePaddel - middleBall > 50) {
            aiY -= 15;
        }
        if (middlePaddel - middleBall < -200) {
            aiY += 30;
        } else if (middlePaddel - middleBall < -50) {
            aiY += 15;
        }
    } else if (ballX <= 500 && ballX > 100) {
        if (middlePaddel - middleBall > 100) {
            aiY -= 3;
        } else if (middlePaddel - middleBall < -100) {
            aiY += 3;
        }
    }
}

canvas.addEventListener('mousemove', playerPosition);

const speedUp = () => {
    if (ballSpeedX > 0 && ballSpeedX < 16) {
        ballSpeedX += .2;
    } else if (ballSpeedY < 0 && ballSpeedY > -16) {
        ballSpeedY -= .2;
    }
}

const game = () => {
    table();
    ball();
    player();
    ai();
    aiPosition();
}

setInterval(game, 10);