<script lang="ts" setup>
const emit = defineEmits<{
  selectSection: [section: 'Todos los cursos' | 'Marketing'| 'Videojuegos' | 'Programación y data' | 'Diseño web y gráfico' | 'Interiorismo' | 'Negocios'];
}>()
</script>

<template>
    <header>
        <nav>
            <div class="section-buttons" style="padding-top: 3%; padding-left: 2%; padding-right: 2%;">
              <button type="button" @click="emit('selectSection', 'Todos los cursos')">Todos los cursos</button>
              <button type="button" @click="emit('selectSection', 'Marketing')">Marketing</button>
              <button type="button" @click="emit('selectSection', 'Videojuegos')">Videojuegos</button>
              <button type="button" @click="emit('selectSection', 'Programación y data')">Programación y data</button>
              <button type="button" @click="emit('selectSection', 'Diseño web y gráfico')">Diseño web y gráfico</button>
              <button type="button" @click="emit('selectSection', 'Interiorismo')">Interiorismo</button>
              <button type="button" @click="emit('selectSection', 'Negocios')">Negocios</button>
            </div>
        </nav>
    </header>
</template>


<style scoped>
header {
  margin-bottom: 4%;
}

 .section-buttons {
  display: flex;
  gap: 2%;
  justify-content: center;
  flex-wrap: wrap;
}

nav button {
  display: inline-block;
  padding: 10px 10px 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background: rgba(161, 161, 161, 0.397);
  color: #000000;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
}

nav button:hover {
  background: rgba(250, 0, 62, 0.692);
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(255, 255, 255, 0.068);
}
</style>