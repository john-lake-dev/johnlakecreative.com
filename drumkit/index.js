var numberOfDrumButtons=document.querySelectorAll(".drum").length;


// Detects button presses

for(var a=0;a<numberOfDrumButtons;a++){
  document.querySelectorAll(".drum")[a].addEventListener("click",function(){
    var buttonInnerHTML= this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    console.log (buttonInnerHTML);
});
}


// Detects keyboard presses

addEventListener("keypress", function(event){
    console.log (event.key);
    makeSound(event.key);
    buttonAnimation(event.key);
});

// Makes the sounds

function makeSound(key){
    switch(key){
      case "w":
          var tom1 = new Audio("drumkit/sounds/tom-1.mp3");
          tom1.play();
        break;

      case "a":
          var tom2 = new Audio("drumkit/sounds/tom-2.mp3");
          tom2.play();
        break;

      case "s":
          var tom3 = new Audio("drumkit/sounds/tom-3.mp3");
          tom3.play();
        break;

      case "d":
          var tom4 = new Audio("drumkit/sounds/tom-4.mp3");
          tom4.play();
        break;

      case "j":
          var snare = new Audio("drumkit/sounds/snare.mp3");
          snare.play();
        break;

      case "k":
          var crash = new Audio("drumkit/sounds/crash.mp3");
          crash.play();
        break;

      case "l":
          var kickDrum = new Audio("drumkit/sounds/kick-bass.mp3");
          kickDrum.play();
        break;
    }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
      activeButton.classList.remove("pressed");
     }, 100);
  }
