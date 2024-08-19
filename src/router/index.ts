import { createRouter, createWebHistory } from "vue-router";
import Cart from "../components/Cart.vue";
import ProductList from "../components/ProductList.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: ProductList,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
