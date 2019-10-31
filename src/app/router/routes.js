import { bouquetsRoutes } from '@/app/modules/bouquets'

const baseRoutes = [{
    path: "*"
},
{
    path: "/",
    name: "Home",
    component: () => import("../core/pages/Home.vue")
}];

const routes = baseRoutes.concat(
    bouquetsRoutes
);

export default routes;