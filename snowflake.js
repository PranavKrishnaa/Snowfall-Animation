class Snowflake{
constructor(x,y,r)
{
   var options = {
    'restitution':0.04,
    'friction':0,
    'density':0.01
   } 
   this.r = r;
   this.body = Bodies.circle(x, y, this.r, options);
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
    noStroke();
    ellipseMode(RADIUS);
    ellipse(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
    pop();
 }
} 
