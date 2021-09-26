class Question {
    static all = [];
    static container = document.getElementById("question-container");

    constructor({ id, title, options = [] }) {
        this.id = id;
        this.title = title;
        this.options = options;

        this.element = document.createElement('li');
        this.element.dataset['id'] = id;
        this.element.id = `question-${id}`;

        Question.all.push(this);
    }

    render() {
        this.optionsId = this.options.map(option => option.id)
        this.content = this.options.map(option => option.content)

        function replaceCommaLine(content) {
            let options = content.toString().split(',').map(each => each.trim())
            return options.join("<br>")
        }

        this.element.innerHTML =
            `
            <div id="data-${this.id}">
            <h4 class="title">${this.title}</h4>
            <p class="content">${replaceCommaLine(this.content)}</p>
            <button type="submit">Get Result</-button>
            </div>
            `
        return this.element;
    }

    attachToDom() {
        Question.container.appendChild(this.render())
    }


}