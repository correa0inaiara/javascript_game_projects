/** @type {HTMLCanvasElement} */

import { FOLDER } from "../../global"

export class Enemy {
  constructor(enemyImageName) {
    this.image = new Image()
    this.image.src = FOLDER + enemyImageName
  }

  update() {}

  draw() {}
}