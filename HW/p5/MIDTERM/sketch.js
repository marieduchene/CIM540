
var backgroundImage;

var cheekLPoints = [300,300];
var cheekL;

var cheekRPoints = [500,300];
var cheekR;

var mouth;
var mouthPoints = [400,500];

var chin;
var chinPoints  = [400,400];



function preload(){
    backgroundImage = loadImage("assets/backgroundImage.png");
    cheekL = loadImage("assets/cheekL.png");
    cheekR = loadImage("assets/cheekR.png");
    mouth = loadImage("assets/mouth.png");
    chin = loadImage("assets/chin.png");
}


function setup() {
  // put setup code here
  createCanvas(800,800);
}

function draw() {
  // put drawing code here
  background(255);

  image(backgroundImage,0,0);

//LEFT CHEEK//

  var checkLDist = dist(mouseX,mouseY,cheekLPoints[0],cheekLPoints[1]);
  if(checkLDist < 20){
    image(cheekL,0,0);
}

ellipse(cheekLPoints[0],cheekLPoints[1], 10,10);




//RIGHT CHEEK//
  ellipse(cheekRPoints[0],cheekRPoints[1], 10,10);

  var checkRDist = dist(mouseX,mouseY,cheekRPoints[0],cheekRPoints[1]);
  if(checkRDist < 20){
    image(cheekR,0,0);
}
//image(cheekR,0,0);



//MOUTH//
ellipse(mouthPoints[0], mouthPoints[1], 10,10);

var checkMDist = dist(mouseX,mouseY,mouthPoints[0],mouthPoints[1]);
if(checkMDist < 20){
  image(mouth,0,0);
}

//image(mouth,0,0);




//CHIN//
ellipse(chinPoints[0],chinPoints[1], 10,10);

var checkCHDist = dist(mouseX,mouseY,chinPoints[0],chinPoints[1]);
if(checkCHDist < 20){
  image(chin,0,0);
}

//image(chin,0,0);

}
