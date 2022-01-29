const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var backgroundImage;
var engine,world;
var flake1, flake2,flake3,flake4,flake5;
var snow;

function preload(){
backgroundImage = loadImage("snow3.jpg");

}

function setup() {
  createCanvas(1360,663);


engine = Engine.create();
world = World.world;

flake1 = new Snow(random(0,600),random(0,600));



}

function draw() {
  background(backgroundImage);  
  drawSprites();
 
  Engine.update(engine);

flake1.display();

}

