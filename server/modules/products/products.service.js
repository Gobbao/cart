const constants = require('./products.constants')
    , products = require('../../db/products').products

class ProductService {
    list () {
        return {
            message: constants.routes.list,
            data: products
        }
    }
}

module.exports = new ProductService
