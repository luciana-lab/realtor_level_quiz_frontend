class QuestionApi {
    constructor(port) {
        this.port = port
    }

    getQuestions() {
        fetch(this.port + '/questions')
            .then(resp => resp.json())
            .then(data => console.log(data))
            .catch()
    }
}