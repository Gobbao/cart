<template>
    <div class="products">
        <h4 class="products__title">
            O que você precisa?
        </h4>

        <div class="products__list">
            <product class="products__list__item"
                v-for="product in products"
                :key="product.id"
                :product="product"
            ></product>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import Product from '_components/product/Product.vue'

    export default {
        name: 'ProductsView',

        components: {
            Product
        },

        data () {
            return {
                products: []
            }
        },

        beforeMount () {
            this.getProducts().then(response => {
                this.products = response.data
            })
        },

        methods: {
            ...mapActions([
                'getProducts'
            ])
        }
    }
</script>

<style lang="scss" scoped>
    .products {
        &__list {
            margin-top: 15px;

            display: flex;
            flex-wrap: wrap;

            &__item {
                margin: 5px auto;
            }
        }
    }
</style>
