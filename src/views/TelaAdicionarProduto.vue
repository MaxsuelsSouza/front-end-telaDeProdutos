<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="titulo">
          {{ modoCadastro ? "Adicionar" : "Editar" }} produto
        </h1>
        <hr />
      </div>
    </div>

    <div class="row">
      <div class="col-sm-2">
        <div class="form-group">
          <label for="id">Codigo</label>
          <input
            id="id"
            v-model="produto.id"
            type="text"
            disabled
            class="form-control"
          />
        </div>
      </div>
      <div class="col-sm-10">
        <div class="form-group">
          <label for="nome">Nome</label>
          <input
            id="nome"
            v-model="produto.nome"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-sm-3">
        <div class="form-group">
          <label for="nome">valor</label>
          <input
            id="valor"
            v-model="produto.valor"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-sm-3">
        <div class="form-group">
          <label for="nome">Quantidade</label>
          <input
            id="quantidade"
            v-model="produto.quantidadeEstoque"
            type="value"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-sm-3">
        <div class="form-group">
          <label for="data-cadastro">Data cadastro</label>
          <input
            id="data-cadastro"
            v-model="produto.dataCadastro"
            type="date"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-sm-12">
        <div class="form-group">
          <label for="observacao">Observaçao</label>
          <textarea
            id="observacao"
            v-model="produto.observacao"
            type="text"
            class="form-control"
            row="4"
          ></textarea>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <hr />
      </div>
      <div class="col-sm-12">
        <div v-show="modoCadastro" class="form-check-inline">
          <label class="form-check-label">
            <input
              v-model="continuarAddProduto"
              type="checkbox"
              class="form-check-input"
            />Continuar adicionando
          </label>
        </div>

        <button
          @click="cancelarAcao"
          type="button"
          class="btn btn-danger float-right"
        >
          Cancelar
        </button>
        <button
          @click="salavrProduto"
          class="btn btn-primary float-right mr-2 savme"
        >
          Salvar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Produtos from "@/models/Produtos";
import produtoService from "@/services/produto-service";
import conversorDeData from "@/utils/conversoData";
export default {
  name: "TelaAddProduto",
  data() {
    return {
      produto: new Produtos(),
      modoCadastro: true,
      continuarAddProduto: false,
    };
  },
  mounted() {
    let id = this.$route.params.id;
    if (!id) return;

    this.modoCadastro = false;
    this.obterProdutoPorId(id);
  },
  methods: {
    obterProdutoPorId(id) {
      produtoService
        .obterPorId(id)
        .then((response) => {
          this.produto = new Produtos(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    cancelarAcao() {
      this.Produto = new Produtos();
      this.$router.push({ name: "ControleDeProdutos" });
    },
    cadastraProduto() {
      if (!this.produto.modeloValidoParaCadastro()) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "nome do produto e obrigatoorio",
        });

        return;
      }
      this.produto.dataCadastro =
        conversorDeData.aplicarMascaraemFormatoAmericanoDataISO(
          this.produto.dataCadastro
        );

      produtoService
        .cadastra(this.produto)
        .then(() => {
          this.$swal({
            icon: "success",
            title: "Produto cadastrado com sucesso!",
          });
          this.produto = new Produtos();

          if (!this.continuarAddProduto) {
            this.$router.push({ name: "ControleDeProdutos" });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    atualizarProduto() {
      if (!this.produto.modeloValidoParaAtualizar()) {
        alert("codigo e nome do produto e obrigatoorio");
        return;
      }

      this.produto.dataCadastro =
        conversorDeData.aplicarMascaraemFormatoAmericanoDataISO(
          this.produto.dataCadastro
        );

      produtoService
        .atualizar(this.produto)
        .then(() => {
          alert("produto atualizado com sucesso");
          this.$router.push({ name: "ControleDeProdutos" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    salavrProduto() {
      this.modoCadastro ? this.cadastraProduto() : this.atualizarProduto();
    },
  },
};
</script>
<style scoped>
textarea {
  resize: none;
}
</style>