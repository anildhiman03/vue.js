<template>
    <div v-if="product">
        <div class="img-wrap">
            <img :src="product.image" />
        </div>
        <div class="product-details">
            <h1>{{ product.title }}</h1><br/>
            <p>{{ product.description }}</p><br/>
            <b>{{ product.category }}</b><br/>
            <h3 class="price">{{ product.price }}</h3>
            <button @click="addToCart" class="add-to-cart">Add to cart</button>
        </div>
    </div>
    <div v-else>
        <PageNotFoundPage></PageNotFoundPage>
    </div>
</template>

<script>
import axios from "axios";

import PageNotFoundPage from './PageNotFoundPage.vue';
export default {
    name: "ProductDetailPage",
    data() {
        return {
            product: []
        }
    },
    methods: {
        async addToCart() {
            await axios.put('https://fakestoreapi.com/carts/3', {
                userId:"2",
                date:(new Date()).toISOString().split('T')[0].replace(/-/g, '-'),
                products:[{productId:this.$route.params.productID,quantity:1}]
            });

            alert('Item added to cart successfully');
        }
    },
    components:{
        PageNotFoundPage
    },
    async created () {
        const response = await axios.get(`https://fakestoreapi.com/products/${this.$route.params.productID}`);
        this.product = response.data;
    }
};
</script>