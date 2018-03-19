import LocalStorageService from '_services/local-storage'

const updateLocalProducts = products =>
    LocalStorageService.setItem('products', products)

export default {
    state: {
        products: []
    },

    mutations: {
        addProduct (state, product) {
            let contains = false

            state.products = state.products.map(stateProduct => {
                if (stateProduct.id === product.id) {
                    stateProduct.quantity += 1
                    stateProduct = Object.assign({}, stateProduct)
                    contains = true
                }

                return stateProduct
            })

            if (!contains) {
                product.quantity = 1
                state.products.push(product)
            }

            updateLocalProducts(state.products)
        },

        removeProduct (state, product) {
            state.products = state.products.filter(stateProduct =>
                stateProduct.id !== product.id
            )

            updateLocalProducts(state.products)
        },

        setProducts (state, products) {
            state.products = products
        }
    },

    actions: {
        addProductToCart ({ commit }, product) {
            commit('addProduct', product)
        },

        removeProductFromCart ({ commit }, product) {
            commit('removeProduct', product)
        },

        fetchLocalProducts ({ commit }) {
            commit('setProducts', LocalStorageService.getItem('products') || [])
        }
    }
}
