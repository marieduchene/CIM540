var slide0;
var slide1;
var slide2;
var slide3;
var slide4;

var slideIndex = 0;
var slideArray = [];


function setup() {
    createCanvas(1000,1000);

    slideArray.push(loadImage("images/slide.jpg"));
    slideArray.push(loadImage("images/slide2.jpg"));
    slideArray.push(loadImage("images/slide3.jpg"));
    slideArray.push(loadImage("images/slide4.jpg"));
    slideArray.push(loadImage("images/slide5.jpg"));

}

function draw() {


    image(slideArray[slideIndex],0,0);


}

function mousePressed(){
    slideIndex = slideIndex + 1;
//    if (slideIndex = slideArray - 1){
//        slideIndex = 0;
//    }


}
