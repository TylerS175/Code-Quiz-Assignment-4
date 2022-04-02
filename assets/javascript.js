// Create 5 questions using the Var // 

var questions = {
    {}
    title: "/";
    choices: "/";
    answer: "/";
    };
    {
    title: "/";
    choices: "/";
    answer: "/";
    };
    {
    title: "/";
    choices: "/";
    answer: "/"
    };
    {
    title: "/";
    choices: "/";
    answer: "/";
    };
   {
    title: "/";
    choices: "/";
    answer: "/";
});

// Variables on Score & Question Index //
var score = 0;
var questionIndex = 0;

//Creating a Timer with Var//
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

// Adding Penalty and Countdown //
var secondLefts = 76;
// Timer Starter //
var holdInterval = 0;
// Stores the penalty time //
var penalty = 10;
// Create new element //
var ulCreate = document.createElement("ul");

// Timer begins and ends //
timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;
        if (secondLeft <= 0) {
            clearInterval(holdInterval);
            allDone();
            currentTime.textContent = "Time's up!";
        }
     }, 1000);
    }
});
// Selecting questions and choice to page: //
function (questionIndex) {
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML.html = "";
    
    for (var i = 0; < questions.length; i++) {
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choice;
        questionsDiv.textContent = userQuestion;
    }
    userChoices.foreach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
// Allowing event to compare choices with your answer pick //
function compare(event) {
    var element = event.target;

    if (element.matches ("li")) {
        
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // If player picks the correct answer //
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is: " + questions[questionIndex].answer;
        } else {
            // Lose five seconds if you choose the wrong answers //
            secondLefts = secondsLeft - penalty;
            createDiv.textContent = "Incorrect! The correct answer is: " + questions[questionIndex].answer;
            }
    

        }
};
// This informs what number of questions the player is on //
questionIndex++;

if (questionIndex >= questions.length) {
    allDone();
    createDiv.textContent = "End of Quiz!" + " " + "Congratulations, you got " + score + "/" + questions.length + " Correct!";
} else {
    return(questionIndex);
}
    questionsDiv.appendChild(createDiv);
};

function allDone () {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";
// Creating Header 1 //
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "Finish! Let's see the results!";

    questionsDiv.appendChild(createH1);

    // Creating paragraph for the question // 

    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);

    if (secondLefts >=0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your final score is: " + timeRemaining;

        questionsDiv.appendChild(createP2);
    }

    var createInput = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    questionsDiv.appendChild(createLabel);

    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questionsDiv.appendChild(createInput);

    var createSubmit =document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questionsDiv.appendChild(createSubmit);

    // Event listener to store local storages fo Initials & scores //
    createSubmit.addEventListener("click", function () {
        
    }


    
}