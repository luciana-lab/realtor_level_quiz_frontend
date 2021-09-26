class realtorLevelApi {
    constructor(port) {
        this.port = port
    }

    getResult() {
        fetch(this.port + '/realtor_levels')
            .then(resp => resp.json())
            .then(data => {
                for (const level of data) {
                    let result = new realtorLevel(level)
                    result.attachToDom()
                }
            })

    }

}