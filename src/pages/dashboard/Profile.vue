<template>
    <div id="profile">
        <div class="content">
            <div class="d-flex align-items-center mt-2 ml-2 p-3">
                <div class="person-icon-container d-flex align-items-center justify-content-center p-0 m-0">
                    <i class="material-icons person-icon">person</i>
                </div>
                <label class="pl-3 m-0 profile-name">John Doe</label>
            </div>
            <div class="content-info d-flex flex-wrap px-3">
                <div>
                    <PersonInfo
                        class="ml-1 mt-2 mb-2 pb-1 mr-3"
                        :content="about"
                    />
                    <PersonInfo
                        class="ml-1 mt-2 mb-2 mr-3"
                        :content="address"
                    />
                </div>
                <div>
                    <PersonInfo
                        class="ml-1 mt-2 mb-2 mr-3"
                        :content="contactDetails"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PersonInfo from '../../components/PersonInfo.vue'
    export default {
        data: () => {
            return {
                about: {
                    title: 'About',
                    data: [
                        {
                            name: 'First Name',
                            value: 'John'
                        },
                        {
                            name: 'Last Name',
                            value: 'Doe'
                        },
                        {
                            name: 'Occupation',
                            value: ''
                        },
                        {
                            name: 'Department',
                            value: ''
                        }
                    ]
                },
                address: {
                    title: 'Address',
                    data: [
                        {
                            name: 'Address',
                            value: '925 1st South'
                        },
                        {
                            name: 'City',
                            value: 'Saint Cloud'
                        },
                        {
                            name: 'State or province',
                            value: 'MN'
                        },
                        {
                            name: 'Country or region',
                            value: 'United States'
                        }
                    ]
                },
                contactDetails: {
                    title: 'Contact Details',
                    data: [
                        {
                            name: 'Email',
                            value: 'John'
                        },
                        {
                            name: 'Alias',
                            value: 'RT Vision'
                        },
                        {
                            name: 'Mobile',
                            value: ''
                        },
                        {
                            name: 'Phone',
                            value: '555-555-5555'
                        },
                        {
                            name: 'Alternate email',
                            value: 'email@email.com'
                        }
                    ]
                }
            }
        },
        components: {
            PersonInfo
        }
    }
</script>

<style lang="sass">
    @import '~styles/variables';
    #profile {
        overflow: auto;
        .content {
            .content-info {
                height: calc( 100vh - 212px );
            }
            .person-icon-container {
                height: 52px;
                width: 52px;
                border-radius: 26px;
                background: $blue;
                .person-icon {
                    font-size: 35px;
                    color: $white;
                }
            }
            .profile-name {
                font-size: 31px;
                font-family: cabin;
                font-weight: 100;
            }
        }
    }
</style>
