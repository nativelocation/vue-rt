<template>
    <div id="person-info">
        <div class="person-info-container p-3">
            <div class="info-header d-flex justify-content-between align-items-center mb-3">
                <label class="info-title m-0">{{info.title}}</label>
                <div
                    class="header-control d-flex align-items-center"
                    @click="changeEdit"
                >
                    <i class="material-icons header-control-icon">edit</i>
                    <label class="header-control-name m-0">Edit</label>
                </div>
            </div>
            <div class="info-content">
                <div
                    class="info-item d-block pt-1 mb-3"
                    v-for="(item, index) in info.data"
                    :key="index"
                >
                    <label class="info-item-title d-block m-0">{{item.name}}</label>
                    <label
                        class="info-item-label-name d-block m-0"
                        v-if="!edit"
                    >
                        {{item.value}}
                    </label>
                    <input
                        class="info-item-input-name w-100 border-0 p-1"
                        v-if="edit"
                        v-model="item.value"
                    />
                </div>
            </div>
            <div
                class="info-control"
                v-if="edit"
            >
                <button
                    class="save-edit-btn"
                    @click="saveEdit"
                >
                    Save
                </button>
                <button
                    class="cancel-edit-btn"
                    @click="cancelEdit"
                >
                    Cancel
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => {
            return {
                edit: false,
                info: {}
            }
        },
        props: {
            content: {
                type: Object,
                default: {}
            }
        },
        methods: {
            changeEdit() {
                this.edit = true
            },
            saveEdit() {
                this.edit = false
            },
            cancelEdit() {
                this.info = JSON.parse(JSON.stringify(this.content))
                this.edit = false
            }
        },
        watch: {
            data: {
                immediate: true,
                handler(val) {
                    this.info = JSON.parse(JSON.stringify(this.content))
                }
            }
        }
    }
</script>

<style lang="sass">
    @import '~styles/variables';
    #person-info {
        width: 290px;
        .person-info-container {
            background: $white;
            font-family: arial;
            .info-header {
                .info-title {
                    font-size: 15px;
                    font-weight: bold;
                }
                .header-control-icon {
                    font-size: 15px;
                }
                .header-control-name {
                    font-size: 12px;
                }
            }
            .info-content {
                .info-item-title {
                    font-size: 11px;
                }
                .info-item-label-name {
                    font-size: 14px;
                    font-weight: bold;
                }
                .info-item-input-name {
                    font-size: 13px;
                    font-weight: bold;
                    background: $gray-200;
                }
            }
            .info-control {
                .save-edit-btn {
                    color: $white;
                    background: $blue;
                    font-size: 11px;
                }
                .cancel-edit-btn {
                    color: $black;
                    background: $gray-200;
                    font-size: 11px;
                }
            }
        }
    }
</style>
