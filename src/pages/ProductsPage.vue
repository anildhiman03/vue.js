<template>
    <h1>Product Listing page</h1>
    <ProductList :products="products"></ProductList>
</template>

<script>
import axios from 'axios';
import ProductList from '@/components/ProductList.vue';

export default {
    name: "PridyctsPage",
    data() {
        return {
            products: []
        }
    },
    components: {
        ProductList
    },
    async created () {
        const response = await axios.get('https://fakestoreapi.com/products');
        this.products = response.data;
    }
};
</script>
