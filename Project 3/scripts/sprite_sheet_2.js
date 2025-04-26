/** @type {HTMLCanvasElement} */


// enemy1 = {
//   x: 10,
//   y: 50,
//   width: 100,
//   height: 100,
// }

// const enemyImage = new Image()
// enemyImage.src = FOLDER + 'enemy1.png'


class Enemy {
  constructor() {
    this.image = new Image()
    this.image.src = FOLDER + 'enemy2.png'
    this.spriteWidth = 293
    this.spriteHeight = 155
    this.width = this.spriteWidth / 2.5
    this.height = this.spriteHeight / 2.5
    this.x = Math.random() * (canvas.width - this.width)
    this.y = Math.random() * (canvas.height - this.height)
    // we are generating a random number between 0 and 4
    // and starting from minus 2 and plus 2
    // this.speed = Math.random() * 4 - 2
    this.frame = 0
    this.flapSpeed = Math.floor(Math.random() * 3 + 1)
  }

  update() {
    this.x += Math.random() * 15 - 7.5
    this.y += Math.random() * 10 - 5
    // ao invés de trocar de sprite a cada incremento,
    // aguarda algumas rodadas antes da troca
    if (gameFrame % this.flapSpeed === 0)
      // animate sprites (volta à primeira imagem dos sprites ao chegar à última)
      this.frame > 4 ? this.frame = 0 : this.frame++
  }

  draw() {
    // ctx.strokeRect(this.x, this.y, this.width, this.height)
    ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, 
      this.x, this.y, this.width, this.height)
  }
}

// const enemy1 = new Enemy()
// const enemy2 = new Enemy()

for (let i = 0; i < numberOfEnemies; i++) {
  enemiesArray.push(new Enemy())
}
// console.log(enemiesArray)

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  // enemy1.update()
  // enemy1.draw()

  enemiesArray.forEach((enemy) => {
    enemy.update()
    enemy.draw()
  })
  gameFrame++
  requestAnimationFrame(animate)
}
animate()