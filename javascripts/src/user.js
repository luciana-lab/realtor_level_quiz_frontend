class User {
    static currentUser = '';
    static all = [];

    constructor({ id, first_name, last_name, email, has_account, result }) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.has_account = has_account;
        this.result = result;
        User.currentUser = this;
        User.all.push(this);
    };
};