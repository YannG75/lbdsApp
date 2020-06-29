<template>
    <ion-slides pager="true" ref="sliderNews">
        <ion-slide v-for="(article, index) in news" :key="index">
            <img :src="article.banner" alt="">
            <section class="is-flex index">
                <div class="column">
                    <h1 class="title">{{article.title}}</h1>
                    <p class="has-text-white-ter has-shadow"> {{ article.summary}}</p>
                </div>

                <div class="column is-flex check-it">
                    <router-link :to="/news/+article.id">
                        <article class="">
                            <i class="fas fa-long-arrow-alt-right "></i>
                        </article>
                    </router-link>
                </div>
            </section>
        </ion-slide>

    </ion-slides>
</template>

<script>
    export default {
        name: "Carouselle",
        data() {
            return {

            }
        },
        props: {
            news : Array
        },

        updated() {
            const slidesNews = this.$refs.sliderNews
            this.$nextTick(async() => {
                // slidesNews.options = this.slideOpts
            })
        },
        mounted() {
        },

        methods: {

        }
    }
</script>

<style scoped lang="scss">
    ion-slides {
        max-height: 35vh
    }
</style>