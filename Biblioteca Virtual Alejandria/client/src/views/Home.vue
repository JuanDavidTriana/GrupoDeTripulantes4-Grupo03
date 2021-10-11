<template>
  <BasicLayouts>
  <Banner>
  </Banner>
  <div class="ui container">
    <h1>Libros más buscados</h1>
  </div>
    <div class="ui grid">
      <div
        class="sixten wide mobile eight wide tablet four wide computer column"
        v-for="product in products"
        :key="product.id"
      >
        <Product :product="product" />
      </div>
    </div>

   
<div class="ui container servicios">
  <h2>SERVICIOS</h2>
  <div class="ui cards equal width grid">
  <div class="card column">
    <div class="content">
      <div class="header"> <i class="search icon"></i>CONSULTAS</div>
      <div class="description">
        Verifica la disponibilidad del libro que necesitas
      </div>
    </div>
  </div>
  <div class="card column">
    <div class="content">
      <div class="header"><i class="book icon"></i> PRÉSTAMOS</div>
      <div class="description">
        Gestiona reservas y devoluciones de libros
      </div>
    </div>
  </div>
  <div class="card column">
    <div class="content">
      <div class="header"><i class="clipboard list icon"></i> HISTORIAL</div>
      <div class="description">
        Visualiza el registro de tus préstamos
      </div>
    </div>
  </div>
</div>
    </div>
 
<div class="equipo">
<div class="ui equal width center aligned padded grid">
  <div class="center aligned two column row">
  <div class="grey column ">
    <h2>NUESTRO EQUIPO</h2>
  </div>
  <div class="eight wide column centered middle aligned">
     <div class="ui three doubling cards ">
  <div class="card">
    <div class="image">
      <img src="https://semantic-ui.com/images/avatar/large/elliot.jpg">
    </div>
    <div class="content">
        <a class="header">Fabian Bustamante</a>
      </div>
  </div>
  <div class="card">
    <div class="image">
      <img src="https://semantic-ui.com/images/avatar/large/steve.jpg">
    </div>
    <div class="content">
        <a class="header">Jose Arroyave</a>
      </div>
  </div>
  <div class="card">
    <div class="image">
      <img src="https://semantic-ui.com/images/avatar/large/veronika.jpg">
    </div>
    <div class="content">
        <a class="header">Alejandra Moreno</a>
      </div>
  </div>
  </div>
  <div class="ui three doubling centered cards ">
  <div class="card">
    <div class="image">
      <img src="https://semantic-ui.com/images/avatar/large/elliot.jpg">
    </div>
    <div class="content">
        <a class="header">Oscar Cuevas</a>
      </div>
  </div>
  <div class="card">
    <div class="image">
      <img src="https://semantic-ui.com/images/avatar/large/daniel.jpg">
    </div>
    <div class="content">
        <a class="header">Alejandro Pantoja</a>
      </div>
  </div>
</div>
  </div>
</div>  
</div>
</div>
 
     <div class="ui container contacto">

    </div>

  </BasicLayouts>
</template>

<script>
import { ref, onMounted } from 'vue';
import BasicLayouts from '../layouts/BasicLayouts.vue';
import Banner from '../layouts/Banner.vue';
import { getProducts } from '../api/product';
import Product from '../components/Product.vue';

export default {
  name: 'Home',
  components: {
    BasicLayouts,
    Product,
    Banner,
  },

  setup() {
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

<style lang="scss" scoped>
.servicios {
  margin-top: 50px;
  position: relative;
}
  h2 {
    text-align: center;
    position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 2.2rem;
  .card {
    text-align:center;
  }
  }

  .equipo,
  .contacto {
    margin-top: 50px;
  }
  
  
</style>
