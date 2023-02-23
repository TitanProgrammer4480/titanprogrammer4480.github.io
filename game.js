// Create a new PixiJS application
const app = new PIXI.Application({ 
  width: 800, 
  height: 600, 
  backgroundColor: 0x1099bb 
});

// Add the PixiJS renderer to the HTML document
document.body.appendChild(app.view);

// Load the background texture
const texture = PIXI.Texture.from('background.png');

// Create a sprite with the background texture
const background = new PIXI.Sprite(texture);

// Set the position of the background sprite to (0, 0)
background.position.set(0, 0);

// Add the background sprite to the stage
app.stage.addChild(background);

// Create a new sprite with a texture
const sprite = new PIXI.Sprite.from('player.png');

// Set the position of the sprite
sprite.position.set(100, 100);

// Add the sprite to the stage
app.stage.addChild(sprite);