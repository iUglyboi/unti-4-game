$(document).ready(function(){


	//set up my audio files for my page
	var noise1 = new Audio();
	noise1.src = "assets/audio/crystal01.mp3";

	var noise2 = new Audio();
	noise2.src = "assets/audio/crystal02.mp3";

	var noise3 = new Audio();
	noise3.src = "assets/audio/crystal03.mp3";

	var noise4 = new Audio();
	noise4.src = "assets/audio/crystal04.mp3";

	//need to generate randomNum from 19 -120 for the user to guess
	
	var randomNum = Math.floor(Math.random() * 101+19);
	$('#randomNumber').text(randomNum);

	//crystals need to be from 1- 12 RANDOMIZED!! RANDOM!
		
		var num1 = Math.floor(Math.random() * 11+1);
		//alert(num1);
		var num2 = Math.floor(Math.random() * 11+1);
		//alert(num2);
		var num3 = Math.floor(Math.random() * 11+1);
		//alert(num3);
		var num4 = Math.floor(Math.random() * 11+1);
		//alert(num4);
		//why

	var playerTotal = 0;
	var wins = 0;
	var losses = 0;
	$('#winsScore').text('Wins: ' + wins);
	$('#lossesScore').text('Losses: ' + losses);


	//set crystal 1 function

	$('#crystalOne').click(function(){
		playerTotal+=num1;
		$('#scoreKeeper').text(playerTotal);
		noise1.play();
		$(this).effect("bounce", {times:1}, 300 )
		endGameConditions();
	});

	//now set crystal 2
	
	$('#crystalTwo').click(function(){
		playerTotal+=num2;
		$('#scoreKeeper').text(playerTotal);
		noise2.play();
		$(this).effect("bounce", {times:1}, 300 )
		endGameConditions();
	});

	//crystal 3
	
	$('#crystalThree').click(function(){
		playerTotal+=num3;
		$('#scoreKeeper').text(playerTotal);
		noise3.play();
		$(this).effect("bounce", {times:1}, 300 )
		endGameConditions();
	});
	
	// crystal 4
	
	$('#crystalFour').click(function(){
		playerTotal+=num4;
		$('#scoreKeeper').text(playerTotal);
		noise4.play();
		$(this).effect("bounce", {times:1}, 300 )
		endGameConditions();
	});

	//endgame conditioning 

	function endGameConditions(){
		if (playerTotal==randomNum){
			wins++;
			$('#endGameMessage').text('A Winner is You!!!')
			$('#winsScore').text('Wins: ' + wins);
			reset();
		}else if (playerTotal > randomNum){
			losses++;
			$('#endGameMessage').text('You have failed!')
			$('#lossesScore').text('Losses: ' + losses);
			reset();
		}else{
			$('#endGameMessage').text('Game on, good luck')
		}
	}

	// Gotta set up a function to reset everything when you lose
	function reset(){
		playerTotal=0;
		$('#scoreKeeper').text(playerTotal);
		randomNum = Math.floor(Math.random() * 101 + 19);
		$('#randomNumber').text(randomNum);

		num1 = Math.floor(Math.random() * 11 + 1);
		num2 = Math.floor(Math.random() * 11 + 1);
		num3 = Math.floor(Math.random() * 11 + 1);
		num4 = Math.floor(Math.random() * 11 + 1);
		
	}


});
