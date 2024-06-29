import { createApp } from 'vue'
import App from './App.vue'
import './main.css';
import * as VueRouter from 'vue-router';
import ShoppingCartPage from './pages/ShoppingCartPage.vue';
import ProductsPage from './pages/ProductsPage.vue';
import ProductDetailPage from './pages/ProductDetailPage.vue';
import PageNotFoundPage from './pages/PageNotFoundPage.vue';

createApp(App)
.use(VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(process.env.BASE_URL),
    routes: [
        { path:'/', component: ProductsPage },
        { path:'/cart', component: ShoppingCartPage },
        { path:'/products', component: ProductsPage },
        { path:'/product/:productID', component: ProductDetailPage },
        { path:'/:pathMatch(.*)*', component: PageNotFoundPage },
]
}))
.mount('#app')