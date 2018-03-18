<template>
    <div id="app">
        <main-header></main-header>

        <transition name="fade" mode="out-in">
            <router-view class="container"></router-view>
        </transition>
    </div>
</template>

<script>
    import MainHeader from '_components/header/Header.vue'

    export default {
        name: 'App',

        components: {
            MainHeader
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        padding: 65px 15px 15px 15px;
    }
</style>

