const port = "http://localhost:3000";
const questionCall = new QuestionApi(port);

const form = document.getElementById("user-form");

questionCall.getQuestions(); // do I need to pass an argument?

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault()
}