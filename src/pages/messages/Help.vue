<template>
    <div>
        <div class="category-new-title d-flex justify-content-between align-items-center"></div>
        <div class="category-new-content">
            <div class="col-12 p-0">
                <div class="category-help-table-title d-flex align-items-center pl-3">
                    Frequently Asked Question
                </div>
                <div class="d-flex flex-wrap container-border border-bottom-0">
                    <div class="col-sm-3 p-0">
                        <div
                            v-for="(item, index) in faqsTitle"
                            :key="index"
                            class="faq-contnent border-top-0"
                            @click="faqSelector(index)"
                            :class="index === selectedfaq ? 'faq-select' : ''"
                        >
                            {{item}}
                        </div>
                    </div>
                    <div class="faq-contnent text-prewrap col-sm-9 p-1 border-top-0">{{faqs[selectedfaq]}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                faqsTitle: [
                    'How do I get a user account to log in?',
                    'How do I become a plan holder for a project?',
                    'Why is my district taking so long to load?',
                    'Why am I getting a message about cookies being disabled?'
                ],
                faqs: [
                    "To become a plan holder and download plans from Hennepin County's eGram server, you need to log in to Hennepin County eGram server using your Connex ID and password. Your organization will then be added to the plan holders list. If you do not login you can download plans but your organization will not be listed as a plan holder. You may also contact Jessa Trboyevich at 612-596-0373 to be added to the plan holder list.",
                    "If you have never requested access to the Hennepin County eGram you will need to set up your organization by going to ConneX server at https://connex.mn.uccs.com/. Where you can setup your Organization and authorized users and/or signers. Your organization can have multiple user accounts with varied levels of authorization. If you previously got your password and ID from Hennepin County you will need to set up your organization on ConneX Server. In ConneX you may request access to Hennepin County's eGram site. After you have been granted access you will receive an email. Then your Connex password will also work on Hennepin County's eGram server.",
                    'To optimize the use of eGram, the counties and cities must ensure that their eGram servers are operational. If you are getting a long load time when viewing your district, one of the eGram servers in your district might be experiencing problems. The server may be down or misconfigured, or may be having network issues. You may want to notify the owners of the server to make them aware of the problem.',
                    `If you are getting a "Your browser is not currently set to accept cookies" message or something similar, please check that your browser is configured to accept cookies.

Resolution for Internet Explorer

Navigate to Tools > Internet Options > Click on the Privacy tab

Adjust the slider to "Low" or "Accept All Cookies"`
                ],
                selectedfaq: ''
            }
        },
        methods: {
            faqSelector(index) {
                this.selectedfaq = index
            }
        }
    }
</script>

<style lang="sass">
    @import '~styles/variables';
    .category-help-title {
        padding: 1rem 4%;
        background: $gray-200;
        height: 72px;
        padding: 0 4%;
        font-size: 30px;
        font-family: cabin;
        font-weight: 100;
    }
    .category-help-table-title {
        height: 42px;
        background: $gray-400;
        border: solid 1px $gray-600;
        color: $black;
        font-size: 20px;
        font-family: cabin;
        font-weight: 100;
    }
    .faq-contnent {
        min-height: 22px;
        background: $white;
        border: solid 1px $gray-600;
        color: $black;
        padding: 0;
        padding-left: 5px;
        font-size: 12px;
        font-family: arial;
        font-weight: 100;
    }
    .faq-select {
        background: $gray-200;
    }
    .text-prewrap {
        white-space: pre-wrap;
    }
    .container-border {
        border-bottom: solid 1px $gray-600;
    }
</style>
