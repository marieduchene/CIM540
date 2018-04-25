var shape1;
var shape2;

var prevMillis = 0;

var interval = 2500;

var shapes = [];

var mic;

var micLevel;

var shapeTypes = ["rect","ellipse"];

function setup() {
    createCanvas(1080, 1920);

    //shape1 = new shape(random(width), random(height), 100,200, "rect");
    //shape2 = new shape(random(width), random(height), 100,100, "ellipse");

    //shapes.push(new shape(random(width), random(height), 100,200, "rect"));

    for(var i = 0; i<5; i++){
      shapes.push(new shape(random(width), random(height), 100,200, "rect"));
    }

    mic = new p5.AudioIn()
    mic.start();
    noStroke();

}




function draw() {

    micLevel = mic.getLevel() * 100;
    console.log(micLevel);

    if(micLevel > 4){
      for(var i = 0; i<shapes.length; i++){
        var curShape = int(random(0,shapeTypes.length))
        shapes[i].type = shapeTypes[curShape];
        shapes[i].r = random(0, 255);
        shapes[i].g = random(0, 255);
        shapes[i].b = random(0, 255);
        background(random(0, 255),random(0, 255),random(0, 255));

      }
    }

    //shape1.display();
    //shape2.display();
    //shapes[0].display();

    for(var i = 0; i<shapes.length; i++){
      shapes[i].display();
    }

    if(millis() - prevMillis > interval){
      //shape1.x = random(width);
      //shape1.y = random(height);
      for(var i = 0; i<shapes.length; i++){
        shapes[i].scale = random(0,1.5); // based off of mic level
        //shapes[i].scale = micLevel;
      }
      prevMillis = millis();
      //shape1.type = "ellipse";
    }



}

function mousePressed(){
  for(var i = 0; i<shapes.length; i++){
    shapes[i].type = "ellipse";
  }
}

function shape(tempX, tempY, tempWidth, tempHeight, tempType) {

    this.x = tempX;
    this.y = tempY;
    this.width = tempWidth;
    this.height = tempHeight;
    this.type = tempType;
    this.scale = 1;
    this.r = 0;
    this.g = 0;
    this.b = 0;

    this.display = function () {
      fill(this.r,this.g,this.b);
      push();
      scale(this.scale);
      if(this.type == "rect"){
        rect(this.x, this.y, this.width, this.height);
      }else if(this.type == "ellipse"){
        ellipse(this.x, this.y, this.width, this.height);
      }

      pop();

    }


}

// function mousePressed() {
//   if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
//     var fs = fullscreen();
//     fullscreen(!fs);
//   }
// }
