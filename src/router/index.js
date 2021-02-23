import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/views/Index';
import Evenementen from '@/views/Evenementen';
import Nieuws from '@/views/Nieuws';
import Contact from '@/views/Contact';
import About from '@/views/About';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/evenementen/:eventid',
    name: 'Evenementen',
    component: Evenementen,
  },
  {
    path: '/nieuws',
    name: 'Nieuws',
    component: Nieuws,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
