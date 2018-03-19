<template>
    <div id="app">
        <main-header></main-header>

        <transition name="fade" mode="out-in">
            <router-view class="container"></router-view>
        </transition>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import MainHeader from '_components/header/Header.vue'

    export default {
        name: 'App',

        components: {
            MainHeader
        },

        beforeMount () {
            this.fetchLocalProducts()
        },

        methods: {
            ...mapActions([
                'fetchLocalProducts'
            ])
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        padding: 65px 15px 15px 15px;

        @media only screen and (min-width: $screen-md) {
            padding: 65px 10vw 15px 10vw;
        }
    }
</style>

