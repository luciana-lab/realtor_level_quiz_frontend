class UserApi {
    constructor(port) {
        this.port = `${port}/users`
    }

    createUsers() {
        const userInfo = {
            first_name: firstNameInput.value,
            last_name: lastNameInput.value,
            email: emailInput.value,
            has_account: hasAccountInput.checked,
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
            .then(resp => {
                if (resp.ok) {
                    return resp.json()
                } else {
                    throw new Error()
                }
            })
            .then(data => {
                User.findOrCreateBy(data)

                // const user = new User(data)
                // user.attachToDom()
                // console.log(data)
                // debugger
            })
            .catch(error => console.log(error))

        questionCall.getQuestions()
    }

    updateUserResult(result) {
        const resultInfo = { result }

        const configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(resultInfo)
        }

        fetch(`${this.port}/${id}`, configObj)
            .then()
    }

}