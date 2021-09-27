class Question {
    static all = [];
    static container = document.getElementById("question-container");

    constructor({ id, title, options = [] }) {
        this.id = id;
        this.title = title;
        this.options = options;

        this.element = document.createElement('ol');
        this.element.dataset['id'] = id;
        this.element.id = `question-${id}`;

        Question.all.push(this);
    }

    render() {
        // this.optionsId = this.options.map(option => option.id)
        // this.content = this.options.map(option => option.content)

        // function replaceCommaLine(content) {
        //     let options = content.toString().split(',').map(each => each.trim())
        //     return options.join(`<br>`)
        // }

        this.element.innerHTML = `
        <div id="data-${this.id}">
        <h4 class="title">${this.title}</h4>
        </div>
        `

        let li = document.createElement(`option`)
        for (let option of this.options) {
            let opt = document.createElement("option")
            opt.innerText = option.content
            opt.id = option.id
            li.append(opt)
            this.element.append(li)
        }

        return this.element
    }

    // render() {
    //     this.optionsId = this.options.map(option => option.id)
    //     this.content = this.options.map(option => option.content)

    //     function replaceCommaLine(content) {
    //         let options = content.toString().split(',').map(each => each.trim())
    //         return options.join("<br>")
    //     }

    //     this.element.innerHTML =
    //         `
    //     <div id="data-${this.id}">
    //     <h4 class="title">${this.title}</h4>
    //     <input type="radio" class="content">${replaceCommaLine(this.content)}</input>
    //     <button type="submit">Get Result</button>
    //     </div>
    //     `
    //     return this.element;
    // }

    attachToDom() {
        Question.container.appendChild(this.render())
    }

}