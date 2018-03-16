<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <router-view class="container"></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang="scss" scoped>
    .container {
        padding: 15px;
    }
</style>

