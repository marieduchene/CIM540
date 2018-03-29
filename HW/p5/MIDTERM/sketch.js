
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

var eyeL;
var eyeLPoints = [353,260];

var eyeR;
var eyeRPoints = [489,260];




var everything = false;
var everyButton;



function preload(){
    backgroundImage = loadImage("assets/backgroundImage.png");
    cheekL = loadImage("assets/cheekL.png");
    cheekR = loadImage("assets/cheekR.png");
    mouth = loadImage("assets/mouth.png");
    chin = loadImage("assets/chin.png");
    front = loadImage("assets/front.png");
    eyebrowL = loadImage("assets/eyebrowL.png");
    eyebrowR = loadImage("assets/eyebrowR.png");
    eyeL = loadImage("assets/eyeL.png");
    eyeR = loadImage("assets/eyeR.png");

}


function setup() {
  createCanvas(800,800);




  everyButton = createButton("Oh!");
  everyButton.position(250,10);
  everyButton.mousePressed(function(){


        if(everything == false){
          everything = true;
        }else{
          everything = false;
        }


      });
}



function draw() {

  background(255);

if(everything == false){
  image(backgroundImage,0,0);
}


//LEFT CHEEK//
ellipse(cheekLPoints[0],cheekLPoints[1], 10,10);

  var checkLDist = dist(mouseX,mouseY,cheekLPoints[0],cheekLPoints[1]);
  if(checkLDist < 20 || everything == true){
    image(cheekL,0,0);
    // if(everything == false){
    //   everything = true;
    // }else{
    //   everything = false;
    // }

}




//RIGHT CHEEK//
  ellipse(cheekRPoints[0],cheekRPoints[1], 10,10);

  var checkRDist = dist(mouseX,mouseY,cheekRPoints[0],cheekRPoints[1]);
  if(checkRDist < 40 || everything == true){
    image(cheekR,0,0);
}



//MOUTH//
ellipse(mouthPoints[0], mouthPoints[1], 10,10);

var checkMDist = dist(mouseX,mouseY,mouthPoints[0],mouthPoints[1]);
if(checkMDist < 40 || everything == true){
  image(mouth,0,0);
}



//CHIN//
ellipse(chinPoints[0],chinPoints[1], 10,10);

var checkCHDist = dist(mouseX,mouseY,chinPoints[0],chinPoints[1]);
if(checkCHDist < 40 || everything == true){
  image(chin,0,0);
}



//FRONT AND NOSE//
ellipse(frontPoints[0],frontPoints[1],10,10);

var checkFDist = dist(mouseX,mouseY,frontPoints[0],frontPoints[1]);
if(checkFDist < 40 || everything == true){
  image(front,0,0);
}



//LEFT EYEBROW//
ellipse(eyebrowLPoints[0],eyebrowLPoints[1],7,7);

var checkELDist = dist(mouseX,mouseY,eyebrowLPoints[0],eyebrowLPoints[1]);
if(checkELDist <40 || everything == true){
  image(eyebrowL,0,0);
}



//RIGHT EYEBROW//
ellipse(eyebrowRPoints[0],eyebrowRPoints[1],7,7);

var checkERDist = dist(mouseX,mouseY,eyebrowRPoints[0],eyebrowRPoints[1]);
if(checkERDist <40 || everything == true){
  image(eyebrowR,0,0);
}


//LEFT EYE//
ellipse(eyeLPoints[0],eyeLPoints[1],7,7);

var checkELEDist = dist(mouseX,mouseY,eyeLPoints[0],eyeLPoints[1]);
if(checkELEDist <40 || everything == true){
  image(eyeL,0,0);
}


//RIGHT EYE//
ellipse(eyeRPoints[0],eyeRPoints[1],7,7);

var checkEREDist = dist(mouseX,mouseY,eyeRPoints[0],eyeRPoints[1]);
if(checkEREDist <40) || everything == true){
  image(eyeR,0,0);
}
