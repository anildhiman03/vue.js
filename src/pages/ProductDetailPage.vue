<template>
    <div v-if="product">
        <div class="img-wrap">
            <img :src="product.imageName" />
        </div>
        <div class="product-details">
            <h1>{{ product.name }}</h1>
            <h3 class="price"> {{ product.price }}</h3>
            <button class="add-to-cart">Add to cart</button>
        </div>
    </div>
    <div v-else>
        <PageNotFoundPage></PageNotFoundPage>
    </div>
</template>

<script>
import { products } from '@/temp-data';
import PageNotFoundPage from './PageNotFoundPage.vue';
export default {
    name: "ProductDetailPage",
    data() {
        console.log(this.$route.params.productID)
        return {
            product: products.find(product => product.id === this.$route.params.productID )
        }
    },
    components:{
        PageNotFoundPage
    }
};
</script>