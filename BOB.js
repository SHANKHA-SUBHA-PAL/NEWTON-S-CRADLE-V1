class Bob{ 
    constructor(x,y,radius){ 
    var options = {
      isStatic:true,
     restituition:0.3, 
     friction:0.5,
      density:1.0
    } 
    this.body = Bodies.circle(x,y,radius,options); 
    this.radius = radius;
    World.add(world, this.body); 
}
display(){

var pos = this.body.position;

push()
translate(pos.x,pos.y);
ellipseMode(CENTER);
strokeWeight(3);
fill("red");
ellipse(0,0,this.r);
pop()
}
}