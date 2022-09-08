import { createRouter, createWebHistory } from "vue-router";
import Homepage from "@/pages/Homepage.vue";
import ArticlePage from "@/pages/ArticlePage.vue";

const routes = [
    { path: "/", component: Homepage, name: "Homepage" },
    { path: "/article/:id", component: ArticlePage, name: "ArticlePage" },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
