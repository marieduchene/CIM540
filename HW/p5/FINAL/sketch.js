var shape1;
var shape2;

var prevMillis = 0;

var interval = 2500;

var shapes = [];

var mic;

var micLevel;

var shapeTypes = ["balloons","cat","cherry","heart","pineapple","rainbow","smile","star","thunder"];

var backPallet = ["#FDFFBB", "#FFCCCC", "#FCB6DC", "#FCC5F8","#E7C5FC","#E1CCFF","#CCCCFF","#B4F2FC","#B6FFEA","#C2FFCF","#D6FCB6","#FCD98B","#FCB892"];

function setup() {
    createCanvas(1920, 1080);

    //shape1 = new shape(random(width), random(height), 100,200, "rect");
    //shape2 = new shape(random(width), random(height), 100,100, "ellipse");

    //shapes.push(new shape(random(width), random(height), 100,200, "rect"));

    for(var i = 0; i<=8; i++){
      shapes.push(new shape((width), (height), 100,200, "rect"));
      shapes[i].images = loadImage("assets/balloons.png");
     }

     shapes[1].images = loadImage("assets/cat.png");
     shapes[2].images = loadImage("assets/cherry.png");
     shapes[3].images = loadImage("assets/heart.png");
     shapes[4].images = loadImage("assets/pineapple.png");
     shapes[5].images = loadImage("assets/rainbow.png");
     shapes[6].images = loadImage("assets/smile.png");
     shapes[7].images = loadImage("assets/star.png");
     shapes[8].images = loadImage("assets/thunder.png");

    mic = new p5.AudioIn()
    mic.start();
    noStroke();

}




function draw() {

    micLevel = mic.getLevel() * 100;
    console.log(micLevel);

    if(micLevel > 3){
      for(var i = 0; i<shapes.length; i++){
        var curShape = int(random(0,shapeTypes.length))
        shapes[i].type = shapeTypes[curShape];
        shapes[i].x = random(0,width);
        shapes[i].y = random(0,height);
        //shapes[i].r = random(0, 255);
        //shapes[i].g = random(0, 255);
        //shapes[i].b = random(0, 255);

      }

    }

    if(micLevel > 15){
      //background(random(0, 255),random(0, 255),random(0, 255));
      var backRand = int(random(0,backPallet.length));
      background(backPallet[backRand]);
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
    this.images;

    this.display = function () {
      fill(this.r,this.g,this.b);

      if(this.type == "balloons"){
        //rect(this.x, this.y, this.width, this.height);
        push();
        translate(this.x, this.y);
        scale(1.0, this.scale);
        image(this.images, 0,0);
        pop();
      }else if(this.type == "cat"){
        push();
        translate(this.x, this.y);
        scale(this.scale);
        ellipse(this.x, this.y, this.width, this.height);
        //image(this.images, 0,0);
        pop();
      }else if(this.type == "cherry"){
        push();
        translate(this.x, this.y);
        scale(this.scale);
        ellipse(this.x, this.y, this.width, this.height);
        //image(this.images, 0,0);
        pop();
      }else if(this.type == "heart"){
        push();
        translate(this.x, this.y);
        scale(this.scale);
        ellipse(this.x, this.y, this.width, this.height);
        //image(this.images, 0,0);
        pop();
      }else if(this.type == "pineapple"){
        push();
        translate(this.x, this.y);
        scale(this.scale);
        ellipse(this.x, this.y, this.width, this.height);
        //image(this.images, 0,0);
        pop();
      }else if(this.type == "rainbow"){
        push();
        translate(this.x, this.y);
        scale(this.scale);
        ellipse(this.x, this.y, this.width, this.height);
        //image(this.images, 0,0);
        pop();
      }else if(this.type == "smile"){
        push();
        translate(this.x, this.y);
        scale(this.scale);
        ellipse(this.x, this.y, this.width, this.height);
        //image(this.images, 0,0);
        pop();
      }else if(this.type == "star"){
        push();
        translate(this.x, this.y);
        scale(this.scale);
        ellipse(this.x, this.y, this.width, this.height);
        //image(this.images, 0,0);
        pop();
      }else if(this.type == "thunder"){
        push();
        translate(this.x, this.y);
        scale(this.scale);
        ellipse(this.x, this.y, this.width, this.height);
        //image(this.images, 0,0);
        pop();
      }


    }


}

// function mousePressed() {
//   if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
//     var fs = fullscreen();
//     fullscreen(!fs);
//   }
// }
