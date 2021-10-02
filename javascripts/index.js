const port = "http://localhost:3000";
const questionCall = new QuestionApi(port);
const realtorLevelCall = new RealtorLevelApi(port);

const form = document.getElementById("user-form");
const userCall = new UserApi(port);
const firstNameInput = document.getElementById("user-first_name");
const lastNameInput = document.getElementById("user-last_name");
const emailInput = document.getElementById("user-email");
const hasAccountInput = document.getElementById("user-has_account");

const quizDiv = document.getElementById("question")
const quizContainer = document.getElementById("question-container");

const resultDiv = document.getElementById("result")
const resultContainer = document.getElementById("result-container");

const btn = document.createElement('button')
btn.type = "submit"
btn.innerHTML = "Get Result"
btn.id = "quiz-btn"

const quizBtn = document.createElement('button')
quizBtn.type = "submit"
quizBtn.innerHTML = "Retake quiz"
quizBtn.classList = "retake-quiz-btn"


document.addEventListener("DOMContentLoaded", () => {
    quizContainer.remove()
    resultContainer.remove()
    form.addEventListener('submit', handleSubmit);

    function handleSubmit(e) {

        e.preventDefault();
        userCall.createUsers();
    };
});


// questionCall.getQuestions();
// optionCall.getOptions();
// realtorLevelCall.getResult();

