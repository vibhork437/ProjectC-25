const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world
var ball
var street

function setup() {
 canvas = createCanvas(1200,800);
 engine =   Engine.create();
 world = engine.world;

street = loadImage("s.jpg") 
 paper = new Paper(200,740,40);
 ground = new Ground(750,750,1700,20);
ground2 = new Ground(670,640,20,200)
ground3 = new Ground(830,640,20,200)
dustbin1 = new Dustbin(750,640,20,10)
 

}

function draw(){
    background(street);
    Engine.update(engine);
    rectMode(CENTER);
    paper.display();
    ground.display();
    ground2.display();
    ground3.display();
    dustbin1.display();
}

function keyPressed(){
if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:215,y:-235});
}

}