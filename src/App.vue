<template>
    <div id="app">
        <appHeader></appHeader>
        <div role="main" class="app-content">
			<router-view></router-view>
		</div>
        <appFooter></appFooter>
    </div>
</template>

<script type="text/babel">
    import appHeader from './components/Header.vue'
    import appFooter from './components/Footer.vue'
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import Vue from 'vue'
    import BootstrapVue from 'bootstrap-vue'
    Vue.use(BootstrapVue);
    export default {
        components: {
            appHeader,
            appFooter
        }
    }
</script>

<style lang="sass">
    @import '~styles/variables';
    @import '../node_modules/bootstrap/scss/bootstrap.scss';
    html, body, #app {
        height: 100%;
    }
    #app {
        .app-content {
            min-height: calc( 100% - 72px );
            margin-bottom: -48px;
            padding-bottom: 48px;
        }
    }
</style>
