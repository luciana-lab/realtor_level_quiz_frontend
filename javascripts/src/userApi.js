class UserApi {
    constructor(port) {
        this.port = `${port}/users`;
    };

    createUsers() {
        const userInfo = {
            first_name: firstNameInput.value,
            last_name: lastNameInput.value,
            email: emailInput.value,
            has_account: hasAccountInput.checked,
        };
        const configObj = {
            // mode: 'cors',
            // credentials: 'include',
            method: 'POST',
            headers: { // type of content is dealing with
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(userInfo) // coverts a JS object/value to a JSON string
        };

        fetch(this.port, configObj)
            .then(resp => {
                if (resp.ok) {
                    return resp.json() // if promise fulfilled, read and parse the data
                } else {
                    throw new Error()
                }
            })
            .then(data => {
                if (data.result !== null) {
                    let level;
                    if (data.result === "Expert") {
                        level = data.result
                    } else if (data.result === "Master") {
                        level = data.result
                    } else if (data.result === "Top Agent") {
                        level = data.result
                    }
                    realtorLevelCall.getResult(level);
                };
                const user = new User(data);
            })
            .catch(error => console.log(error))

        quizDiv.appendChild(quizContainer);
        questionCall.getQuestions();
    };

    updateUserResult(result) {
        const updateUser = {
            first_name: firstNameInput.value,
            last_name: lastNameInput.value,
            email: emailInput.value,
            has_account: hasAccountInput.checked,
            result: result,
        };

        const configObj = {
            // mode: 'cors',
            // credentials: 'include',
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(updateUser)
        };

        fetch(`${this.port}/${User.currentUser.id}`, configObj)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => console.log(error))
    };
};