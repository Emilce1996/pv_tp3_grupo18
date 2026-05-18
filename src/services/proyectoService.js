const proyectoService = (() => {
  let proyectos = [
    {
      id: 1,
      titulo: "Sistema de Educación",
      categoria: "Web",
      estado: "En progreso",
      descripcion: {
        parrafo1:
          "Este sistema tiene como objetivo digitalizar y optimizar los procesos educativos de una institución, permitiendo una administración más eficiente de la información académica y administrativa. La plataforma centraliza datos importantes relacionados con alumnos, docentes y materias, facilitando el acceso rápido y seguro a la información desde cualquier dispositivo con conexión a internet. Además, busca reducir el uso de documentación física y mejorar la comunicación entre los distintos actores de la comunidad educativa.",
        parrafo2:
          "El sistema incluye módulos de gestión de alumnos, materias y calificaciones, permitiendo registrar, actualizar y consultar información académica de manera organizada. También ofrece funcionalidades para el seguimiento del rendimiento estudiantil, generación de reportes y control de inscripciones. Gracias a su diseño web intuitivo y adaptable, la plataforma brinda una experiencia sencilla para usuarios administrativos, docentes y estudiantes, contribuyendo a una gestión educativa más moderna, ágil y eficiente.",
      },
      recursos: [
        { nombre: "Documento PDF", href: "#" },
        { nombre: "Repositorio GitHub", href: "#" },
      ],
      equipo: [
        { nombre: "Ana Pérez", rol: "Frontend" },
        { nombre: "Luis Gómez", rol: "Backend" },
      ],
    },
    {
      id: 2,
      titulo: "App de Álgebra Lineal",
      categoria: "Móvil",
      estado: "Finalizado",
      descripcion: {
        parrafo1:
          "Esta aplicación móvil está diseñada para facilitar el aprendizaje y la resolución de problemas relacionados con el álgebra lineal, ofreciendo una herramienta práctica tanto para estudiantes como para docentes. La app permite realizar cálculos matemáticos de forma rápida y precisa, ayudando a comprender conceptos fundamentales mediante una interfaz interactiva y fácil de usar. Además, busca servir como apoyo académico en cursos universitarios y de nivel medio relacionados con matemáticas, ingeniería e informática.",
        parrafo2:
          "La aplicación permite trabajar con matrices, vectores y transformaciones lineales, incluyendo operaciones como suma, multiplicación, determinantes, inversas y resolución de sistemas de ecuaciones. También incorpora representaciones visuales y ejemplos prácticos que ayudan a interpretar los resultados de manera más clara. Gracias a su enfoque móvil, los usuarios pueden acceder a las herramientas y funcionalidades desde cualquier lugar, convirtiéndola en una solución flexible y accesible para el estudio del álgebra lineal.",
      },
      recursos: [
        { nombre: "Documento PDF", href: "#" },
        { nombre: "Repositorio GitHub", href: "#" },
      ],
      equipo: [
        { nombre: "María López", rol: "UX Designer" },
        { nombre: "Carlos Díaz", rol: "Mobile Developer" },
      ],
    },
    {
      id: 3,
      titulo: "Gestor de Tareas",
      categoria: "Web",
      estado: "En progreso",
      descripcion: {
        parrafo1:
          "Este sistema web está diseñado para ayudar a usuarios y equipos de trabajo a organizar, planificar y dar seguimiento a sus actividades diarias de manera eficiente. La plataforma permite administrar tareas en un entorno digital centralizado, facilitando la productividad y mejorando la gestión del tiempo. Además, ofrece una interfaz intuitiva que simplifica la creación y supervisión de actividades, adaptándose tanto a proyectos personales como profesionales.",
        parrafo2:
          "El gestor de tareas incluye funcionalidades para crear, editar y eliminar tareas, asignar fechas límite y establecer niveles de prioridad. También permite categorizar actividades, marcar avances y visualizar el estado de cada tarea en tiempo real. Gracias a su acceso desde la web, los usuarios pueden consultar y actualizar información desde cualquier dispositivo con conexión a internet, favoreciendo la colaboración y el control organizado de proyectos y responsabilidades.",
      },
      recursos: [
        { nombre: "Documento PDF", href: "#" },
        { nombre: "Repositorio GitHub", href: "#" },
      ],
      equipo: [
        { nombre: "Kevin Goyochea", rol: "Frontend" },
        { nombre: "Lisandro Gómez", rol: "Backend" },
      ],
    },
    {
      id: 4,
      titulo: "Herramientas Informáticas",
      categoria: "Web",
      estado: "En progreso",
      descripcion: {
        parrafo1:
          "Esta plataforma web está orientada a ofrecer un conjunto de herramientas informáticas que facilitan la realización de distintas tareas digitales en entornos académicos, personales y profesionales. El sistema busca centralizar utilidades tecnológicas en un solo espacio accesible, permitiendo a los usuarios optimizar tiempo y mejorar su productividad mediante recursos prácticos y de fácil uso. Además, cuenta con una interfaz intuitiva diseñada para brindar una experiencia sencilla y eficiente.",
        parrafo2:
          "La aplicación incluye diversas funcionalidades relacionadas con el manejo de información, conversión de archivos, cálculos básicos, organización de datos y otras utilidades de apoyo informático. También permite acceder a herramientas de manera rápida desde cualquier dispositivo con conexión a internet, sin necesidad de instalar software adicional. Gracias a su enfoque web, la plataforma se convierte en una solución flexible y accesible para estudiantes, docentes y usuarios en general que requieran apoyo en tareas tecnológicas cotidianas.",
      },
      recursos: [
        { nombre: "Documento PDF", href: "#" },
        { nombre: "Repositorio GitHub", href: "#" },
      ],
      equipo: [
        { nombre: "Lourdes Medina", rol: "Frontend" },
        { nombre: "Maria Gómez", rol: "Backend" },
      ],
    },
    {
      id: 5,
      titulo: "Juego Educativo",
      categoria: "Móvil",
      estado: "Finalizado",
      descripcion: {
        parrafo1:
          "Esta aplicación móvil está desarrollada con el objetivo de combinar el aprendizaje y el entretenimiento en una experiencia interactiva y dinámica para los usuarios. El juego busca reforzar conocimientos académicos mediante actividades didácticas, retos y niveles adaptados a diferentes edades y áreas de estudio. Además, promueve el desarrollo de habilidades cognitivas como la memoria, la lógica y la resolución de problemas, utilizando elementos visuales atractivos y mecánicas de juego motivadoras.",
        parrafo2:
          "La aplicación incluye distintos modos de juego y ejercicios educativos relacionados con materias como matemáticas, lenguaje, ciencias y cultura general. También permite registrar el progreso del usuario, obtener puntuaciones y desbloquear nuevos niveles a medida que se completan desafíos. Gracias a su formato móvil, el juego puede utilizarse en cualquier momento y lugar, convirtiéndose en una herramienta práctica y entretenida para apoyar el aprendizaje de estudiantes de diferentes niveles educativos.",
      },
      recursos: [
        { nombre: "Documento PDF", href: "#" },
        { nombre: "Repositorio GitHub", href: "#" },
      ],
      equipo: [
        { nombre: "Emilce Sivila", rol: "UX Designer" },
        { nombre: "Juan Díaz", rol: "Mobile Developer" },
      ],
    },
  ];

  const obtenerProyectos = () => [...proyectos];

  const agregarProyecto = (nuevoProyecto) => {
    proyectos.push(nuevoProyecto);
  };

  const eliminarProyecto = (id) => {
    proyectos = proyectos.filter((p) => p.id !== id);
  };

  const buscarProyecto = (texto) => {
    return proyectos.filter((p) =>
      p.titulo.toLowerCase().includes(texto.toLowerCase()),
    );
  };

  return {
    obtenerProyectos,
    agregarProyecto,
    eliminarProyecto,
    buscarProyecto,
  };
})();

export default proyectoService;
