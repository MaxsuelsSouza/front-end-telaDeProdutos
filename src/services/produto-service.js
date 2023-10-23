import api from  './api';

function obterTodos(){
        return new Promise((resolve, reject) =>{
            return api.get('/produtos')
            .then(response => resolve(response))
            .catch(erro => reject(erro));
        });
}
function obterPorId(id){
        return new Promise((resolve, reject) =>{
            return api.get(`/produtos/${id}`)
            .then(response => resolve(response))
            .catch(erro => reject(erro));
        });
}
function cadastra(produto){
        return new Promise((resolve, reject) =>{
            return api.post(`/produtos`, produto)
            .then(response => resolve(response))
            .catch(erro => reject(erro));
        });
}
function atualizar(produto){
        return new Promise((resolve, reject) =>{
            return api.put(`/produtos/${produto.id}`, produto)
            .then(response => resolve(response))
            .catch(erro => reject(erro));
        });
}
function deletar(id){
    return new Promise((resolve, reject) =>{
        return api.delete(`/produtos/${id}`)
        .then(response => resolve(response))
        .catch(erro => reject(erro));
    });
}
export default {
    obterTodos,
    obterPorId,
    cadastra,
    atualizar,
    deletar
}