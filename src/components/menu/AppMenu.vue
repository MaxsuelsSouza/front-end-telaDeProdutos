<template>
  <ul class="menu">
    <li>
      <a @click="() => this.$router.push({ path: '/' })"> Dashboard</a>
    </li>
    <li>
      <a @click="() => this.$router.push({ path: '/Controle-de-Cliente' })"
        >Clientes</a
      >
    </li>
    <li>
      <a @click="() => this.$router.push({ path: '/controle-de-produtos' })"
        >Produtos</a
      >
    </li>
    <li>
      <a @click="() => this.$router.push({ path: '/Login' })">Sair</a>
    </li>
  </ul>
</template>
<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: var(--cor-terciaria);
}
li {
  float: left;
}
li:first-child {
  margin-left: 40px;
}
li:last-child {
  float: right;
  margin-right: 10px;
}
ul.menu li a {
  display: block;
  color: #fff;
  padding: 15px 17px;
  text-decoration: none;
  text-align: center;
}
li a:hover {
  background-color: var(--cor-secundaria);
  cursor: pointer;
}
</style>
