<template>
    <Basic-layouts>
        <div class="ui grid">
        <div
        class="sixten wide mobile eigth wide table four wide computer column"
        v-for="product in products"
        :key="product.id">

        <Product :product="product"/>
        </div>
        </div>
    </Basic-layouts>
    
</template>

<script>
import {ref, onMounted} from 'vue';
import {useRoute} from "vue-router";
import BasicLayouts from '../layouts/BasicLayouts.vue';
import Product from '../components/Product.vue'
import {getProducts, getProductsCategory} from '../api/product';


export default {

    name: "Category",
    components: {
        BasicLayouts,
        Product,
    },

    watch: {
        $route(to, from) {
            this.getProducts(to.params.category);
        },
    },

    setup() {
        let products = ref(null);
        const {params} = useRoute();

        onMounted(async () => {
            getProducts(params.category);
        });

        const getProducts = async (category) => {
            const response = await getProductsCategory(category);
            products.value = response;
        };

        return {
            getProducts,
            products,
        };
    },
};


</script>

<style>

</style>