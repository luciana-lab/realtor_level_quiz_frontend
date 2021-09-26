class UserApi {
    constructor(port) {
        this.port = `${port}/users`
    }

    createUsers() {
        const userInfo = {
            user: {
                first_name: firstNameInput.value,
                last_name: lastNameInput.value,
                email: emailInput.value,
                has_account: hasAccountInput.value
            }
        }
        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(userInfo)
        }

        fetch(this.port, configObj)
            .then(resp => resp.json())
            .then(data => console.log(data))
    }

}