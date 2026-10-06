<script setup lang="ts">
</script>

<template>
    <nav class="navbar">
        <RouterLink to="/cat">
            <img src="https://cdn3.emoji.gg/emojis/919819-sillycat.gif" alt="home" />
        </RouterLink>
        
        <RouterLink to="/inicio">CatCursosVue</RouterLink>
        <RouterLink to="/cursos">Cursos</RouterLink>
        <RouterLink to="/nosotros">Nosotros</RouterLink>
        <RouterLink to="/contacto">Contacto</RouterLink>

    </nav>
</template>

<style scoped>
.navbar{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1.25rem;
        padding: 1rem;
        background-color: #4f67ee;
    }
    

    .navbar > a:first-child img {
        display: block;
        width: 48px;
        height: 48px;
        object-fit: contain;
    }

    .log{
        color:white;
        font-size: 1.5rem;
        font-weight: bold;
    }

    .nav-links {
        display: flex;
        gap: 1rem;
        list-style: none;
    }

    .nav-links a{
        color:white;
        text-decoration: none;
    }

    a, .menu-title {
        color:white;
        text-decoration: none;
        cursor:pointer;
    }

    .dropdown {
        position: relative;
    }

    .dropdown-content {
        position: absolute;
        top: 100%;
        left:0;
        min-width: 150px;
        background: rgb(245, 88, 174);
        color: black;
        display: flex;
        flex-direction: column;
        border:1px solid #ddd;
    }

    .dropdown-content a:hover {
        background: #ec84af;
    }
</style>
