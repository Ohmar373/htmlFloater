const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let player = {x :15, y: 15, width: 15, height: 15, vy: 0,color: 'blue'}; //player object created with properties, gravity 
let pipes = []; //array to hold the pipes
let spawnTimer = 0; //timer to spawn pipes




const gravity = .3; //gravity constant
const groundLevel = canvas.height - player.height; //the y position of the ground level
const jumpStrength = -4; //the strength of the player's jumpd 




let keys = {}; //object to keep track of which keys are pressed

document.addEventListener('keydown', function(event) { //event listener for keydown events
    keys[event.key] = true; //sets the key that is pressed to true
});

document.addEventListener('keyup', function(event) { //event listener for keyup events
    keys[event.key] = false; //sets the key that is released to false
});

function spawnPipe() { //function to spawn a new pipe
    const gapHeight = 80; //height of the gap for player to pass through
    const minPipeHeight = 40; //minimum height of a pipe
    
    // Random gap position
    let topPipeHeight = Math.random() * (canvas.height - gapHeight - minPipeHeight * 2) + minPipeHeight;
    let bottomPipeY = topPipeHeight + gapHeight;
    let bottomPipeHeight = canvas.height - bottomPipeY;
    
    // Top pipe
    pipes.push({x: canvas.width, y: 0, width: 30, height: topPipeHeight, color: 'black', speed: -2});
    // Bottom pipe
    pipes.push({x: canvas.width, y: bottomPipeY, width: 30, height: bottomPipeHeight, color: 'black', speed: -2});
}

function updatePipes() { //function to update the position of the pipes
    for (let i = 0; i < pipes.length; i++) {
        pipes[i].x += pipes[i].speed;

        if (pipes[i].x + pipes[i].width < 0) { //checks if the pipe is off the screen
            pipes.splice(i, 1); //removes the pipe from the array
        }
    }
}

function drawPipes() { //function to draw the pipes on the canvas
    for (let pipe of pipes) {
        ctx.fillStyle = pipe.color;
        ctx.fillRect(pipe.x, pipe.y, pipe.width, pipe.height);
    }
}

function drawPlayer() { //draws the player on the canvas
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function updatePlayerPosition() {

    if (keys['d']) player.x += 2; //moves the player to the right by 5 pixels
    if (keys['a']) player.x -= 2; //moves the player to the left by 5 pixels
    if (keys['w']) player.y -= 2; //moves the player up by 5 pixels
    if (keys['s']) player.y += 2; //moves the player down by 5 pixels
    if (keys[' ']) player.vy = jumpStrength; //makes the player jump

    player.vy += gravity; //applies gravity to the player's vertical velocity
    player.y += player.vy; //updates the player's vertical position based on its velocity

    if (player.y > groundLevel) { //checks if the player is below the ground level
        player.y = groundLevel; //sets the player's y position to the ground level
        player.vy = 0; //resets the player's vertical velocity
    }

}

function gameLoop() {

    spawnTimer++;
    if (spawnTimer > 100) {
        spawnPipe();
        spawnTimer = 0;
    }

    updatePlayerPosition();
    updatePipes();
    
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clears the canvas for the next frame
    drawPipes();
    drawPlayer();
    requestAnimationFrame(gameLoop); //calls the game loop again for the next frame
}

gameLoop(); //starts the game loop