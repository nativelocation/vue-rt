<template>
    <div>
        <div class="article-title d-flex align-items-center">
            {{article.title}}
        </div>
        <div class="article-content">
            <div
                v-for="(content, index) in article.content"
                :key="index"
            >
                <div class="article-subtitle">
                    {{content.subTitle}}
                </div>
                <div class="article-subcontent">
                    {{content.subContent}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                article: {
                    title: 'Lorem ipsum dolor sit amet',
                    content: [
                        {
                            subTitle: 'Suspendisse quis porttitor ipsum.',
                            subContent: 'Posuere ullamcorper cursus quis, porta vel magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean et diam quis ligula molestie auctor. Duis erat odio, lacinia sit amet tristique vitae, viverra ac erat. Duis pulvinar vel ex a lobortis.Integer nec mauris congue, faucibus lacus nec, faucibus justo. Nulla ac nunc id ipsum volutpat accumsan. Cras sollicitudin nisi leo, vitae vulputate ante pharetra nec. In vulputate eleifend sollicitudin. In maximus sapien odio, eget placerat purus aliquam vel. Vestibulum luctus eros in ex facilisis ultricies vitae a nisl. Mauris ullamcorper nulla id nisi facilisis, ut faucibus dolor placerat. Etiam ac nisl neque. Integer mi justo, malesuada dignissim tincidunt sit amet, tincidunt condimentum enim. Nullam feugiat malesuada purus, ut porta nisi faucibus et. Suspendisse in posuere elit. Cras vel iaculis nulla.'
                        },
                        {
                            subTitle: 'Pellentesque dictum massa.',
                            subContent: 'Posuere ullamcorper cursus quis, porta vel magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean et diam quis ligula molestie auctor. Duis erat odio, lacinia sit amet tristique vitae, viverra ac erat. Duis pulvinar vel ex a lobortis.Integer nec mauris congue, faucibus lacus nec, faucibus justo. Nulla ac nunc id ipsum volutpat accumsan. Cras sollicitudin nisi leo, vitae vulputate ante pharetra nec. In vulputate eleifend sollicitudin. In maximus sapien odio, eget placerat purus aliquam vel. Vestibulum luctus eros in ex facilisis ultricies vitae a nisl. Mauris ullamcorper nulla id nisi facilisis, ut faucibus dolor placerat. Etiam ac nisl neque. Integer mi justo, malesuada dignissim tincidunt sit amet, tincidunt condimentum enim. Nullam feugiat malesuada purus, ut porta nisi faucibus et. Suspendisse in posuere elit. Cras vel iaculis nulla.'
                        }
                    ]
                }
            }
        }
    }
</script>

<style lang="sass">
    @import '~styles/variables';
    #Home {
        .article-title {
            background: $gray-200;
            height: 72px;
            padding: 0 4%;
            font-size: 30px;
            font-family: cabin;
            font-weight: 100;
        }
        .article-content {
            padding: 1rem 4%;
            .article-subtitle {
                font-size: 25px;
                font-family: cabin;
                font-weight: 100;
                margin-bottom: 12px;
            }
            .article-subcontent {
                font-size: 16px;
                font-family: arial;
                margin-bottom: 2rem;
            }
        }
    }
</style>
