import {hero, pipeBottom, pipeUp} from "./script.js";

export function stopElements() {
    pipeUp.forEach(pipe => {
        pipe.stop();
    });

    pipeBottom.forEach(pipe => {
        pipe.stop();
    });

    hero.stop();
}

export function movement() {
    pipeUp.forEach(pipe => {
        pipe.goLeft();
    });

    pipeBottom.forEach(pipe => {
        pipe.goLeft();
    });
}