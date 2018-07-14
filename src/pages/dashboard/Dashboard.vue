<template>
    <div id="dashboard">
        <div class="container-fluid p-0 m-0">
            <div class="dashboard-content">
                <div class="mark-container">
                    <img :src="getMark" />
                </div>
                <div class="block-content d-flex flex-wrap">
                    <div class="col-md-8 d-flex flex-wrap p-0">
                        <div class="d-inline-block report w-50 default-section">
                            <div class="section-content-bgcolor">
                                <div class="section-title">Report</div>
                                <div class="section-chart"></div>
                                <div class="section-footer mb-3 d-flex flex-column align-items-center">
                                    <div class="seperator w-25 mb-2"></div>
                                    <div>VIEW CURRENT PLAN</div>
                                </div>
                            </div>
                        </div>
                        <div class="d-inline-block project-detail w-50 default-section">
                            <div class="section-content-bgcolor">
                                <div class="section-title">Report</div>
                                <div class="section-chart"></div>
                                <div class="section-footer mb-3 d-flex flex-column align-items-center">
                                    <div class="seperator w-25 mb-2"></div>
                                    <div>VIEW CURRENT PLAN</div>
                                </div>
                            </div>
                        </div>
                        <div class="d-inline-block report w-50 default-section">
                            <div class="section-content-bgcolor">
                                <div class="section-title">Report</div>
                                <div class="section-chart"></div>
                                <div class="section-footer mb-3 d-flex flex-column align-items-center">
                                    <div class="seperator w-25 mb-2"></div>
                                    <div>VIEW CURRENT PLAN</div>
                                </div>
                            </div>
                        </div>
                        <div class="d-inline-block report w-50 default-section">
                            <div class="section-content-bgcolor">
                                <div class="section-title">Report</div>
                                <div class="section-chart"></div>
                                <div class="section-footer mb-3 d-flex flex-column align-items-center">
                                    <div class="seperator w-25 mb-2"></div>
                                    <div>VIEW CURRENT PLAN</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="d-inline-block messaging w-100 h-100 default-right-section">
                            <div class="section-content-bgcolor h-100">
                                <div class="section-title">Messaging</div>
                                <div
                                    class="section-content my-2"
                                    v-for="(list, index) in messagingList"
                                    :key="index"
                                >
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div>{{list}}</div>
                                        <div style="fontSize: 8px">ame</div>
                                    </div>
                                    <div class="seperator w-100 mt-2"></div>
                                </div>
                                <div class="section-footer mb-3 d-flex flex-column align-items-center">
                                    <div class="seperator w-25 mb-2"></div>
                                    <div>VIEW CURRENT PLAN</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import dashboardHeader from '../../components/header/Dashboardheader.vue'
    import mark from '../../assets/images/HennepinCo.png'
    export default {
        data: () => {
            return {
                messagingList: [
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.'
                ]
            }
        },
        computed: {
            getMark() {
                return mark;
            }
        }
    }
</script>

<style lang="sass">
    @import '~styles/variables';
    #dashboard {
        .container-fluid {
            .dashboard-content {
                padding: 2.2rem 5.7%;
                .mark-container {
                    margin-bottom: 52px;
                }
                .default-section {
                    // max-height: 320px;
                    // max-width: 340px;
                    // height: 320px;
                    // width: 340px;
                    // padding: 1rem 22px;
                    padding: 0 7% 4% 0;
                }
                .default-right-section {
                    padding: 0 7% 8% 0;
                }
                .section-content-bgcolor {
                    background: $white;
                    padding: 1rem 22px;
                    position: relative;
                }
                .section-title {
                    font-size: 16px;
                    font-family: cabin;
                    font-weight: 300px;
                }
                .section-chart {
                    height: 220px;
                }
                .section-footer {
                    font-size: 10px;
                    font-family: arial;
                }
                .section-content {
                    font-size: 12px;
                    font-family: Old Standard TT;
                }
                .section-footer {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    left: 0;
                }
                .seperator {
                    border: solid 1px $gray-600;
                }
            }
        }
    }
</style>
