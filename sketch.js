var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;

var obstaclesGroup,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6;








var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  obstacle1 = loadimage("obstacle1.png")
 obstacle2 = loadimage("obstacle2.png")
  obstacle3 = loadimage("obstacle3.png")
  obstacle4 = loadimage("obstacle4.png")
  obstacle5 = loadimage("obstacle5.png")
  obstacle6 = loadimage("obstacle6.png")
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  score = 0
  
}

function draw() {
  background(180);
  text ("pontos:" + score ,500,50);
   score = score + Math.round(frameCount/60)
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //gerar as nuvens
  spawnClouds();
  spawnObstacles();
  
  drawSprites();
  
}
function spawnObstacles (){
  if (frameCount % 60 === 0){
    var obstacle = createSprite (400,165,10,40);
    obstacle.velocityX=-6
    
  var rand = Math.round(random(1,6)):
  switch(rand) {
    case 1 : obstacle.addImage(obstacle1);
                break;
    
    
    case 2 : obstacle.addImage(obstacle2);
                break;
    
    
    case 3 : obstacle.addImage(obstacle3);
                break;
    
    
    case 4 : obstacle.addImage(obstacle4);
    
                break;
    case 5 : obstacle.addImage(obstacle5);
                break;
    
    
    case 6 : obstacle.addImage(obstacle6);
                break;
  
    default : break;
  }
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
  }
  }
function spawnClouds() {
  //escreva o código aqui para gerar as nuvens
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //atribua tempo de vida à variável
    cloud.lifetime = 200;
    
    //ajuste a profundidade
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

