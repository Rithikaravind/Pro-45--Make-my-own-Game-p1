var hospital, forest,india, london, newyork, runner1, tokyo;



function preload(){
  hospital=loadImage("hospital.jpg");
  forest=loadImage("forest.jpg");
  india=loadImage("india.jpg");
  london=loadImage("london.jpg");
  newyork=loadImage("newyork.jpg");
  tokyo=loadImage("tokyo.jpg");
  runner1=loadAnimation("Run1.png","Run2.png","Run3.png","Run4.png","Run5.png","Run6.png");



}

function setup() {
  createCanvas(1200,400)
  createSprite(400, 200, 50, 50);
}

function draw() {
  background("orange");
  drawSprites();
}
