
var questions = ["Is Iceland covered in ice?","What ocean lies to the east of US"];
var options = [["true","false"],["pacific","eastern","indian","atlantic"]];
var currentQuestion = 0;
var answers = ["false","atlantic"];



function setup() {
  // put setup code here
  createCanvas(400,400);
  console.log(options[1].length);
}

function draw() {
  // put drawing code here
  background(255);

  text(questions[currentQuestion],20,100);

  for(var i = 0; i<options[currentQuestion].length; i++){
    console.log(options[currentQuestion][i]);
    text(options[currentQuestion][i], 10 + (100*i),200);
    var currentDist = dist();


  }




}
