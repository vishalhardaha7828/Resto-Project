import FirstPage from "./intro/FirstPage.vue";
import FirstContect from "./intro/FirstContect.vue";
import FirstAbout from "./intro/FirstAbout.vue";
import CousHome from "./cous/CousHome.vue";
import CousManu from "./cous/CousManu.vue";
import CardItem from "./cous/CardItem.vue";
import CousBill from "./cous/CousBill.vue";
import RestoHome from "./resto/RestoHome.vue";
import RestoAddProduct from "./resto/RestoAddProduct.vue";
import RestoManu from "./resto/RestoManu.vue";
import RestoUpdate from "./resto/RestoUpdate.vue";
import UpdateSent from "./resto/UpdateSent.vue";
import RestoDelete from "./resto/RestoDelete.vue";
import TotalSell from "./resto/TotalSell.vue";
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        name: 'FirstPage',
        component: FirstPage,
        path: '/'
    },
    {
        name: 'FirstContect',
        component: FirstContect,
        path: '/Contect'
    },
    {
        name: 'FirstAbout',
        component: FirstAbout,
        path: '/About'
    },
    {
        name: 'CousHome',
        component: CousHome,
        path: '/Home1'
    },
    {
        name: 'RestoHome',
        component: RestoHome,
        path: '/Home2'
    },
    {
        name: 'CousManu',
        component: CousManu,
        path: '/Manu1'
    },
    {
        name: 'CardItem',
        component: CardItem,
        path: '/Card'
    },
    {
        name: 'CousBill',
        component: CousBill,
        path: '/Bill'
    },
    {
        name: 'TotalSell',
        component: TotalSell,
        path: '/Selling'
    },
    {
        name: 'RestoAddProduct',
        component: RestoAddProduct,
        path: '/Add'
    },
    {
        name: 'RestoManu',
        component: RestoManu,
        path: '/Manu2'
    },
    {
        name: 'RestoUpdate',
        component: RestoUpdate,
        path: '/Update'
    },
    {
        name: 'UpdateSent',
        component: UpdateSent,
        path: '/UpdateSent/:id'
    },
    {
        name: 'RestoDelete',
        component: RestoDelete,
        path: '/Delete'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;