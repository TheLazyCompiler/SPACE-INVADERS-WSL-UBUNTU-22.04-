import { PAHT_SPACESHIP_IMAGE } from "../ultils/conatants";

class Player {
    constructor(canvasWidtg, canvasHeight) {
        this.width = 100;
        this.height = 100;
        this.velocity = 6;

        this.position = {
            x: canvasHeight / 2 - this.height / 2,
            y: canvasHeight - this.height - 30,
        };

        this.image = this.getImage(PAHT_SPACESHIP_IMAGE);
    }

    getImage(path) {
        const image = new Image();
        image.src = path;
        return image;        
    }

    moveLeft() {
        this.position.x -= this.velocity;
    }

    moveRaight() {
        this.position.x += this.velocity;
    }



    draw(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}


export default Player;