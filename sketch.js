
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	
	paper=new Paper(100,600,10)

	ground=new Ground(400,680,800,20)

	leftSide=new DustBin(550,620,20,100)
	bottom=new DustBin(610,660,100,20)
	rightSide=new DustBin(670,620,20,100)
 

	
	World.add(world,ground)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  paper.display();
  ground.display();
  leftSide.display();
  bottom.display();
  rightSide.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.position,{x: 15,y:-15})
	}
}


