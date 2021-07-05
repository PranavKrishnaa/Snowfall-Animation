const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var background, backgroundImg;
var snowflake;

function preload(){
backgroundImg = loadImage("snow1.jpg");1
}

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

  snowflakes = new Snowflake(200,200,10);

  if (frameCount % 60 === 0) {
    snowflake.push(new Snowflake(random(width/2-10, width/2+10),10,10));
    }

}

function draw() {
  background(backgroundImg);  

  
  
    for (var h = 0; h<snowflakes.length; h++) {
      snowflakes[h].display();
    }

    snowflake.display();
    
  drawSprites();
}

