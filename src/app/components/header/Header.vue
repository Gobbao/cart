<template>
    <div class="header">
        <div class="header__menu">
            <i class="fas fa-shopping-bag"></i>
        </div>

        <cart></cart>
    </div>
</template>

<script>
    import Cart from '_components/cart/Cart.vue'

    export default {
        name: 'Header',

        components: {
            Cart
        }
    }
</script>

<style lang="scss" scoped>
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
            color: white;
            font-size: 25px;
            line-height: 30px;

            cursor: pointer;
        }
    }
</style>
