import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import ControleDeProdutos from '@/views/ControleDeProdutos.vue';
import ControleDeCliente from '@/views/ControleDeCliente.vue';
import TelaAdicionarProduto from '@/views/TelaAdicionarProduto';
const routes = [
    {
        path: '/Login', 
        name: 'Login',
        component: Login,
        title: 'login',
        meta: {
            requireAuth: false
        }
    },
    {
        path: '/', 
        name: 'Dashboard',
        component: Dashboard,
        title: 'Dashboard',
        meta: {
            requireAuth: true
        }
    },
    
    {
        path: '/controle-de-produtos', 
        name: 'ControleDeProdutos',
        component: ControleDeProdutos,
        title: 'Produtos',
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/Controle-de-Cliente', 
        name: 'ControleDeCliente',
        component: ControleDeCliente,
        title: 'Cliente',
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/Controle-de-produtos/novo', 
        name: 'NovoProduto',
        component: TelaAdicionarProduto,
        title: 'Adicionar produto',
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/Controle-de-produtos/editar', 
        name: 'EditarProduto',
        component: TelaAdicionarProduto,
        title: 'Editar produto',
        meta: {
            requireAuth: true
        }
    }
];

  export default routes;