import axios from 'axios'

class BaseService {

    getUrl () {
        return 'http://localhost:8000'
    }

    request (method = 'get', url = this.getUrl()) {
        return axios({ method, url })
            .then(this.handleResponse)
            .catch(this.handleError)
    }

    handleResponse (response) {
        return response.data
    }

    handleError (error) {
        throw error.response
    }
}

export default BaseService
