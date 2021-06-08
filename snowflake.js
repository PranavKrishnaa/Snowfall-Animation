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
   World.add(world, this.body);
   this.image = loadImage("snow4.webp");

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
    ellipse(0,0,this.r,this.r);
    pop();
 }
} 
