import { createRouter, createWebHistory } from 'vue-router';
import NotesList from '../components/NotesList.vue';
import NoteDetail from '../components/NoteDetail.vue';

const routes = [
    { path: '/', name: 'NotesList', component: NotesList },
    { path: '/note/:id', name: 'NoteDetail', component: NoteDetail, props: true },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
