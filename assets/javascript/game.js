//Javascript file for Crystal Count Game

///////Global variables

//for tracking the score
var wins = 0;
var losses = 0;
//for tracking the taregt score, player's current score and value of the gems
var targetScore = 0;
var playerScore = 0;
var gems = [];//these are preset- values? or 1-12? 


/////////////Functions

//chooses random number to display to the displayTarget area number between 19-120, 19 is the start number
//see this link: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function pickNumber () {
	targetScore = Math.floor(Math.random() * (120-19+1) + 19);
	//display the targetScore in the proper space
	$("#displayTargetBox").html(targetScore);
}

//computer assigns random value to the four gems, a number from 1-12 
function randomGemValue () {
	return	Math.floor(Math.random() * 12 + 1);
}

//attach the values to the gems (random number from 1-12) 
function setupGemValues(){

	//need to fill the array with 4 random numbers from 1-12 
	//need to get rid of doubles??
	for (var gemIndex = 0; gemIndex < 4; gemIndex++){
		///if(gems[0] == )
		//Push a random number to the gems array
		gems.push(randomGemValue());
		//check to see that the last number pushed wasn't already in the list
		//....and reroll if it is already in gems
		for(var checkGemIndex = 0; checkGemIndex < gems.length-1; checkGemIndex++){
			//this will potentially cause a reroll for a double?  
			if(gems[checkGemIndex] == gems[gemIndex]){
				gems[gemIndex] = randomGemValue();
				//this will restart the check loop! Need to make sure it won't just do it once 
				checkGemIndex = -1;

			}
		}
	}

//	alert(gems.toString());

}


//computer assigns a random number value to the crystals between 1-12
//each gem should be assigned a different hidden value/position in the gem value array 

	function assignGemValue(points){
		playerScore += points;
		$("#displayPlayerScoreBox").html("<p>Your current point amount is: "+ playerScore + "!</p>");
		checkWinLoss();

	}

	$("#garnet").click(function(){
		assignGemValue(gems[0]);
	});

	$("#pearl").click(function(){
		assignGemValue(gems[1]);
	});

	$("#amethyst").click(function(){
		assignGemValue(gems[2]);
	});

	$("#sapphire").click(function(){
		assignGemValue(gems[3]);
	});


//checks the wins and losses 
function checkWinLoss(){

	//if the the playerScore === targetScore then activate wins by 1
	if(playerScore == targetScore){
		wins++;
		alert("You won!");
		//tracking info for score	
		updateScore();
		resetGame();

	} 
	//if the scores are not equal and 
	else if (playerScore > targetScore){
		losses++;
		alert("You lost!");
		//tracking info for score	
		updateScore();
		resetGame();
	}

}


//updates the score and other info on the display
function updateScore(){
	var score = "<p>wins: " + wins + "</p>" +
	"<p>losses: " + losses + "</p>";
	//"<p>Your current total is: " + playerScore + "</p>"; 
	$("#displayPlayerScoreBox").html(playerScore);
	$("#displayWinLossBox").html(score);
//	alert(playerScore);
}


//resets the game for the player-- need to use .empty here?
function resetGame(){
	targetScore = 0;
	playerScore = 0;
	gems = [];
	setupNewGame();
}


function setupNewGame(){
	/*alert(targetScore);*/
	if(targetScore == 0){
		pickNumber();
	}
	//STILL HAVE A FLOW ISSUE RIGHT NOW-- GAME WON'T RESET PROPERLY YET 
	setupGemValues();
	checkWinLoss();
	updateScore();
}


////////////Events-- updated for new game flow 

//starts the game by selecting a new target number 
$(document).ready(function(){
	setupNewGame();

}); 

