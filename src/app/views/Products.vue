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
    import Product from '_components/Product.vue'

    export default {
        name: 'ProductsView',

        components: {
            Product
        },

        data () {
            return {
                products: [
                    {
                        id: 0,
                        title: 'Camisa Nike Corinthians I',
                        price: 229.9,
                        installments: 9,
                        currencyFormat: 'R$',
                        image: 'https://i2.zst.com.br/images/camisa-torcedor-corinthians-i-2017-18-sem-numero-nike-photo179243761-45-2a-11.jpg'
                    },
                    {
                        id: 1,
                        title: 'Camisa Feminina Nike Corinthians I',
                        price: 199.9,
                        installments: 7,
                        currencyFormat: 'R$',
                        image: 'https://i2.zst.com.br/images/camisa-torcedor-corinthians-i-2017-18-sem-numero-nike-photo179243761-45-2a-11.jpg'
                    },
                    {
                        id: 2,
                        title: 'Calção Nike Corinthians',
                        price: 49.9,
                        installments: 0,
                        currencyFormat: 'R$',
                        image: 'https://i2.zst.com.br/images/camisa-torcedor-corinthians-i-2017-18-sem-numero-nike-photo179243761-45-2a-11.jpg'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .products {
        &__list {
            margin-top: 15px;

            &__item:not(:first-child) {
                margin-top: 15px;
            }
        }
    }
</style>
