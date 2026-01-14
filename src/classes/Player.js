class Player {
    constructor(canvasWidtg, canvasHeight) {
        this.width = 100;
        this.height = 100;
        this.velocity = 10;

        this.position = {
            x: canvasHeight / 2 - this.height / 2,
            y: canvasHeight - this.height - 30,
        };

        
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