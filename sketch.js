
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
//const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stone,ground;
var boy,boyImg;
var tree,treeImg,launcher;
//var lmango,lstone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
function preload(){
boyImg=loadImage("images/boy.png");
treeImg=loadImage("images/tree.png");
}
function setup() {
	createCanvas(3800,2000);
	engine = Engine.create();
	world = engine.world;
   boy=createSprite(600,1730,10,20);
 boy.addImage(boyImg);
 boy.scale=0.4;
 tree=createSprite(2950,1100,30,150);
 tree.addImage(treeImg);
 tree.scale=1.4;
	//Create the Bodies Here.
    stone=new Stone(300,1500,70)
   ground=new Ground(1900,1980,5600,50)
   mango1=new Mango(2970,900,70);
   mango2=new Mango(3000,700,70);
   mango3=new Mango(2800,600,70);
   mango4=new Mango(3300,500,70);
   mango5=new Mango(3200,800,70);
   mango6=new Mango(2890,400,70);
   mango7=new Mango(3400,800,70);
   mango8=new Mango(3150,400,70);
   mango9=new Mango(2700,600,70);
   mango10=new Mango(3400,900,70);
   mango11=new Mango(2400,900,70);
   mango12=new Mango(2580,850,70);
  launcher = new Launcher(stone.body,{x:360, y:1500});
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);
  
 // detectcollision();
 // keyPressed();
  //keyCode();
  //mouseDragged();
 // mouseReleased();
 detectcollision(stone,mango1);  
 detectcollision(stone,mango2);
 detectcollision(stone,mango3);
 detectcollision(stone,mango4);
 detectcollision(stone,mango5);
 detectcollision(stone,mango6);
 detectcollision(stone,mango7);
 detectcollision(stone,mango8);
 detectcollision(stone,mango9);
 detectcollision(stone,mango10);  
 detectcollision(stone,mango11);
 detectcollision(stone,mango12);                      
  drawSprites();
  
   
  stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
 mango11.display();
 mango12.display();
 launcher.display();
 fill("white");
 textSize(120);
 text("Press 'SPACE' to get the second chance!!!",300,200);

}
function detectcollision(lstone,lmango){
 // var mangoBodyPosition=lmango.body.position;
// var stoneBodyPosition=lstone.body.position;
  
  var distance=dist(lstone.body.position.x,lstone.body.position.y,lmango.body.position.x,lmango.body.position.y)
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
 // console.log("released");
  launcher.fly();
}
function keyPressed(){
if( keyCode === 32){
Matter.Body.setPosition(stone.body,{x:235,y:50})
launcher.attach(stone.body);
}
}