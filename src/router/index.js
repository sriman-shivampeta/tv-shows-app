import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import ShowDetails from "@/components/ShowDetails.vue";
import ShowsBySelectedGenre from "@/components/ShowsBySelectedGenre.vue";
import ShowsByUserQuery from "../components/ShowsByUserQuery.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/show/:id/:name",
    name: "ShowDetails",
    component: ShowDetails
  },
  {
    path: "/genre/:genre",
    name: "Selected Genre",
    component: ShowsBySelectedGenre
  },
  {
    path: "/showsbyquery/:searchTVShowVal",
    name: "ShowsByUserQuery",
    component: ShowsByUserQuery
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
