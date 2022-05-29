import { createRouter, createWebHistory } from "vue-router";
import Landing from "@/views/LandingPage";
import WeatherView from "@/views/WeatherView.vue";
import WeatherDetails from "@/views/WeatherDetails";
import RssFeed from "@/views/RssFeed"


var routes = [];


if(process.env.NODE_ENV === 'production'){
  routes.push({ path:'/', redirect: {name: 'Home'} });
  routes.push({ path:'/fbb/', name: 'Header', component: Landing });
  routes.push({ path: "/weather", name: "Wetter", component: WeatherView, });
  routes.push({ path: "/weather/:city", name: "WetterDetails", component: WeatherDetails, });
  routes.push({ path: "/rssfeed", name: "RSSFEES", component: RssFeed, });
}else{
  routes.push({ path: "/", name: "Header", component: Landing, });
  routes.push({ path: "/weather", name: "Wetter", component: WeatherView, });
  routes.push({ path: "/weather/:city", name: "WetterDetails", component: WeatherDetails, });
  routes.push({ path: "/rssfeed", name: "RSSFEES", component: RssFeed, });
}





const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
