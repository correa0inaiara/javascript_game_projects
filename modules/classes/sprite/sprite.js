/** @type {HTMLCanvasElement} */

import { Canvas } from "../canvas/canvas.js"

export class Sprite {
  constructor(spriteSheet) {
    this.enemiesArray = []
    this.setGameframe()
    this.clearRect()
    this.canvasPropertiesSet = false
  }

  setCanvasProperties(canvasElementId, canvasWidth, canvasHeight) {
    this.canvas = new Canvas(canvasElementId)
    canvas.setDimensions(canvasWidth, canvasHeight)
    this.canvasPropertiesSet = true
  }

  getCanvasProperties() {
    return this.canvas
  }

  createEnemies() {}

  animate() {}

  clearRect() {
    if (!this.canvasPropertiesSet) {
      this.setCanvasProperties()
    }
  }

  setGameframe(gameFrame = 0) {
    this.gameFrame = gameFrame
  }

  increaseGameframe(num = 1) {
    this.gameFrame += num
    return this.gameFrame
  }

  getGameframe() {
    return this.gameFrame
  }
}