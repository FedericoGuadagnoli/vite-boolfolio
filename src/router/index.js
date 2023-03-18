import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../pages/HomePage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';
import ProjectDetailPage from '../pages/ProjectDetailPage.vue';
import CategoryProjectPage from '../pages/CategoryProjectPage.vue';

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/projects/:slug', name: 'project-detail', component: ProjectDetailPage },
        { path: '/:pathMatch(.*)*', component: NotFoundPage },
        { path: '/categories/:id/projects', name: 'category-project', component: CategoryProjectPage }
    ]
});

export {
    router
}