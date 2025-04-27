import { CANVAS_HEIGHT, CANVAS_WIDTH, ctx, gameFrame } from "../../global"
import { Enemy2 } from "../enemy/enemy2"
import { Sprite } from "./sprite"

export class Sprite2 extends Sprite {
  constructor() {
    super()
  }

  createEnemies(numberOfEnemies = 100) {
    for (let i = 0; i < numberOfEnemies; i++) {
      this.enemiesArray.push(new Enemy2())
    }
  }

  animate() {
    this.clearRect()

    this.enemiesArray.forEach((enemy) => {
      enemy.update()
      enemy.draw()
    })
    gameFrame++
    requestAnimationFrame(animate)
  }

  clearRect() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  }
}