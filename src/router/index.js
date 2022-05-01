import { createRouter, createWebHistory } from "vue-router";
import Header from "../views/HeaderTitle.vue";
// import ProjectBoard from "../views/ProjectBoard.vue";
// import Team from "../views/TeamPage.vue";

const routes = [
  
  // {
  //   path:'/',
  //   redirect: {name: 'Home'}
  // },
  // {
  //   path: "/fbb/",
  //   name: "Header",
  //   component: Header,
  // },
  {
    path: "/",
    name: "Header",
    component: Header,
  },
  // {
  //   path: "/project",
  //   name: "Project",
  //   // route level code-splitting
  //   // this generates a separate chunk (about. [hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: ProjectBoard
  // },
  // {
  //   path: "/team",
  //   name: "Team",
  //   // route level code-splitting
  //   // this generates a separate chunk (about. [hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: Team
  // },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
