var shape1;
var shape2;

var prevMillis = 0;

var interval = 5000;

var shapes = [];

function setup() {
    createCanvas(400, 400);
    

    //shape1 = new shape(random(width), random(height), 100,200, "rect");
    //shape2 = new shape(random(width), random(height), 100,100, "ellipse");

    //shapes.push(new shape(random(width), random(height), 100,200, "rect"));

    for(var i = 0; i<2; i++){
      shapes.push(new shape(random(width), random(height), 100,200, "rect"));
    }

}

function draw() {
    background(255);
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
        shapes[i].scale = random(0,1.5);
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

    this.display = function () {
      fill(0);
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
