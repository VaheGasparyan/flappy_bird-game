import { Hero, PipeUp, PipeBottom } from "./script_1.js";
import { bg, heroImage, pipeUpImg, pipeBottomImg } from "./script_2.js";
import { draw, loop } from "./script_3.js";

export const cvs = document.querySelector('canvas');
export const menu = document.querySelector('.menu');
export const ctx = cvs.getContext('2d');
export const gap = 90;

export const hero = new Hero(heroImage, 15, 15, 8, 12, 1, .4);
export const pipeUp = [new PipeUp(120, 0, 60, 20, .5, 1, pipeUpImg), new PipeUp(200, -20, 60, 20, .5, 1, pipeUpImg), new PipeUp(280, -10, 60, 20, .5, 1, pipeUpImg)];
export const pipeBottom = [new PipeBottom(120, 0, 60, 20, .5, 1, pipeBottomImg), new PipeBottom(200, -20, 60, 20, .5, 1, pipeBottomImg), new PipeBottom(280, -10, 60, 20, .5, 1, pipeBottomImg)];

bg.onload = draw;

loop();

document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowUp') {
        hero.jumpUp(6);
    }
})