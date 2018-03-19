import BaseService from './base'

export default new class ProductService extends BaseService {

    getUrl () {
        return `${super.getUrl()}/products`
    }

    list () {
        return this.request()
    }
}
