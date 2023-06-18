// start the quiz
const beginButton = document.querySelector(".begin-button");
const countdownTimer = document.querySelector(".countdown-timer");
const result = document.querySelector(".result");
result.textContent = "";


let secondsLeft = 60;
beginButton.addEventListener("click", function () {
    startQuiz(id);
    score = 0;
    scoreText.textContent = "score = " + score;

    let timerInterval = setInterval(function () {
        secondsLeft--;
        countdownTimer.textContent = secondsLeft + " seconds remaining";

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            window.alert("Out Of Time, better luck next time.");
            document.querySelector(".begin-button").innerText = "Play Again";
            id = 0;
            secondsLeft = 60;
            score = 0;
            scoreText.textContent = "score = " + score;
        }

        if (id === 9) {
            clearInterval(timerInterval);
        }

    }, 1000);
});

// make a list of questions and answers
const Questions = [{
    id: 0,
    q: "1. Javascript is an _______ language?",
    a: [{ text: "Procedural", isCorrect: false },
    { text: "Object-Oriented", isCorrect: true },
    { text: "Object-Based", isCorrect: false },
    { text: "None of the above", isCorrect: false }
    ]
},
{
    id: 1,
    q: "2. Which of the following keywords is used to define a variable in Javascript?",
    a: [{ text: "var", isCorrect: false },
    { text: "let", isCorrect: false },
    { text: "script", isCorrect: false },
    { text: "Both A and B", isCorrect: true }
    ]
},
{
    id: 2,
    q: "3. Which of the following methods is used to access HTML elements using Javascript?",
    a: [{ text: "querySelector()", isCorrect: false },
    { text: "getElementsByClassName()", isCorrect: false },
    { text: "getElementbyID()", isCorrect: false },
    { text: "All of the above", isCorrect: true }
    ]
},
{
    id: 3,
    q: "4. Upon encountering empty statements, what does the Javascript Interpreter do?",
    a: [{ text: "Throws an error", isCorrect: false },
    { text: "Ignores the statements", isCorrect: true },
    { text: "Gives a warning", isCorrect: false },
    { text: "None of the above", isCorrect: false }
    ]
},
{
    id: 4,
    q: "5. Which of the following methods can be used to display data in some form using Javascript?",
    a: [{ text: "document.write()", isCorrect: false },
    { text: "console.log()", isCorrect: false },
    { text: "window.alert", isCorrect: false },
    { text: "All of the above", isCorrect: true }
    ]
},
{
    id: 5,
    q: "6. How can a datatype be declared to be a constant type?",
    a: [{ text: "constant", isCorrect: false },
    { text: "var", isCorrect: false },
    { text: "let", isCorrect: false },
    { text: "const", isCorrect: true }
    ]
},
{
    id: 6,
    q: "7. When an operator’s value is NULL, the typeof returned by the unary operator:",
    a: [{ text: "Boolean", isCorrect: false },
    { text: "Object", isCorrect: true },
    { text: "Undefined", isCorrect: false },
    { text: "Integer", isCorrect: false }
    ]
},
{
    id: 7,
    q: "8. What does the Javascript “debugger” statement do?",
    a: [{ text: "It acts as a breakpoint in a program", isCorrect: true },
    { text: "It will debug error in the current statement if any", isCorrect: false },
    { text: "it will debug all errors in the program at runtime", isCorrect: false },
    { text: "All of the above", isCorrect: false }
    ]
},
{
    id: 8,
    q: "9. Which function is used to serialize an object into a JSON string in Javascript?",
    a: [{ text: "serialize()", isCorrect: false },
    { text: "convert()", isCorrect: false },
    { text: "parse()", isCorrect: false },
    { text: "stringify()", isCorrect: true }
    ]
},
{
    id: 9,
    q: "10. Which of the following is not a Javascript framework?",
    a: [{ text: "Node", isCorrect: false },
    { text: "Vue", isCorrect: false },
    { text: "React", isCorrect: false },
    { text: "Cassandra", isCorrect: true }
    ]
}
];

// make quiz function
let id = 0;
let selected = "";

function startQuiz(id) {

    // get the question
    const question = document.querySelector("#Q");

    // set the question text
    question.textContent = Questions[id].q;

    // get the options
    const A1 = document.querySelector('#A1');
    const A2 = document.querySelector('#A2');
    const A3 = document.querySelector('#A3');
    const A4 = document.querySelector('#A4');

    // get the option text
    A1.textContent = Questions[id].a[0].text;
    A2.textContent = Questions[id].a[1].text;
    A3.textContent = Questions[id].a[2].text;
    A4.textContent = Questions[id].a[3].text;

    // get the true or false value to the options
    A1.value = Questions[id].a[0].isCorrect;
    A2.value = Questions[id].a[1].isCorrect;
    A3.value = Questions[id].a[2].isCorrect;
    A4.value = Questions[id].a[3].isCorrect;

    // adding event listener, saving selection and setting button color
    A1.addEventListener("click", function () {
        selected = A1.value;
        A1.style.backgroundColor = "#009688";
        A2.style.backgroundColor = "";
        A3.style.backgroundColor = "";
        A4.style.backgroundColor = "";
    })
    A2.addEventListener("click", function () {
        selected = A2.value;
        A1.style.backgroundColor = "";
        A2.style.backgroundColor = "#009688";
        A3.style.backgroundColor = "";
        A4.style.backgroundColor = "";
    })
    A3.addEventListener("click", function () {
        selected = A3.value;
        A1.style.backgroundColor = "";
        A2.style.backgroundColor = "";
        A3.style.backgroundColor = "#009688";
        A4.style.backgroundColor = "";
    })
    A4.addEventListener("click", function () {
        selected = A4.value;
        A1.style.backgroundColor = "";
        A2.style.backgroundColor = "";
        A3.style.backgroundColor = "";
        A4.style.backgroundColor = "#009688";
    })
}

// setting up scoring
let score = 0;
const scoreText = document.querySelector(".score");
scoreText.textContent = "score = " + score;

// checking if selected answer is correct, displaying result and updating score/time
const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", function () {
    if (selected == "true") {
        result.textContent = "Correct";
        score += 10;
        scoreText.textContent = "score = " + score;
    } else {
        result.textContent = "Incorrect -10 seconds";
        score -= 5;
        scoreText.textContent = "score = " + score;
        secondsLeft -= 10;
    }

    // looping through questions, resetting color/selections and saving name/score
    if (id < 9) {
        id++;
        A1.style.backgroundColor = "";
        A2.style.backgroundColor = "";
        A3.style.backgroundColor = "";
        A4.style.backgroundColor = "";
        selected = "";
        startQuiz(id);
    } else {
        document.querySelector(".begin-button").innerText = "Play Again";
        id = 0;
        secondsLeft = 60;
        scoreText.textContent = "score = " + score;
        let userScore = scoreText.textContent;
        let userName = window.prompt("All Quesions Answered, enter you name to save your score of " + userScore + " points", "name");
        let highscores = JSON.parse(localStorage.getItem("highscores")) || [];
        let thisScore = {
            score: userScore,
            username: userName
        };

        highscores.push(thisScore);
        localStorage.setItem("highscores", JSON.stringify(highscores));
        updateLeaderBoard();

    }
})

// update the leaderboard with locally stored attempts
function updateLeaderBoard() {
    const footer = document.querySelector("footer");
    const olEl = footer.querySelector("ol");
    olEl.innerHTML = "";

    let savedScores = JSON.parse(localStorage.getItem("highscores")) || [];
    savedScores.sort(function (x, y) {
        return y.score - x.score;
    });

    for (let i = 0; i < savedScores.length; i++) {
        let listEl = document.createElement("li");
        listEl.textContent = savedScores[i].username + " " + savedScores[i].score;
        olEl.appendChild(listEl);
        listEl.setAttribute("style", "text-align: center;", "font-size: largest;");
    }
}

updateLeaderBoard();

// resetting the leaderboard
const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", function () {
    localStorage.removeItem("highscores");
    const footer = document.querySelector("footer");
    const olEl = footer.querySelector("ol");
    olEl.innerHTML = "";
})

