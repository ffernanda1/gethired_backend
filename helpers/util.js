class Response {
    constructor(data, Status){
        const {message, name, errors} = data
        this.Status = Status
        this.message0 = Status
        this.message1 = message
        this.data = data
        
    }
}

class Response2 {
    constructor(data2, status){
        this.status = status
        this.message = data2
    }
}

module.exports = {Response, Response2}