// ENGINE,WORLD,BODIES
//nameSpacing:renaming of the modules or any entity
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground,box1,box2,bird,pig1,log1,box3,box4,box5,pig2,log2,log3,log4;
var img;
var sling;
var platform;
var gameState = "drag";
var s = 0;
function preload()
{
  img = loadImage('sprites/bg.png');
}
function setup() 
{
  createCanvas(1200,500);
  engine=Engine.create();
  world=engine.world;
  
  //json:javascript object notation
  //key-value pairs
var options={
    "isStatic":true

}
  ground=Bodies.rectangle(600,500,1200,20,options);
  World.add(world,ground);
  
  box1=new Box(900,400,70,70,"red");
  box2 = new Box(1100,400,70,70,"blue");
  box3 = new Box(900,320,70,70,"red");
  box4 = new Box(1100,320,70,70,"blue");
  box5 = new Box(1000,220,70,70,"blue");
  bird = new Bird(200,200);
  pig1 = new Pig(1000,450);
  pig2 = new Pig(1000,280);
  // 1 PI=180 DEGREES
  log1 = new log(1000,340,20,300,PI/2);
  log2 = new log(1000,250,20,300,PI/2);
  log3 = new log(950,240,20,150,PI/6);
  log4 = new log(1070,240,20,150,-(PI/6));
  platform = Bodies.rectangle(150,400,300,200,options);
  World.add(world,platform);
  sling = new slingshot(bird.body,{x:200,y:110});  
}

function draw() 
{
  background(img);
  textSize(22);
  text(s,1000,50);
  Engine.update(engine);
  rectMode(CENTER) 
  rect(ground.position.x,ground.position.y,1200,20)
  rect(platform.position.x,platform.position.y,300,200)
  box1.display();
  box2.display();
  pig1.display();
  pig1.score();
  box3.display();
  box4.display();
  bird.display();
  box5.display(); 
  pig2.display();
  pig2.score();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  sling.display();
  
}

//mouse events: drag and release

function mouseDragged(){
  if(gameState == "drag")
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
sling.fly()
gameState = "released"
}
function keyPressed()
{
  if(keyCode == 32)
  {
    gameState = "drag";
    sling.attach(bird.body);
    Matter.Body.setPosition(bird.body,{x:200,y:200});
    bird.array = [];
  }
}