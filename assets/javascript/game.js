//Javascript file for Crystal Count Game

///////Global variables

//for tracking the score
var wins = 0;
var losses = 0;
var targetScore = "";
var playerScore = "";
var gemValue = "";


////////////Events--TBA for new game flow

//starts the game by selecting a new target number 

$(document).ready(function(){
	if(targetScore == ""){
		pickNumber();
		
	}
	//make sure the numbers the player picked are below or equal to the targetScore
	var playerEntry = event.key;
	//alert(playerEntry);
	checkNumber(playerEntry.toLowerCase());

	//tracking info for score	
	displayScore();
	
	//when there are no more chances left, the game will reset and select a new word 
	if(chancesLeft == 0){
		resetGame();
		losses++;
	}
}

/////////////Functions

//chooses random number to display to the displayTarget area number between 19-120, 19 is the start number
//see this link: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function pickNumber () {
	targetScore = return Math.floor(Math.random() * (120-19+1) + 19);
	//display the targetScore in the proper space
	$("displayTarget").append(targetScore);
	//console.log(targetScore);
}

//computer assigns a random number value to the crystals between 1-12

function assignGemValue () {
	gemValue = 

	//add the values to the buttons called gemFace class

	$(".gemFace").append("gemValue");
}

//when crystal is clicked score goes up by that images current value 

//function to chekc if the values of the crystals are equal to the target score

	//if the the playerScore === targetScore then activate wins by 1
	if(playerScore === targetScore){
		

		;wins++;} 
		//if the scores are not equal and 
	else if (playerScore>= targetScore){

		losses--;}
}); 


//when player clicks on the crystals, the value points are added to the player total score

$(".gemFace").on("click", funcition(){

	var gemValue = $(this).attr("gemValue");
	if (******)
}



//






//updates the score and other info on the display

function displayScore(){
	var score = "<p>wins: " + wins + "</p>" +
	"<p>losses: " + losses + "</p>"+; 

//document.querySelector("scoredisplay").innerHTML = score;
//how to display the score to player
document.getElementById("scoreDisplay").innerHTML = score;
}


//resets the game for the player
function resetGame(){
	targetScore = "";
	playerScore = "";
}
