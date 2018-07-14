<template>
    <div id="app">
        <div
            role="main"
            class="app-content"
            :class="$route.name === 'dashboard' ? 'app-content-bg' : ''"
        >
			<router-view></router-view>
		</div>
        <appFooter></appFooter>
    </div>
</template>

<script type="text/babel">
    import appFooter from './components/Footer.vue'
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import Vue from 'vue'
    import BootstrapVue from 'bootstrap-vue'
    Vue.use(BootstrapVue);
    export default {
        components: {
            appFooter
        }
    }
</script>

<style lang="sass">
    @import '~styles/fonts';
    @import '~styles/variables';
    @import '../node_modules/bootstrap/scss/bootstrap.scss';
    html, body, #app {
        height: 100%;
    }
    #app {
        .app-content {
            min-height: 100%;
            margin-bottom: -48px;
            padding-bottom: 48px;
        }
        .app-content-bg {
            background: $gray-200;
        }
    }
</style>
