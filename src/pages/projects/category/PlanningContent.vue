<template>
    <div>
        <div class="category-planning-title d-flex flex-wrap align-items-center">
            <div class="col-lg-4 px-0">
                Project {{getCurrentProject}}
            </div>
            <div class="col-lg-8 px-0">
                <div class="category-planning-warning d-flex align-items-center pl-3">
                    <i class="material-icons warning-icon px-2">warning</i>
                    WARNING! This project has not been approved for Bidding. You may use this information for planning purposes with the acknowledgement that it is subject to change without notice.
                </div>
            </div>
        </div>
        <div class="category-planning-content">
            <div class="d-flex flex-wrap">
                <div class="col-3 pl-0">
                    <div class="mb-4">
                        <div class="category-planning-table-title d-flex align-items-center pl-3">
                            {{projectInfo.title}}
                        </div>
                        <div
                            v-for="(column, index) in project.columns"
                            :key="index"
                            class="d-flex align-items-center"
                        >
                            <div
                                :class="column.thClass"
                                class="col-3 px-1"
                            >
                                {{column.label === 'Construction Location' ? 'Location' : column.label}}
                            </div>
                            <div
                                :class="column.tdClass"
                                class="col-9 px-1"
                            >
                                {{project.row[column.key]}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-9 pl-0">
                    <div class="mb-4">
                        <div class="category-planning-table-title d-flex align-items-center pl-3">
                            {{messages.title}}
                        </div>
                        <TableContainer
                            :columns="messages.columns"
                            :rows="messages.rows"
                        />
                        <div
                            v-if="messages.rows.length === 0"
                            class="category-planning-warning px-1"
                        >
                            There were no messages found for this project.
                        </div>
                    </div>
                    <div class="mb-4">
                        <div class="category-planning-table-title d-flex align-items-center pl-3">
                            {{referenceData.title}}
                        </div>
                        <TableContainer
                            :columns="referenceData.columns"
                            :rows="referenceData.rows"
                        />
                        <div
                            v-if="referenceData.rows.length === 0"
                            class="category-planning-warning px-1"
                        >
                            There were no messages found for this project.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TableContainer from '../../../components/table/TableContainer.vue'
    export default {
        data() {
            return {
                project: {
                    columns: [
                        {
                            key: 'projectId',
                            label: 'Project ID',
                            style: {
                                'color': 'blue'
                            },
                            thClass: 'table-header-public',
                            tdClass: 'table-body'
                        },
                        {
                            key: 'projectNo',
                            label: 'Project No.',
                            style: {
                                'color': 'black'
                            },
                            thClass: 'table-header-public',
                            tdClass: 'table-body'
                        },
                        {
                            key: 'description',
                            label: 'Description',
                            style: {
                                'color': 'black'
                            },
                            thClass: 'table-header-public',
                            tdClass: 'table-body'
                        },
                        {
                            key: 'location',
                            label: 'Construction Location',
                            style: {
                                'color': 'black'
                            },
                            thClass: 'table-header-public',
                            tdClass: 'table-body'
                        },
                        {
                            key: 'bidDate',
                            label: 'Bid Date',
                            style: {
                                'color': 'black',
                                'text-align': 'right',
                                'padding-right': '5px'
                            },
                            thClass: 'table-header-public',
                            tdClass: 'table-body'
                        }
                    ],
                    row: {
                            projectId:  '2164200',
                            projectNo:  'SP 027-657-006',
                            description:  'Humboldt Ave (CSAH 57) Rail Crossing Improvements',
                            location: 'Humboldt Avenue near Victory...',
                            bidDate: '05/29/2018'
                    }
                },
                projectInfo: {
                    title: 'Project Infomation',
                    columns: [
                        {
                            key: 'businessName',
                            label: 'Business Name',
                            style: {
                                'color': 'black'
                            },
                            thClass: 'table-header-public',
                            tdClass: 'table-body'
                        },
                        {
                            key: 'address',
                            label: 'Address',
                            style: {
                                'color': 'black'
                            },
                            thClass: 'table-header-public',
                            tdClass: 'table-body'
                        },
                        {
                            key: 'city',
                            label: 'City',
                            style: {
                                'color': 'black'
                            },
                            thClass: 'table-header-public',
                            tdClass: 'table-body'
                        },
                        {
                            key: 'state',
                            label: 'State',
                            style: {
                                'color': 'black'
                            },
                            thClass: 'table-header-public',
                            tdClass: 'table-body'
                        },
                        {
                            key: 'zip',
                            label: 'Zip',
                            style: {
                                'color': 'black'
                            },
                            thClass: 'table-header-public',
                            tdClass: 'table-body'
                        },
                        {
                            key: 'phone',
                            label: 'Phone',
                            style: {
                                'color': 'black'
                            },
                            thClass: 'table-header-public',
                            tdClass: 'table-body'
                        }
                    ],
                    rows: [
                        {
                            projectId:  '2164200',
                            projectNo:  'SP 027-657-006',
                            description:  'Humboldt Ave (CSAH 57) Rail Crossing Improvements',
                            location: 'Humboldt Avenue near Victory...',
                            bidDate: '05/29/2018'
                        },
                        {
                            projectId:  '2175500',
                            projectNo:  'CP 1755',
                            description:  'Hennepin Avenue Concrete Pavement Repair',
                            location: 'Minneapolis, MN',
                            bidDate: 'Bidding Closed'
                        },
                        {
                            projectId:  '2175800',
                            projectNo:  'SAP 027-603-072',
                            description:  '2018 Ped Ramps (152 & 3)',
                            location: 'Minneapolis and St Louis Park',
                            bidDate: '05/22/2018'
                        }
                    ]
                },
                messages: {
                    title: 'Messages',
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
                                'color': 'black'
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
                    ]
                },
                referenceData: {
                    title: 'Reference Data',
                    columns: [
                        {
                            key: 'name',
                            label: 'Name',
                            style: {
                                'color': 'black'
                            },
                            thClass: 'table-header-public',
                            tdClass: 'table-body'
                        },
                        {
                            key: 'organization',
                            label: 'Organization',
                            style: {
                                'color': 'black'
                            },
                            thClass: 'table-header-public',
                            tdClass: 'table-body'
                        },
                        {
                            key: 'address',
                            label: 'Address',
                            style: {
                                'color': 'black'
                            },
                            thClass: 'table-header-public',
                            tdClass: 'table-body'
                        },
                        {
                            key: 'phone',
                            label: 'Phone',
                            style: {
                                'color': 'black'
                            },
                            thClass: 'table-header-public',
                            tdClass: 'table-body'
                        }
                    ],
                    rows: [
                        {
                            name:  'Person 1',
                            organization:  'Organization',
                            address:  'Address',
                            phone: 'Phone'
                        },
                        {
                            name:  'Person 1',
                            organization:  'Organization',
                            address:  'Address',
                            phone: 'Phone'
                        },
                        {
                            name:  'Person 1',
                            organization:  'Organization',
                            address:  'Address',
                            phone: 'Phone'
                        }
                    ]
                }
            }
        },
        watch: {
            data: {
                immediate: true,
                handler(val) {
                    console.log(this.$route)
                }
            }
        },
        components: {
            TableContainer
        },
        computed: {
            getCurrentProject() {
                return this.project.row.projectNo + ' [' + this.project.row.projectId + ']'
            }
        }
    }
</script>

<style lang="sass">
    @import '~styles/variables';
    .category-planning-title {
        padding: 1rem 4%;
        background: $gray-200;
        height: 72px;
        padding: 0 4%;
        font-size: 30px;
        font-family: cabin;
        font-weight: 100;
        .category-planning-warning {
            height: 33px;
            font-size: 14px;
            font-family: cabin;
            font-weight: 100;
            .warning-icon {
                font-size: 18px;
                color: #831700;
            }
        }
    }
    .category-planning-content {
        padding: 1rem 4%;
        .table-header-public {
            height: 22px;
            background: $gray-200;
            color: $black;
            border: solid 1px $gray-600;
            padding: 0;
            padding-left: 5px;
            font-size: 12px;
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
            font-size: 12px;
            font-family: arial;
            font-weight: 100;
        }
        .category-planning-table-title {
            height: 42px;
            background: $gray-400;
            border: solid 1px $gray-600;
            border-bottom: 0px;
            color: $black;
            font-size: 20px;
            font-family: cabin;
            font-weight: 100;
        }
        .category-planning-warning {
            height: 22px;
            border: solid 1px $gray-600;
            border-top: 0px;
            font-size: 12px;
            font-family: arial;
            font-weight: 100;
        }
    }
</style>
