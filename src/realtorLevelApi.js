class RealtorLevelApi {
    constructor(port) {
        this.port = `${port}/realtor_levels`
    }

    getResult(level) {
        quizContainer.remove()
        fetch(this.port)
            .then(resp => resp.json())
            .then(data => {
                let result = data.filter((x) => {
                    return x.level === level
                })
                const agent = new RealtorLevel(result[0])
                agent.attachToDom()
            })
    }
}