class OptionApi {
    constructor(port) {
        this.port = port
    }

    getOptions() {
        fetch(this.port + '/options')
            .then(resp => resp.json())
            .then(data => {
                data.forEach(option => {
                    const o = new Option(option)

                })
            })
    }
}