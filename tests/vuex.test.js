import { describe, it } from 'mocha'
import { expect } from 'chai'
import cart from '../src/store/modules/cart'

const { state, mutations } = cart

describe('mutations', () => {
    it('ADD PRODUCT', () => {
        // adding a product
        mutations.addProduct(state, { id: 1 })

        expect(state.products.length).to.equal(1)

        // adding the same product to test quantity property
        mutations.addProduct(state, { id: 1 })

        expect(state.products.length).to.equal(1)
        expect(state.products[0].quantity).to.equal(2)
    })

    it('REMOVE PRODUCT', () => {
        mutations.removeProduct(state, { id: 1 })

        expect(state.products.length).to.equal(0)
    })

    it('SET PRODUCT', () => {
        mutations.setProducts(state, [
            { id: 1 },
            { id: 2 },
            { id: 3 }
        ])

        expect(state.products.length).to.equal(3)
    })
})
