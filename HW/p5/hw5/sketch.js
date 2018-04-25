var song;
var sliderRate;
var sliderPan;

//function preload() {
  //song = loadSound("Deep Chills & MAZE - Still Think About You.mp3");
//}

function setup() {
  createCanvas(600,600);
  song = loadSound("Deep Chills & MAZE - Still Think About You.mp3", loaded);
  sliderRate = createSlider(0,1.5,1,0.01);
  song.setVolume(0.5);
  sliderPan = createSlider(-1,1,0.5,0.01);
  //song.play();
  //song.setVolume(0.6);
}

function loaded(){
  song.play();
}

function draw() {
  background(random(225));
  song.pan(sliderPan.value());
  song.pan(sliderRate.value());
}
