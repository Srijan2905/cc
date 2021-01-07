var fixed,moving;
function setup() {
  createCanvas(800,400);
  moving =createSprite(400, 200, 50, 50);
  fixed = createSprite(100,120,30,40);
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(keyDown("left_arrow")){
    moving.x=moving.x -3;
  }
  if(keyDown("right_arrow")){           
    moving.x=moving.x + 3;
  
  if(keyDown(up_arrow)) {
    moving.velocityX = 0;
   moving.velocityY = -2;
 }
if (keyDown("down")) {
 moving.velocityX=0;
moving.velocityY=2;
   
 }
  if (moving.x-fixed.x < fixed.width/2+moving.width/2 && fixed.x -moving.x < fixed.width/2 + moving.width/2 
    && moving.y - fixed.y < fixed.height/2 + moving.height/2 && fixed.y -moving.y < fixed.height/2 + moving.height/2){
    moving.shapeColor ='green';
    fixed.shapeColor="green";
  }
  else {
    moving.shapeColor="yellow";
    fixed.shapeColor ="yellow";

  }


}