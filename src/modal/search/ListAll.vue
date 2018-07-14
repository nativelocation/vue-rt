<template>
    <div class="container-fluid h-100 p-0 m-0">
        <ModalHeader
            :title="title"
            :handleClose="handleClose"
        />
        <div class="listAll-modal-body">
            <TableFilter
                :filter="filter"
                :rows="rows"
                :changed="changed"
                :rangeDate="getRangeDate"
                :searchText="getSearchText"
            />
            <TableContainer
                :columns="columns"
                :rows="rows"
                :filter="getFilter"
                :rangeDate="putRangeDate"
                :searchText="putSearchText"
            />
        </div>
        <Footer />
    </div>
</template>

<script>
    import ModalHeader from '../../components/ModalHeader.vue'
    import TableFilter from '../../components/table/TableFilter.vue'
    import TableContainer from '../../components/table/TableContainer.vue'
    import Footer from '../../components/Footer.vue'
    export default {
        data() {
            return {
                filter: {
                    name: 'Filter',
                    field: 'contractNo',
                    placeholder: 'Contract No',
                    options: [
                        {
                            label: 'All',
                            value: 1
                        },
                        {
                            label: 'Volvo',
                            value: 2
                        },
                        {
                            label: 'Mercedes',
                            value: 3
                        },
                        {
                            label: 'Audi',
                            value: 4
                        },
                        {
                            label: 'Saab',
                            value: 5
                        }
                    ],
                    style: {
                        width: 177,
                        height: 17,
                        fontSize: 10,
                        color: '#B3B3B3',
                        background: '#DBDBDB'
                    }
                },
                columns: [
                    {
                        key: 'contractNo',
                        label: 'Contact No.',
                        style: {
                            color: '#003CFF'
                        },
                        thClass: 'table-header-public',
                        tdClass: 'table-body'
                    },
                    {
                        key: 'projectId',
                        label: 'Project ID',
                        style: {
                            color: 'black'
                        },
                        thClass: 'table-header-public',
                        tdClass: 'table-body'
                    },
                    {
                        key: 'projectNo',
                        label: 'Project No.',
                        style: {
                            color: 'black'
                        },
                        thClass: 'table-header-public',
                        tdClass: 'table-body'
                    },
                    {
                        key: 'description',
                        label: 'Description',
                        style: {
                            color: 'black'
                        },
                        thClass: 'table-header-public',
                        tdClass: 'table-body'
                    },
                    {
                        key: 'location',
                        label: 'Construction Location',
                        style: {
                            color: 'black'
                        },
                        thClass: 'table-header-public',
                        tdClass: 'table-body'
                    },
                    {
                        key: 'bidDate',
                        label: 'Bid Date',
                        style: {
                            color: 'black'
                        },
                        thClass: 'table-header-public',
                        tdClass: 'table-body'
                    }
                ],
                rows: [
                    {
                        contractNo:  'Contract 01',
                        projectId:  'Project ID',
                        projectNo:  'Project No.',
                        description:  'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
                        location:  'Lorem Ipsum',
                        bidDate:  '11/05/2017'
                    },
                    {
                        contractNo:  'Contract 01',
                        projectId:  'Project ID',
                        projectNo:  'Project No.',
                        description:  'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
                        location:  'Lorem Ipsum',
                        bidDate:  '04/05/2018'
                    },
                    {
                        contractNo:  'Contract 01',
                        projectId:  'Project ID',
                        projectNo:  'Project No.',
                        description:  'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
                        location:  'Lorem Ipsum',
                        bidDate:  '05/21/2017'
                    },
                    {
                        contractNo:  'Contract 02',
                        projectId:  'Project ID',
                        projectNo:  'Project No.',
                        description:  'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
                        location:  'Lorem Ipsum',
                        bidDate:  '02/19/2018'
                    },
                    {
                        contractNo:  'Contract 02',
                        projectId:  'Project ID',
                        projectNo:  'Project No.',
                        description:  'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
                        location:  'Lorem Ipsum',
                        bidDate:  '02/13/2018'
                    },
                    {
                        contractNo:  'Contract 02',
                        projectId:  'Project ID',
                        projectNo:  'Project No.',
                        description:  'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
                        location:  'Lorem Ipsum',
                        bidDate:  '03/15/2018'
                    },
                    {
                        contractNo:  'Contract 02',
                        projectId:  'Project ID',
                        projectNo:  'Project No.',
                        description:  'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
                        location:  'Lorem Ipsum',
                        bidDate:  '05/28/2018'
                    },
                    {
                        contractNo:  'Contract 02',
                        projectId:  'Project ID',
                        projectNo:  'Project No.',
                        description:  'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
                        location:  'Lorem Ipsum',
                        bidDate:  '07/05/2017'
                    },
                    {
                        contractNo:  'Contract 03',
                        projectId:  'Project ID',
                        projectNo:  'Project No.',
                        description:  'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
                        location:  'Lorem Ipsum',
                        bidDate:  '08/05/2017'
                    },
                    {
                        contractNo:  'Contract 03',
                        projectId:  'Project ID',
                        projectNo:  'Project No.',
                        description:  'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
                        location:  'Lorem Ipsum',
                        bidDate:  '09/05/2017'
                    },
                    {
                        contractNo:  'Contract 03',
                        projectId:  'Project ID',
                        projectNo:  'Project No.',
                        description:  'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
                        location:  'Lorem Ipsum',
                        bidDate:  '01/06/2018'
                    },
                    {
                        contractNo:  'Contract 03',
                        projectId:  'Project ID',
                        projectNo:  'Project No.',
                        description:  'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
                        location:  'Lorem Ipsum',
                        bidDate:  '05/05/2017'
                    },
                    {
                        contractNo:  'Contract 03',
                        projectId:  'Project ID',
                        projectNo:  'Project No.',
                        description:  'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
                        location:  'Lorem Ipsum',
                        bidDate:  '07/05/2017'
                    },
                    {
                        contractNo:  'Contract 04',
                        projectId:  'Project ID',
                        projectNo:  'Project No.',
                        description:  'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
                        location:  'Lorem Ipsum',
                        bidDate:  '03/23/2018'
                    },
                    {
                        contractNo:  'Contract 04',
                        projectId:  'Project ID',
                        projectNo:  'Project No.',
                        description:  'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
                        location:  'Lorem Ipsum',
                        bidDate:  '03/25/2018'
                    },
                    {
                        contractNo:  'Contract 04',
                        projectId:  'Project ID',
                        projectNo:  'Project No.',
                        description:  'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
                        location:  'Lorem Ipsum',
                        bidDate:  '03/16/2018'
                    },
                    {
                        contractNo:  'Contract 04',
                        projectId:  'Project ID',
                        projectNo:  'Project No.',
                        description:  'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
                        location:  'Lorem Ipsum',
                        bidDate:  '03/15/2018'
                    },
                    {
                        contractNo:  'Contract 05',
                        projectId:  'Project ID',
                        projectNo:  'Project No.',
                        description:  'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
                        location:  'Lorem Ipsum',
                        bidDate:  '02/17/2018'
                    },
                    {
                        contractNo:  'Contract 05',
                        projectId:  'Project ID',
                        projectNo:  'Project No.',
                        description:  'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
                        location:  'Lorem Ipsum',
                        bidDate:  '02/25/2018'
                    },
                    {
                        contractNo:  'Contract 05',
                        projectId:  'Project ID',
                        projectNo:  'Project No.',
                        description:  'Pellentesque pulvinar feugiat nisi, id feugiat nulla sagittis quis.',
                        location:  'Lorem Ipsum',
                        bidDate:  '02/15/2018'
                    }
                ],
                selectedFilter: [],
                rangeDate: [],
                searchText: ''
            }
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            handleClose: {
                type: Function,
                default: () => {}
            }
        },
        methods: {
            changed(selected) {
                this.selectedFilter = selected
            },
            getRangeDate(date) {
                this.rangeDate = date
            },
            getSearchText(text) {
                this.searchText = text
            }
        },
        computed: {
            getFilter() {
                return {
                    filterKey: this.filter.field,
                    filterItem: this.selectedFilter
                }
            },
            putRangeDate() {
                return this.rangeDate
            },
            putSearchText() {
                return this.searchText
            }
        },
        components: {
            TableFilter,
            ModalHeader,
            Footer,
            TableContainer
        }
    }
</script>

<style lang="sass">
    .listAll-modal-body {
        height: calc( 100% - 120px );
        padding: 13px;
        background: white;
    }
</style>
