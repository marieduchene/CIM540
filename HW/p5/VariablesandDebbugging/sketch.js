var number1 = 1;
var number2 = 2;
var letter1 = 'a';
var letter2 = 'b';
var greeting = "hello";
var greeting2 = "goodbye";
var truthordare = true;
var truthordare2 = false;

function setup() {
  // put setup code here
  console.log("Hello World");
  console.log(number1);
  console.log("The value of letter2");
  console.log(number1 + number2);

  var addNumber = number1 + number2;
  console.log(addNumber);


}

function draw() {
  // put drawing code here\
  //console.log("mouseX: " + mouseX);
  //This will not work, addNumber is not in draws scope, console.log(addNumber);



}
