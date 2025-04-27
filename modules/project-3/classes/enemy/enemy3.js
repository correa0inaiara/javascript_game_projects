import { Enemy } from "./enemy";

export class Enemy3 extends Enemy {
  constructor(enemyImageName = 'enemy3.png') {
    super(enemyImageName)

    // this.spriteWidth = 293
    // this.spriteHeight = 155
    // this.width = this.spriteWidth / 2.5
    // this.height = this.spriteHeight / 2.5
    // this.x = Math.random() * (canvas.width - this.width)
    // this.y = Math.random() * (canvas.height - this.height)
    // this.frame = 0
    // this.flapSpeed = Math.floor(Math.random() * 3 + 1)
  }

  update() {
    // this.x += Math.random() * 15 - 7.5
    // this.y += Math.random() * 10 - 5
    // if (gameFrame % this.flapSpeed === 0)
    //   this.frame > 4 ? this.frame = 0 : this.frame++
  }

  draw() {
    // ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, 
    //   this.x, this.y, this.width, this.height)
  }
}