import Vue from "vue";
import VueRouter from "vue-router";
import UserTerms from "../views/UserTerms.vue";
import PaymentArea from "../views/PaymentArea.vue";
import CompletedPayment from '../views/CompletedPayment.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "UserTerms",
    component: UserTerms,
  },
  {
    path : "/payment",
    name : "PaymentArea",
    component : PaymentArea,
  },
  {
    path : "/completed/:type",
    name : "CompletedPayment",
    component : CompletedPayment,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
