const port = "http://localhost:3000";
const questionCall = new QuestionApi(port);

questionCall.getQuestions()