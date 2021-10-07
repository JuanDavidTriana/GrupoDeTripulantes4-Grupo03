<template>
  <BasicLayouts>
    <h1>Ultimos Libros</h1>
    <div class="ui grid">
      <div
      class="sixten wide mobile eigth wide table four wide computer column"
      v-for="product in products"
      :key="product.id">

      <Product :product="product"/>
      </div>
    </div>
  </BasicLayouts>
</template>

<script>
import BasicLayouts from '@/layouts/BasicLayouts.vue';
import {ref, onMounted} from 'vue';
import {getProducts} from '../api/product';
import Product from '../components/Product.vue';

export default {
  name: "Home",
  components: {
    BasicLayouts,
    Product,
  },

  setup(){
    let products = ref(null);

    onMounted(async () => {
      const response = await getProducts(20);
      products.value = response;
    });

    return {
      products,
    };
  },
};
</script>
