import { createRouter, createWebHistory } from "vue-router";
import Landing from "../views/LandingPage";


var routes = [];


if(process.env.NODE_ENV === 'production'){
  routes.push({ path:'/', redirect: {name: 'Home'} })
  routes.push({ path:'/fbb/', name: 'Header', component: Landing })
}else{
  routes.push({ path: "/", name: "Header", component: Landing, })
}





const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
