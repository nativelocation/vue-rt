<template>
    <div id="table-container">
        <Table
            :columns="columns"
            :rows="rowData"
        />
        <!-- <b-table
            :items="rowData"
            :fields="columns"
            border
            class="border-0 m-0"
        /> -->
    </div>
</template>

<script>
    import Vue from 'vue'
    import _ from 'lodash'
    import Table from './Table.vue'
    export default {
        props: {
            columns: {
                type: Array,
                default: () => []
            },
            rows: {
                type: Array,
                default: () => []
            },
            filter: {
                type: Object,
                default: () => {}
            },
            rangeDate: {
                type: Array,
                default: () => []
            },
            searchText: {
                tyep: String,
                default: ''
            }
        },
        components: {
            Table
        },
        computed: {
            rowData() {
                const self = this
                let rowsData = this.rows.slice()
                if (this.searchText !== '') {
                    return _.remove(rowsData, rowData => {
                        const keys = Object.keys(rowData)
                        return _.findIndex(keys, key => {
                            return rowData[key].toLowerCase().includes(self.searchText.toLowerCase())
                        }) > -1
                    })
                }
                if (this.filter) {
                    if (this.filter.filterItem.length > 0) {
                        if (this.filter.filterItem[0].label !== 'All') {
                            rowsData = _.filter(rowsData, rowFilterData => {
                                return _.findIndex(self.filter.filterItem, item => {
                                    return rowFilterData[self.filter.filterKey] === item.label
                                }) > -1
                            })
                        }
                    }
                }
                _.remove(rowsData, rowData => {
                    const date = new Date(rowData.bidDate)
                    return date.getTime() < self.rangeDate[0] || date.getTime() > self.rangeDate[1]
                })
                const rowsChangedData = []
                _.each(rowsData, (row, idx) => {
                    const keys = Object.keys(row)
                    const rowChangedData = {}
                    _.each(keys, key => {
                        const index = _.findIndex(self.columns, column => {
                            return column.key === key
                        })
                        const styleKeys = Object.keys(self.columns[index].style)
                        let styleString = ''
                        _.each(styleKeys, (styleKey, sidex) => {
                            if (styleKeys.length === (sidex + 1)) {
                                if (styleKey === 'fontSize') {
                                    styleString = styleString + styleKey + ':' + self.columns[index].style[styleKey] + 'px'
                                } else {
                                    styleString = styleString + styleKey + ':' + self.columns[index].style[styleKey]
                                }
                            } else {
                                if (styleKey === 'fontSize') {
                                    styleString = styleString + styleKey + ':' + self.columns[index].style[styleKey] + 'px,'
                                } else {
                                    styleString = styleString + styleKey + ':' + self.columns[index].style[styleKey] + ';'
                                }
                            }
                        })
                        rowChangedData[key] = `<div style="${styleString}">${row[key]}</div>`
                    })
                    rowsChangedData.push(rowChangedData)
                })
                return rowsChangedData
            }
        }
    }
</script>

<style lang="sass">
</style>
