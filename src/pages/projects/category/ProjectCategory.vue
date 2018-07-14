<template>
    <div id="projects-category" class="projects-banner">
        <div class="projects-category-banner">
            <div class="projects-category-path">
                <router-link class="all-project" to="/projects" exact>Projects</router-link> > Projects in {{$route.name}}
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
</script>

<style lang="sass">
    @import '~styles/fonts';
    @import '~styles/variables';
    #projects-category {
        .projects-category-banner {
            position: relative;
            padding-left: 83px;
            min-height: 306px;
            background: url('/src/assets/images/banner.jpg');
            background-size: 100% auto;
            background-position-y: center;
            .projects-category-path {
                position: absolute;
                bottom: 5px;
                font-size: 50px;
                font-family: cabin;
                font-weight: 100;
                color: $white;
            }
            .all-project, .all-project.hover {
                color: $white;
                text-decoration: none;
                cursor: pointer;
            }
        }
    }
</style>
