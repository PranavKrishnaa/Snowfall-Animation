var snowflake, snowflakeImg, bg;

function preload(){
bg = loadImage("snow3.jpg");
snowflakeImg = loadImage("snow4.webp");
}

function setup() {
  createCanvas(800,400);
 
}

function draw() {
  background(bg);  
  createSnowflakes();
  drawSprites();
}
 
function createSnowflakes(){
  if(frameCount % 15 === 0){
    snowflake = createSprite(random(0,800),0,50,50);
    snowflake.velocityX = 0.25;
    snowflake.velocityY = 2;
    snowflake.addImage(snowflakeImg);
    snowflake.scale = 0.1;
  }
}