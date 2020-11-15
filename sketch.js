const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var divison=[];
var particles=[];
var plinko=[];
var divisonHeight=300;
var score=0;
function setup() {
  createCanvas(800,800);
   engine=Engine.create();
   world=engine.world;
   ground=new Ground(width/2,height,width,20);
   for(var k=0;k<=width;k=k+80){
    divison.push(new Divison(k,height-divisonHeight/2,10,divisonHeight));
  }
  for(var j=75;j<=width;j=j+50){
    plinko.push(new Plinko(j,75));
  }
  for(var j=50;j<=width-10;j=j+50){
    plinko.push(new Plinko(j,175));
  }
  for(var j=75;j<=width;j=j+50){
    plinko.push(new Plinko(j,275));
  }
  for(var j=50;j<=width-10;j=j+50){
    plinko.push(new Plinko(j,375));
  }

}

function draw() {
  background(0);  
  textSize(20)
  text("Score:"+score,20,30);
  Engine.update(engine);
 ground.display();
 if(frameCount%60===0){
  particles.push(new Particle(random(width/2-30,width/2+30),10,10));
  score++;
}
 for(var i=0; i<plinko.length;i++){
   plinko[i].display();
 }
    
    for(var k=0;k<divison.length;k++){
      divison[k].display();
    }
}