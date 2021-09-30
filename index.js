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

const quizDiv = document.getElementById("question")
const quizContainer = document.getElementById("question-container");

const resultDiv = document.getElementById("result")
const resultContainer = document.getElementById("result-container");

document.addEventListener("DOMContentLoaded", () => {
    form.addEventListener('submit', handleSubmit);

    /* form css
    const inputs = document.querySelectorAll('input[type=text], input[type=email]');
    for (i = 0; i < inputs.length; i++) {
        const inputEl = inputs[i];
        if (inputEl.value.trim() !== '') {
            inputEl.parentNode.classList.add('input--filled');
        }
        inputEl.addEventListener('focus', onFocus);
        inputEl.addEventListener('blur', onBlur);
    }

    function onFocus(ev) {
        ev.target.parentNode.classList.add('inputs--filled');
    }

    function onBlur(ev) {
        if (ev.target.value.trim() === '') {
            ev.target.parentNode.classList.remove('inputs--filled');
        }
    }
    */

    function handleSubmit(e) {
        e.preventDefault();
        userCall.createUsers();
    };
});

// questionCall.getQuestions();
// optionCall.getOptions();
// realtorLevelCall.getResult();

