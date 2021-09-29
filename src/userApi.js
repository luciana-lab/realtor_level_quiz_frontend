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
                // debugger
                // User.findOrCreateBy(data)

                const user = new User(data)
                // user.attachToDom()

                console.log(data)
                // debugger
            })
            .catch(error => console.log(error))

        questionCall.getQuestions()
    }

    updateUserResult(result) {
        const configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ result: result })
        }

        fetch(`${this.port}/${User.currentUser.id}`, configObj)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => console.log(error))
    }

}