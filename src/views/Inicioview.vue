<script setup lang="ts">
import { maestros } from '../bases/maestros'
import { casosExitoAlumnos } from '../bases/alumnos';
import Carrousel from '../components/Carrousel.vue'
import empresas from '../assets/empresas.png'

</script>

<template>
    <div class="text-left">
        <h1 class="color3">Bienvenido a CatCursosVue</h1>
        <p class="color1">Empieza o refuerza en un nuevo camino de aprendizaje con nosotros</p>
        <Carrousel />

        <div>
            <h2 class="color2">Escoge entre nuestra variedad de cursos </h2>
            <p class="color1" style="padding-bottom: 2%;">En CatCursosVue, ofrecemos una amplia gama de cursos en línea diseñados para satisfacer las necesidades de aprendizaje de nuestros estudiantes. Desde programación y desarrollo web hasta diseño gráfico y marketing digital, nuestros cursos están diseñados para ayudarte a adquirir habilidades valiosas y avanzar en tu carrera.</p>

            <p class="color1" style="padding-bottom: 2%;">Nuestros cursos son impartidos por expertos en sus respectivos campos, quienes comparten sus conocimientos y experiencia a través de lecciones interactivas, ejercicios prácticos y proyectos del mundo real. Además, nuestros cursos están diseñados para ser flexibles y accesibles, lo que te permite aprender a tu propio ritmo y desde cualquier lugar.</p>
            <p class="color1" style="padding-bottom: 2%;">Ya sea que estés buscando mejorar tus habilidades existentes o aprender algo completamente nuevo, CatCursosVue tiene un curso para ti. Explora nuestra selección de cursos y comienza tu viaje de aprendizaje hoy mismo.</p>

             <router-link to="/cursos" class="courses-button">
                Explorar cursos
                <span aria-hidden="true"></span>
            </router-link>
        </div>
        
        
        <div style="padding-top: 5%;">
            <h2 class="color3">Los cursos con más demanda</h2>
            <ol class="color2" style="padding-bottom: 2%; font-size: 150%;">
                <RouterLink class="color2" to="/cursos/plan-negocio"><li>Plan de tu idea de negocio</li></RouterLink>
                <RouterLink class="color2" to="/cursos/diseño-web"><li>Diseño web</li></RouterLink>
                <RouterLink class="color2" to="/cursos/marketing"><li>Marketing digital desde cero</li></RouterLink>
                <RouterLink class="color2" to="/cursos/finanzas"><li>Finanzas básicas para emprender</li></RouterLink>
                <RouterLink class="color2" to="/cursos/diseño-videojuegos"><li>Diseño de videojuegos para principiantes</li></RouterLink>
            </ol>
        
            <img src="https://i.pinimg.com/originals/c7/16/bf/c716bf7211bc55f8003770fcedc98ce9.png" alt="chiikawa" style="width: 25%; padding-left: 35%;" />
        </div>
        
        <div style="padding-top: 5%;">
            <h2 class="color2">Casos de éxito</h2>
            <p class="color1" style="padding-bottom: 2%;">Nuestros estudiantes han logrado resultados impresionantes después de completar nuestros cursos. Desde conseguir nuevos empleos hasta iniciar sus propios negocios, nuestros estudiantes han utilizado las habilidades y conocimientos adquiridos en nuestros cursos para alcanzar sus metas profesionales y personales.</p>
            <div class="success-stories">
                <article v-for="alumno in casosExitoAlumnos" :key="alumno.name" class="success-story">
                    <h3 class="color3">{{ alumno.name }}</h3>
                    <p class="color1">{{ alumno.description }}</p>
                </article>
            </div>
        </div>

        <div style="padding-top: 5%;">
            <h2 class="color2">Conoce a nuestros instructores</h2>
            <p class="color1" style="padding-bottom: 2%;">Nuestros instructores son profesionales altamente capacitados y experimentados en sus respectivos campos. Cada uno de ellos aporta una perspectiva única y valiosa a nuestros cursos, asegurando que nuestros estudiantes reciban una educación completa y actualizada.</p>
            <p class="color1" style="padding-bottom: 2%;">Desde especialistas en desarrollo hasta diseñadores gráficos y expertos en marketing digital, nuestros instructores están comprometidos a brindar una experiencia de aprendizaje excepcional. Ellos no solo enseñan los conceptos fundamentales, sino que también comparten sus experiencias del mundo real, proporcionando a los estudiantes una comprensión más profunda de cómo aplicar lo que aprenden en situaciones prácticas.</p>
            <p class="color1" style="padding-bottom: 2%;">Además, nuestros instructores están disponibles para responder preguntas y brindar orientación a lo largo del curso, asegurando que los estudiantes se sientan apoyados y motivados en su viaje de aprendizaje. Con su experiencia y dedicación, nuestros instructores son una parte integral del éxito de nuestros estudiantes.</p>

            <section>
                <div class="teacher-groups">
                    <article v-for="mtro in maestros" :key="mtro.name">
                        <img
                            v-if="mtro.photo" :src="mtro.photo" :alt="`Foto`" class="teacher-photo"
                        />
                        <div v-else>Foto no disponible</div>

                        <h3 class="color3">{{ mtro.name }}</h3>
                        <h4 class="color2">{{ mtro.title }}</h4>
                        <p class="color1"><strong>Áreas:</strong> {{ mtro.areas }}</p>
                        <p class="color1">{{ mtro.description }}</p>
                    </article>
                </div>
            </section>

        </div>
        
        <div style="padding-top: 5%;">
            <h2 class="color3">Empresas afiliadas</h2>
            <p class="color1">Trabajamos con empresas y organizaciones que comparten nuestra visión de ofrecer educación de calidad. Estas colaboraciones nos permiten mejorar nuestros cursos y brindar a nuestros estudiantes oportunidades adicionales para aprender y crecer.</p>
            <p class="color1">Al asociarnos con estas empresas, podemos ofrecer a nuestros estudiantes acceso a recursos exclusivos, experiencias prácticas y oportunidades de networking que enriquecen su aprendizaje y desarrollo profesional.</p>

            <img :src="empresas" alt="Empresas afiliadas" style="width: 100%; padding-right: 15%; padding-top: 7%;" />
        </div>

    </div>

</template>

<style scoped>
.courses-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.65em;
    margin: 1.5%;
    padding: 0.9em 1.5em;
    border-radius: 999px;
    background: linear-gradient(135deg, #4f67ee, #8b45ce);
    box-shadow: 0 0.375rem 1rem rgb(79 103 238 / 30%);
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    transition: transform 180ms ease, box-shadow 180ms ease;
}

.courses-button:hover {
    transform: translateY(-0.125rem);
    box-shadow: 0 0.5625rem 1.375rem rgb(79 103 238 / 40%);
}

.courses-button:focus-visible {
    outline: 0.1875rem solid #ec84af;
    outline-offset: 0.25rem;
}

.courses-button span {
    font-size: 1.25em;
    line-height: 1;
}

@media (prefers-reduced-motion: reduce) {
    .courses-button {
        transition: none;
    }
}

.teaching-section {
    display: flex;
    padding-top: 5%;
}

.teacher-groups {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1%;
    padding-left: 1%;
}

.success-stories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
    gap: 1rem;
}

.success-story {
    padding: 1rem;
    border: 1px solid rgb(79 103 238 / 25%);
    border-radius: 0.75rem;
    background: rgb(79 103 238 / 8%);
}

.success-story h3 {
    margin-top: 0;
}

.teacher-photo {
    display: block;
    width: 50%;
    height: 50%;
    object-fit: contain;
}
</style>
