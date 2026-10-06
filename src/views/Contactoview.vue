<script setup lang="ts">
</script>

<template>
    <main class="contact-page text-left">
        <h1 class="color3">Contacto</h1>
        <p class="color1">
            ¿Tienes alguna pregunta? Puedes comunicarte con CatCursosVue por cualquiera de estos medios:
        </p>

        <div class="contact-options">
            <a class="contact-option" href="mailto:CatCursosVue@gmail.com">
                <strong>Email</strong>
                <span>CatCursosVue@gmail.com</span>
            </a>
            <a class="contact-option" href="tel:+529999567890">
                <strong>Teléfono</strong>
                <span>999-956-7890</span>
            </a>
            <a class="contact-option" href="https://wa.me/9999567890">
                <strong>WhatsApp</strong>
                <span>999-956-7890</span>
            </a>
        </div>

        <h2 class="color3 social-heading">Redes sociales</h2>
        <p class="color1">
            Síguenos en nuestras redes sociales para estar al tanto de las últimas novedades:
        </p>
        <div class="contact-options">
            <a class="contact-option" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <strong>Facebook</strong>
                <span>Visita nuestra página de Facebook</span>
            </a>
            <a class="contact-option" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <strong>Instagram</strong>
                <span>Síguenos en Instagram</span>
            </a>
            <a class="contact-option" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <strong>LinkedIn</strong>
                <span>Conéctate con nosotros en LinkedIn</span>
            </a>
            <a class="contact-option" href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                <strong>TikTok</strong>
                <span>Encuéntranos en TikTok</span>
            </a>
            <a class="contact-option" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <strong>YouTube</strong>
                <span>Mira nuestro canal de YouTube</span>
            </a>
            <a class="contact-option" href="https://wa.me/9999567890" target="_blank" rel="noopener noreferrer">
                <strong>WhatsApp</strong>
                <span>Escríbenos por WhatsApp</span>
            </a>
        </div>

    </main>
</template>

<style scoped>
.contact-page {
    padding: 0 5% 8%;
}

.contact-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
    gap: 1rem;
    margin-top: 2rem;
}

.social-heading {
    margin-top: 5%;
}

.contact-option {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1.25rem;
    border: 1px solid rgb(79 103 238 / 25%);
    border-radius: 0.75rem;
    background: rgb(79 103 238 / 8%);
    color: inherit;
    text-decoration: none;
}

.contact-option:hover {
    background: rgb(79 103 238 / 15%);
}

.contact-option:focus-visible {
    outline: 0.1875rem solid #ec84af;
    outline-offset: 0.2rem;
}
</style>
