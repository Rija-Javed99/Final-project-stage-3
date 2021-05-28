var backgroundImage;
var bg;
var astronaut, astronautImg;


function preload(){
backgroundImage=loadImage("images/bg4.jpg")
astronautImg=loadAnimation("images/astronaut1.png","images/astronaut2.png","images/astronaut3.png","images/astronaut4.png","images/astronaut5.png","images/astronaut6.png","images/astronaut7.png","images/astronaut8.png","images/astronaut9.png","images/astronaut10.png");
}
function setup() {
  createCanvas(700,300);
  
 bg=createSprite(500,110.1500,1010)
 bg.addImage(backgroundImage)
 bg.scale=1.3

 bg.velocityX=-3

 astronaut = createSprite(70,250, 40,70);
 astronaut.addAnimation("running", astronautImg)
 astronaut.scale=0.3

}

function draw() {
 background(255);
  
 if(bg.x <110){
  bg.x = 700;
}


  drawSprites();
 
}

