<template>
    <div class="container-fluid h-100 p-0 m-0">
        <ModalHeader
            :title="title"
            :handleClose="handleClose"
        />
        <div class="orgnaization-modal-body px-4 py-2">
            <div class="orgnaization-info mx-4 mt-2 mb-4">
                <div class="orgnaization-info-space d-flex flex-column">
                    <label class="orgnaization-info-title m-0">
                        Business Number:
                    </label>
                    <input
                        class="orgnaization-info-input px-2"
                        v-model="businessName"
                    />
                </div>
                <div class="d-flex flex-wrap align-items-center">
                    <div class="orgnaization-info-space d-flex flex-column mr-5">
                        <label class="orgnaization-info-title m-0">
                            *Client Number:
                        </label>
                        <input
                            class="orgnaization-info-input px-2"
                            v-model="clientNumber"
                        />
                    </div>
                    <div class="orgnaization-info-space d-flex flex-column mr-5">
                        <label class="orgnaization-info-title m-0">
                            *Organization Name:
                        </label>
                        <input
                            class="orgnaization-info-input px-2"
                            v-model="orgnaizationName"
                        />
                    </div>
                    <div class="orgnaization-info-space d-flex flex-column mr-5">
                        <label class="orgnaization-info-title m-0">
                            Organization Abbrev:
                        </label>
                        <input
                            class="orgnaization-info-input px-2"
                            v-model="orgnaizationAbbrev"
                        />
                    </div>
                </div>
                <div class="orgnaization-info-space d-flex flex-column">
                    <label class="orgnaization-info-title m-0">
                        Name Prefix:
                    </label>
                    <input
                        class="orgnaization-info-input px-2"
                        v-model="namePrefix"
                    />
                </div>
                <div class="d-flex flex-wrap align-items-center">
                    <div class="orgnaization-info-space d-flex flex-column mr-5">
                        <label class="orgnaization-info-title m-0">
                            *Address 1:
                        </label>
                        <input
                            class="orgnaization-info-input px-2"
                            v-model="firstAddress"
                        />
                    </div>
                    <div class="orgnaization-info-space d-flex flex-column mr-5">
                        <label class="orgnaization-info-title m-0">
                            *Address 2:
                        </label>
                        <input
                            class="orgnaization-info-input px-2"
                            v-model="secondAddress"
                        />
                    </div>
                    <div class="orgnaization-info-space d-flex flex-column mr-5">
                        <label class="orgnaization-info-title m-0">
                            PO Box:
                        </label>
                        <input
                            class="orgnaization-info-input px-2"
                            v-model="PObox"
                        />
                    </div>
                </div>
                <div class="d-flex flex-wrap align-items-center">
                    <div class="orgnaization-info-space d-flex flex-column mr-5">
                        <label class="orgnaization-info-title m-0">
                            *City:
                        </label>
                        <input
                            class="orgnaization-info-input px-2"
                            v-model="city"
                        />
                    </div>
                    <div class="orgnaization-info-space d-flex flex-wrap align-items-center mr-5">
                        <div class="orgnaization-info-midspace d-flex flex-column mr-4">
                            <label class="orgnaization-info-title m-0">
                                *State:
                            </label>
                            <input
                                class="orgnaization-info-input px-2"
                                v-model="state"
                            />
                        </div>
                        <div class="orgnaization-info-midspace d-flex flex-column">
                            <label class="orgnaization-info-title m-0">
                                *Zip:
                            </label>
                            <input
                                class="orgnaization-info-input px-2"
                                v-model="zip"
                            />
                        </div>
                    </div>
                    <div class="orgnaization-info-space d-flex flex-column mb-0 mr-5">
                        <div class="orgnaization-info-midspace d-flex flex-column">
                            <label class="orgnaization-info-title m-0">
                                *Country:
                            </label>
                            <input
                                class="orgnaization-info-input px-2"
                                v-model="country"
                            />
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-wrap align-items-center">
                    <div class="orgnaization-info-space d-flex flex-column mr-5">
                        <label class="orgnaization-info-title m-0">
                            *Phone:
                        </label>
                        <input
                            class="orgnaization-info-input px-2"
                            v-model="phoneNamber"
                        />
                    </div>
                    <div class="orgnaization-info-space d-flex flex-column mr-5">
                        <label class="orgnaization-info-title m-0">
                            *Fax:
                        </label>
                        <input
                            class="orgnaization-info-input px-2"
                            v-model="fax"
                        />
                    </div>
                </div>
                <div class="orgnaization-info-space d-flex flex-wrap align-items-center">
                    <div class="orgnaization-info-smallspace d-flex flex-column mr-4">
                        <label class="orgnaization-info-title m-0">
                            Contact:
                        </label>
                        <div class="orgnaization-info-input">
                            <select class="orgnaization-info-input">
                            </select>
                        </div>
                    </div>
                    <div class="orgnaization-info-smallspace d-flex flex-column mr-4">
                        <label class="orgnaization-info-title m-0">
                            Business Rep:
                        </label>
                        <div class="orgnaization-info-input">
                            <select class="orgnaization-info-input">
                            </select>
                        </div>
                    </div>
                    <div class="orgnaization-info-smallspace d-flex flex-column">
                        <label class="orgnaization-info-title m-0">
                            *Valid:
                        </label>
                        <div class="orgnaization-info-input">
                            <select class="orgnaization-info-input">
                            </select>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-wrap align-items-center">
                    <div class="orgnaization-info-space d-flex flex-column mr-5">
                        <label class="orgnaization-info-title m-0">
                            Email:
                        </label>
                        <input
                            class="orgnaization-info-input px-2"
                            v-model="email"
                        />
                    </div>
                    <div class="orgnaization-info-space d-flex flex-column mr-5">
                        <label class="orgnaization-info-title m-0">
                            Web Address:
                        </label>
                        <input
                            class="orgnaization-info-input px-2"
                            v-model="webAddress"
                        />
                    </div>
                </div>
                <div class="d-flex flex-wrap align-items-center">
                    <div class="orgnaization-info-space d-flex flex-column mr-5">
                        <label class="orgnaization-info-title m-0">
                            Web User Name:
                        </label>
                        <input
                            class="orgnaization-info-input px-2"
                            v-model="webUserName"
                        />
                    </div>
                    <div class="orgnaization-info-space d-flex flex-column mr-5">
                        <label class="orgnaization-info-title m-0">
                            Web Password:
                        </label>
                        <input
                            class="orgnaization-info-input px-2"
                            v-model="webPassword"
                        />
                    </div>
                </div>
                <div class="d-flex flex-wrap align-items-center">
                    <div class="orgnaization-info-space d-flex flex-column mr-5">
                        <label class="orgnaization-info-title m-0">
                            *Account Number:
                        </label>
                        <input
                            class="orgnaization-info-input px-2"
                            v-model="accountNumber"
                        />
                    </div>
                    <div class="orgnaization-info-space d-flex flex-column mr-5">
                        <label class="orgnaization-info-title m-0">
                            *Distric Transportation Egineer
                        </label>
                        <input
                            class="orgnaization-info-input px-2"
                            v-model="dtEgineer"
                        />
                    </div>
                </div>
            </div>
            <div class="orgnaization-info-control mx-4">
                <button
                    class="add-organization-btn"
                    @click="addEdit"
                >
                    Add Organization
                </button>
                <button
                    class="cancel-btn"
                    @click="cancelEdit"
                >
                    Cancel
                </button>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import ModalHeader from '../../components/ModalHeader.vue'
    import Footer from '../../components/Footer.vue'

    export default {
        data: () => {
            return {
                businessName: '',
                clientNumber: '',
                orgnaizationName: '',
                orgnaizationAbbrev: '',
                namePrefix: '',
                firstAddress: '',
                secondAddress: '',
                PObox: '',
                city: '',
                state: '',
                zip: '',
                country: '',
                phoneNamber: '',
                fax: '',
                contact: '',
                businessRep: '',
                valid: '',
                email: '',
                webAddress: '',
                webUserName: '',
                webPassword: '',
                accountNumber: '',
                dtEgineer: ''
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
            addEdit() {
            },
            cancelEdit() {
            }
        },
        components: {
            ModalHeader,
            Footer
        }
    }
</script>

<style lang="sass">
    @import '~styles/variables';
    .orgnaization-modal-body {
        height: calc( 100% - 120px );
        background: white;
        overflow-y: scroll;
        .orgnaization-info {
            .orgnaization-info-space {
                width: 259px;
                margin-bottom: 16px;
            }
            .orgnaization-info-midspace {
                width: 117px;
                margin-bottom: 16px;
            }
            .orgnaization-info-smallspace {
                width: 70px;
                margin-bottom: 16px;
            }
            .orgnaization-info-title {
                font-size: 10px;
                font-family: arial;
                color: $black;
            }
            .orgnaization-info-input {
                font-size: 14px;
                font-family: arial;
                color: $black;
                background: $gray-200;
                width: 100%;
                border: 0;
            }
        }
        .orgnaization-info-control {
            .add-organization-btn {
                color: $white;
                background: $blue;
                font-size: 11px;
            }
            .cancel-btn {
                color: $black;
                background: $gray-200;
                font-size: 11px;
            }
        }
    }
</style>
