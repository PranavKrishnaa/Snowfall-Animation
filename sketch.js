const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var background, backgroundImg;
var snowflakes=[];

function preload(){
backgroundImg = loadImage("snow1.jpg");
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

  
  
  if(frameCount%60===0){ 
    snowflakes.push(new Snowflake(random(width/2-30, width/2+30), 10,10)); 
  } 
  for (var j = 0; j < snowflakes.length; j++) {
     snowflakes[j].display();
  } 

    snowflake.display();
    
  drawSprites();
}

