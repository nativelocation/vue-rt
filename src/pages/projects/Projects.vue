<template>
    <div>
        <div class="projects-title d-flex align-items-center">
            Projects
        </div>
        <div class="projects-content">
            <div class="bidding-content py-3 px-0">
                <b-table
                    :items="bidding.rows"
                    :fields="bidding.columns"
                    border
                    class="border-0 m-0"
                >
                    <template slot="projectId" slot-scope="data">
                        <router-link :to="`/projects/bidding/${data.value}`">
                            {{data.value}}
                        </router-link>
                    </template>
                </b-table>
            </div>
            <div class="construction-content py-3 px-0">
                <b-table
                    :items="construction.rows"
                    :fields="construction.columns"
                    border
                    class="border-0 m-0"
                >
                    <template slot="projectId" slot-scope="data">
                        <router-link :to="`/projects/construction/${data.value}`">
                            {{data.value}}
                        </router-link>
                    </template>
                </b-table>
            </div>
            <div class="planning-content py-3 px-0">
                <div class="planning-warning d-flex align-items-center pl-3">
                    <i class="material-icons warning-icon">warning</i>
                    {{planning.warning}}
                </div>
                <b-table
                    :items="planning.rows"
                    :fields="planning.columns"
                    border
                    class="border-0 m-0"
                >
                    <template slot="projectId" slot-scope="data">
                        <router-link :to="`/projects/planning/${data.value}`">
                            {{data.value}}
                        </router-link>
                    </template>
                </b-table>
            </div>
        </div>
    </div>
</template>

<script>
    import TableContainer from '../../components/table/TableContainer.vue'
    export default {
        data() {
            return {
                bidding: {
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
                planning: {
                    warning: 'These projects are not yet open for bed and are subject to change.',
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
                            label: 'Anticpated Bid Date',
                            style: {
                                'color': 'black',
                                'text-align': 'right',
                                'padding-right': '5px'
                            },
                            thClass: 'table-header-public',
                            tdClass: 'table-body'
                        }
                    ],
                    rows: [
                        {
                            projectId:  'CP 00-000-000',
                            projectNo:  'CP 00-000-000(subject to change)',
                            description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            location: 'Street, City, State',
                            bidDate: 'MM/DD/YYYY'
                        },
                        {
                            projectId:  'CP 00-000-000',
                            projectNo:  'CP 00-000-000(subject to change)',
                            description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            location: 'Street, City, State',
                            bidDate: 'MM/DD/YYYY'
                        },
                        {
                            projectId:  'CP 00-000-000',
                            projectNo:  'CP 00-000-000(subject to change)',
                            description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            location: 'Street, City, State',
                            bidDate: 'MM/DD/YYYY'
                        },
                        {
                            projectId:  'CP 00-000-000',
                            projectNo:  'CP 00-000-000(subject to change)',
                            description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            location: 'Street, City, State',
                            bidDate: 'MM/DD/YYYY'
                        },
                        {
                            projectId:  'SAP 00-000-000',
                            projectNo:  'SAP 00-000-000(subject to change)',
                            description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            location: 'Street, City, State',
                            bidDate: 'MM/DD/YYYY'
                        },
                        {
                            projectId:  'SAP 00-000-000',
                            projectNo:  'SAP 00-000-000(subject to change)',
                            description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            location: 'Street, City, State',
                            bidDate: 'MM/DD/YYYY'
                        },
                        {
                            projectId:  'SAP 00-000-000',
                            projectNo:  'SAP 00-000-000(subject to change)',
                            description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            location: 'Street, City, State',
                            bidDate: 'MM/DD/YYYY'
                        },
                        {
                            projectId:  'SAP 00-000-000',
                            projectNo:  'SAP 00-000-000(subject to change)',
                            description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            location: 'Street, City, State',
                            bidDate: 'MM/DD/YYYY'
                        },
                        {
                            projectId:  'SAP 00-000-000',
                            projectNo:  'SAP 00-000-000(subject to change)',
                            description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            location: 'Street, City, State',
                            bidDate: 'MM/DD/YYYY'
                        },
                        {
                            projectId:  'SP 00-000-000',
                            projectNo:  'SP 00-000-000(subject to change)',
                            description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            location: 'Street, City, State',
                            bidDate: 'MM/DD/YYYY'
                        },
                        {
                            projectId:  'SP 00-000-000',
                            projectNo:  'SP 00-000-000(subject to change)',
                            description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            location: 'Street, City, State',
                            bidDate: 'MM/DD/YYYY'
                        },
                        {
                            projectId:  'SP 00-000-000',
                            projectNo:  'SP 00-000-000(subject to change)',
                            description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            location: 'Street, City, State',
                            bidDate: 'MM/DD/YYYY'
                        },
                        {
                            projectId:  'SP 00-000-000',
                            projectNo:  'SP 00-000-000(subject to change)',
                            description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            location: 'Street, City, State',
                            bidDate: 'MM/DD/YYYY'
                        },
                        {
                            projectId:  'SP 00-000-000',
                            projectNo:  'SP 00-000-000(subject to change)',
                            description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            location: 'Street, City, State',
                            bidDate: 'MM/DD/YYYY'
                        }
                    ]
                },
                construction: {
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
                    rows: [
                        {
                            projectId:  '1234567',
                            projectNo:  '00-000-000',
                            description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            location: 'Street, City, State',
                            bidDate: 'MM/DD/YYYY'
                        },
                        {
                            projectId:  '1234567',
                            projectNo:  '00-000-000',
                            description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            location: 'Street, City, State',
                            bidDate: 'MM/DD/YYYY'
                        },
                        {
                            projectId:  '1234567',
                            projectNo:  '00-000-000',
                            description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            location: 'Street, City, State',
                            bidDate: 'MM/DD/YYYY'
                        },
                        {
                            projectId:  '1234567',
                            projectNo:  '00-000-000',
                            description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            location: 'Street, City, State',
                            bidDate: 'MM/DD/YYYY'
                        },
                        {
                            projectId:  '1234567',
                            projectNo:  '00-000-000',
                            description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            location: 'Street, City, State',
                            bidDate: 'MM/DD/YYYY'
                        },
                        {
                            projectId:  '1234567',
                            projectNo:  '00-000-000',
                            description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            location: 'Street, City, State',
                            bidDate: 'MM/DD/YYYY'
                        },
                        {
                            projectId:  '1234567',
                            projectNo:  '00-000-000',
                            description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            location: 'Street, City, State',
                            bidDate: 'MM/DD/YYYY'
                        },
                        {
                            projectId:  '1234567',
                            projectNo:  '00-000-000',
                            description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            location: 'Street, City, State',
                            bidDate: 'MM/DD/YYYY'
                        },
                        {
                            projectId:  '1234567',
                            projectNo:  '00-000-000',
                            description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            location: 'Street, City, State',
                            bidDate: 'MM/DD/YYYY'
                        },
                        {
                            projectId:  '1234567',
                            projectNo:  '00-000-000',
                            description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            location: 'Street, City, State',
                            bidDate: 'MM/DD/YYYY'
                        },
                        {
                            projectId:  '1234567',
                            projectNo:  '00-000-000',
                            description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            location: 'Street, City, State',
                            bidDate: 'MM/DD/YYYY'
                        },
                        {
                            projectId:  '1234567',
                            projectNo:  '00-000-000',
                            description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            location: 'Street, City, State',
                            bidDate: 'MM/DD/YYYY'
                        },
                        {
                            projectId:  '1234567',
                            projectNo:  '00-000-000',
                            description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            location: 'Street, City, State',
                            bidDate: 'MM/DD/YYYY'
                        },
                        {
                            projectId:  '1234567',
                            projectNo:  '00-000-000',
                            description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            location: 'Street, City, State',
                            bidDate: 'MM/DD/YYYY'
                        },
                        {
                            projectId:  '1234567',
                            projectNo:  '00-000-000',
                            description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            location: 'Street, City, State',
                            bidDate: 'MM/DD/YYYY'
                        }
                    ]
                }
            }
        },
        components: {
            TableContainer
        }
    }
</script>

<style lang="sass">
    @import '~styles/fonts';
    @import '~styles/variables';
    #Home {
        .projects-title {
            background: $gray-200;
            height: 72px;
            padding: 0 4%;
            font-size: 30px;
            font-family: cabin;
            font-weight: 100;
        }
        .projects-content {
            padding: 1rem 4%;
            .planning-warning {
                height: 33px;
                background: $gray-400;
                font-size: 14px;
                font-family: cabin;
                font-weight: 100;
                .warning-icon {
                    font-size: 18px;
                    color: #831700;
                }
            }
        }
    }
</style>
