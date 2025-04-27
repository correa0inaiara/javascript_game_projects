const FOLDER = 'assets/'
const ANIMATION_STATES = {
  IDLE: 'idle',
  JUMP: 'jump',
  FALL: 'fall',
  RUN: 'run',
  DIZZY: 'dizzy',
  SIT: 'sit',
  ROLL: 'roll',
  BITE: 'bite',
  KO: 'ko',
  GET_HIT: 'getHit',
}
let playerState = ANIMATION_STATES.IDLE
const dropdown = document.getElementById('animations')
dropdown.addEventListener('change', function(e) {
  playerState = e.target.value
  console.log(playerState)
})

const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
console.log(ctx)

const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600

const playerImage = new Image()
playerImage.src = FOLDER + 'shadow_dog.png'
// let x = 0

// image width divided by the number of columns (sprite columns in the picture)
// 6876px width / 12 = 573
const spriteWidth = 575
// 5230/10 height / 10 = 523
const spriteHeight = 523

// let frameX = 0
// let frameY = 0
let gameFrame = 0
const staggerFrames = 5

const spriteAnimations = []
const animationStates = [
  {
    name: ANIMATION_STATES.IDLE,
    frames: 7
  },
  {
    name: ANIMATION_STATES.JUMP,
    frames: 7
  },
  {
    name: ANIMATION_STATES.FALL,
    frames: 7
  },
  {
    name: ANIMATION_STATES.RUN,
    frames: 9
  },
  {
    name: ANIMATION_STATES.DIZZY,
    frames: 11
  },
  {
    name: ANIMATION_STATES.SIT,
    frames: 5
  },
  {
    name: ANIMATION_STATES.ROLL,
    frames: 7
  },
  {
    name: ANIMATION_STATES.BITE,
    frames: 7
  },
  {
    name: ANIMATION_STATES.KO,
    frames: 12
  },
  {
    name: ANIMATION_STATES.GET_HIT,
    frames: 4
  }
]

animationStates.forEach((state, index) => {
  let frames = {
    loc: []
  }
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spriteWidth
    let positionY = index * spriteHeight
    frames.loc.push({x: positionX, y: positionY})
  }
  spriteAnimations[state.name] = frames
})
// console.log(animationStates)
// console.log(spriteAnimations)

// animation loop
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  // ctx.fillRect(x, 50, 100, 100)
  // ctx.fillRect(100, 50, 100, 100)
  // x++
  
  /**
   * Parameters:
   * - the image you want to drawn
   * - source of the image you want to cut it out of
   * - destination: where you want that crop part into
   * ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
   */

  let position = Math.floor(gameFrame/staggerFrames) % 
    spriteAnimations[playerState].loc.length

  let frameX = spriteWidth * position
  let frameY = spriteAnimations[playerState].loc[position].y
  frameX = spriteWidth * position
  // the destination width and height can be the same as the source width and height
  // to keep the original size of the image
  ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)

  // this slows down the change of the animation
  // if (gameFrame % staggerFrames == 0) {
  //   if (frameX < 6) frameX++
  //   else frameX = 0
  // }

  gameFrame++
  
  // default color is black
  // is gonna create an animation loop, calling the same function over and over again
  requestAnimationFrame(animate) 
}
animate()