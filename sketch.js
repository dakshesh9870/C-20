//Declaring variales 
var tom , catimg1, catimg2, catimg3 ; 
var jerry, mouseimg1, mouseimg2, mouseimg3, mouseimg4 ; 
var garden , gardenimg ; 
var bg ; 
var moimg1, mouse ; 


function preload() {
    //load the images here
    bg=loadImage("images/garden.png");
    catimg1=loadAnimation("images/cat1.png");
    catimg2=loadAnimation("images/cat2.png", "images/cat3.png");
    catimg3=loadAnimation("images/cat4.png")
    
    moimg1=loadAnimation("images/mouse2.png", "images/mouse3.png");
    
}

function setup(){
    createCanvas(800,600);
    //create tom and jerry sprites here
    tom= createSprite(400,510,50,50);
    tom.addAnimation("tomSleeping", catimg1); 
    tom.scale= 0.1 ; 
    tom.x= 710 ;

    mouse = createSprite(60,510,50,50);
    mouse.addAnimation("mousePlaying", moimg1);
    mouse.scale= 0.1;
    mouse.frameDelay= 20;
}

function draw(){
   background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - mouse.x < (tom.width - mouse.width/2)){
        tom.velocityX= 0;
        tom.addAnimation("catCaught",catimg3);
        tom.changeAnimation("catCaught");
        tom.x= 300;
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
  tom.velocityX= -5;
  tom.addAnimation("catrunning", catimg2);
  tom.changeAnimation("catrunning"); 
  tom.frameDelay= 25;
  }

}
