const proyectoService = (() => { 
  let proyectos = [
    { id: 1, titulo: "Sistema de Educación", categoria: "Web", estado: "En progreso"},
    { id: 2, titulo: "App de Álgebra Lineal", categoria: "Móvil", estado: "Finalizado"},
    { id: 3, titulo: "Gestor de Tareas", categoria: "Web",estado: "En progreso"},
    { id: 4, titulo: "Herramientas Informáticas", categoria: "Web", estado: "En progreso" },
    { id: 5, titulo: "Juego Educativo", categoria: "Móvil", estado: "Finalizado"},
    { id: 6, titulo: "El Trabajo Social y el Trabajo Infantil en la Agricultura",       categoria: "Investigación", estado: "En progreso",
      descripcionExtendida: ["Este proyecto de investigación se centra en analizar el impacto de la intervención del Trabajo Social en las zonas rurales, específicamente en la prevención del trabajo infantil dentro del sector agrícola", "A través de entrevistas y observación directa, se busca identificar las causas estructurales que llevan a las familias a incluir a menores en las tareas de cosecha."],
      recursos: {
        drive: "https://drive.google.com",
        pdf: "archivo.pdf",
        github: "https://github.com"
      },
      equipo: [
        { nombre: "Alison Catellon", rol: "Investigadora" },
        { nombre: "Rodrigo López", rol: "Analista de los Datos" }
      ]
    }
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
