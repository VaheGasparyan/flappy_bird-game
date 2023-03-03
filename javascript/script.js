import { Hero, PipeUp, PipeBottom } from "./script_1.js";
import { bg, heroImage, pipeUpImg, pipeBottomImg } from "./script_2.js";
import { draw, loop } from "./script_3.js";
import { heroOptions, pipeFirst, pipeTwo, pipeThree } from "./options.js";

export const cvs = document.querySelector('canvas');
export const menu = document.querySelector('.menu');
export const ctx = cvs.getContext('2d');
export const gap = 90;
const restartButton = document.querySelector('.button');
const options = [pipeFirst, pipeTwo, pipeThree];

export const hero = new Hero(heroImage, heroOptions.x, heroOptions.y, heroOptions.height, heroOptions.width, heroOptions.xDelta, heroOptions.yDelta);
export const pipeUp = [new PipeUp(pipeFirst.x, pipeFirst.y, pipeFirst.height, pipeFirst.width, pipeFirst.xDelta, pipeFirst.yDelta, pipeUpImg), new PipeUp(pipeTwo.x, pipeTwo.y, pipeTwo.height, pipeTwo.width, pipeTwo.xDelta, pipeTwo.yDelta, pipeUpImg), new PipeUp(pipeThree.x, pipeThree.y, pipeThree.height, pipeThree.width, pipeThree.xDelta, pipeThree.yDelta, pipeUpImg)];
export const pipeBottom = [new PipeBottom(pipeFirst.x, pipeFirst.y, pipeFirst.height, pipeFirst.width, pipeFirst.xDelta, pipeFirst.yDelta, pipeBottomImg), new PipeBottom(pipeTwo.x, pipeTwo.y, pipeTwo.height, pipeTwo.width, pipeTwo.xDelta, pipeTwo.yDelta, pipeBottomImg), new PipeBottom(pipeThree.x, pipeThree.y, pipeThree.height, pipeThree.width, pipeThree.xDelta, pipeThree.yDelta, pipeBottomImg)];

bg.onload = draw;

loop();

document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowUp') {
        hero.jumpUp(6);
    }
});

restartButton.addEventListener('click', () => {
    console.log(pipeUp)
    options.forEach((option, index) => {
        pipeUp[index].x = option.x;
        pipeUp[index].y = option.y;
        pipeUp[index].width = option.width;
        pipeUp[index].height = option.height;
        pipeUp[index].xDelta = option.xDelta;

        pipeBottom[index].x = option.x;
        pipeBottom[index].y = option.y;
        pipeBottom[index].width = option.width;
        pipeBottom[index].height = option.height;
        pipeBottom[index].xDelta = option.xDelta;
    });

    hero.x = heroOptions.x;
    hero.y = heroOptions.y;
    hero.width = heroOptions.width;
    hero.height = heroOptions.height;
    hero.xDelta = heroOptions.xDelta;
    hero.yDelta = heroOptions.yDelta;

    pipeUp.pop();
    pipeBottom.pop();

    menu.classList.remove('active')
});