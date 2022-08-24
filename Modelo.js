class Chao {

    constructor(posX, posY, L, A) {
        var isStatic = {isStatic: true};
        this.corpo = Bodies.rectangle(posX, posY, L, A, isStatic);
        World.add(world, this.corpo);
        this.L = L;
        this.A = A;
    }


    draw() {
        push();
        rectMode(CENTER);
        rect(this.corpo.position.x, this.corpo.position.y, this.L, this.A);
        pop();
    }
}