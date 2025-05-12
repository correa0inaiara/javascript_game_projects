/** @type {HTMLCanvasElement} */

import { FOLDER } from "../../utils/global.js"

export class Enemy {
  constructor(folderPath = './', enemyImageName, canvasElement) {
    this.image = new Image()
    this.image.src = folderPath + enemyImageName
    this.canvas = canvasElement
  }

  update() {}

  draw() {}
}