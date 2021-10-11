<template>
  <BasicLayouts>
    <Banner> </Banner>
    <div class="ui container center aligned libros ">
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

    <div class="fondo-serv">
      <div class="ui container servicios">
        <h2>SERVICIOS</h2>
        <div class="ui cards equal width grid center aligned">
          <div class="card column">
            <div class="content">
              <i class="circular big brown search icon"></i>
              <div class="header">CONSULTAS</div>
              <div class="description">
                Verifica la disponibilidad del libro que necesitas
              </div>
            </div>
          </div>
          <div class="card column">
            <div class="content">
              <i class="circular big brown book icon"></i>
              <div class="header">PRÉSTAMOS</div>
              <div class="description">
                Gestiona reservas y devoluciones de libros
              </div>
            </div>
          </div>
          <div class="card column">
            <div class="content">
              <i class="circular big brown clipboard list icon"></i>
              <div class="header">
                HISTORIAL
              </div>
              <div class="description">
                Visualiza el registro de tus préstamos
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="equipo">
      <div class="ui equal width padded grid">
        <div class="two column row">
          <div class="titulo-equipo column">
            <h2>NUESTRO EQUIPO</h2>
          </div>
          <div class="eight wide column centered middle aligned">
            <div class="ui three doubling cards ">
              <div class="card">
                <div class="image">
                  <img src="../assets/Fabian.jpg" />
                </div>
                <div class="content">
                  <a class="header">Fabian Bustamante</a>
                </div>
              </div>

              <div class="card">
                <div class="image">
                  <img src="../assets/Alejandra.jpg" />
                </div>
                <div class="content">
                  <a class="header">Alejandra Moreno</a>
                </div>
              </div>

              <div class="card">
                <div class="image">
                  <img
                    src="https://semantic-ui.com/images/avatar/large/steve.jpg"
                  />
                </div>
                <div class="content">
                  <a class="header">Jose Arroyave</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="separador"></div>

    <div class="ui contacto">
      <h3>CONTACTO</h3>
    </div>
    <div class="separador2"></div>

    <div class="ui container formulario">
      <div class="ui centered aligned grid">
        <div class="three column row">
          <div class="column">
            <form class="ui form">
              <div class="field">
                <input type="text" name="first-name" placeholder="Nombre" />
              </div>
              <div class="field">
                <input type="email" name="last-name" placeholder="Email" />
              </div>
              <div class="field">
                <textarea rows="2" placeholder="Dejanos tu mensaje"></textarea>
              </div>
              <button class="ui button" type="submit">Enviar</button>
            </form>
          </div>
          <div class="column">
            <h4>¿Necesitas ayuda?</h4>
            <br />
            <p>Dejanos un mensaje y te contactaremos.</p>
            <br />
            <p>contactoalejandria@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </BasicLayouts>
</template>

<script>
import { ref, onMounted } from "vue";
import BasicLayouts from "../layouts/BasicLayouts.vue";
import Banner from "../layouts/Banner.vue";
import { getProducts } from "../api/product";
import Product from "../components/Product.vue";
import Footer from "../layouts/Footer.vue";

export default {
  name: "Home",
  components: {
    BasicLayouts,
    Product,
    Banner,
    Footer,
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
.libros {
  padding: 40px 0;
  margin: 20px 0;
}
.servicios {
  margin-top: 50px;
  position: relative;
}
.servicios .ui.cards > .card > .content > .header {
  margin-top: 20px;
}

.servicios h2 {
  font-size: 2.2rem;
  text-align: center;
}

.fondo-serv {
  background-image: url(../assets/fondo-header.jpg);
  background-position: left;
  background-size: cover;
  padding: 5px 0 30px 0;
}

.servicios .ui.grid > .column:hover {
  transform: scale(1.02);
}

.equipo h2 {
  text-align: center;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 2.2rem;
  .ui.card {
    text-align: center;

    .ui.cards > .card > .content > a.header {
      color: #441300 !important;
    }
  }
}

.equipo {
  margin-top: 50px;
  color: #000000;
  font-family: "Fjalla One", sans-serif;
}

.titulo-equipo {
  text-align: center;
  display: flex !important;
  align-items: center;
  justify-content: center;
}

.ui.card > .image > img,
.ui.cards > .card > .image > img {
  border-radius: 100%;
}

.ui.card,
.ui.cards > .card {
  box-shadow: none;
}

.ui.card > .content,
.ui.cards > .card > .content {
  border-top: none;
}

.separador {
  background-image: url(../assets/separador-contacto.webp);
  background-color: #c9c9c9;
  background-size: cover;
  height: 120px;
}

.contacto h3 {
  font-size: 2.5rem;
  color: #383838;
  background-color: #c9c9c9;
  text-align: center;
}

.separador2 {
  background-color: #c9c9c9;
  height: 138px;
  background-image: url(/img/separador-contacto.c5545f41.webp);
  -moz-transform: rotate(-180deg); /* Firefox */
  -o-transform: rotate(-180deg); /* Opera */
  -webkit-transform: rotate(-180deg); /* Chrome y Safari */
  transform: rotate(-180deg); /* w3org */
  background-size: contain;
}

.formulario h4 {
  font-size: 2rem;
}
</style>
