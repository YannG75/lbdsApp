import Vue from 'vue';
import Home from '../views/Home.vue';
import Contact from '../views/Contact'
import Catalogue from "../views/Catalogue";
import News from "../views/News";
import Sneaker from "../views/Sneaker";
import Article from "../views/Article";
import Search from "../views/Search";
import {IonicVueRouter} from '@ionic/vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/products',
            name: 'products',
            component: Catalogue
        },
        {
            path: '/news',
            name: 'news',
            component: News
        },
        {
            path: '/products/:id',
            name: 'product',
            component: Sneaker
        },
        {
            path: '/news/:id',
            name: 'article',
            component: Article
        },

        {
            path: '/search/:search',
            name: 'search',
            component: Search
        },


    ]
});
