var centerX = 350;
var centerY = 200;


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

  //front
  ellipse(300,200,50,50);
  ellipse(300,200,40,40);
  ellipse(300,200,30,30);
  ellipse(300,200,20,20);
  ellipse(300,200,10,10);

  //eyes
  ellipse(230,280,-80,80);
  ellipse(370,280,-80,80);
  ellipse(230,280,-20,20);
  ellipse(230,280,-10,10);
  ellipse(370,280,-30,30);
  ellipse(370,280,-20,20);
  ellipse(370,280,-10,10);


  //mouth
  rect(250,370,100,30);
  rect(250,370,20,30);
  rect(270,370,20,30);
  rect(290,370,20,30);
  rect(310,370,20,30);





}
