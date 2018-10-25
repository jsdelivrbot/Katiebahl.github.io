var player; 
var playerImage;
var enemy; 
var enemyImage;
var isGameOver; 
var backgroundImage; 

function preload () {
    playerImage = loadImage ("https://surrogate.hackedu.us/i.imgur.comN5uCbDu.png");
    enemyImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
    backgroundImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png");
}

function setup() {
    isGameOver = false; 
    createCanvas(500, 500);
    player = createSprite(width/2, height-25, 50, 50);
    player.addImage(playerImage);
    enemy = createSprite(width/2,0,10,30);
    enemy.addImage(enemyImage);
    enemy.rotationSpeed = 4.0;
}

function draw() {
    if (isGameOver) {
        gameOver();
    } else {
        if (enemy.overlap(player)) {
            isgameOver = true;
    }
    background (0,0,100);
    if(keyDown(RIGHT_ARROW) && player.position.x < width-25) {
        player.position.x = player.postion.x +1; 
    }
    if(keyDown(LEFT_ARROW) && player.position.x > 25){
        player.position.x = player.position.x -1;
    }
    enemy.position.y = enemy.position.y + 3; 
    if (enemy.position.y > height) {
        enemy.position.y = 0;
        enemy.position.x = random (5, width-5);
    }
    drawSprites();
    }
}

function gameOver () {
    background(0);
    textAlign(CENTER);
    fill("white");
    text("Game Over!", width/2, height/2);
    text("Click anywhere to try again", width/2, 3*height/4);
}

function mouseClicked () {
    if (isGameOver) {
        isGameOver = false; 
        player.position.x=width/2;
        player.position.y =height-25;
        enemy.position.x = width/2; 
        enemy.position.y = 0;
    }
}