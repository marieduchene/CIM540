var centerX = 350;
var centerY = 200;

var eyesBigger = 20;
var mouthHeight = 30;
var handHigher = 30;
var feetMove = 30;



function setup() {
  // put setup code here

  createCanvas(650,900);
  background(255,150,150);

  //centerX = mouseX;
  //centerY = mouseY;

  centerX = width/2;
  centerY = height/2;
  stroke(2);
  strokeWeight(4);
}

function draw() {
  // put drawing code here

  //centerX = mouseX;
  //centerY = mouseY;

  //face
  ellipse(300,300,300,300);

  //weirdfront
  ellipse(300,200,50,50);
  ellipse(300,200,40,40);
  ellipse(300,200,30,30);
  ellipse(300,200,20,20);
  ellipse(300,200,10,10);

  eyesBigger = map(mouseX,0, width, -30, 30);
  //eyes
  fill(100,450,14);
  ellipse(230,280,80 + eyesBigger,80+ eyesBigger);
  ellipse(370,280,80+ eyesBigger,80+ eyesBigger);
  ellipse(230,280,20+ eyesBigger,20+ eyesBigger);
  ellipse(230,280,10+ eyesBigger,10+ eyesBigger);
  ellipse(370,280,30+ eyesBigger,30+ eyesBigger);
  ellipse(370,280,20+ eyesBigger,20+ eyesBigger);
  ellipse(370,280,10+ eyesBigger,10+ eyesBigger);


  mouthHeight = map(mouseX, 0, width,0,80);
  //mouth
  rect(250,370,100,mouthHeight);
  rect(250,370,20,mouthHeight);
  rect(270,370,20,mouthHeight);
  rect(290,370,20,mouthHeight);
  rect(310,370,20,mouthHeight);


  //body
  fill(55,120,100);
  rect(150,450,300,400);

  //buttons
  fill(100,100,500);
  ellipse(300,500,20 ,20);
  ellipse(300,550,20 ,20);
  ellipse(300,600,20 ,20);
  ellipse(300,650,20 ,20);
  ellipse(300,700,20 ,20);

  //legs
  rect(150,750,150,100);
  rect(300,750,150,100);

  feetMove = map(mouseX,0,width,0,50);
  rect(120 +feetMove,850,150,30);
  rect(330 +feetMove,850,150,30);

  handHigher = map(mouseY, 0, height, 0,30);
  ellipse(85,600,130 +handHigher,40 +handHigher);
  ellipse(515,600,130 +handHigher,40 +handHigher);

  line(400,450, 400, 750);



}
