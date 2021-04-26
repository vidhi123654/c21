var fixedRect,movingRect;
var box1,box2,box3,box4;


function setup() {
  createCanvas(800,400);
 
  movingRect=createSprite(600,200,50,80)
  movingRect.shapeColor="red"
  fixedRect=createSprite(400,300,80,30)
  fixedRect.shapeColor="red"

  box1=createSprite(100,100,50,50)
  box2=createSprite(200,100,50,50)
  box3=createSprite(300,100,50,50)
  box4=createSprite(400,100,50,50)
  
  box1.shapeColor="red"
  box2.shapeColor="red"
  box3.shapeColor="red"
  box4.shapeColor="red"
}

function draw() {
  background(0);
  
  movingRect.x=mouseX
  movingRect.y=mouseY

if(isTouching(movingRect,box2)){
  movingRect.shapeColor="blue"
  box2.shapeColor="teal"
}
else{
  movingRect.shapeColor="red"
  box2.shapeColor="red"
}

  drawSprites();
}

