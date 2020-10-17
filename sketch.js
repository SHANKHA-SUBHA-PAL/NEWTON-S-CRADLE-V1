
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const circle = Matter.Body.circle;
const Constraint = Matter.Constraint;

var bob1;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(100,200,20);
	ground = new Ground(390,50,500,60);
	string1 = new String(bob1.body,ground.body,-Bob.radius*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
bob1.display();
ground.display();
string1.display();
  
 
}



