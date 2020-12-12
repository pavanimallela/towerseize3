
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var holder,polygon,ground;
var base1,base2;
var polygon;
var slingShot;
var polygon_img;
var score=0;
var bg = "images/light.jpg";
function preload(){
    getBackgroundImage();
  polygon_img=loadImage("polygon.png");
}

function setup() {
    createCanvas(900,400);
  engine  = Engine.create();
  world = engine.world;

  
  ground = new Ground();
  base1 = new Base(390,300,250,10);
  base2 = new Base(700,200,200,10);
 
  block1 = new Block(280,275,30,40);  
  block2 = new Block(310,275,30,40);
  block3 = new Block(340,275,30,40);
  block4 = new Block(370,275,30,40);
  block5 = new Block(400,275,30,40);
  block6 = new Block(430,275,30,40);
  block7 = new Block(460,275,30,40);
  block8 = new Block(490,275,30,40)
  block9 = new Block(310,235,30,40);
  block10 = new Block(340,235,30,40);
  block11 = new Block(370,235,30,40);
  block12 = new Block(400,235,30,40);
  block13 = new Block(430,235,30,40);
  block14 = new Block(460,235,30,40);
  block15 = new Block(340,195,30,40);
  block16 = new Block(370,195,30,40);
  block17 = new Block(400,195,30,40);
  block18 = new Block(430,195,30,40);
  block19 = new Block(370,155,30,40);
  block20 = new Block(400,155,30,40);
  block21 = new Block(385,115,30,40);
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  blocks9 = new Block(700,95,30,40);
  polygon = Bodies.circle(200,200,20);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:200,y:200});
 
}

function draw() {
    if(backgroundImg)
    background(backgroundImg);
  Engine.update(engine);
  textSize(20);
  fill("blue");
 text("Score:"+score,450,50);
  ground.display();
  base1.display();
  base2.display();
  strokeWeight(2);
  stroke(15);
  fill("red");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block1.Score();
  block2.Score();
  block3.Score();
  block4.Score();
  block5.Score();
  block6.Score();
  block7.Score();
  block8.Score();
  fill("blue");
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block9.Score();
  block10.Score();
  block11.Score();
  block12.Score();
  block13.Score();
  block14.Score();
  fill("green");  
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  block15.Score();
  block16.Score();
  block17.Score();
  block18.Score();
  fill("yellow");  
  block19.Score();
  block20.Score();

  block19.display();
  block20.display();
  fill("lightblue");
  block21.display();
  block21.Score();

  fill("purple");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();

  blocks1.Score();
  blocks2.Score();
  blocks3.Score();
  blocks4.Score();
  blocks5.Score();
  fill("skyblue");
  blocks6.display();
  blocks7.display();
  blocks8.display();

  blocks6.Score();
  blocks7.Score();
  blocks8.Score();
  fill("pink")
  blocks9.display();

  blocks9.Score();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
  slingShot.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.polygon);
    }
}
async function getBackgroundImage(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
 
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11, 13);
    //console.log(hour);
 
    if (hour >= 06 && hour <= 18) {
      bg = "images/light.jpg";
    } else {
      bg = "images/dark.jpg";
    }
 
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
 }