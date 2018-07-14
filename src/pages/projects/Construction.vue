<template>
    <div>
        <div class="construction-title d-flex align-items-center">
            Projects in Construction
        </div>
        <div class="construction-content">
            <b-table
                :items="rows"
                :fields="columns"
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
    </div>
</template>

<script>
    import TableContainer from '../../components/table/TableContainer.vue'
    export default {
        data() {
            return {
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
        },
        components: {
            TableContainer
        }
    }
</script>

<style lang="sass">
    @import '~styles/variables';
    #Home {
        .construction-title {
            background: $gray-200;
            height: 72px;
            padding: 0 4%;
            font-size: 30px;
            font-family: cabin;
            font-weight: 100;
        }
        .construction-content {
            padding: 1rem 4%;
        }
        .table-header-public {
            height: 22px;
            background: $gray-200;
            color: $black;
            border-color: $gray-600;
            border: solid 1px;
            padding: 0;
            padding-left: 5px;
            font-size: 12px;
            font-family: arial;
            font-weight: 100;
        }
        .table-body {
            height: 22px;
            background: $white;
            border-color: $gray-600;
            color: $black;
            padding: 0;
            padding-left: 5px;
            font-size: 12px;
            font-family: arial;
            font-weight: 100;
        }
    }
</style>
