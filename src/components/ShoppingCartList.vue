<template>
    
        <div class="product-container" v-for="product in cartItems" :key="product.id">
            <img class="product-image" :src="product.image" />
            <div class="details-wrap">
                <h3>{{ product.title }}</h3>
                <p>{{ product.price }}</p>
            </div>
            <button @click="$emit('remove-from-cart',product.id)"  class="remove-button">Remove from cart</button>
        </div>
    <button  class="checkout-button">Proceed to Checkout</button>
    
</template>

<script>

export default {
    name: "ShoppingCartList",
    props: ['cartItems']
}
</script>