class String{
constructor(bodyA,bodyB,offsetX,offsetY){

this.offsetX = offsetX;
this.offsetY = offsetY;

var options = {
bodyA:bodyA,
bodyB:bodyB,
length:10,
stiffness:0.2,
pointB :{x:this.offsetX,y:this.offsetY}
}


this.String = Constraint.create(options);
World.add(world,this.String);

}
display(){

var pointA = this.chain.bodyA.position;
var pointB = this.chain.bodyB.position;
strokeWeight(4);
stroke("red")
line(pointA.x,pointA.y,pointB.x,pointB.y);

}
}