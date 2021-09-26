class QuestionApi {
    constructor(port) {
        this.port = port
    }

    getQuestions() {
        fetch(this.port + '/questions')
            .then(resp => resp.json())
            .then(data => {
                for (const question of data) {
                    let q = new Question(question)
                    q.attachToDom()
                }
            })
            .catch()
    }
}