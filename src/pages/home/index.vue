<template>
    <div id="Home">
        <homeHeader></homeHeader>
        <div class="container-fluid p-0 m-0">
            <Banner />
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import homeHeader from '../../components/header/Homeheader.vue'
    import Banner from '../../components/Banner.vue'
    export default {
        components: {
            homeHeader,
            Banner
        }
    }
</script>

<style lang="sass">
    @import '~styles/variables';
    #Home {
        .container-fluid {
            .font-30 {
                font-size: 30px;
                font-family: cabin;
                font-weight: 100;
                color: $white;
                text-align: center;
            }
        }
    }
</style>
