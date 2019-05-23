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

let numPlayer = 0;
let numAI = 0;

let start = 0;

const spanPlayer = document.querySelector('span.player');
const spanAI = document.querySelector('span.ai');
spanPlayer.textContent = numPlayer;
spanAI.textContent = numAI;

const btns = document.querySelector('.buttons');
const buttons = document.querySelectorAll('button');;
const btnStart = document.querySelector("body > div > button:nth-child(1)");
const btnReset = document.querySelector("body > div > button:nth-child(2)")

const player = () => {
    ctx.fillStyle = 'green';
    ctx.fillRect(playerX, playerY, paddelWidth, paddelHeight);
}

const ai = () => {
    ctx.fillStyle = 'red';
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
        fail();
    }

    if (ballX + ballSize >= playerX && ballX <= playerX + paddelWidth && ballY < (playerY + paddelHeight) && (ballY + ballSize) > playerY) {
        ballSpeedX = -ballSpeedX;
    } else if (ballX <= (playerX + paddelWidth) && (ballX + ballSize) >= playerX) {
        if (ballY + ballSize === playerY) {
            ballSpeedY = -ballSpeedY;
            ballSpeedX = -ballSpeedX;
        } else if (ballY === playerY + paddelHeight) {
            ballSpeedY = -ballSpeedY;
            ballSpeedX = -ballSpeedX;
        }
    }

    if (ballX + ballSize >= aiX && (ballY < (aiY + paddelHeight) && (ballY + ballSize) > aiY)) {
        ballSpeedX = -ballSpeedX;
    } else if (ballX + ballSize <= (aiX) && (ballX) >= aiX + paddelWidth) {
        if (ballY + ballSize === aiY) {
            ballSpeedY = -ballSpeedY;
            ballSpeedX = -ballSpeedX;
        } else if (ballY === aiY + paddelHeight) {
            ballSpeedY = -ballSpeedY;
            ballSpeedX = -ballSpeedX;
        }
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
            aiY -= 20;
        } else if (middlePaddel - middleBall > 50) {
            aiY -= 10;
        }
        if (middlePaddel - middleBall < -200) {
            aiY += 20;
        } else if (middlePaddel - middleBall < -50) {
            aiY += 10;
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

const fail = () => {
    setTimeout(function() {
        if (ballX <= 0) {
            spanAI.textContent = `${++numAI}`;
            ballSpeedX = 3;
            ballSpeedY = 3;
            if (numAI >= 10) {
                clearInterval(play);
                reset();
                alert("You lose! Wanna play again? Click Start");
            }
        } else if (ballX >= cw - ballSize) {
            spanPlayer.textContent = `${++numPlayer}`;
            ballSpeedX = 3;
            ballSpeedY = 3;
            if (numPlayer >= 10) {
                clearInterval(play);
                reset();
                alert("You win! Wanna play again? Click Start");
            }
        }
        ballX = cw / 2 - ballSize / 2;
        ballY = ch / 2 - ballSize / 2;
    }, 500)
}

table();
player();
ai();

const game = () => {
    table();
    player();
    ai();
    aiPosition();
    ball();
}

const reset = () => {
    spanAI.textContent = `${numAI=0}`;
    spanPlayer.textContent = `${numPlayer=0}`;
    ballX = cw / 2 - ballSize / 2;
    ballY = ch / 2 - ballSize / 2;
    playerY = 200;
    aiY = 200;
    table();
    player();
    ai();
    ball();
    btnStart.textContent = "Start";
    btnReset.style.display = "none";
    btnStart.style.width = "100%";
    btnStart.style.borderRight = "4px solid black";
}

let play;

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (this.textContent === 'Start') {
            play = setInterval(game, 10);
            this.textContent = "Pause";
            btnReset.style.display = "block";
            btnStart.style.width = "50%";
            btnReset.style.width = "50%"
            btnStart.style.borderRight = "2px solid black";
        } else if (this.textContent === "Pause") {
            this.textContent = "Replay";
            clearInterval(play);
        } else if (this.textContent === "Replay") {
            this.textContent = "Pause";
            play = setInterval(game, 10);
        } else {
            reset()
        }
    })
})