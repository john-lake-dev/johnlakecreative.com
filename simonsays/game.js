var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started= false;

var buttonColors = ["green","red","yellow","blue"];

var greenSound = new Audio("simonsays/sounds/green.mp3");
var redSound = new Audio("simonsays/sounds/red.mp3");
var yellowSound = new Audio("simonsays/sounds/yellow.mp3");
var blueSound = new Audio("simonsays/sounds/blue.mp3");
var wrongSound = new Audio("simonsays/sounds/wrong.mp3");


// GREEN
$(".green").click(function(){
  $(".green").addClass("pressed");
  greenSound.play();
  userChosenColor = "green";
  userClickedPattern.push(userChosenColor);
  setTimeout(function(){$(".green").removeClass("pressed");}, 100);
  checkAnswer(userClickedPattern.length-1);
});
// RED
$(".red").click(function(){
  $(".red").addClass("pressed");
  redSound.play();
  userChosenColor = "red";
  userClickedPattern.push(userChosenColor);
  setTimeout(function(){$(".red").removeClass("pressed");}, 100);
  checkAnswer(userClickedPattern.length-1);
});
// YELLOW
$(".yellow").click(function(){
  $(".yellow").addClass("pressed");
  yellowSound.play();
  userChosenColor = "yellow";
  userClickedPattern.push(userChosenColor);
  setTimeout(function(){$(".yellow").removeClass("pressed");}, 100);
  checkAnswer(userClickedPattern.length-1);
});
// BLUE
$(".blue").click(function(){
  $(".blue").addClass("pressed");
  blueSound.play();
  userChosenColor = "blue";
  userClickedPattern.push(userChosenColor);
  setTimeout(function(){$(".blue").removeClass("pressed");}, 100);
  checkAnswer(userClickedPattern.length-1);
});

// Pattern generator
function nextSequence(){
  userClickedPattern=[];
  level ++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  if (randomChosenColor=="red"){
    redSound.play();
  }
  if (randomChosenColor=="green"){
    greenSound.play();
  }
  if (randomChosenColor=="yellow"){
    yellowSound.play();
  }
  if (randomChosenColor=="blue"){
    blueSound.play();
  }
  $("#"+randomChosenColor).addClass("pressed");
  setTimeout(function(){$("#"+randomChosenColor).removeClass("pressed");}, 100);
  console.log(randomChosenColor);
}

// Answer Check
function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");

    if (userClickedPattern.length === gamePattern.length){

      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  }
  else{
    failure();
  }
}

// "Start" key listener
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    setTimeout(function(){nextSequence();},500);
    started = true;
  }
  else{
    console.log("Game's Already Started!");
  }
});

// failure animations/sounds
function failure(){
  console.log("FAILURE");
  $("body").addClass("game-over");
  wrongSound.play();
  setTimeout(function(){$("body").removeClass("game-over");}, 200);
  $("h1").text("GAME OVER. Press any key to restart");
  started=false;
  gamePattern=[];
  userClickedPattern=[];
  level=0;
}
