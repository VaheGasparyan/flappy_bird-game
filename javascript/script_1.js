const cvs = document.querySelector('canvas');
const ctx = cvs.getContext('2d');
const gap = 90;

//// images
const bg = new Image();
bg.src = './img/flappy-background.png';
const heroImage = new Image();
heroImage.src = './img/hero.png';
const platform = new Image();
platform.src = './img/platform.png';
const pipeUp = new Image();
pipeUp.src = './img/pipeUp.png';
const pipeBottom = new Image();
pipeBottom.src = './img/pipeBottom.png'

class Hero {
    constructor(heroImg, x, y, height, width, xDelta, yDelta) {
        this.xDelta = xDelta;
        this.yDelta = yDelta;
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.heroImg = heroImg;
    }

    render() {
        this.y += this.yDelta
    }

    jumpUp(value) {
        this.y -= value;
    }
}

const hero = new Hero(heroImage, 15, 15, 10, 15, 1, .4);

function draw() {
    ctx.drawImage(bg, 0, 0, cvs.width, cvs.height);
    ctx.drawImage(hero.heroImg, hero.x, hero.y, hero.width, hero.height);
    ctx.drawImage(pipeUp, 130, 0, 20, 60);
    ctx.drawImage(pipeBottom, 130, 0  + gap, 20, 60);
    ctx.drawImage(platform, 0, 130, cvs.width, 50);
}

bg.onload = draw;

function loop() {
    requestAnimationFrame(loop);
    hero.render();
    draw()
}

loop();

document.addEventListener('keyup', (event) => {
    if(event.key === 'ArrowUp') {
        hero.jumpUp(6);
    }
})