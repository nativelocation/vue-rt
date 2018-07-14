<template>
    <div>
        <div class="reports-title d-flex align-items-center">
            Reports
        </div>
        <div class="reports-content d-flex flex-wrap">
            <div class="col-sm-2 mr-3 p-0 border border-secondary">
                <div class="reports-name-container d-flex align-items-center">
                    Reports
                </div>
                <div class="p-2 d-flex align-items-center">
                    <i class="material-icons assignment-icon">assignment</i>
                    <div
                        class="reports-name"
                        v-for="(report, index) in reports"
                        :key="index"
                    >
                        {{report.name}}
                    </div>
                </div>
            </div>
            <div class="col-sm-10 p-0 border border-secondary">
                <div class="reports-name-container d-flex align-items-center">
                    Public OneOffice Reports
                </div>
                <div
                    v-for="(report, index) in reports"
                    :key="index"
                >
                    <TableContainer
                        :columns="report.table.columns"
                        :rows="report.table.rows"
                    />
                    <div
                        v-if="report.table.rows.length <= 0"
                        class="reports-no-content pl-2 d-flex align-items-center"
                    >
                        There were no reports found for this project
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TableContainer from '../components/table/TableContainer.vue'
    export default {
        data() {
            return {
                reports: [
                    {
                        name: 'Public Reports',
                        table: {
                            columns: [
                                {
                                    key: 'report',
                                    label: 'Report',
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
                                    key: 'datasource',
                                    label: 'Datasource',
                                    style: {
                                        'color': 'black'
                                    },
                                    thClass: 'table-header-public',
                                    tdClass: 'table-body'
                                },
                                {
                                    key: 'createdby',
                                    label: 'Created By',
                                    style: {
                                        'color': 'black'
                                    },
                                    thClass: 'table-header-public',
                                    tdClass: 'table-body'
                                },
                                {
                                    key: 'on',
                                    label: 'On',
                                    style: {
                                        'color': 'black'
                                    },
                                    thClass: 'table-header-public',
                                    tdClass: 'table-body'
                                },
                                {
                                    key: 'advanced',
                                    label: 'Advanced',
                                    style: {
                                        'color': 'black'
                                    },
                                    thClass: 'table-header-public',
                                    tdClass: 'table-body'
                                }
                            ],
                            rows: []
                        }
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
        .reports-title {
            background: $gray-200;
            height: 72px;
            padding: 0 4%;
            font-size: 30px;
            font-family: cabin;
            font-weight: 100;
        }
        .reports-content {
            padding: 1rem 4%;
            .reports-name-container {
                height: 42px;
                background: $gray-400;
                padding-left: 5px;
                font-size: 20px;
                font-family: cabin;
                font-weight: 100;
            }
            .assignment-icon {
                color: $gray-600;
                font-size: 14px;
            }
            .reports-name {
                font-size: 12px;
                font-family: arial;
                color: $color-blue;
            }
            .reports-no-content {
                font-size: 12px;
                font-family: arial;
            }
        }
    }
</style>
