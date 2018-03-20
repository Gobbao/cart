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
        },

        removeProduct (state, product) {
            state.products = state.products.filter(stateProduct =>
                stateProduct.id !== product.id
            )
        },

        setProducts (state, products) {
            state.products = products
        }
    },

    actions: {
        addProductToCart ({ commit, state }, product) {
            Promise.resolve(commit('addProduct', product)).then(
                () => updateLocalProducts(state.products)
            )
        },

        removeProductFromCart ({ commit, state }, product) {
            Promise.resolve(commit('removeProduct', product)).then(
                () => updateLocalProducts(state.products)
            )
        },

        fetchLocalProducts ({ commit }) {
            commit('setProducts', LocalStorageService.getItem('products') || [])
        }
    }
}
