class RealtorLevel {
    static all = [];
    static container = document.getElementById("result-container");

    constructor({ id, level, description, free_content, products, promo_code, options = [] }) {
        this.id = id
        this.level = level
        this.description = description
        this.free_content = free_content
        this.products = products
        this.promo_code = promo_code
        this.options = options

        this.element = document.createElement('div');
        this.element.dataset['id'] = id;
        this.element.id = `result-${id}`;

        RealtorLevel.all.push(this);
    }

    render() {
        this.element.innerHTML =
            `
            <div id="result-${this.id}">
            <h3 class="level">${this.level}</h3>
            <p class="description">${this.description}</p>
            <a href="${this.free_content}">Download Free Content</a>
            <p class="products">Products Suggestions: ${this.products}</p>
            <p class="promo-code">Use ${this.promo_code} to get 10% off up to $50 on all products listed above.</p>
            </div>
            `
        return this.element
    }

    attachToDom() {
        RealtorLevel.container.appendChild(this.render())
    }

}