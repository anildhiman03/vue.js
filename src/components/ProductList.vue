<template>
    <div class="grid-wrap">
        <div class="product-item" v-for="product in products" :key="product.id" >
            <img :src="product.image" />
            <h3 class="product-name">{{ product.title }}</h3>
            <p class="product-price">{{ product.price }}</p>
            <router-link :to="'product/' + product.id">
                <button>View details</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"ProductList",
    props: ['products']
}
</script>