
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var chao;
var pilarE;
var pilarD;
var bola;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	chao = new Chao(400, 670, 800, 15);
	pilarE = new Chao(620, 610, 15, 120);
	pilarD = new Chao(760, 610, 15, 120);

	bola = Bodies.circle(100, 600, 30);
	World.add(world, bola);
	ellipseMode(RADIUS);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  chao.draw();
  pilarE.draw();
  pilarD.draw();
  ellipse(bola.position.x, bola.position.y, 30, 30)
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(bola, bola.position, {x: 0.09, y: -0.2});
	}
}