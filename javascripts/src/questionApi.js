class QuestionApi {
    constructor(port) {
        this.port = `${port}/questions`;
    };

    getQuestions() {
        form.remove();

        fetch(this.port)
            .then(resp => resp.json())
            .then(data => {
                for (const question of data) {
                    const q = new Question(question)
                    q.attachToDom()
                }
            })
            .catch(this.handleError);
    };

    static handleError(error) {
        flash().innerText = error;
        flash().classList.remove("hide");
        setTimeout(() => {
            flash().innerText = "";
            flash().classList.add("hide");
        }, 5000);
    };
};