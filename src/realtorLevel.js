const quizBtn = document.createElement('button')
quizBtn.type = "submit"
quizBtn.innerHTML = "Retake quiz"
quizBtn.classList = "retake-quiz-btn"
// const retakeQuizBtn = document.getElementById("retake-quiz")

class RealtorLevel {
    static all = [];
    static container = document.getElementById("result-container");

    static mainContainer = document.getElementById("result");

    constructor({ id, level, description, free_content, products, promo_code, options = [], users = [] }) {
        this.id = id
        this.level = level
        User.currentUser.result = this.level
        this.description = description
        this.free_content = free_content
        this.products = products
        this.promo_code = promo_code
        this.options = options
        this.users = users.push(User.currentUser)

        this.element = document.createElement('div');
        this.element.dataset['id'] = id;
        this.element.id = `user-result`;

        RealtorLevel.all.push(this);
    }

    static updateDatabase() {
        // debugger
        userCall.updateUserResult(User.currentUser.result)
    }

    render() {
        this.element.innerHTML =
            `

            <div id="result-${this.id}">
            <h3 class="level">${firstNameInput.value}, you are a ${this.level}</h3>
            <p class="description">${this.description}</p>
            <a href="${this.free_content}">Download Free Content</a>
            <p class="products">Products Suggestions: ${this.products}</p>
            <p class="promo-code">Use ${this.promo_code} to get 10% off up to $50 on all products listed above.</p>
            <a href="https://www.corefact.com/print/catalog/205-featured/products" class="buttton">Go to Store</a>
            </div>
            `


        // debugger
        return this.element
    }

    reloadQuiz() {
        const userResult = document.getElementById("user-result")

        // debugger
        resultContainer.removeChild(userResult)
        resultDiv.removeChild(resultContainer)
        quizDiv.appendChild(quizContainer)
        // quizContainer.style.display = ""
        // quizContainer.hidden = false
        // quizContainer.show()
        // questionCall.getQuestions()
    }

    attachToDom() {
        // debugger
        RealtorLevel.container.appendChild(this.render())
        RealtorLevel.container.append(quizBtn)

        quizBtn.addEventListener("click", this.reloadQuiz)

        RealtorLevel.updateDatabase()
    }

}