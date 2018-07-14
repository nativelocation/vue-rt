<template>
    <div id="messages-category" class="messages-banner">
        <homeHeader></homeHeader>
        <div class="messages-category-banner">
            <div class="messages-category-path">
                <router-link
                    class="all-message"
                    to="/messages"
                    exact
                >
                    Messages
                </router-link> > {{$route.name}}
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import homeHeader from '../../components/header/Homeheader.vue'
    export default {
        components: {
            homeHeader
        }
    }
</script>

<style lang="sass">
    @import '~styles/variables';
    #messages-category {
        .messages-category-banner {
            position: relative;
            padding-left: 83px;
            min-height: 306px;
            background: url('/src/assets/images/banner.jpg');
            background-size: 100% auto;
            background-position-y: center;
            .messages-category-path {
                position: absolute;
                bottom: 5px;
                font-size: 50px;
                font-family: cabin;
                font-weight: 100;
                color: $white;
            }
            .all-message, .all-message.hover {
                color: $white;
                text-decoration: none;
                cursor: pointer;
            }
        }
    }
</style>
