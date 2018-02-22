
var targetPosX = [0,200,400];

var targetPosY = [0,200];

var imageSize = 200;

  function


function setup(){
  createCanvas(600,400);
  console.log("First Position in targetPosX" + targetPosX[0]);
  console.log("3rd Position in targetPosX" + targetPosX[2]);


}



function draw (){
  fill(0);
  rect(targetPosX[0], targetPosY[0], imageSize, imageSize);
  rect(targetPosX[1], targetPosY[0], imageSize, imageSize);
  rect(targetPosX[2], targetPosY[0], imageSize, imageSize);

  if(mouseX >= targetPosX[0] && mouseX < mouseX < targetPosX[1] && mouseY >= targetPosY[0] && mouseY < targetPosY[1]){
      console.log("Box 1");
      image(pics[0], targetPosX[0], targetPosY[0]);
  }


  if(mouseX >= targetPosX[1] && mouseX < targetPosX[2] && mouseY >= targetPosY[0] && mouseY < targetPosY[1]){
      console.log("Box 2");
  }


  if(mouseX >= targetPosX[2] && mouseX < targetPosX[3] && mouseY >= targetPosY[0] && mouseY < targetPosY[1]){
      console.log("Box 3");
  }



}
