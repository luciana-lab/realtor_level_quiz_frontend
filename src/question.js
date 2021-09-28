const btn = document.createElement('button')
btn.type = "submit"
btn.innerHTML = "Get Result"

class Question {
    static all = [];
    static container = document.getElementById("question-container");
    // static quizForm = document.getElementById("quiz-form")

    constructor({ id, title, options = [] }) {
        this.id = id;
        this.title = title;
        this.options = options;

        this.element = document.createElement('div');
        this.element.dataset['id'] = id;
        this.element.id = `question-${id}`;

        Question.all.push(this);
        // debugger
    }

    render() {
        this.element.innerHTML = `
        <h4 class="title">${this.title}</h4>
        </div>
        `
        for (let option of this.options) {
            let radiobox = document.createElement('input')
            radiobox.type = 'radio'
            radiobox.id = `choice-${option.id}`
            radiobox.value = option.level
            radiobox.name = `radio-question-${this.id}`

            let label = document.createElement('label')
            label.htmlFor = `choice-${option.id}`

            let desciption = document.createTextNode(option.content)
            label.appendChild(desciption)

            let newLine = document.createElement('br')

            this.element.appendChild(radiobox)
            this.element.appendChild(label)
            this.element.appendChild(newLine)

            // debugger
        }
        return this.element
    }

    validate() {
        let questions = document.querySelectorAll('[name^="radio-question-"]')
        let check = 0
        let expert = 0
        let master = 0
        let top = 0
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
                }
            }
        }

        if (check === 6) {
            if (expert > master && expert > top) {
                // alert("Expert!!")
                realtorLevelCall.getResult();
            } else if (master > expert && master > top) {
                // alert("Master!!")
                realtorLevelCall.getResult();
            } else if (top > expert && top > master) {
                // alert("Top!")
                realtorLevelCall.getResult();
            } else if (expert === master && expert === top && master === top) {
                if (questions[18].checked) {
                    // alert("Expert!!")
                    realtorLevelCall.getResult();
                } else if (questions[19].checked) {
                    // alert("Master")
                    realtorLevelCall.getResult();
                } else if (questions[20].checked) {
                    // alert("Top!")
                    realtorLevelCall.getResult();
                }
            }

            // debugger
            // realtorLevelCall.getResult();
            // alert("All good!")
        } else {
            alert("You must answer all questions");
            return false
        }
    }

    attachToDom() {
        Question.container.appendChild(this.render())
        Question.container.append(btn)

        btn.addEventListener("click", this.validate)
        // Question.quizForm.appendChild(this.render())
    }

}