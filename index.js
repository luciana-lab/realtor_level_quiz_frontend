const port = "http://localhost:3000";
const questionCall = new QuestionApi(port);
// const optionCall = new OptionApi(port);
const realtorLevelCall = new RealtorLevelApi(port);

const form = document.getElementById("user-form");
const userCall = new UserApi(port);
const firstNameInput = document.getElementById("user-first_name");
const lastNameInput = document.getElementById("user-last_name");
const emailInput = document.getElementById("user-email");
const hasAccountInput = document.getElementById("user-has_account");

const quizContainer = document.getElementById("question-container")

document.addEventListener("DOMContentLoaded", () => {
    form.addEventListener('submit', handleSubmit);

    function handleSubmit(e) {
        e.preventDefault();
        userCall.createUsers();
    };
});

// questionCall.getQuestions();
// optionCall.getOptions();
// realtorLevelCall.getResult();