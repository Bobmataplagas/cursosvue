<script setup lang="ts">
import { ref } from 'vue'

const carouselImages = [
    {
        src: 'https://www.serebii.net/scarletviolet/classes.jpg',
        alt: 'Aula de clases',
    },
    {
        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
        alt: 'Estudiante aprendiendo con una computadora',
    },
    {
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
        alt: 'Grupo de estudiantes aprendiendo en equipo',
    },
]

const currentImageIndex = ref(0)

function showPreviousImage() {
    currentImageIndex.value =
        (currentImageIndex.value - 1 + carouselImages.length) % carouselImages.length
}

function showNextImage() {
    currentImageIndex.value = (currentImageIndex.value + 1) % carouselImages.length
}
</script>

<template>
    <section class="image-carousel" aria-label="Galería de imágenes">
        <img
            :src="carouselImages[currentImageIndex].src"
            :alt="carouselImages[currentImageIndex].alt"
            class="home-image"
        />
        <button
            type="button"
            class="carousel-control previous"
            aria-label="Imagen anterior"
            @click="showPreviousImage"
        >‹</button>
        <button
            type="button"
            class="carousel-control next"
            aria-label="Imagen siguiente"
            @click="showNextImage"
        >›</button>
    </section>
</template>

<style scoped>
.home-image {
    display: block;
    width: 90%;
    max-width: 100%;
    height: min(55vw, 55vh);
    margin: 0 auto;
    object-fit: contain;
}

.image-carousel {
    position: relative;
    width: 100%;
    margin: 3% auto 5%;
}

.carousel-control {
    position: absolute;
    top: 50%;
    display: grid;
    width: 2.75rem;
    aspect-ratio: 1;
    place-items: center;
    border: 0;
    border-radius: 50%;
    background: rgb(20 20 35 / 65%);
    color: white;
    cursor: pointer;
    font-size: 2rem;
    line-height: 1;
    transform: translateY(-50%);
}

.carousel-control:hover {
    background: rgb(20 20 35 / 85%);
}

.carousel-control:focus-visible {
    outline: 0.1875rem solid #ec84af;
    outline-offset: 0.2rem;
}

.carousel-control.previous {
    left: 2%;
}

.carousel-control.next {
    right: 2%;
}
</style>
