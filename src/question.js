class Question {
    static all = [];
    static container = document.getElementById("question-container");

    constructor({ id, title, options }) {
        this.id = id;
        this.title = title;
        this.options = options;

        this.element = document.createElement('li');
        this.element.dataset['id'] = id;
        this.element.id = `question-${id}`;

        Question.all.push(this);
    }

    render() {
        this.element.innerHTML =
            `
            <div datat-id="${this.id}">
            <h4 class="title">${this.title}</h4>
            </div>
            `
        return this.element;
    }

    attachToDom() {
        Question.container.appendChild(this.render())
    }
}