var trex, trexrunningImage
var ground, groundImage
function preload () {
  groundImage=loadImage ("ground2.png")
  trexrunningImage= loadAnimation("trex1.png","trex3.png","trex4.png")
}
function setup() {
  trex= createSprite(50,350,20,50);
  trex.addAnimation("running",trexrunningImage)
  trex.scale=0.5 ;
  ground= createSprite(200,380,400,10);
  ground.addImage (groundImage);
  ground.velocityX= -2;
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (keyDown("space")){
    trex. velocityY=-10;
  }
   trex.velocityY= trex.velocityY+ 0.5;
  trex.collide(ground);
  if (ground.x<0) {
    ground.x= ground.width/2;
  }
    
  drawSprites();
}