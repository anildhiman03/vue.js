<template>
    <h1>
        Shopping Cart Page
    </h1>
    <div v-if="cartItems.length > 0">
        <ShoppingCartList @remove-from-cart="removeFromCart($event)" :cartItems="cartItems"></ShoppingCartList>
    </div>
    <div v-if="cartItems.length === 0">
        Empty Cart
    </div>
    
</template>

<script>
import axios from 'axios';
import ShoppingCartList from '@/components/ShoppingCartList.vue'

export default {
    name: "ShoppingCartPage",
    data() {
        return {
            cartItems: []
        }
    },
    components: {
        ShoppingCartList
    },
    methods: {
        async removeFromCart(id) {
            fetch('https://fakestoreapi.com/carts/3',{
                method:"PATCH",
                body:JSON.stringify(
                    {
                        userId:3,
                        date:"2019-12-10",
                        products:[{productId:id,quantity:0}]
                    }
                )
            })
                .then(res=>res.json())
                .then(json=>console.log(json));
                this.cartItems = this.cartItems.filter(item => item.id !== id);
                alert('data removed from cart successfully');            }
    },
    async created() {
        const response = await axios.get('https://fakestoreapi.com/carts/user/2');
        const products = response.data[0].products;
        
        products.forEach ((item) => {
            axios.get(`https://fakestoreapi.com/products/${item.productId}`)
            .then(response => {
                this.cartItems.push(response.data);
            });
        })
    }
};
</script>