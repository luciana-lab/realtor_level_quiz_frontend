const port = "http://localhost:3000";
const questionCall = new QuestionApi(port);

const form = document.getElementById("user-form");
const userCall = new UserApi(port);
const firstNameValue = document.getElementById("user-first_name");
const lastNameValue = document.getElementById("user-last_name");
const emailValue = document.getElementById("user-email");
const hasAccountValue = document.getElementById("user-has_account");

questionCall.getQuestions(); // do I need to pass an argument?

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    userCall.createUsers()
}