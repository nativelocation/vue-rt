<template>
    <div id="table">
        <b-table
            :items="rows"
            :fields="columns"
            border
            class="border-0 m-0"
        >
            <span
                v-for="(column, index) in columns"
                :key="index"
                :slot="column.key"
                slot-scope="data"
                v-html="data.value">
            </span>
        </b-table>
    </div>
</template>

<script>
    export default {
        props: {
            columns: {
                type: Array,
                default: () => []
            },
            rows: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style lang="sass">
    @import '~styles/variables';
    #table {
        .table-header-internal {
            background: $blue;
            color: $white;
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
