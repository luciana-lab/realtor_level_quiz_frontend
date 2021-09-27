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
            radiobox.value = option.content
            radiobox.name = `question-${this.id}`

            let label = document.createElement('label')
            label.htmlFor = `choice-${option.id}`

            let desciption = document.createTextNode(option.content)
            label.appendChild(desciption)

            let newLine = document.createElement('br')

            this.element.appendChild(radiobox)
            this.element.appendChild(label)
            this.element.appendChild(newLine)
        }

        // const btn = document.createElement('button')
        // btn.type = "submit"
        // btn.innerHTML = "Get Result"
        // this.element.appendChild(btn)

        return this.element
    }

    attachToDom() {
        Question.container.appendChild(this.render())
        Question.container.append(btn)
        // Question.quizForm.appendChild(this.render())
    }

}