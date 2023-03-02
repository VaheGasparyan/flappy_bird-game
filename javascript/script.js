import { Hero } from "./script_1.js";
import { PipeUp } from "./script_1.js";
import { PipeBottom } from "./script_1.js";
import { bg, heroImage, pipeUpImg, pipeBottomImg } from "./script_2.js";
import { draw, loop } from "./script_3.js";

export const cvs = document.querySelector('canvas');
export const ctx = cvs.getContext('2d');
export const gap = 90;

export const hero = new Hero(heroImage, 15, 15, 10, 15, 1, .4);
export const pipeUp = [new PipeUp(130, 0, 60, 20, .5, 1, pipeUpImg)];
export const pipeBottom = [new PipeBottom(130, 0, 60, 20, .5, 1, pipeBottomImg)];

bg.onload = draw;

loop();

document.addEventListener('keyup', (event) => {
    if(event.key === 'ArrowUp') {
        hero.jumpUp(6);
    }
})