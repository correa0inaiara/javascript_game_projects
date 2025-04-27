import { CANVAS_HEIGHT, CANVAS_WIDTH, ctx, gameFrame } from "../../global"
import { Enemy4 } from "../enemy/enemy4"
import { Sprite } from "./sprite"

export class Sprite4 extends Sprite {
  constructor() {
    super()
  }

  createEnemies(numberOfEnemies = 100) {
    for (let i = 0; i < numberOfEnemies; i++) {
      this.enemiesArray.push(new Enemy4())
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