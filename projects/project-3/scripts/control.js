import { Sprite1 } from "http://localhost:3000/project-3/classes/sprite/sprite1"
import { Sprite2 } from "http://localhost:3000/project-3/classes/sprite/sprite2"
import { Sprite3 } from "http://localhost:3000/project-3/classes/sprite/sprite3"
import { Sprite4 } from "http://localhost:3000/project-3/classes/sprite/sprite4"
import { SPRITE_SHEETS } from "./global"

const renderSpriteSheet1 = () => {
  const sprite1 = new Sprite1()
  sprite1.createEnemies()
  sprite1.animate()
}

const renderSpriteSheet2 = () => {
  const sprite2 = new Sprite2()
  sprite2.createEnemies()
  sprite2.animate()
}

const renderSpriteSheet3 = () => {
  const sprite3 = new Sprite3()
  sprite3.createEnemies()
  sprite3.animate()
}

const renderSpriteSheet4 = () => {
  const sprite4 = new Sprite4()
  sprite4.createEnemies()
  sprite4.animate()
}

const changeSpriteSheet = (spriteSheetName) => {
  switch (spriteSheetName) {
    case SPRITE_SHEETS.SPRITE_1:
      renderSpriteSheet1()
      break;
    case SPRITE_SHEETS.SPRITE_2:
      renderSpriteSheet2()
      break;
    case SPRITE_SHEETS.SPRITE_3:
      renderSpriteSheet3()
      break;
    case SPRITE_SHEETS.SPRITE_4:
      renderSpriteSheet4()
      break;
  }
}