//alert ("Working!");

//player1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImg = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImgSrc = "images/" + randomDiceImg; //images/dice1.png - images/dice6.png 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImgSrc);

//player2
var randomNo2 = Math.floor(Math.random() * 6)+ 1;

var randomImgsrc2 = "images/dice" + randomNo2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImgsrc2);

//h1 changes
if (randomNumber1 > randomNo2){
    document.querySelector("h1").innerHTML = "🏁Player 1 won!"
}
else if (randomNo2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 won!🏁"
}
else {
    document.querySelector("h1").innerHTML = "🏳Its a draw!🏳"
}
