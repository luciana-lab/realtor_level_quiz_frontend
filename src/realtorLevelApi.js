class RealtorLevelApi {
    constructor(port) {
        this.port = `${port}/realtor_levels`
    }

    getResult() {
        quizContainer.remove()
        fetch(this.port)
            .then(resp => resp.json())
            .then(data => {
                for (const level of data) {
                    let result = new RealtorLevel(level)
                    debugger
                    result.attachToDom()
                }
            })
    }
}