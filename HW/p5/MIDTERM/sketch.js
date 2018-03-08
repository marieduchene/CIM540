
var backgroundImage;

var cheekLPoints = [335,350];
var cheekL;

var cheekRPoints = [515,350];
var cheekR;

var mouth;
var mouthPoints = [425,425];

var chin;
var chinPoints  = [425,500];

var front;
var frontPoints = [425,180];

var eyebrowL;
var eyebrowLPoints = [340,217];

var eyebrowR;
var eyebrowRPoints = [490,215];



function preload(){
    backgroundImage = loadImage("assets/backgroundImage.png");
    cheekL = loadImage("assets/cheekL.png");
    cheekR = loadImage("assets/cheekR.png");
    mouth = loadImage("assets/mouth.png");
    chin = loadImage("assets/chin.png");
    front = loadImage("assets/front.png");
    eyebrowL = loadImage("assets/eyebrowL.png");
    eyebrowR = loadImage("assets/eyebrowR.png");

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
ellipse(cheekLPoints[0],cheekLPoints[1], 10,10);

  var checkLDist = dist(mouseX,mouseY,cheekLPoints[0],cheekLPoints[1]);
  if(checkLDist < 20){
    image(cheekL,0,0);
}






//RIGHT CHEEK//
  ellipse(cheekRPoints[0],cheekRPoints[1], 10,10);

  var checkRDist = dist(mouseX,mouseY,cheekRPoints[0],cheekRPoints[1]);
  if(checkRDist < 40){
    image(cheekR,0,0);
}
//image(cheekR,0,0);



//MOUTH//
ellipse(mouthPoints[0], mouthPoints[1], 10,10);

var checkMDist = dist(mouseX,mouseY,mouthPoints[0],mouthPoints[1]);
if(checkMDist < 40){
  image(mouth,0,0);
}

//image(mouth,0,0);


//CHIN//
ellipse(chinPoints[0],chinPoints[1], 10,10);

var checkCHDist = dist(mouseX,mouseY,chinPoints[0],chinPoints[1]);
if(checkCHDist < 40){
  image(chin,0,0);
}


//image(chin,0,0);

//FRONT AND NOSE//
ellipse(frontPoints[0],frontPoints[1],10,10);

var checkFDist = dist(mouseX,mouseY,frontPoints[0],frontPoints[1]);
if(checkFDist < 40){
  image(front,0,0);
}


//LEFT EYEBROW//
ellipse(eyebrowLPoints[0],eyebrowLPoints[1],7,7);

var checkELDist = dist(mouseX,mouseY,eyebrowLPoints[0],eyebrowLPoints[1]);
if(checkELDist <40){
  image(eyebrowL,0,0);
}


//RIGHT EYEBROW//
ellipse(eyebrowRPoints[0],eyebrowRPoints[1],7,7);

var checkERDist = dist(mouseX,mouseY,eyebrowRPoints[0],eyebrowRPoints[1]);
if(checkERDist <40){
  image(eyebrowR,0,0);
}







}
