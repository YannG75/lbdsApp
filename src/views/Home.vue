<template>
    <div class="home">
                <div class="ion-page" id="main-content">
            <ion-header>
                <ion-toolbar>
                    <ion-buttons slot="start">
                        <ion-menu-toggle>
                            <ion-button>
                                <ion-icon slot="icon-only" name="menu"></ion-icon>
                            </ion-button>
                        </ion-menu-toggle>
                    </ion-buttons>
                    <router-link to="/">
                        <ion-title>
                            <img src="../../public/img/logo.png" height="80px"  alt="LBDS logo"/>
                        </ion-title>
                    </router-link>


                </ion-toolbar>
            </ion-header>
            <ion-content>
                <Carouselle :news="latestNews"></Carouselle>

                <router-link to="/news">
                    <ion-card >
                        <ion-card-content class="homeImgCard" style="padding: unset; position: relative;">
                            <img src="../../public/img/logo-konbini.jpg" />
                            <h2 class="absolute-top">Toutes les news</h2>
                        </ion-card-content>
                    </ion-card>
                </router-link>
                <router-link to="/products">
                    <ion-card>
                        <ion-card-content class="homeImgCard" style="padding: unset; position: relative;">
                            <img src="../../public/img/sneakers-basket-homme-et-femme-montante-de-mode.jpg"
                                 />
                            <h2 class="absolute-top">Toutes les sneakers</h2>
                        </ion-card-content>
                    </ion-card>
                </router-link>

                <h1>Des Sneakers au harsard</h1>
                <article class="ion-padding">
                    <ion-card v-for="(sneaker, index) in randomProducts" :key="index">
                        <ion-card-header >
                            <div style="display: flex; justify-content: space-around">
                                <ion-card-title>{{sneaker.name}}</ion-card-title>
                                <ion-card-title>{{sneaker.price}} €</ion-card-title>
                            </div>
                            <div style="display: flex;">
                                <ion-card-subtitle style="margin-left: 35px;">Coloris : {{sneaker.color}}</ion-card-subtitle>
                            </div>


                        </ion-card-header>

                        <ion-card-content>
                            <img :src="sneaker.image" alt="">
                        </ion-card-content>
                    </ion-card>
                </article>

            </ion-content>

        </div>
    </div>
</template>

<script>
    import Carouselle from "../components/Carouselle";
    import Article from "./Article";
    export default {
        name: "home",
        data() {
            return {
                latestNews : [],
                randomProducts: []
            }
        },
        components: {
            Article,
            Carouselle
        },
        mounted() {
            this.$axios.get('https://lbds.herokuapp.com/api/news/latest')
                .then(res => {
                    this.latestNews = res.data
                })

            this.$axios.get('https://lbds.herokuapp.com/api/products?sort=random&max=10')
                .then(res => {
                    this.randomProducts = res.data
                })


        },

        methods: {}
    };
</script>
<style lang="scss">
    ion-content {
        --background: #212121 !important;
        --color : aliceblue;
    }
    .card-content-md h2 {
        font-size: 24px;
    }
    .homeImgCard img {
        height: 200px;
    }

    .absolute-top {
        position: absolute;
        top: 20px;
        left: 20px;
        color: aliceblue;
        font-size: 25px;
        text-shadow: #1b1e21 1px 1px 4px;
    }

     section {
         display: flex;
        width: 100%;
        padding: 10px 10px 35px 10px;
        position: absolute;
        h1 {
            font-size: 20px;
            color: #65f9c4;
            text-shadow: black 1px 2px 3px;
        }

         p {
             color: aliceblue;
             text-shadow: black 1px 1px 4px;
         }
         .column {
             width: 50%;
         }
        .check-it {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            article {
                border-radius: 1px;
                cursor: pointer;
                padding: 10px 15px;
                height: fit-content;
                text-shadow: aliceblue 1px 1px 1px;
                background: aliceblue;
                font-size: 20px;
                font-weight: bold;
                box-shadow: #1b1e21 1px 1px 7px;
                i {
                    color: #00d1b2;
                }
            }
            article:hover {
                background: #1b1e21;
                text-shadow: black 1px 1px 1px;
                color: #00d1b2;
            }
        }
    }


    ion-card {
        --background : #f5f7f9!important;
    }



</style>
