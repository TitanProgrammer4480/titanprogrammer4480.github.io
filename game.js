// Create a new PixiJS application
const app = new PIXI.Application({ 
    width: window.innerWidth, 
    height: window.innerHeight, 
    backgroundColor: 0x1099bb 
});

// Add the PixiJS renderer to the container element
document.getElementById("container").appendChild(app.view);

// Load the background image
const backgroundTexture = PIXI.Texture.from("images/background.png");

// Create the background sprite
const background = new PIXI.Sprite(backgroundTexture);

// Set the size of the background sprite to fill the entire window
background.width = window.innerWidth;
background.height = window.innerHeight;

// Add the background sprite to the stage
app.stage.addChild(background);

// Load the player texture
const playerTexture = PIXI.Texture.from("images/player.png");

// Create the player sprite
const player = new PIXI.AnimatedSprite([playerTexture]);
player.animationSpeed = 0.1;

// Set the player sprite's initial position and scale
player.anchor.set(0.5);
player.x = app.renderer.width / 2;
player.y = app.renderer.height / 2;
player.scale.set(Math.min(app.renderer.width, app.renderer.height) / 200);

// Add the player sprite to the stage
app.stage.addChild(player);

// Define the player's speed and velocity
const playerSpeed = 5;
let playerVelocity = { x: 0, y: 0 };

// Set up the keyboard state
const keyboard = {};

// Listen for keyboard events
document.addEventListener("keydown", (event) => {
    keyboard[event.key] = true;
});

document.addEventListener("keyup", (event) => {
    keyboard[event.key] = false;
});

// Set up the game loop
app.ticker.add(() => {
    // Move the player according to the keyboard state
    if (keyboard["w"]) {
        playerVelocity.y = -playerSpeed;
    } else if (keyboard["s"]) {
        playerVelocity.y = playerSpeed;
    } else {
        playerVelocity.y = 0;
    }

    if (keyboard["a"]) {
        playerVelocity.x = -playerSpeed;
    } else if (keyboard["d"]) {
        playerVelocity.x = playerSpeed;
    } else {
        playerVelocity.x = 0;
    }

    player.x += playerVelocity.x;
    player.y += playerVelocity.y;

    // Update the player animation
    if (playerVelocity.x !== 0 || playerVelocity.y !== 0) {
        player.play();
    } else {
        player.stop();
    }
});

// Load the button texture
const buttonTexture = PIXI.Texture.from("images/main_menu_button.");

// Create the button sprite
const button = new PIXI.Sprite(buttonTexture);

// Set the button sprite's initial position and scale
button.anchor.set(0, 0);
button.x = 10;
button.y = 10;
button.scale.set(0.5);

// Add the button sprite to the stage
app.stage.addChild(button);

// Create the main menu screen
const mainMenu = new PIXI.Container();

// Create the main menu background
const mainMenuBackground = new PIXI.Graphics();
mainMenuBackground.beginFill(0x000000);
mainMenuBackground.drawRect(0, 0, app.renderer.width, app.renderer.height);
mainMenuBackground.endFill();

// Add the main menu background to the main menu screen
mainMenu.addChild(mainMenuBackground);

// Create the main menu title
const mainMenuTitle = new PIXI.Text("Main Menu", {fontSize: 48, fill: 0xffffff});
mainMenuTitle.anchor.set(0.5);
mainMenuTitle.x = app.renderer.width / 2;
mainMenuTitle.y = app.renderer.height / 2 - 100;

// Add the main menu title to the main menu screen
mainMenu.addChild(mainMenuTitle);

// Create the main menu play button
const mainMenuPlayButton = new PIXI.Text("Play", {fontSize: 24, fill: 0xffffff});
mainMenuPlayButton.anchor.set(0.5);
mainMenuPlayButton.x = app.renderer.width / 2;
mainMenuPlayButton.y = app.renderer.height / 2 +
