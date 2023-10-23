<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h2 class="titulo">Produtos</h2>
        <hr />
      </div>
    </div>
    <div class="row sub-contanier">
      <div class="col-sm-2">
        <InputButon :callback="adicionarProduto" value="Adicionar"></InputButon>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <table class="table table-hover">
          <tr>
            <th>Codigo</th>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>valor</th>
            <th>Data de cadrastro</th>
            <th></th>
          </tr>
          <tbody>
            <tr v-for="item in produtos" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.nome }}</td>
              <td>{{ item.quantidadeEstoque }}</td>
              <td>{{ item.valor | real }}</td>
              <td>
                {{ item.dataCadastro | data }}
              </td>
              <td>
                <i
                  @click="editarProduto(item)"
                  class="fa fa-pencil-square-o icones-tabela"
                ></i>
                <i
                  @click="deletarProduto(item)"
                  class="fa fa-trash-o icones-tabela"
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import InputButon from "@/components/input/Botao/InputBotao.vue";
import produtoService from "@/services/produto-service";
import Produto from "@/models/Produtos";
import conversoDeData from "@/utils/conversoData";
import conversoMonetario from "@/utils/conversoMonetario";
export default {
  name: "ControleDeProdutos",
  components: {
    InputButon,
  },
  data() {
    return {
      produtos: [],
    };
  },
  filters: {
    data(data) {
      return conversoDeData.aplicarMascaraEmDataIso(data);
    },
    real(valor) {
      return conversoMonetario.aplicarMascaraParaRealComPreFixo(valor);
    },
  },
  methods: {
    adicionarProduto() {
      this.$router.push({ name: "NovoProduto" });
    },
    editarProduto(produto) {
      this.$router.push({ name: "EditarProduto", params: { id: produto.id } });
    },
    deletarProduto(produto) {
      if (
        this.$swal{
          
  title: 'Do you want to save the changes?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: 'Save',
  denyButtonText: `Don't save`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    Swal.fire('Saved!', '', 'success')
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
  }
}
        
       // confirm(`deseja excluir o produto "${produto.id} -  ${produto.nome}"`)
      ) {
        produtoService
          .deletar(produto.id)
          .then(() => {
            let indice = this.produtos.findIndex((p) => p.id == produto.id);

            this.produtos.splice(indice, 1);
            setTimeout(() => {
              alert("deletado com sucesso");
            }, 500);
          })
          .catch(() => {
            console.log("error");
          });
      }
    },
    ordenaProdutos(a, b) {
      return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
    },
    obterTodosOsProdutos() {
      produtoService
        .obterTodos()
        .then((response) => {
          let produtos = response.data.map((p) => new Produto(p));
          this.produtos = produtos.sort(this.ordenaProdutos).reverse();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.obterTodosOsProdutos();
  },
};
</script>
<style scoped>
.table {
  color: white;
}
.icones-tabela {
  margin: 5px;
  cursor: pointer;
  color: white;
}
</style>
