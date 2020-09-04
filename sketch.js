var car,wall;
var speed,weight;

function setup() {
createCanvas(2500,1500);
car = createSprite(200, 750, 50, 30);

wall = createSprite(2000,750,30,height/2);
wall.shapeColor = color(80,80,80);

speed = Math.round(random(55,90));

weight = Math.round(random(400,1500));
}

function draw() {
  background(0,0,0);

  car.velocityX = speed;

  if(wall.x - car.x < car.width/2 + wall.width/2)
  {
    car.velocityX = 0;

    var deformation = 0.5 * weight * speed * speed / 22509;

    if(deformation > 180)
    {
      car.shapeColor = color(255,0,0);
    }
  
    if(deformation > 180 && deformation < 100)
    {
      car.shapeColor = color(230,230,230);
    }
  
    if(deformation < 100)
    {
      car.shapeColor = color(0,255,0);
    }
  }

  if(keyDown("space"))
  {
    car.x = 200;
    car.shapeColor = "gray";
    car.velocityX = speed;
  }

  drawSprites();
}