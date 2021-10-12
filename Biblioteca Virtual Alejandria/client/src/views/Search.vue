<template>
 <BasicLayouts>
     <div class="search">
         <h2>Buscar Libro</h2>
            <form class="ui form" @submit.prevent="searchBook">
                <div class="field">
                <input
                    type="text"
                    placeholder="Nombre" 
                    v-model="formData.name"
                />
                </div> 
                <button
                type="submit"
                class="ui button fluid secondary"
                >
                Buscar
                </button>
            </form>
     </div>
      <div class="ui grid">
      <div
        class="sixten wide mobile eight wide tablet four wide computer column"
        v-for="product in products"
        :key="product.id">
        <Product :product="product" />
      </div>

    </div>
  </BasicLayouts>
</template>

<script>
import { ref, onMounted } from 'vue';
import * as Yup from 'yup';
import BasicLayouts from '../layouts/BasicLayouts.vue';
import Product from '../components/Product.vue';
import { getProductsByName } from '../api/product';

export default {
    name: "Search",
    components: {
        BasicLayouts,
        Product,
    },

    setup(){
       let formError = ref({});
       let formData = ref({});
       let products = ref(null);

        const schemaSearch = Yup.object().shape({
          name : Yup.string().required(true),
        });

        /*onMounted(() => {
            getProductsName();
        })*/

        const searchBook = async () => {
          formError.value = {};
          try {
            await schemaSearch.validate(formData.value, { abortEarly: false });
            const response = await getProductsByName(formData.value.name);
            products.value = response
            /*console.log(response);
            console.log(formData.value.name);*/

          } catch (error) {
            error.inner.forEach((err) => {
              formError.value[err.path] = err.message;
              });
          }
        }

        return {
            products,
            formData,
            searchBook,
        }
    }
}
</script>

<style  lang="scss" scoped>
.search {
  text-align: center;
  > h2 {
    margin: 50px 0 30px 0;
  }
  .ui.form {
    max-width: 300px !important;
    margin: 0 auto;
    margin-bottom: 10px;
    input.error {
      border-color: #faa;
      background-color: #ffeded;
    }
  }
}
</style>