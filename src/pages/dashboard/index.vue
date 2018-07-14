<template>
    <div id="dashboard-container">
        <dashboardHeader></dashboardHeader>
        <router-view></router-view>
    </div>
</template>

<script>
    import dashboardHeader from '../../components/header/Dashboardheader.vue'
    import mark from '../../assets/images/HennepinCo.png'
    export default {
        components: {
            dashboardHeader
        }
    }
</script>

<style lang="sass">
    @import '~styles/variables';
    #dashboard-container {
        background: $gray-200;
        height: 100%;
    }
</style>
