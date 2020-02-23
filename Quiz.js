$(function() {
	var questions = getAllQuestions();
	var container = $("#questionContainer");
	var jQueryQuestions = [];
	var jsQuestions = [];
	var i;
	var optionsArray = {0:"A", 1:"B", 2:"C", 3:"D"};
	var q, randomJsQuestions, randomjQueryQuestions, jsQs, jqQs, questionDiv, currOptions, currOption, qNo, op, answerName, answer, questionAnswerDiv, questionsArray, randomQuestions;	
	
	for (i = 0; i < questions.length; i++){
		if (questions[i].category === "JavaScript"){
			questions[i].answer = questions[i].options[0].option;
			jsQuestions.push(questions[i]);

		} else if (questions[i].category === "jQuery"){
			questions[i].answer = questions[i].options[0].option;
			jQueryQuestions.push(questions[i]);
		}
	}
	
	$("#quizBuilder").click(function() {
		
		// Empty container element so that previous questions are cleared	
		container.empty();
		questionsArray = [];
		randomQuestions = [];
		randomJsQuestions = jsQuestions.sort( () => Math.random() - 0.5 ) ; //randomize
		randomjQueryQuestions = jQueryQuestions.sort( () => Math.random() - 0.5 ); //randomize
		jsQs = Math.max(Math.floor(jsQuestions.length/2), Math.floor(Math.random() * jsQuestions.length)); // no of js questions
		jqQs = Math.max(Math.floor(jQueryQuestions.length/2), Math.floor(Math.random() * jQueryQuestions.length)); // no of jquery questions

		for (q = 0; q < jqQs; q++) {
			randomQuestions.push(randomjQueryQuestions[q]);
		}

		for (q = 0; q < jsQs; q++) {
			randomQuestions.push(randomJsQuestions[q]);
		}
		randomQuestions.sort( () => Math.random() - 0.5 );

		for (q = 0; q < randomQuestions.length; q++){
			questionDiv = document.createElement("div");
			questionDiv.className += "questionDiv";
			currQuestion = randomQuestions[q].question;
			currOptions = randomQuestions[q].options.sort( () => Math.random() - 0.5 );
			qNo = q+1;
			questionDiv.innerHTML = "<h4> Questions number "+ qNo +":</h4>";
			questionDiv.innerHTML += "<h3>"+currQuestion+"</h3>";
			for (op = 0; op < currOptions.length; op++){
				currOption = currOptions[op].option;
				questionDiv.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='radio' name='choices' value='"+ optionsArray[op] +"'> "+currOption+"<br>";
			}
			questionsArray.push(questionDiv);
		}	

		for (q = 0; q < questionsArray.length; q++) 
			container.append(questionsArray[q]);
		// Call print() method, to print the page
		window.print();
	});

	$("#answerBuilder").click(function() {
		// Empty container element so that previous questions are cleared	
		container.empty();
		for (q = 0; q < questions.length; q++){
			questionAnswerDiv = document.createElement("div");
			questionAnswerDiv.className += "questionDiv";
			currQuestion = questions[q].question;
			qNo = q+1;
			questionAnswerDiv.innerHTML = "<h4> Questions number "+ qNo +":</h4>";
			questionAnswerDiv.innerHTML += "<h3><strong>"+currQuestion+"</strong></h3>";
			answer = questions[q].answer;
			answerName = 'answer'+q;
			questionAnswerDiv.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='radio' class='options' name='"+answerName+"' value='A' checked>" +answer+"<br><br>";
			container.append(questionAnswerDiv);
		}
		// Call print() method, to print the page
		window.print();
	});
});


