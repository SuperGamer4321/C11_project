
var path;
var runner;
var invipath1;
var invipath2;
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runnerg = loadAnimation("runner-1.png" , "runner-2.png");

}

function setup(){
  createCanvas(390,400);
  //create sprites here
  path = createSprite(190,200);
  path.velocityY = 4;
  path.scale = 1.2;
  path.addImage("path2",pathImg);
  runner = createSprite(200,200,10,10);
  runner.scale = 0.09;
  runner.addAnimation("runnergo" , runnerg)
  invipath1 = createSprite(400,200,10,400);
  invipath2 = createSprite(-1,200,10,400);


}

function draw() {
  background("black"); 
  runner.x = World.mouseX;
  runner.bounceOff(invipath1);
  runner.bounceOff(invipath2);
  invipath1.visible = false;
  invipath2.visible = false;
  drawSprites();
  if(path.y > 400){
  path.y = 200
  }
  
}
 