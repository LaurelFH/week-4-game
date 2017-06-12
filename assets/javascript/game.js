//Javascript file for Crystal Count Game

///////Global variables

//for tracking the score
var wins = 0;
var losses = 0;
var targetScore = 0;
var playerScore = 0;
var gemValue = [1, 2, 6, 10];//these are preset- value 


/////////////Functions

//chooses random number to display to the displayTarget area number between 19-120, 19 is the start number
//see this link: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function pickNumber () {
	targetScore = Math.floor(Math.random() * (120-19+1) + 19);
	//display the targetScore in the proper space
	$("#displayTargetBox").html(targetScore);
	//test this other part
}

//computer shuffles through options to find random numbers for the gems
function shuffleGemValue(a){

	var j, x, i;
	for (i =a.length; i; i--){
		x =a[i -1];
		a[i-1] = a[j];
		a[j] = x;
	}
}

//computer assigns a random number value to the crystals between 1-12
//each gem should have a different value/position in the gem value array 
	function assignGemValue(points){
		playerScore += points;
		$("#displayScoreBox").html(playerScore);
	}

	$("#garnet").click(function(){
		assignGemValue(gemValue[0]);
	});

	$("#pearl").click(function(){
		assignGemValue(gemValue[1]);
	});

	$("#amethyst").click(function(){
		assignGemValue(gemValue[2]);
	});

	$("#sapphire").click(function(){
		assignGemValue(gemValue[3]);
	});


//updates the score and other info on the display

function updateScore(){
	var score = "<p>wins: " + wins + "</p>" +
	"<p>losses: " + losses + "</p>"+; 
	$("displayScoreBox").html(score);
}


//resets the game for the player
function resetGame(){
	targetScore = 0;
	playerScore = 0;
}



////////////Events-- updated for new game flow 

//starts the game by selecting a new target number 
$(document).ready(function(){
	if(targetScore = 0){
			pickNumber();
		}
			shuffleGemValue(gemValue);
		
		//if the the playerScore === targetScore then activate wins by 1
	if(playerScore == targetScore){
		wins++;
		//tracking info for score	
		updateScore();
		resetGame();

	} 
		//if the scores are not equal and 
	else if (playerScore > targetScore){

		losses++;
		//tracking info for score	
		updateScore();
		resetGame();
	}
}); 

