class RealtorLevel {
    static all = [];
    static container = document.getElementById("result-container");

    static mainContainer = document.getElementById("result");

    constructor({ id, level, description, free_content, products, promo_code, slides, options = [], users = [] }) {
        this.id = id
        this.level = level
        User.currentUser.result = this.level
        this.description = description
        this.free_content = free_content
        this.products = products
        this.promo_code = promo_code
        this.slides = slides
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
        let text = this.description
        let words = text.split(' ');
        let newText = '';

        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            if (word.indexOf('Luxe') === 0 || word.indexOf('presentation') === 0 || word.indexOf('Newsletter') === 0 || word.indexOf('Flyer') === 0 || word.indexOf('postcard') === 0 || word.indexOf('Brochures') === 0 || word.indexOf('signage') === 0) {
                word = `<a href='https://www.corefact.com/c/products' target="_blank" rel="noopener noreferrer">${word}</a>`;
            } else if (word.indexOf('consultation') === 0) {
                word = `<a href='https://www.corefact.com/c/elite' target="_blank" rel="noopener noreferrer">${word}</a>`;
            }
            newText += word + ' ';
        }
        this.description = newText;

        this.element.innerHTML =
            `
            <div class="slideshow-container">
            <a href="https://www.corefact.com/print/catalog" target="_blank" rel="noopener noreferrer">
              <img src="${this.slides.split(' \n ')[0]}" alt="Slide 1"/>
              <img src="${this.slides.split(' \n ')[1]}" alt="Slide 2"/>
              <img src="${this.slides.split(' \n ')[2]}" alt="Slide 3"/>
              <img src="${this.slides.split(' \n ')[3]}" alt="Slide 4"/>
              </a>
            </div>
            <div id="result-${this.id}">
            <h3 class="level">${firstNameInput.value}, you are ${this.level}!</h3>
            <p class="description">${this.description.split('\n')[0]}</p>
            <p class="description">${this.description.split('\n')[1]}</p>
            <p class="description">${this.description.split('\n')[2]}</p>
            <p class="description">${this.description.split('\n')[3]}</p>
            <p class="description">${this.description.split('\n')[4]}</p>
            <p class="description">${this.description.split('\n')[5]}</p>
            <p class="description">${this.description.split('\n')[6]}</p>
            </div>
            <div id="result-buttons">
            <a href="${this.free_content}" target="_blank" rel="noopener noreferrer" class="button-free-content">Download Free Content</a>
            <a href="https://www.corefact.com/print/catalog/205-featured/products" target="_blank" rel="noopener noreferrer" class="buttton-store">*Get 10% off with promo code <u>${this.promo_code}</u></a>
            </div>
            <p><span id="promo-code-info">*10% off up to $50 on ALL products.</span></p>
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
        // RealtorLevel.container.append(quizBtn)

        const divResultBtns = document.getElementById("result-buttons")
        divResultBtns.prepend(quizBtn)

        quizBtn.addEventListener("click", this.reloadQuiz)

        RealtorLevel.updateDatabase()
    }

}
