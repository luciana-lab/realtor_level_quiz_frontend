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
                // const user = User.findOrCreateBy(data)

                if (data.result !== null) {
                    let level
                    if (data.result === "Expert") {
                        level = data.result
                    } else if (data.result === "Master") {
                        level = data.result
                    } else if (data.result === "Top Agent") {
                        level = data.result
                    }
                    realtorLevelCall.getResult(level)
                }
                const user = new User(data)
                // user.attachToDom()
                // debugger

                console.log(data)
                console.log(user)
                // debugger
            })
            .catch(error => console.log(error))

        questionCall.getQuestions()
    }

    updateUserResult(result) {
        const updateUser = {
            first_name: firstNameInput.value,
            last_name: lastNameInput.value,
            email: emailInput.value,
            has_account: hasAccountInput.checked,
            result: result,
        }

        const configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(updateUser)
            // body: JSON.stringify({ result: result })
        }

        fetch(`${this.port}/${User.currentUser.id}`, configObj)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => console.log(error))
    }

}