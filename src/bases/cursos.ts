export const areasCurso = [
    'Marketing',
    'Videojuegos',
    'Programación y data',
    'Diseño web y gráfico',
    'Interiorismo',
    'Negocios',
] as const

export type AreaCurso = typeof areasCurso[number]

export interface Curso {
    id: string;
    area: AreaCurso;
    title: string;
    description: string;
    duracion: string;
    precio: number;
    level: string;
    image: string;
    temas: string[];
    video: string;
    apoyo: string[];
}

export const cursos: Curso[] = [
    {
        id: 'marketing',
        area: 'Marketing',
        title: 'Marketing digital desde cero',
        description: 'Aprende a definir tu audiencia, crear contenido y planear una estrategia para promocionar productos o servicios.',
        duracion: '4 horas',
        precio: 399,
        level: 'Principiante',
        image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1000&q=80',
        temas: [
            'Identificación de audiencia y objetivos',
            'Canales digitales y estrategia de contenidos',
            'Calendario de publicaciones y medición de resultados',
        ],
        video: 'https://www.youtube.com/embed/Ctd6BTuZmjA?si=Q-WyXUNBTx4N3AWs',
        apoyo: [
            'Libro: Marketing 5.0: Tecnología para la humanidad, de Philip Kotler, Hermawan Kartajaya e Iwan Setiawan.',
            '5 ejercicios',
            '1 examen',
            '3 videos',
        ],
    },
    {
        id: 'diseño-videojuegos',
        area: 'Videojuegos',
        title: 'Diseño de videojuegos para principiantes',
        description: 'Conoce los fundamentos de las mecánicas, los personajes y los niveles para diseñar tu primer videojuego.',
        duracion: '5 horas',
        precio: 499,
        level: 'Principiante',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80',
        temas: [
            'Concepto, género y público del juego',
            'Diseño de reglas, objetivos y niveles',
            'Prototipo y pruebas con jugadores',
        ],
        video: 'https://www.youtube.com/embed/3llv_964vOE?si=mT1lQPZXBo2vTgy3',
        apoyo: [
            'Libro: The Art of Game Design: A Book of Lenses, de Jesse Schell.',
            '6 ejercicios',
            '2 exámenes',
            '4 videos',
        ],
    },
    {
        id: 'prototipado-videojuegos',
        area: 'Videojuegos',
        title: 'Prototipado de videojuegos',
        description: 'Transforma una idea en un prototipo jugable y aprende a probar y mejorar sus mecánicas principales.',
        duracion: '6 horas',
        precio: 599,
        level: 'Intermedio',
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
        temas: [
            'Planificación de un prototipo pequeño',
            'Construcción del ciclo principal de juego',
            'Pruebas, retroalimentación e iteración',
        ],
        video: 'https://www.youtube.com/embed/MQqx4422lEo?si=QRf2fY6TS75JDTOm',
        apoyo: [
            'Libro: Game Design Workshop, de Tracy Fullerton.',
            '8 ejercicios',
            '2 exámenes',
            '4 videos',
        ],
    },
    {
        id: 'programacion-y-datos',
        area: 'Programación y data',
        title: 'Introducción a la programación y análisis de datos',
        description: 'Aprende conceptos básicos de programación y organiza datos para encontrar información útil.',
        duracion: '7 horas',
        precio: 699,
        level: 'Principiante',
        image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1000&q=80',
        temas: [
            'Variables, condiciones y ciclos',
            'Organización y limpieza de datos',
            'Análisis básico y presentación de resultados',
        ],
        video: 'https://www.youtube.com/embed/eo6EOtf26zY?si=ENyTsDQSKuAA2_PX',
        apoyo: [
            'Libro: Python Crash Course, de Eric Matthes.',
            '7 ejercicios',
            '2 exámenes',
            '5 videos',
        ],
    },
    {
        id: 'python-analisis-datos',
        area: 'Programación y data',
        title: 'Análisis de datos con Python',
        description: 'Explora un conjunto de datos con Python, encuentra patrones y comunica tus resultados con claridad.',
        duracion: '8 horas',
        precio: 799,
        level: 'Intermedio',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
        temas: [
            'Lectura y preparación de conjuntos de datos',
            'Cálculos y exploración de información',
            'Visualización e interpretación de resultados',
        ],
        video: 'https://www.youtube.com/embed/PtBHnMMRI0E?si=2xmMWiQqs-Aa2Xgz',
        apoyo: [
            'Libro: Python for Data Analysis, de Wes McKinney.',
            '8 ejercicios',
            '2 exámenes',
            '5 videos',
        ],
    },
    {
        id: 'diseño-web',
        area: 'Diseño web y gráfico',
        title: 'Diseño web: crea tu primera página',
        description: 'Combina principios visuales y fundamentos web para desarrollar una página clara y atractiva.',
        duracion: '6 horas',
        precio: 599,
        level: 'Principiante',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1000&q=80',
        temas: [
            'Estructura y jerarquía visual',
            'Colores, tipografía y distribución',
            'Diseño adaptable para distintas pantallas',
        ],
        video: 'https://www.youtube.com/embed/VKdx96GitYA?si=7DmJg5koSxPq4V40',
        apoyo: [
            'Libro: HTML and CSS: Design and Build Websites, de Jon Duckett.',
            '6 ejercicios',
            '1 examen',
            '4 videos',
        ],
    },
    {
        id: 'identidad-visual',
        area: 'Diseño web y gráfico',
        title: 'Crea la identidad visual de una marca',
        description: 'Desarrolla una propuesta gráfica coherente con la personalidad, el público y los objetivos de una marca.',
        duracion: '5 horas',
        precio: 499,
        level: 'Principiante',
        image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1000&q=80',
        temas: [
            'Personalidad y referencias visuales',
            'Paleta de color y selección tipográfica',
            'Creación de un tablero de identidad',
        ],
        video: 'https://www.youtube.com/embed/Fq7kE3mRx5c?si=oAxWnEqFZliV98zJ',
        apoyo: [
            'Libro: Logo Design Love, de David Airey.',
            '5 ejercicios',
            '1 examen',
            '3 videos',
        ],
    },
    {
        id: 'interiorismo',
        area: 'Interiorismo',
        title: 'Interiorismo: diseña espacios funcionales',
        description: 'Planifica espacios considerando distribución, iluminación, color y selección de materiales.',
        duracion: '5 horas',
        precio: 449,
        level: 'Principiante',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
        temas: [
            'Necesidades, medidas y distribución',
            'Iluminación, color y materiales',
            'Propuesta de diseño para una habitación',
        ],
        video: 'https://www.youtube.com/embed/SwqPtA5N2k0?si=puYqlYy9DeY78j9I',
        apoyo: [
            'Libro: Interior Design Illustrated, de Francis D. K. Ching y Corky Binggeli.',
            '5 ejercicios',
            '1 examen',
            '3 videos',
        ],
    },
    {
        id: 'plan-negocio',
        area: 'Negocios',
        title: 'Crea el plan de tu idea de negocio',
        description: 'Convierte una idea en un plan inicial definiendo objetivos, público y recursos necesarios.',
        duracion: '4 horas',
        precio: 349,
        level: 'Principiante',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80',
        temas: [
            'Problema, propuesta de valor y público',
            'Recursos y actividades principales',
            'Objetivos y próximos pasos',
        ],
        video: 'https://www.youtube.com/embed/Z_YisOo-0pw?si=meOYRFYsW5MaHZhH',
        apoyo: [
            'Videos: https://www.youtube.com/results?search_query=como+crear+un+plan+de+negocio',
            '5 ejercicios',
            '1 examen',
            '4 videos',
        ],
    },
    {
        id: 'finanzas',
        area: 'Negocios',
        title: 'Finanzas básicas para emprender',
        description: 'Organiza costos, precios e ingresos para comprender mejor las finanzas de un proyecto emprendedor.',
        duracion: '4 horas',
        precio: 399,
        level: 'Principiante',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
        temas: [
            'Costos fijos y variables',
            'Cálculo inicial de precios e ingresos',
            'Presupuesto y seguimiento de gastos',
        ],
        video: 'https://www.youtube.com/embed/9xW0HK7IUo0?si=LsNeKgn7QdYn9SKY',
        apoyo: [
            'Libro: Financial Intelligence for Entrepreneurs, de Karen Berman y Joe Knight.',
            '5 ejercicios',
            '1 examen',
            '3 videos',
        ],
    },
]
