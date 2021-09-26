// class Option {
//     static all = [];

//     constructor({ id, content, question }) {
//         this.id = id
//         this.content = content
//         this.question_id = question.id

//         this.element = document.createElement('ul');
//         this.element.dataset['id'] = id;
//         this.element.id = `option-${id}`;

//         Question.all.push(this)
//     }

//     render() {
//         let questionOptions = document.getElementById(`question-data-${this.question_id}`)
//         // const ul = document.createElement('ul')
//         // questionOptions.dataset.optionId = this.question_id
//         questionOptions.appendChild(this.element.innerHTML =
//             `
//             <div data-id="${this.id}">
//             <p class="option-content">${this.content}</p>
//             </div>
//            `
//         )

        // this.element.innerHTML =
        //     `
        //     <div data-id="${this.id}">
        //     <p class="option-content">${this.content}</p>
        //     </div>
        //    `
        // return this.element

        // questionOptionsr.parentNode.appendChild(ul)
//     }

//     attachToQuestion() {
//         Option.appendChild(this.render())
//     }
// }