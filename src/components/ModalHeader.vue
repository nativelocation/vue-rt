<template>
    <div id="page-header">
        <div class="content d-flex justify-content-between align-items-center">
            <div class="header-title">{{ title }}</div>
            <div class="header-action-btn">
                <font-awesome-icon :icon="faQuestion" />
                <font-awesome-icon
                    :icon="faTimes"
                    @click="handleClose"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
    import faTimes from '@fortawesome/fontawesome-free-solid/faTimes'
    import faQuestion from '@fortawesome/fontawesome-free-solid/faQuestion'
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            handleClose: {
                type: Function,
                default: () => []
            }
        },
        computed: {
            faTimes() {
                return faTimes
            },
            faQuestion() {
                return faQuestion
            }
        },
        components: {
            FontAwesomeIcon
        }
    }
</script>

<style lang="sass">
    @import '~styles/variables';
    #page-header {
        .content {
            background: $gray-110;
            height: 72px;
            padding-left: 13px;
            padding-right: 50px;
            .header-title {
                font-size: 25px;
            }
            .header-action-btn {
                .fa-question, .fa-times {
                    margin-left: 23px;
                    margin-right: 23px;
                    width: 28px;
                    height: 28px;
                }
                .fa-question {
                    width: 15px;
                    height: 28px;
                }
            }
        }
    }
</style>
