var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };






function displayResults() {
	var sum = 0;
	var highestScore = 0;
  
	for (var i = 0; i < scores.length; i++) {
	  sum += scores[i];
	  if (scores[i] > highestScore) {
		highestScore = scores[i];
	  }
	}
  
	var average = sum / scores.length;

	var highestScoreName;
	var z;
	
	for(z=0;z<scores.length;z++){

		if(scores[z]==highestScore){
			break;
		}


	}
	var resultsDiv = document.getElementById("results");
	resultsDiv.innerHTML =
	  "<h2>Results</h2>" +
	  "<p>Average score: " + average.toFixed(2) + "</p>" +
	  "<p>High score = "+ names[z]+" with a score of "+ highestScore + "</p>";
  }

  function displayScores() {
	var table = document.getElementById("scores_table");
  
	// Clear existing table rows
	while (table.rows.length > 0) {
	  table.deleteRow(0);
	}
  
	// Create table headers
	var headerRow = table.insertRow(0);
	var nameHeader = headerRow.insertCell(0);
	var scoreHeader = headerRow.insertCell(1);
	nameHeader.textContent = "Name";
	scoreHeader.textContent = "Score";
  
	// Add data rows
	for (var i = 0; i < names.length; i++) {
	  var name = names[i];
	  var score = scores[i];
  
	  var row = table.insertRow(i + 1);
	  var nameCell = row.insertCell(0);
	  var scoreCell = row.insertCell(1);
	  nameCell.textContent = name;
	  scoreCell.textContent = score;
	}
  }




  
  
  
  



  window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
  
	// Move cursor to Name field when the application starts
	$("name").focus();
  };




  function addScore() {
	var nameInput = document.getElementById("name");
	var scoreInput = document.getElementById("score");
  
	var name = nameInput.value;
	var score = parseInt(scoreInput.value);
  
	// Check if name and score are valid
	if (name.trim() === "" || isNaN(score) || score < 0 || score > 100) {
	  alert("You must enter a name and a valid score (0-100).");
	  return;
	}
  
	names.push(name);
	scores.push(score);
  
	// Clear input fields
	nameInput.value = "";
	scoreInput.value = "";
  
	// Move cursor back to Name field
	nameInput.focus();
  
	// Display the updated scores
	
  }

  
  

  

