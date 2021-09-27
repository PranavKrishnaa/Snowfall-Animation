class Snowflake{
constructor(x,y,width,height){
   var options = {
    'restitution':0.04,
    'friction':0,
    'density':0.01
   } 
   
   this.body = Bodies.rectangle(x, y, width, height, options); 
   this.image = loadImage("snow4.webp");
   World.add(world, this.body);
   

 }
 display()
 {
   var pos = this.body.position; 
   var angle = this.body.angle; 
   push();
   translate(pos.x, pos.y); 
   rotate(angle); 
   imageMode(CENTER);
   image(this.image,0,0,this.width,this.height); 
   this.image.scale=0.05; 
   pop(); 
 }
} 
