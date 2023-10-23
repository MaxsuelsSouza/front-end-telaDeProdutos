<template>
  <div class="box-login">
    <div class="logo">
      <h1>Login</h1>
    </div>

    <div class="colotext">
      <BtnInput label="Email" placeHolder="exemplo@gmail.com"></BtnInput>

      <BtnInput label="Senha" placeHolder="123456" type="password"></BtnInput>

      <input-buton value="Entrar" :callback="login"></input-buton>
    </div>
  </div>
</template>
<script>
import BtnInput from "@/components/input/MeuInput.vue";
import InputButon from "@/components/input/Botao/InputBotao.vue";
export default {
  name: "TelaLogin",
  components: {
    BtnInput,
    InputButon,
  },
  methods: {
    login() {
      this.$router.push({ name: "Dashboard" });
    },
  },
};
</script>
<style scoped>
.box-login {
  width: 300px;
  margin: auto;
  border: 1px groove #192a3f;
  border-radius: 15px;
  background: #18273a;
  box-shadow: 26px 26px 0px #142030, -26px -26px 0px #1c2e44;
  margin-top: 100px;
  padding: 22px;
}
.logo {
  text-align: center;
  color: white;
}
.colotext {
  color: white;
}
</style>