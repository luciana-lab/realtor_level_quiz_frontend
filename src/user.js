class User {
    static currentUser = '';
    static all = []
    // static container = document.getElementById("result-container");

    constructor({ id, first_name, last_name, email, has_account, result }) {
        this.id = id
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
        this.has_account = has_account
        this.result = RealtorLevel.level
        User.currentUser = this
        User.all.push(this)
    }

    static findByEmail(email) {
        // debugger
        return this.all.find(function (user) { user.email === email })
    }

    static findOrCreateBy(user) {
        debugger
        return this.findByEmail(user.email) || new User(user)
    }

    // render() {
    //     this.element.innerHTML =
    //         `
    //         <h3 class="level">${this.first_name} see your result below:</h3>
    //         `
    //     // debugger
    //     return this.element
    // }

    // attachToDom() {
    // User.container.appendChild(this.render())
    // }

}