var addButton = document.getElementById("add");
var subtractButton = document.getElementById("subtract");
var multiplyButton = document.getElementById("multiply");
var divideButton = document.getElementById("divide");
var answerDiv = document.getElementById("answer");



addButton.addEventListener("click", add);
subtractButton.addEventListener("click",subtract);
multiplyButton.addEventListener("click",multiply);
divideButton.addEventListener("click",divide);

function add(){
  var numberOne = parseInt(document.getElementById("numberone").value);
  
  var numberTwo = parseInt(document.getElementById("numbertwo").value);

  var answer = numberOne + numberTwo;
  answerDiv.textContent = answer;
}

function subtract(){
  var numberOne = parseInt(document.getElementById("numberone").value);
  
  var numberTwo = parseInt(document.getElementById("numbertwo").value);

  var answer = numberOne - numberTwo;
  answerDiv.textContent = answer;
}

function multiply(){
  var numberOne = parseInt(document.getElementById("numberone").value);
  
  var numberTwo = parseInt(document.getElementById("numbertwo").value);

  var answer = numberOne * numberTwo;
  answerDiv.textContent = answer;
}

function divide(){
  var numberOne = parseInt(document.getElementById("numberone").value);
  
  var numberTwo = parseInt(document.getElementById("numbertwo").value);

  var answer = numberOne + numberTwo;
  answerDiv.textContent = answer;
}