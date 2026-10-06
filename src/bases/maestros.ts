export const Areas = [
    'Marketing',
    'Videojuegos',
    'Programación y data',
    'Diseño web y gráfico',
    'Interiorismo',
    'Negocios',
]

export interface maestro {
    name: string;
    photo: string;
    title: string;
    areas: string;
    description: string;
}

export const maestros : maestro[] = [
    {
        name: 'Ciprés',
        photo: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/4/43/latest/20130712191504/Profesor_Cipr%C3%A9s.png/640px-Profesor_Cipr%C3%A9s.png',
        title: 'Desarrollo y análisis de datos',
        areas: 'Programación y data',
        description: 'Enseña a crear programas y a trabajar con datos para resolver problemas mediante proyectos prácticos.',
    },
    {
        name: 'Kukui',
        photo: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/51/latest/20160602131830/Profesor_Kukui.png/800px-Profesor_Kukui.png',
        title: 'Diseño y desarrollo de videojuegos',
        areas: 'Videojuegos',
        description: 'Guía la creación de videojuegos y enseña los elementos que hacen que una experiencia de juego sea divertida.',
    },
    {
        name: 'Encina',
        photo: 'https://images.wikidexcdn.net/mwuploads/wikidex/7/7e/latest/20231020134841/Profesora_Encina_Anime.png',
        title: 'Emprendimiento y estrategia',
        areas: 'Negocios',
        description: 'Comparte herramientas para planear proyectos, organizar recursos y convertir ideas en iniciativas de negocio.',
    },
    {
        name: 'Serbal',
        photo: 'https://static.wikia.nocookie.net/espokemon/images/f/f6/Profesor_Serbal.png',
        title: 'Estrategia de marketing',
        areas: 'Marketing',
        description: 'Explica cómo identificar una audiencia y diseñar estrategias para comunicar y promocionar productos o servicios.',
    },
    {
        name: 'Cinio',
        photo: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/c/c0/latest/20220803133826/Cinio.png/800px-Cinio.png',
        title: 'Diseño web y gráfico',
        areas: 'Diseño web y gráfico',
        description: 'Enseña principios visuales y herramientas para crear sitios web y piezas gráficas claras y atractivas.',
    },
    {
        name: 'Elm',
        photo: 'https://static.wikia.nocookie.net/espokemon/images/0/06/Profesor_Elm_en_HGSS.png',
        title: 'Diseño y ambientación de interiores',
        areas: 'Interiorismo',
        description: 'Enseña a planear espacios funcionales y armoniosos mediante la distribución, los colores y los materiales.',
    },
]
