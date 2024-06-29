<template>
    <h1>
        Shopping Cart Page
    </h1>
    <ShoppingCartList :cartItems="cartItems"></ShoppingCartList>

</template>

<script>
import { cartItems } from '@/temp-data';
import ShoppingCartList from '@/components/ShoppingCartList.vue'

export default {
    name: "ShoppingCartPage",
    data() {
        return {
            cartItems
        }
    },
    components: {
        ShoppingCartList
    },
};
</script>