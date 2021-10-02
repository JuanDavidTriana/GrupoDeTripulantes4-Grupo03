<template>
  <div class="ui secondary menu">
    <div class="ui container">
      <div class="left menu">
        <router-link to="/">
          <img class="ui medium image" src="../assets/logo.png" alt="logo-biblioteca"/>
        </router-link>
      </div>
      

      <div class="right menu">
        <router-link class="item" to="login">
          Iniciar sesion
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
};
</script>

<style lang="scss" scoped>
.ui.menu.secondary {
  background-color: #010913;
  padding: 20px;
  .item {
    color: #ffffff;
    &:hover {
      color: black;
      background-color: rgb(231, 230, 230);
    }
  }
}
.menu.right {
  width: 50%;
  justify-content: flex-end;
  .logout,
  .cart {
    &:hover {
      cursor: pointer;
    }
  }

}
</style>
