import ProductService from '_services/product'

export default {
    actions: {
        getProducts () {
            return ProductService.list()
        }
    }
}
