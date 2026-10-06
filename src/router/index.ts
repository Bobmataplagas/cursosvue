import { createRouter, createWebHistory } from 'vue-router';
import Inicioview from '../views/Inicioview.vue';
import Cursosview from '../views/Cursosview.vue';
import Nosotrosview from '../views/Nosotrosview.vue';
import Privacidadview from '../views/privacidadview.vue';
import Terminosview from '../views/terminosview.vue';
import Contactoview from '../views/Contactoview.vue';
import CursoDetalleview from '../views/CursoDetalleview.vue';
import Inscripcionview from '../views/Inscripcionview.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Inicioview },
    { path: '/inicio', component: Inicioview },
    { path: '/cursos', component: Cursosview },
    { path: '/cursos/:id', component: CursoDetalleview, props: true },
    { path: '/inscripcion/:id', component: Inscripcionview, props: true },
    { path: '/nosotros', component: Nosotrosview },
    { path: '/privacidad', component: Privacidadview },
    { path: '/terminos', component: Terminosview },
    { path: '/contacto', component: Contactoview },
  ],
});

export default router;
