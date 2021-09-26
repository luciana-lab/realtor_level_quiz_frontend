class Question {
    static all = [];
    static container = document.getElementById("question-container");

    constructor({ id, title, options = [] }) {
        this.id = id;
        this.title = title;
        this.options = options;

        // debugger

        this.element = document.createElement('li');
        this.element.dataset['id'] = id;
        this.element.id = `question-${id}`;

        Question.all.push(this);
    }

    render() {
        this.content = this.options.map(option => option.content)

        function replaceCommaLine(content) {
            let options = content.toString().split(',').map(each => each.trim())
            return options.join("<br>")
        }

        this.element.innerHTML =
            `
            <div id="question-data-${this.id}">
            <h4 class="title">${this.title}</h4>
            <p>${replaceCommaLine(this.content)}</p>
            </div>
            `
        return this.element;
    }

    attachToDom() {
        Question.container.appendChild(this.render())
    }


}