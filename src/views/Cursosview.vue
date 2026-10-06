<script setup lang="ts">
import { ref } from 'vue'
import HeaderComponent from '../components/HeaderComponent.vue'
import { cursos } from '../bases/cursos'

const activeSection = ref('Todos los cursos')
</script>

<template>
    <main class="courses-page">
        <HeaderComponent @selectSection="activeSection = $event" />
        <h1 class="color3" style="padding-bottom: 3%;">{{ activeSection }}</h1>

        <section class="course-grid" aria-label="Cursos disponibles">
            <template v-for="curso in cursos" :key="curso.id">
                <RouterLink
                    v-if="activeSection === 'Todos los cursos' || curso.area === activeSection"
                    :to="`/cursos/${curso.id}`"
                    class="course-card"
                >
                    <img :src="curso.image" :alt="curso.title" class="course-image" />
                    <div class="course-card-content">
                        <p class="color2">{{ curso.area }}</p>
                        <h2>{{ curso.title }}</h2>
                        <p class="course-duration">{{ curso.duracion }} · {{ curso.level }}</p>
                        <span class="color3">Ver detalles</span>
                    </div>
                </RouterLink>
            </template>
        </section>
    </main>
</template>

<style scoped>
.courses-page {
    padding-bottom: 5%;
}

.course-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 17rem), 1fr));
    gap: 1.25rem;
    padding: 0 2%;
    text-align: left;
}

.course-card {
    overflow: hidden;
    border: 1px solid rgb(79 103 238 / 22%);
    border-radius: 1rem;
    background: white;
    color: inherit;
    text-decoration: none;
    box-shadow: 0 0.25rem 1rem rgb(20 20 35 / 8%);
    transition: transform 180ms ease, box-shadow 180ms ease;
}

.course-card:hover {
    transform: translateY(-0.2rem);
    box-shadow: 0 0.75rem 1.5rem rgb(20 20 35 / 14%);
}

.course-card:focus-visible {
    outline: 0.1875rem solid #ec84af;
    outline-offset: 0.2rem;
}

.course-image {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    background: #e9e9f4;
}

.course-card-content {
    padding: 1rem;
}

.course-area {
    color: #4f67ee;
    font-size: 0.85rem;
    font-weight: 700;
}

.course-card h2 {
    margin: 0.5rem 0;
    font-size: 1.2rem;
    line-height: 1.35;
    overflow-wrap: break-word;
}

.course-duration {
    color: #555;
    font-size: 0.9rem;
}

.course-link {
    display: inline-block;
    margin-top: 1rem;
    color: #4f67ee;
    font-weight: 700;
}

@media (prefers-reduced-motion: reduce) {
    .course-card {
        transition: none;
    }
}
</style>
