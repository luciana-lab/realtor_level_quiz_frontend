class Question {
    static all = [];
    static container = document.getElementById("question-container");

    constructor({ id, title, options = [] }) {
        this.id = id;
        this.title = title;
        this.options = options;

        this.element = document.createElement('div');
        this.element.dataset['id'] = id;
        this.element.id = `question-${id}`;
        this.element.classList = "questions-form-control";

        Question.all.push(this);
    }

    render() {
        this.element.innerHTML = `
        <h4 class="title">${this.title}</h4>
        `
        for (let option of this.options) {
            let radiobox = document.createElement('input');
            radiobox.type = 'radio';
            radiobox.id = `choice-${option.id}`;
            radiobox.value = option.level;
            radiobox.name = `radio-question-${this.id}`;

            let label = document.createElement('label');
            label.htmlFor = `choice-${option.id}`;

            let description = document.createTextNode(option.content);
            let newLine = document.createElement('br');

            this.element.appendChild(label);
            label.appendChild(radiobox);
            label.appendChild(description);
            this.element.appendChild(newLine);
        };
        return this.element;
    };

    validate() {
        let questions = document.querySelectorAll('[name^="radio-question-"]');
        let check = 0;
        let expert = 0;
        let master = 0;
        let top = 0;
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].checked) {
                check++
                if (questions[i].value === "Expert") {
                    expert++
                }
                if (questions[i].value === "Master") {
                    master++
                }
                if (questions[i].value === "Top Agent") {
                    top++
                };
            };
        };

        if (check === 6) {
            let level;
            if (expert > master && expert > top) {
                level = "Expert"
            } else if (master > expert && master > top) {
                level = "Master"
            } else if (top > expert && top > master) {
                level = "Top Agent"
            } else if (expert === master && expert === top && master === top) {
                if (questions[18].checked) {
                    level = "Expert"
                } else if (questions[19].checked) {
                    level = "Master"
                } else if (questions[20].checked) {
                    level = "Top Agent"
                };
            };
            realtorLevelCall.getResult(level);
        } else {
            alert("You must answer all questions");
            return false
        };
    };

    attachToDom() {
        Question.container.appendChild(this.render());
        Question.container.append(btn);

        btn.addEventListener("click", this.validate);
    };
};