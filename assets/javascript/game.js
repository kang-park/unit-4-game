$(document).ready(function(){
	//Variables
    let randomNumber;
    let crystal1Num;
    let crystal2Num;
    let crystal3Num;
    let crystal4Num;
    let wins=0;
    let losses=0;
    let totalScore=0;

	//Random Numbers
    function newNumbers() {
        randomNumber = Math.floor(Math.random() * 100) + 20;
		crystal1Num = Math.ceil(Math.random() * 12);
		crystal2Num = Math.ceil(Math.random() * 12);
		crystal3Num = Math.ceil(Math.random() * 12);
		crystal4Num = Math.ceil(Math.random() * 12);
    }

	//Resets for a new game
    function newGame(){
        newNumbers();
		totalScore = 0;
		$("#randomNumber").text(randomNumber);
		$("#crystal1").attr("data-crystalvalue", crystal1Num);
		$("#crystal2").attr("data-crystalvalue", crystal2Num);
		$("#crystal3").attr("data-crystalvalue", crystal3Num);
		$("#crystal4").attr("data-crystalvalue", crystal4Num);
		$("#wins").text(wins);
		$("#losses").text(losses);
		$("#winLose").text("");
		$("#totalScore").text(totalScore);
    }

	//Increase wins by 1
    function winning(){
		wins++;
		$("#wins").text(wins);
    }

	//Increases losses by 1
    function losing() {
		losses++;
		$("#losses").text(losses);
	}
	
	newGame();

    
    $(".crystalimage").on("click", function() {
		if (totalScore >= randomNumber) {
			return;
		}

		let crystalValue = $(this).attr("data-crystalvalue");
		crystalValue = parseInt(crystalValue);
		totalScore += crystalValue;
		$("#totalScore").text(totalScore);

		if (totalScore === randomNumber) {
			winning();
		} else if (totalScore > randomNumber) {
			losing();
		}
	});

	$(".btn").on("click", function() {
		newGame();
	});

});