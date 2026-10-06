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

</script>

<template>
    <main v-if="curso" class="text-left">
        <RouterLink to="/cursos" class="color3">← Atrás</RouterLink>
        <img :src="curso.image" :alt="curso.title" class="detail-image" />
        <p class="course-area">{{ curso.area }}</p>
        <h1 class="course-title">{{ curso.title }}</h1>
        <p class="course-meta">{{ curso.duracion }} · Nivel {{ curso.level }}</p>
        <p class="color1">{{ curso.description }}</p>
        <p class="course-price">Precio: ${{curso.precio}} MXN</p>
        <RouterLink :to="`/inscripcion/${curso.id}`" class="enroll-link">Inscribirme</RouterLink>

        <section class="topics">
            <h2 class="color3">¿Qué aprenderás?</h2>
            <ul class="color1">
                <li v-for="topic in curso.temas" :key="topic">{{ topic }}</li>
            </ul>

            <section class="support-material">
                <h2 class="color3">Material de apoyo</h2>
                <ul class="color1">
                    <li v-for="material in curso.apoyo" :key="material">{{ material }}</li>
                </ul>
            </section>

            <iframe
                v-if="curso.video"
                :src="curso.video"
                class="course-video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
        </section>
    </main>
    <main v-else class="course-detail text-left">
        <h1 class="color3">Curso no encontrado</h1>
    </main>
</template>

<style scoped>
.back-link {
    display: inline-block;
    margin: 0 0 1.5rem;
    color: #4f67ee;
    font-weight: 700;
    text-decoration: none;
}

.back-link:focus-visible {
    outline: 0.1875rem solid #ec84af;
    outline-offset: 0.2rem;
}

.detail-image {
    display: block;
    width: 100%;
    max-height: 26rem;
    border-radius: 1rem;
    object-fit: cover;
}

.course-area {
    margin-top: 1.5rem;
    color: #ee4f5c;
    font-weight: 700;
}

.course-title {
    color: #ee4f5c;
    line-height: 1.25;
}

.course-meta {
    margin-bottom: 1rem;
    color: #555;
}

.course-price {
    margin-top: 1rem;
    color: #4f67ee;
    font-size: 1.25rem;
    font-weight: 700;
}

.enroll-link {
    display: inline-block;
    margin-top: 0.75rem;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    background: #4f67ee;
    color: white;
    font-weight: 700;
    text-decoration: none;
}

.enroll-link:focus-visible {
    outline: 0.1875rem solid #ec84af;
    outline-offset: 0.2rem;
}

.topics {
    margin-top: 2rem;
}

.topics li + li {
    margin-top: 0.5rem;
}

.support-material {
    margin-top: 2rem;
}

.course-video {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    margin: 2rem auto;
    border-radius: 1rem;
}
</style>
