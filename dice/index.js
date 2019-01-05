var player1Score= Math.floor((Math.random()*6))+1;
var player2Score= Math.floor((Math.random()*6))+1;

// Dice-roll functions
var imgSrcP1="images/dice"+player1Score+".png";

document.querySelector(".img1").setAttribute("src",imgSrcP1);

var imgSrcP2="images/dice"+player2Score+".png";

document.querySelector(".img2").setAttribute("src",imgSrcP2);

// H1 Declaration function
if (player1Score > player2Score){
  document.querySelector("h1").innerHTML="🚩 Player One Wins!";
}
else if (player2Score > player1Score){
  document.querySelector("h1").innerHTML="Player Two Wins! 🚩";
}
else if (player1Score===player2Score){
  document.querySelector("h1").innerHTML="Draw! Roll Again!";
}
