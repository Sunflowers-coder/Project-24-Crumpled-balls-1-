
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,600,15);
	ground = new Ground(400,630,800,20);
	/*rect1 = new Dustbin(550,620,20,100);
    rect2 = new Dustbin(610,660,100,20);
	rect3 = new Dustbin(670,620,20,100);*/
	dustbin = new Dustbin(400, 390, 100, 10);
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);

  rectMode(CENTER);

  background(0);

  paper.display();
  ground.display();
  dustbin.display();

  /*rect1.display();
  rect2.display();
  rect3.display();*/
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:35,y:-35});
	}
}


