const FOLDER = 'assets/enemies/'
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
CANVAS_WIDTH = canvas.width = 500
CANVAS_HEIGHT = canvas.height = 1000
const numberOfEnemies = 100
const enemiesArray = []
let gameFrame = 0