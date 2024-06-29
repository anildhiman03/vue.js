<template>
    <h1>Product Listing page</h1>
    <ProductList :products="products"></ProductList>
</template>

<script>
import { products } from '@/temp-data';
import ProductList from '@/components/ProductList.vue';

export default {
    name: "PridyctsPage",
    data() {
        return {
            products
        }
    },
    components: {
        ProductList
    }
};
</script>
