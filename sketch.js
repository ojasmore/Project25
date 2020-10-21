
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var box1,box2,box3;
var ball;

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;
  
  ground = new Ground(600,590,1200,30);

  box1 = new Box(800,475,150,200);

  box2 = new Box(740,500,20,150);
  box3 = new Box(860,500,20,150); 
  ball = new Ball(100,530,70);

	Engine.run(engine);
  
}


function draw() {
  
  Engine.update(engine);

  rectMode(CENTER);
  background(255);
  
  ground.display();
  ball.display();
  box2.display();
  box3.display();
  box1.display();

  drawSprites();
 
}

function keyPressed(){
   if(keyCode === RIGHT_ARROW){
     Matter.Body.applyForce(ball.body,ball.body.position,{x:50 , y:-100})
   }
   if(keyCode === LEFT_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:-30 , y:-100})
  }
}

