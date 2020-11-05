const engine = Matter.Engine;
const world  = Matter.World;
const body   = Matter.Bodies;

var eng;
var wor;
var ball;
var ground;


function setup() {
  createCanvas(800,400);

   eng=engine.create();
   wor=eng.world;
   var ball_options={
     restitution:2.0
   }
   ball=body.circle(400,200,50,ball_options);
   world.add(wor, ball);
   var ground_options={
     isStatic:true
   }

   ground=body.rectangle(0,350,800,10,ground_options);
   world.add(wor, ground);

}

function draw() {
  background(200); 
  engine.update(eng);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50);
  rect(ground.position.x,ground.position.y,800,10); 

  
}