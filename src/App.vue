<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { RouterView } from 'vue-router';

const mostrarBotonArriba = ref(false);
function actualizarBotonArriba() {
  mostrarBotonArriba.value = window.scrollY > 300;
}

function subirAlInicio() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
  window.addEventListener('scroll', actualizarBotonArriba);
  actualizarBotonArriba();
});
</script>

<template>
  <Navbar/>
  <RouterView />
  <Footer/>
  <button
    v-if="mostrarBotonArriba"
    class="back-to-top"
    type="button"
    aria-label="Volver al inicio de la página"
    title="Volver arriba"
    @click="subirAlInicio"
  >
    ⇧
  </button>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  z-index: 1000;
  width: 2.75rem;
  height: 2.75rem;
  border: 0;
  border-radius: 50%;
  background: #ee4f7f;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
