import {bg, platform} from "./script_2.js";
import { hero, ctx, cvs, gap, pipeBottom, pipeUp } from "./script.js";

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
    hero.render();

    pipeUp.forEach(pipe => {
        pipe.goLeft();
    });

    pipeBottom.forEach(pipe => {
        pipe.goLeft();
    });

    draw()
}