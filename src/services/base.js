import axios from 'axios'
import config from '_config'

class BaseService {

    getUrl () {
        return config.API_URL
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
