import { Canvas } from "../canvas/canvas.js"
import { Enemy1 } from "../enemy/enemy1.js"
import { Sprite } from "./sprite.js"

export class Sprite1 extends Sprite {
  constructor() {
    super()
  }

  createEnemies(numberOfEnemies = 100) {
    for (let i = 0; i < numberOfEnemies; i++) {
      this.enemiesArray.push(new Enemy1())
    }
  }

  animate() {
    this.clearRect()

    this.enemiesArray.forEach((enemy) => {
      enemy.update()
      enemy.draw()
    })
    this.increaseGameframe()
    requestAnimationFrame(animate)
  }

  clearRect() {
    this.ctx.clearRect(0, 0, this.)
  }
}