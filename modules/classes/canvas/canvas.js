export class Canvas {
  constructor(canvasElementId = 'canvas') {
    this.canvasElement = this.getCanvas(canvasElementId)
    this.context = this.canvasElement.getContext('2d')
    this.setDimensions()
  }

  getCanvas(canvasElementId) {
    return document.getElementById(canvasElementId)
  }

  setDimensions(width = 500, height = 500) {
    this.width = this.canvasElement.width ?? width
    this.height = this.canvasElement.height ?? height
    
  }

  getDimensions() {
    return this.width, this.height
  }

  getContext() {
    return this.context
  }
}