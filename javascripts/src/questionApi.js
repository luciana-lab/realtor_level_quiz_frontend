class QuestionApi {
    constructor(port) {
        this.port = `${port}/questions`
    }

    getQuestions() {

        form.remove()

        // quizContainer.hidden = true
        // quizContainer.append()
        // resultContainer.remove()

        fetch(this.port)
            .then(resp => resp.json())
            .then(data => {
                for (const question of data) {
                    let q = new Question(question)
                    q.attachToDom()
                }
            })
            .catch()
    }

    // static handleError(error) {
    //     console.log(error)
    // }
}