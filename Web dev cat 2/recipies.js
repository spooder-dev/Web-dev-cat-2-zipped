// Function to validate the recipe submission form
function validateRecipeForm() {
    var recipeName = document.getElementById("recipe-name").value.trim();
    var recipeDescription = document.getElementById("recipe-description").value.trim();
    var ingredients = document.getElementById("ingredients").value.trim();
    var instructions = document.getElementById("instructions").value.trim();
    var image = document.getElementById("image").value.trim();

    if (recipeName === "" || recipeDescription === "" || ingredients === "" || instructions === "" || image === "") {
        alert("All fields are required.");
        return false;
    }

    // You can add more specific validations here if needed

    // If all validations pass, you can submit the form or perform other actions
    // For example:
    // document.getElementById("recipe-form").submit();
    // Or you can return true if you want to submit the form
    return true;
}

// Quiz Data
const quizData = [
    {
        question: "Which of the following is not a root vegetable?",
        a: "Carrot",
        b: "Potato",
        c: "Tomato",
        d: "Turnip",
        correct: "c"
    },
    {
        question: "Which spice is known as 'the queen of spices'?",
        a: "Cinnamon",
        b: "Turmeric",
        c: "Saffron",
        d: "Paprika",
        correct: "c"
    },
    {
        question: "What is the main ingredient in guacamole?",
        a: "Avocado",
        b: "Tomato",
        c: "Onion",
        d: "Lime",
        correct: "a"
    }
];

// Quiz Variables
const quizContainer = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

// Function to load the current quiz question
function loadQuizQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    answerElements.forEach((answerElement, index) => {
        answerElement.nextElementSibling.innerText = currentQuizData[String.fromCharCode(97 + index)];
    });
    deselectAnswers(); // Deselect answers before loading the next question
}

// Function to get the selected answer
function getSelectedAnswer() {
    let selectedAnswer = undefined;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) {
            selectedAnswer = answerElement.id;
        }
    });
    return selectedAnswer;
}

// Function to deselect all answers
const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};

// Event listener for the submit button
submitButton.addEventListener("click", () => {
    const selectedAnswer = getSelectedAnswer();
    if (selectedAnswer) {
        if (selectedAnswer === quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuizQuestion();
        } else {
            quizContainer.innerHTML = `
                <h2>You scored ${score}/${quizData.length}</h2>
                <button onclick="location.reload()">Reload Quiz</button>
            `;
        }
    } else {
        alert("Please select an answer.");
    }
});

// Initial load of the quiz question
loadQuizQuestion();
