export class Hero {
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

    stop() {
        this.yDelta = 0;
    }
}

class Pipe {
    constructor(x, y, height, width, xDelta, yDelta, pipeImg) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.xDelta = xDelta;
        this.yDelta = yDelta;
        this.pipeImg = pipeImg;
    }

    goLeft() {
        this.x -= this.xDelta
    }

    stop() {
        this.xDelta = 0;
    }
}

export class PipeUp extends Pipe {
    constructor(...props) {
        super(...props);
    }
}

export class PipeBottom extends Pipe {
    constructor(...props) {
        super(...props);
    }
}