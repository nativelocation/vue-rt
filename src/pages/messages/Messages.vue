<template>
    <div>
        <div class="category-new-title d-flex justify-content-between align-items-center">
            <div>
                Messages
            </div>
            <button
                class="new-message-btn"
                v-b-modal.newMessage
            >
                New Messages
            </button>
        </div>
        <div class="category-new-content">
            <div class="col-12 p-0">
                <b-table
                    :items="messages.rows"
                    :fields="messages.columns"
                    border
                    class="border-0 m-0"
                >
                    <template slot="subject" slot-scope="data">
                        <div v-b-modal.openMessage class="message-list">
                            {{data.value}}
                        </div>
                    </template>
                </b-table>
                <div class="message-pagination d-flex align-items-center justify-content-center border-top-0">
                    Page 1 of 1
                </div>
            </div>
            <b-modal
                id="openMessage"
                title="Messages"
                header-text-variant="dark"
                body-bg-variant="light"
                body-text-variant="dark"
            >
                <b-container class="p-0">
                    <div class="open-message-content-header d-flex justify-content-between align-items-center px-4">
                        <div>
                            PROJECT QUESTION: What Pay item is the Temp Pvmt Marking getting paid for in the temp traffic control plans?
                        </div>
                        <div
                            class="post-reply-btn d-flex px-1"
                            @click="changeReplyEnable"
                        >
                            Post Reply
                        </div>
                    </div>
                    <div class="open-message-content-body pt-4 px-4">
                        <div
                            v-for="(item, index) in mailContent"
                            :key="index"
                        >
                            <div class="open-message-mail-header d-flex">
                                <div class="mail-header-fullname border-right-0 col-sm-10 d-flex justify-content-between align-items-center px-1">
                                    <i class="material-icons">live_help</i>
                                    <div>Last Name, First Name</div>
                                </div>
                                <div class="mail-header-fullname col-sm-2 d-flex justify-content-between align-items-center px-2">
                                    <div>01/12/2018</div>
                                    <div>2:48 PM</div>
                                </div>
                            </div>
                            <div class="open-message-mail-content border-top-0 mb-3 p-2">
                                {{item}}
                            </div>
                        </div>
                    </div>
                    <div v-if="replyEnable" class="open-reply-message-content-body px-4 pb-4">
                        <div class="open-reply-message-mail-header d-flex">
                            <div class="mail-header-fullname border-right-0 col-sm-10 d-flex justify-content-between align-items-center px-1">
                                <i class="material-icons">live_help</i>
                                <input class="reply-name m-1" placeholder="name" />
                            </div>
                            <div class="mail-header-fullname col-sm-2 d-flex justify-content-between align-items-center px-2">
                                <div>01/12/2018</div>
                                <div>2:48 PM</div>
                            </div>
                        </div>
                        <textarea class="open-reply-message-mail-content w-100 border-top-0 mb-3 p-2" rows="6"></textarea>
                        <div class="d-flex justify-content-end">
                            <div class="post-btn px-1">
                                Post
                            </div>
                        </div>
                    </div>
                </b-container>
                <div slot="modal-footer" class="w-100"></div>
            </b-modal>
            <b-modal
                id="newMessage"
                title="New Message"
                header-text-variant="dark"
                body-bg-variant="light"
                body-text-variant="dark"
            >
                <b-container class="p-0">
                    <div class="open-message-content-header d-flex justify-content-between align-items-center px-4">
                        <div class="col-1">SUBJECT:</div>
                        <input class="col-11"/>
                    </div>
                    <div class="open-reply-message-content-body p-4">
                        <div class="open-reply-message-mail-header d-flex">
                            <div class="mail-header-fullname border-right-0 col-sm-10 d-flex justify-content-between align-items-center px-1">
                                <i class="material-icons">live_help</i>
                                <input class="reply-name m-1" placeholder="name" />
                            </div>
                            <div class="mail-header-fullname col-sm-2 d-flex justify-content-between align-items-center px-2">
                                <div>01/12/2018</div>
                                <div>2:48 PM</div>
                            </div>
                        </div>
                        <textarea class="open-reply-message-mail-content w-100 border-top-0 mb-3 p-2" rows="6"></textarea>
                        <div class="d-flex justify-content-end">
                            <div class="post-btn px-1">
                                Post
                            </div>
                        </div>
                    </div>
                </b-container>
            </b-modal>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                messages: {
                    columns: [
                        {
                            key: 'lastModified',
                            label: 'Last Modified',
                            style: {
                                'color': 'black'
                            },
                            thClass: 'table-header-public',
                            tdClass: 'table-body'
                        },
                        {
                            key: 'subject',
                            label: 'Subject',
                            style: {
                                'color': 'blue'
                            },
                            thClass: 'table-header-public',
                            tdClass: 'table-body'
                        },
                        {
                            key: 'postedBy',
                            label: 'Posted By',
                            style: {
                                'color': 'black'
                            },
                            thClass: 'table-header-public',
                            tdClass: 'table-body'
                        }
                    ],
                    rows: [
                        {
                            lastModified:  '01/12/2018' + '   ' + '9:35 AM',
                            subject:  'PROJECT QUESTION: What Pay item is the Temp Pvmt Marking getting paid for int he temp traffic control plans?',
                            postedBy:  'Last Name, First Name'
                        },
                        {
                            lastModified:  '01/12/2018' + '   ' + '2:09 PM',
                            subject:  'PROJECT QUESTION: What Pay item is the Temp Pvmt Marking getting paid for int he temp traffic control plans?',
                            postedBy:  'Last Name, First Name'
                        },
                        {
                            lastModified:  '10/13/2017' + '   ' + '2:48 PM',
                            subject:  'PROJECT QUESTION: Could you tell me if you want Type I or Type II RC dissipaters on this project?',
                            postedBy:  'Last Name, First Name'
                        },
                        {
                            lastModified:  '10/13/2017' + '   ' + '10:53 AM',
                            subject:  'PROJECT QUESTION: Could you tell me if you want Type I or Type II RC dissipaters on this project?',
                            postedBy:  'Last Name, First Name'
                        },
                        {
                            lastModified:  '10/13/2017' + '   ' + '10:06 AM',
                            subject:  'PROJECT QUESTION: There appears to be an error in the quality for pay item ARCH SURFACE FINISH (MULTICOLOR).',
                            postedBy:  'Last Name, First Name'
                        },
                        {
                            lastModified:  '10/13/2017' + '   ' + '2:48 PM',
                            subject:  'PRE-BIDDING CONFERENCE - MONDAY, OCTOBER 16, 2017',
                            postedBy:  'Last Name, First Name'
                        },
                        {
                            lastModified:  '01/16/2015' + '   ' + '2:09 PM',
                            subject:  'PROJECT QUESTIONS',
                            postedBy:  'Last Name, First Name'
                        },
                        {
                            lastModified:  '04/06/2011' + '   ' + '9:30 AM',
                            subject:  'PROJECT QUESTIONS',
                            postedBy:  'Last Name, First Name'
                        },
                        {
                            lastModified:  '04/06/2011' + '   ' + '2:48 PM',
                            subject:  'Is crushing allowed on the project?',
                            postedBy:  'Last Name, First Name'
                        },
                        {
                            lastModified:  '04/06/2011' + '   ' + '1:32 AM',
                            subject:  'Water Service Disconnects?',
                            postedBy:  'Last Name, First Name'
                        },
                        {
                            lastModified:  '04/06/2011' + '   ' + '11:26 AM',
                            subject:  'In lieu of 36 inch Steel casing for the pipe jacking, would we be able to use 36 inc RCP Jacking Pipe for casing?',
                            postedBy:  'Last Name, First Name'
                        },
                        {
                            lastModified:  '04/06/2011' + '   ' + '9:50 AM',
                            subject:  'Our bid bond in Surepath not Surety2000, so does that mean we do not have to submit bid bond?',
                            postedBy:  'Last Name, First Name'
                        },
                        {
                            lastModified:  '02/17/2011' + '   ' + '10:53 AM',
                            subject:  'Pre-letting Conference',
                            postedBy:  'Last Name, First Name'
                        }
                    ]
                },
                mailContent: [
                    'What Pay item is the Temp Pvmt Marking getting paid for in the temp traffic control plans?',
                    `No direct compensation will be made for temporary pavement markings. Please refer to note 19 under the heading General Traffic Control notes on Plan Sheet 79. In addition, Section S-126 of Division S (2582) Temporary Pavement Markings includes language that 'Payment for said pavement marking related projects shall be incidental with no direct compensation made.' 

                    Please note, as further clarification, Section S-124 of Division S (2580) Interim Pavement Marking identifies language that notes 'This work consists of placing interim pavement markings on those pavements, prior to opening them to traffic, where the inplace surface is to be covered by a subsequent paving course or the permanent lane markings are to be placed at a future date.' Please note that payment for Interim Pavement Marking is paid as a LUMP SUM under pay item 2580.601.`
                ],
                replyEnable: false
            }
        },
        methods: {
            changeReplyEnable() {
                this.replyEnable = true
            }
        }
    }
</script>

<style lang="sass">
@import '~styles/fonts';
    @import '~styles/variables';
    .category-new-title {
        padding: 1rem 4%;
        background: $gray-200;
        height: 72px;
        padding: 0 4%;
        font-size: 30px;
        font-family: cabin;
        font-weight: 100;
        .new-message-btn {
            font-size: 18px;
            background: $gray-600;
            color: $white;
            font-weight: 100;
        }
    }
    .category-new-content {
        padding: 1rem 4%;
        .message-list {
            color: $color-blue;
        }
        .message-pagination {
            height: 22px;
            background: $gray-200;
            color: $black;
            border: solid 1px $gray-600;
            font-size: 13px;
            font-family: arial;
            font-weight: 100;
        }
        .table-header-public {
            height: 22px;
            background: $gray-200;
            color: $black;
            border: solid 1px $gray-600;
            padding: 0;
            padding-left: 5px;
            font-size: 13px;
            font-family: arial;
            font-weight: 100;
        }
        .table-body {
            height: 22px;
            background: $white;
            border: solid 1px $gray-600;
            color: $black;
            padding: 0;
            padding-left: 5px;
            font-size: 13px;
            font-family: arial;
            font-weight: 100;
        }
        .modal-dialog {
            margin: 50vh auto 1.75rem;
        }
        .modal-dialog {
            max-width: 1222px;
            width: 75%;
        }
        .modal-content {
            border-radius: 0;
        }
        .modal-header {
            border-radius: 0;
            background: $gray-400;
            font-size: 30px;
            font-family: cabin;
            font-weight: 100;
        }
        .modal-body {
            padding: 0;
            font-size: 13px;
            font-family: arial;
            font-weight: 100;
        }
        .modal-footer {
            display: none;
        }
        .open-message-content-header {
            height: 27px;
            background: $gray-200;
            .post-reply-btn {
                font-size: 13px;
                font-family: cabin;
                font-weight: 100;
                background: $gray-400;
            }
        }
        .open-message-content-body {
            .open-message-mail-header {
                .mail-header-fullname {
                    background: $gray-400;
                    border: solid 1px $gray-600;
                }
            }
            .open-message-mail-content {
                border: solid 1px $gray-600;
            }
        }
        .open-reply-message-content-body {
            .open-reply-message-mail-header {
                .mail-header-fullname {
                    background: $gray-400;
                    border: solid 1px $gray-600;
                }
            }
            .open-reply-message-mail-content {
                border: solid 1px $gray-600;
            }
            .post-btn {
                font-size: 14px;
                font-family: cabin;
                font-weight: 100;
                background: $black;
                color: $white;
            }
        }
    }
</style>
