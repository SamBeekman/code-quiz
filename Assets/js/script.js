// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question

const beginButton = document.querySelector(".begin-button");
const countdownTimer = document.querySelector(".countdown-timer");
const result = document.querySelector(".result");
result.textContent = "";


beginButton.addEventListener("click", function () {
    startQuiz(id);
    let secondsLeft = 60;
    let timerInterval = setInterval(function () {
        secondsLeft--;
        countdownTimer.textContent = secondsLeft + " seconds remaining";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            window.alert("Out Of Time");
        }
    }, 1000);
});

// make a list of questions and answers

const Questions = [{
    id: 0,
    q: "how many fingers are on a hand?",
    a: [{ text: "3", isCorrect: false },
    { text: "5", isCorrect: true },
    { text: "7", isCorrect: false },
    { text: "10", isCorrect: false }
    ]
},
{
    id: 1,
    q: "What is bigger?",
    a: [{ text: "mouse", isCorrect: false },
    { text: "tree", isCorrect: false },
    { text: "bacteria", isCorrect: false },
    { text: "Seattle", isCorrect: true }
    ]
},
{
    id: 2,
    q: "What is Homer Simpson's sons name?",
    a: [{ text: "Bort", isCorrect: false },
    { text: "Bert", isCorrect: false },
    { text: "Bart", isCorrect: true },
    { text: "Bird", isCorrect: false }
    ]
},
{
    id: 3,
    q: "Which of these is NOT a gaming console?",
    a: [{ text: "Gamecube", isCorrect: false },
    { text: "Playstation", isCorrect: false },
    { text: "XBox", isCorrect: false },
    { text: "FunSphere", isCorrect: true }
    ]
},
{
    id: 4,
    q: "What fell on Newton's head?",
    a: [{ text: "Banana", isCorrect: false },
    { text: "Apple", isCorrect: true },
    { text: "Coconut", isCorrect: false },
    { text: "Piano", isCorrect: false }
    ]
},
{
    id: 5,
    q: "Which is the best golf score?",
    a: [{ text: "50", isCorrect: false },
    { text: "0", isCorrect: false },
    { text: "11", isCorrect: false },
    { text: "-2", isCorrect: true }
    ]
},
{
    id: 6,
    q: "Which drink does NOT contain caffein?",
    a: [{ text: "Latte", isCorrect: false },
    { text: "Babychino", isCorrect: true },
    { text: "Long Black", isCorrect: false },
    { text: "Piccolo", isCorrect: false }
    ]
},
{
    id: 7,
    q: "How many legs does a spider have?",
    a: [{ text: "8", isCorrect: true },
    { text: "16", isCorrect: false },
    { text: "2", isCorrect: false },
    { text: "0", isCorrect: false }
    ]
},
{
    id: 8,
    q: "What is the meaning of life?",
    a: [{ text: "39", isCorrect: false },
    { text: "40", isCorrect: false },
    { text: "41", isCorrect: false },
    { text: "42", isCorrect: true }
    ]
},
{
    id: 9,
    q: "What is the capital of Australia?",
    a: [{ text: "Sydney", isCorrect: false },
    { text: "Melbourne", isCorrect: false },
    { text: "Brisbane", isCorrect: false },
    { text: "Canberra", isCorrect: true }
    ]
}
];

// make quiz function

let id = 0;


function startQuiz(id) {

    // Getting the question
    const question = document.querySelector("#Q");

    // Setting the question text
    question.textContent = Questions[id].q;

    // Getting the options
    const A1 = document.querySelector('#A1');
    const A2 = document.querySelector('#A2');
    const A3 = document.querySelector('#A3');
    const A4 = document.querySelector('#A4');

    // Providing option text
    A1.textContent = Questions[id].a[0].text;
    A2.textContent = Questions[id].a[1].text;
    A3.textContent = Questions[id].a[2].text;
    A4.textContent = Questions[id].a[3].text;

    // Providing the true or false value to the options
    A1.value = Questions[id].a[0].isCorrect;
    A2.value = Questions[id].a[1].isCorrect;
    A3.value = Questions[id].a[2].isCorrect;
    A4.value = Questions[id].a[3].isCorrect;

    // Adding Event Listener, saving selection and setting button color
    A1.addEventListener("click", function () {
        selected = A1.value;
        A1.style.backgroundColor = "aquamarine";
        A2.style.backgroundColor = "";
        A3.style.backgroundColor = "";
        A4.style.backgroundColor = "";
    })
    A2.addEventListener("click", function () {
        selected = A2.value;
        A1.style.backgroundColor = "";
        A2.style.backgroundColor = "aquamarine";
        A3.style.backgroundColor = "";
        A4.style.backgroundColor = "";
    })
    A3.addEventListener("click", function () {
        selected = A3.value;
        A1.style.backgroundColor = "";
        A2.style.backgroundColor = "";
        A3.style.backgroundColor = "aquamarine";
        A4.style.backgroundColor = "";
    })
    A4.addEventListener("click", function () {
        selected = A4.value;
        A1.style.backgroundColor = "";
        A2.style.backgroundColor = "";
        A3.style.backgroundColor = "";
        A4.style.backgroundColor = "aquamarine";
    })
}

// Testing if selected answer is correct and displaying result
let selected = "";
const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", function () {
    if (selected == "true") {
        result.textContent = "Correct";
    } else {
        result.textContent = "Incorrect -10 seconds";
        //countdownTimer.textContent = secondsLeft - 10 + " seconds remaining";
    }

    // Looping through questions
    if (id < 9) {
        id++;
        startQuiz(id);
    } else {
        //gameover
        window.alert("All Quesions Answered");
    }
})

// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock





// WHEN all questions are answered or the timer reaches 0
// THEN the game is over





// WHEN the game is over
// THEN I can save my initials and my score