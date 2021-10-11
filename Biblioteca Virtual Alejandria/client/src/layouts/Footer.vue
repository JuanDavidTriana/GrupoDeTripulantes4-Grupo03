<template>
  <div class="footer">
    <div class="ui center aligned grid">
      <div class="center aligned two column row">
        <div class="left floated right aligned eigth wide column">
          <router-link class="item" to="/">
            <img
              class="ui middle aligned small image"
              src="../assets/Logo-biblioteca-2.png"
              alt="Biblioteca-vitual"
            />
          </router-link>
        </div>
        <div
          class="right floated left aligned eigth wide column ui grid middle aligned"
        >
          <p>
            Todos los derechos reservados | 2021©
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer.vue",
};
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 30px !important;
  height: 100px;
  background-image: url(../assets/fondo-header.jpg);
  background-size: cover;
}
</style>
