<template>
  <BasicLayouts>
    <h1>Estamos en login</h1>
    <router-link to="register">
      Crear una cuenta
    </router-link>
  </BasicLayouts>
</template>

<script>
import BasicLayouts from '../layouts/BasicLayouts.vue';
export default {
  components: { BasicLayouts },
  name: 'login',
};
</script>

<style></style>
