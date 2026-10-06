<script setup lang="ts">
import Cat from '../assets/CatCursos.png'
import { Areas, maestros, } from '../bases/maestros'
import empresas from '../assets/empresas.png'
</script>

<template>
    <div class="text-left" style="padding-bottom: 10%;">
        <h1 class="color3">Nosotros</h1>
        <p class="color1">Somos un equipo de desarrolladores apasionados por la educación en línea y la creación de cursos de alta calidad. Nuestro objetivo es brindar a los estudiantes las herramientas y conocimientos necesarios para tener éxito en sus carreras y proyectos personales.</p>
        <p class="color1">En CatCursosVue, nos esforzamos por ofrecer una experiencia de aprendizaje interactiva y atractiva, con contenido actualizado y relevante para el mundo actual. Creemos que la educación es la clave para el crecimiento personal y profesional, y estamos comprometidos a ayudar a nuestros estudiantes a alcanzar sus metas.</p>
        <p class="color1">Nuestro equipo está compuesto por expertos en diversas áreas, desde desarrollo web hasta marketing digital, diseño gráfico y más. Trabajamos juntos para crear cursos que sean informativos, prácticos y fáciles de seguir, asegurando que nuestros estudiantes obtengan el máximo valor de su experiencia de aprendizaje.</p>

        <section class="teaching-section" style="padding-bottom: 10%;">
            <div >
                <h2 class="color2">Áreas de enseñanza</h2>
                <ul class="color1">
                    <li v-for="area in Areas" :key="area">{{ area }}</li>
                </ul>
            </div>
            <img :src="Cat" alt="CatCursos" style="width: 50%; padding-bottom:2%; padding-left: 15%;" />
        </section>

        <section style="padding-bottom: 5%;">
            <h2 class="color3" style="padding-top: 5%;">Nuestros maestros</h2>
            <p class="color1">Nuestros cursos reúnen a maestros especializados en distintas áreas, que comparten sus conocimientos con explicaciones claras y actividades prácticas. Su objetivo es acompañarte para que puedas aprender a tu ritmo y aplicar lo aprendido.</p>
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
        
        <div>
            <h2 class="color3">Empresas afiliadas</h2>
            <p class="color1">Trabajamos con empresas y organizaciones que comparten nuestra visión de ofrecer educación de calidad. Estas colaboraciones nos permiten mejorar nuestros cursos y brindar a nuestros estudiantes oportunidades adicionales para aprender y crecer.</p>
            <p class="color1">Al asociarnos con estas empresas, podemos ofrecer a nuestros estudiantes acceso a recursos exclusivos, experiencias prácticas y oportunidades de networking que enriquecen su aprendizaje y desarrollo profesional.</p>

            <img :src="empresas" alt="Empresas afiliadas" style="width: 100%; padding-right: 15%; padding-top: 7%;" />
        </div>

        <div>
            <h2 class="color3" style="padding-top: 5%;">Certificaciones</h2>
            <p class="color1">Al completar nuestros cursos, los estudiantes pueden obtener certificaciones que validan sus habilidades y conocimientos adquiridos. Estas certificaciones son reconocidas por empleadores y pueden mejorar las oportunidades profesionales de nuestros estudiantes.</p>
            <p class="color1" style="padding-bottom: 5%;">Nuestras certificaciones están diseñadas para reflejar el nivel de competencia alcanzado en cada curso, y proporcionan a los estudiantes una forma tangible de demostrar su aprendizaje y progreso en sus carreras.</p>

            <div class="success-stories">
                <article class="success-story color1">
                    <p><strong>Certificado en Marketing Digital desde Cero</strong></p>
                    <img src="https://m.media-amazon.com/images/I/71rf-yB92VL._AC_UF894,1000_QL80_.jpg" alt="Certificado Marketing Digital" style="width: 80%; " />
                </article>
                <article class="success-story color1">
                    <p><strong>Certificado en Diseño de Videojuegos para Principiantes</strong></p>
                    <img src="https://m.media-amazon.com/images/I/71rf-yB92VL._AC_UF894,1000_QL80_.jpg" alt="Certificado Diseño de Videojuegos" style="width: 80%;" />
                </article>
                <article class="success-story color1">
                    <p><strong>Certificado en Prototipado de Videojuegos</strong></p>
                    <img src="https://template.canva.com/EAHJWx5_UGo/1/0/800w-RDq_LT-LTO4.jpg" alt="Certificado Prototipado de Videojuegos" style="width: 80%;"/>
                </article>
                <article class="success-story color1">
                    <p><strong>Certificado en Programación y Análisis de Datos</strong></p>
                    <img src="https://template.canva.com/EAGLAWCh5lo/3/0/1600w-5Klin67H6CI.jpg" alt="Certificado Programación y Análisis de Datos" style="width: 80%" />
                </article>
                <article class="success-story color1">
                    <p><strong>Certificado en Análisis de Datos con Python</strong></p>
                    <img src="https://template.canva.com/EAFQNGff-B8/2/0/1600w-QgskhQhIajM.jpg" alt="Certificado Análisis de Datos con Python" style="width: 80%;" />
                </article>
                <article class="success-story color1">
                    <p><strong>Certificado en Diseño Web</strong></p>
                    <img src="https://template.canva.com/EAGPO3r7i_Q/4/0/1600w-3ravLogla2c.jpg" alt="Certificado Diseño Web" style="width: 80%;" />
                </article>
            </div>
        </div>
            

    </div>
</template>

<style scoped>
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

.teacher-photo {
    display: block;
    width: 50%;
    height: 50%;
    object-fit: contain;
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

</style>
