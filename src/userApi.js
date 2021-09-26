class UserApi {
    constructor(port) {
        this.port = port
    }

    createUsers() {
        const userInfo = {
            user: {
                first_name: firstNameValue.value,
                last_name: lastNameValue.value,
                email: emailValue.value,
                has_account: hasAccountValue.value
            }
        }
        fetch(this.port + `/users`)
            .then(resp => resp.json())
            .then(data => console.log(data))
    }

}