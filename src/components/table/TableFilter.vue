<template>
    <div id="table-filter" class="pr-2 pl-2">
        <div class="d-flex align-items-center">
            <label>Search</label>
            <div class="search-filter d-flex align-items-center pl-2 pr-2 ml-2 mr-2">
                <font-awesome-icon :icon="faSearch" class="search-filter-icon mr-1"/>
                <input
                    class="search-filter-input"
                    placeholder="Search"
                    v-model="searchString"
                />
            </div>
            <label>{{filter.name}}</label>
            <Dropdown
                :options="filterOptions"
                multiple
                :field="filter.field"
                :placeholder="filter.placeholder"
                :styleData="filter.style"
                :changed="changed"
            />
            <label>Bid Date</label>
            <vue-datepicker-local
                v-model="range"
                :local="local"
            />
        </div>
    </div>
</template>

<script type="text/x-template">
    import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
    import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'
    import VueDatepickerLocal from 'vue-datepicker-local'
    import _ from 'lodash'
    import Dropdown from '../Dropdown.vue'

    export default {
        data: () => {
            return {
                time: new Date(),
                range: [new Date('01/01/2000'), new Date()],
                local: {
                    dow: 0,
                    hourTip: 'Select Hour',
                    minuteTip: 'Select Minute',
                    secondTip: 'Select Second',
                    yearSuffix: '',
                    monthsHead: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
                    months: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
                    weeks: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
                    cancelTip: 'cancel',
                    submitTip: 'confirm'
                },
                searchString: ''
            }
        },
        watch: {
            data: {
                immediate: true,
                handler(val) {
                    this.rangeDate([this.range[0].getTime(), this.range[1].getTime()])
                }
            },
            range: function(newRange, oldRange) {
                this.rangeDate([newRange[0].getTime(), newRange[1].getTime()])
            },
            searchString: function(string) {
                this.searchText(string)
            }
        },
        props: {
            filter: {
                type: Object,
                default: () => {}
            },
            rows: {
                type: Array,
                default: () => []
            },
            changed: {
                type: Function,
                default: () => {}
            },
            itemChanged: {
                type: Function,
                default: () => {}
            },
            customSelectedText: {
                type: Function,
                default: () => {}
            },
            rangeDate: {
                type: Function,
                default: () => {}
            },
            searchText: {
                type: Function,
                default: () => {}
            }
        },
        components: {
            Dropdown,
            FontAwesomeIcon,
            VueDatepickerLocal
        },
        computed: {
            faSearch() {
                return faSearch
            },
            filterOptions() {
                const self = this
                const filters = [{ label: 'All', selected: true }]
                return filters.concat(_.map(_.uniqBy(self.rows, self.filter.field), item => {
                    return { label : item[self.filter.field] }
                }))
            }
        }
    }
</script>

<style lang="sass">
    @import '~styles/variables';
    #table-filter {
        height: 25px;
        background: $gray-400;
        div {
            label {
                margin-bottom: 0px;
            }
            .search-filter {
                height: 17px;
                width: 177px;
                background: $gray-200;
                .search-filter-icon {
                    color: $gray-400;
                    font-size: 10px;
                }
                .search-filter-input {
                    height: 17px;
                    width: 177px;
                    font-size: 10px;
                    color: $gray-400;
                    background: $gray-200;
                    border: initial;
                }
            }
            .datepicker-range {
                margin-left: 9px;
                margin-right: 9px;
                min-width: 180px;
                display: flex;
                input {
                    height: 17px;
                    background: $gray-200;
                    font-size: 10px;
                }
                .datepicker-popup {
                    width: 415px;
                    top: 17px;
                }
            }
        }
    }
</style>
