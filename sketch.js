var background, backgroundImg;
var snowflakes;

function preload(){
backgroundImg = loadImage("snow1.jpg");1
}

function setup() {
  createCanvas(800,600);
 
  snowflakes = new Snowflake(200,200,10);

}

function draw() {
  background(backgroundImg);  

  
  if (frameCount % 100 === 0) {
    snowflakes.push(new Snowflake(random(width/2-10, width/2+10),10,10));
    }

    snowflakes.display();
    
  drawSprites();
}

