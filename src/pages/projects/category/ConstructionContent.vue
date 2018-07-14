<template>
    <div>
        <div class="category-construction-title d-flex align-items-center">
            Project {{getCurrentProject}}
        </div>
        <div class="category-construction-content">
            <div class="d-flex mb-3">
                <div class="col-3 pl-0">
                    <div class="mb-4">
                        <div class="category-construction-table-title d-flex align-items-center pl-3">
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
                    <div class="mb-4">
                        <div class="category-construction-table-title d-flex align-items-center pl-3">
                            bidVAULT
                        </div>
                        <div class="no-table-border">
                            <div class="table-body border-0">
                                View this project in bidVAULT
                            </div>
                        </div>
                    </div>
                    <div class="mb-4">
                        <div class="category-construction-table-title d-flex align-items-center pl-3">
                            Bid Abstract
                        </div>
                        <div class="no-table-border">
                            <div
                                v-for="(bidAbstract, index) in bidAbstracts"
                                :key="index"
                                class="table-body border-0"
                            >
                                {{bidAbstract}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-9 pr-0">
                    <div class="mb-4">
                        <div class="category-construction-table-title d-flex align-items-center pl-3">
                            {{planHolders.title}}
                        </div>
                        <TableContainer
                            :columns="planHolders.columns"
                            :rows="planHolders.rows"
                        />
                    </div>
                    <div>
                        <div class="category-construction-table-title d-flex align-items-center pl-3">
                            Plan Holder Data | Project Files
                        </div>
                        <div class="no-table-border">
                            <div>
                                <div class="table-header-public border-top-0">
                                    Released Plans
                                </div>
                                <div
                                    v-for="(bidAbstract, index) in bidAbstracts"
                                    :key="index"
                                    class="table-body border-0"
                                >
                                    {{bidAbstract}}
                                </div>
                            </div>
                            <div>
                                <div class="table-header-public">
                                    Business Name
                                </div>
                                <div
                                    v-for="(businessName, index) in businessNames"
                                    :key="index"
                                    class="table-body border-0"
                                >
                                    {{businessName}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mb-4">
                <div class="category-construction-table-title d-flex align-items-center pl-3">
                    {{messages.title}}
                </div>
                <TableContainer
                    :columns="messages.columns"
                    :rows="messages.rows"
                />
            </div>
            <div class="mb-4">
                <div class="category-construction-table-title d-flex align-items-center pl-3">
                    {{referenceData.title}}
                </div>
                <TableContainer
                    :columns="referenceData.columns"
                    :rows="referenceData.rows"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import TableContainer from '../../../components/table/TableContainer.vue'
    export default {
        data() {
            return {
                bidAbstracts: [
                    'Project Bid Abstract',
                    'Project Bid Summary',
                    'Contract Bid Abstract',
                    'Contract Bid Summary'
                ],
                releasedPlans: [
                    'AAA Striping Service',
                    'Bituminous Roadways, Inc'
                ],
                businessNames : [
                    'Max Steininger Inc',
                    'Highway Solutions Inc',
                    'Max Steininger Inc',
                    'Max Steininger Inc',
                    'Highway Solutions Inc'
                ],
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
                        },
                        {
                            key: 'contract',
                            label: 'Contract',
                            style: {
                                'color': 'black',
                                'text-align': 'right',
                                'padding-right': '5px'
                            },
                            thClass: 'table-header-public',
                            tdClass: 'table-body'
                        },
                        {
                            key: 'projectAd',
                            label: 'Project Ad',
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
                            bidDate: '05/29/2018',
                            contract: '0117',
                            projectAd: 'View'
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
                planHolders: {
                    title: 'Plan Hoders',
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
                            businessName:  'AAA Striping Service',
                            address:  '12220 43rd St NE',
                            city:  'St. Michael',
                            state: 'MN',
                            zip: '55376',
                            phone: '(763) 428-4322'
                        },
                        {
                            businessName:  'Bituminous Roadways, Inc',
                            address:  '1520 Commerce Drive',
                            city:  'Mendota Heights',
                            state: 'MN',
                            zip: '55120',
                            phone: '(751) 686-7001'
                        },
                        {
                            businessName:  'CS McCrossan Construction, Inc',
                            address:  '7865 Jefferson Highway',
                            city:  'Maple Grove',
                            state: 'MN',
                            zip: '55311',
                            phone: '(763) 421-4167'
                        },
                        {
                            businessName:  'Castle Rock Tree LLC',
                            address:  '4455 W 280th St #514',
                            city:  'Castle Rock',
                            state: 'MN',
                            zip: '55010',
                            phone: '(651) 463-2268'
                        },
                        {
                            businessName:  'Castle Rock Tree LLC',
                            address:  '4455 W 280th St #514',
                            city:  'Castle Rock',
                            state: 'MN',
                            zip: '55010',
                            phone: '(651) 463-2268'
                        },
                        {
                            businessName:  'Castle Rock Tree LLC',
                            address:  '4455 W 280th St #514',
                            city:  'Castle Rock',
                            state: 'MN',
                            zip: '55010',
                            phone: '(651) 463-2268'
                        },
                        {
                            businessName:  'Castle Rock Tree LLC',
                            address:  '4455 W 280th St #514',
                            city:  'Castle Rock',
                            state: 'MN',
                            zip: '55010',
                            phone: '(651) 463-2268'
                        },
                        {
                            businessName:  'Castle Rock Tree LLC',
                            address:  '4455 W 280th St #514',
                            city:  'Castle Rock',
                            state: 'MN',
                            zip: '55010',
                            phone: '(651) 463-2268'
                        },
                        {
                            businessName:  'Castle Rock Tree LLC',
                            address:  '4455 W 280th St #514',
                            city:  'Castle Rock',
                            state: 'MN',
                            zip: '55010',
                            phone: '(651) 463-2268'
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
                                'color': 'blue'
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
                        }
                    ],
                    rows: [
                        {
                            lastModified:  '05/11/2018     11:35 AM',
                            subject:  'Rejected Bids'
                        }
                    ]
                },
                referenceData: {
                    title: 'Reference Data',
                    columns: [
                        {
                            key: 'name',
                            label: 'Name',
                            style: {
                                'color': 'blue'
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
    @import '~styles/fonts';
    @import '~styles/variables';
    .category-construction-title {
        padding: 1rem 4%;
        background: $gray-200;
        height: 72px;
        padding: 0 4%;
        font-size: 30px;
        font-family: cabin;
        font-weight: 100;
    }
    .category-construction-content {
        padding: 1rem 4%;
        .category-construction-content {
            padding: 1rem 4%;
        }
        .category-construction-table-title {
            height: 42px;
            background: $gray-400;
            border: solid 1px $gray-600;
            border-bottom: 0px;
            color: $black;
            font-size: 20px;
            font-family: cabin;
            font-weight: 100;
        }
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
        .no-table-border {
            border: solid 1px $gray-600;
        }
    }
</style>
