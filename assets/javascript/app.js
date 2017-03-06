window.onload = function (){
	$("#start").on("click", stopWatch.run);
};

	var intervalId;

//Display stopwatch
	var stopWatch = {

			secs: 15,

			run: function(){
				intervalId = setInterval(stopWatch.decrement, 1000);
			},
			
			decrement: function(){

				stopWatch.secs--;

				$("#timer").html(stopWatch.secs + " Seconds Left!");
				
				if(stopWatch.secs === 0 ){
					stopWatch.stop();
				}
			},
			stop: function(){
				clearInterval(intervalId);
			}
	}; 

//Declare global variables and array
	var questions = [{
		question: "Which tennis player has the highest number of Grand Slam Titles?",
		choices: ["Roger Federer", "Serena Williams", "Andre Agassi", "Pete Sampras"],
		correct: 0,
	}, {
		question: "Which driver has won 5 F1 World Championships?",
		choices: ["Pele", "Ayrton Senna", "Michael Schumacher", "Lewis Hamilton"],
		correct: 2,
	}, {
		question: "Which soccer team won both the 2010 World Cup and the Euro Championship in 2012?",
		choices: ["Portugal", "Brazil", "Spain", "Germany"],
		correct: 2,
	}, {
		question: "Which soccer phenomenon is known for his 'Scorpion kicks'?",
		choices: ["Messi", "Ronaldo", "Ibrahimovic", "Rooney"],
		correct: 2,
	}, {
		question: "Which European soccer club has won more Champions League titles?",
		choices: ["Barcelona", "Real Madrid", "Manchester United", "Bayern Munchen"],
		correct: 1,
	}],
	

		totalQ = questions.length,
		correctAns = 0,
		counter = 0;

//Create div for questions and options
	function startGame(){
			$("#questions").text(questions[counter].question);
			$("#answer0").text(questions[counter].choices[0]);
			$("#answer1").text(questions[counter].choices[1]);
			$("#answer2").text(questions[counter].choices[2]);
			$("#answer3").text(questions[counter].choices[3]);

	}

	function confirm(){
		if ($("input").is(":checked")){

			startGame();
		}
		else {
			alert("Select one of the answers!");
			counter--;
		}
	}
	startGame();

	$("#nextQ").on("click", function(){
		var answer = $("input:checked").val();

		if(answer == questions[counter].correct){
			correctAns++;
		}
		counter++;

		if(counter >= totalQ){
			$("#mainsec").hide()
			document.getElementById("result").innerHTML = "Your score is: " + correctAns + " of " + totalQ;
			return;	
		}
		confirm();
		restart();

		$(".question").hide().fadeIn("slow");
		$('input[name="choice"]').prop("checked", false);
	})

	function restart(){
		secs = 10;
		startGame();
	}

			