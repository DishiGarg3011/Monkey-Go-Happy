
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var survivalTime = 0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(400, 400);
  
  monkey = createSprite(50,300,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.15;

  ground = createSprite(300,350,400,10);
  ground.x = ground.width /2;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
background("white");
  
  textSize (20);
  fill("black");
  text("Survival Time: "+ survivalTime, 130 ,50);
  survivalTime = survivalTime + Math.round(getFrameRate()/65);
  
  monkey.collide (ground);
  
  if(keyDown("space") && monkey.y >= 290) {
      monkey.velocityY = -15;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
  
   createBanana();
   createObstacles();
  
  
drawSprites();  
  
}


function createBanana(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(400,120,40,10);
    banana.y = Math.round(random(180,300));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 250;
    
   bananaGroup.add(banana);
  }
  
}
  
function createObstacles() {
  
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(400,310,10,40);
     obstacle.velocityX = -5;
     obstacle.addImage(obstaceImage);
     obstacle.scale = 0.2;
     obstacle.velocityX = -3;
     obstacle.lifetime = 250;
    
   obstacleGroup.add(obstacle);
    
  
  }
}

