<template>
  <div id="app">
    <app-menu v-if="this.$router.currentRoute.name != 'Login'"></app-menu>
    <router-view />
  </div>
</template>

<script>
import AppMenu from "./components/menu/AppMenu.vue";
export default {
  components: {
    AppMenu,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;1,300;1,500&display=swap");
:root {
  --cor-primaria: #34465d;
  --cor-secundaria: #3d587a;
  --cor-terciaria: #2e41585c;
}
body {
  background-color: var(--cor-primaria);
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  color: white;
}
.container {
  margin-top: 15px;
}
.titulo {
  font-weight: 600;
  color: white;
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
}
hr {
  margin: 0;
}
.sub-contanier {
  margin-top: 10px;
}

/*Overrude */
.btn-primary,
.btn-primary:active,
.btn-primary:focus,
.btn-primary:focus-visible,
.btn-primary:visited,
.btn-primary:not(:disabled):not(.disabled):active {
  color: #fff;
  background-color: #2c4c74;
  border: #213956;
  outline: none;
  box-shadow: none;
  min-width: 90px;
  margin-top: 10px;
}
.btn-primary:hover {
  color: #fff;
  background-color: #263f5e;
  border-color: #263f5e;
}
.btn-danger {
  margin-top: 10px;
}
</style>
