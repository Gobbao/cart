<template>
    <div class="header">
        <div @click="openCart"
            class="header__menu"
            :class="{ badge: totalProducts }"
            :badge="totalProducts"
        ></div>

        <cart ref="cart"></cart>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import Cart from '_components/cart/Cart.vue'

    export default {
        name: 'Header',

        components: {
            Cart
        },

        computed: {
            ...mapState({
                products: state => state.cart.products
            }),

            totalProducts () {
                return this.products.reduce((prev, curr) =>
                    prev + curr.quantity
                , 0)
            }
        },

        methods: {
            openCart () {
                this.$refs.cart.open()
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~_scss_components/badge';

    .header {
        width: 100%;
        height: 50px;

        padding: 10px 15px;

        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;

        display: flex;
        justify-content: flex-end;

        background-color: $color-black;

        &__menu {
            width: 30px;
            height: 30px;

            background-image: url('~_images/cart-white.png');
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;

            cursor: pointer;
        }
    }
</style>
