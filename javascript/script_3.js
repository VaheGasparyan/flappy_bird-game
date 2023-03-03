import {bg, pipeBottomImg, pipeUpImg, platform} from "./script_2.js";
import { hero, ctx, cvs, gap, pipeBottom, pipeUp, menu } from "./script.js";
import { PipeUp, PipeBottom } from "./script_1.js";
import {movement, stopElements} from "./script_4.js";

function randomYPos() {
    return Math.round(Math.random() * 21);
}

function checkPipeXPos() {
    const lastPipe = pipeUp[pipeUp.length - 1];
    const firstPipe = pipeUp[0];

    if(lastPipe.x === 220) {
        const randomNum = randomYPos();

        pipeUp.push(new PipeUp(cvs.width, -randomNum, 60, 20, .5, 1, pipeUpImg));
        pipeBottom.push(new PipeBottom(cvs.width, -randomNum, 60, 20, .5, 1, pipeBottomImg));
    }

    if(firstPipe.x + firstPipe.width === 0) {
        pipeBottom.shift();
        pipeUp.shift();
    }
}

export function draw() {
    ctx.drawImage(bg, 0, 0, cvs.width, cvs.height);
    ctx.drawImage(hero.heroImg, hero.x, hero.y, hero.width, hero.height);

    pipeUp.forEach(pipe => {
        ctx.drawImage(pipe.pipeImg, pipe.x, pipe.y, pipe.width, pipe.height);
    });

    pipeBottom.forEach(pipe => {
        ctx.drawImage(pipe.pipeImg, pipe.x, pipe.y + gap, pipe.width, pipe.height);
    });

    ctx.drawImage(platform, 0, 130, cvs.width, 50);
}

export function loop() {
    requestAnimationFrame(loop);
    checkPipeXPos();
    hero.render();

    if(Math.round(hero.y + hero.height) === 130) {
        menu.classList.add('active');
        stopElements();
    }

    movement();

    draw()
}