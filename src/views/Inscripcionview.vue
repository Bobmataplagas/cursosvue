<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { cursos, type Curso } from '../bases/cursos'

const props = defineProps<{ id: string }>()
function buscarCurso(id: string): Curso | undefined {
    for (const cursoActual of cursos) {
        if (cursoActual.id === id) {
            return cursoActual
        }
    }
    return undefined
}
const curso = ref(buscarCurso(props.id))

const nombre = ref('')
const telefono = ref('')
const correo = ref('')
const enviado = ref(false)
const noenviado = ref(false)

function confirmarInscripcion() {
    if (!nombre.value.trim() || !telefono.value.trim() || !correo.value.trim()) {
        noenviado.value = true
    } else {
    enviado.value = true
    }
}

</script>

<template>
    <main v-if="curso" class="text-left" style="margin: auto; padding-bottom: 5%;">
        <RouterLink :to="`/cursos/${curso.id}`" class="back-link">← Atrás</RouterLink>
        <h1 class="color3">Inscripción</h1>
        <h2 class="color2">{{ curso.title }}</h2>
        <p class="price">Precio: ${{curso.precio}} MXN</p>

        <form v-if="enviado==false" class="enrollment-form">
            <p>Nombre completo</p>
            <input v-model="nombre">

            <p>Teléfono</p>
            <input v-model="telefono">

            <p>Correo electrónico</p>
            <input v-model="correo">

            <button class="submit-button" @click="confirmarInscripcion">Confirmar inscripción</button>
        </form>
        <p v-if="noenviado==true" class="color1"> <strong> Por favor, complete todos los campos</strong></p>
        <p v-if="enviado==true" class="color1"> <strong> Inscripción completada correctamente</strong></p>
    </main>
</template>

<style scoped>
.enrollment-page {
    max-width: 42rem;
    margin: 0 auto;
    padding: 0 5% 8%;
}

.back-link {
    display: inline-block;
    margin-bottom: 1rem;
    color: #4f67ee;
}

.price {
    margin: 1rem 0;
    color: #4f67ee;
    font-size: 1.25rem;
    font-weight: 700;
}

.notice {
    margin-bottom: 1.5rem;
}



.enrollment-form input {
    width: 100%;
    padding: 4%;
    border: 1px solid #aaa;
    border-radius: 0.4rem;
}


.submit-button {
    margin-top: 0.75rem;
    padding: 0.85rem 1rem;
    border: 0;
    border-radius: 0.5rem;
    background: #4f67ee;
    color: white;
    cursor: pointer;
    font: inherit;
    font-weight: 700;
}

.submit-button:hover {
    background: #3e55d6;
}

</style>
