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
        }
    },

    actions: {
        addProductToCart ({ commit }, product) {
            commit('addProduct', product)
        },

        removeProductFromCart ({ commit }, product) {
            commit('removeProduct', product)
        }
    }
}
