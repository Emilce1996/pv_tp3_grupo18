const proyectoService = (() => {

  let proyectos = [
    { id: 1, titulo: "Sistema de Educación", categoria: "Web", estado: "En progreso"},
    { id: 2, titulo: "App de Álgebra Lineal", categoria: "Móvil", estado: "Finalizado"},
    { id: 3, titulo: "Gestor de Tareas", categoria: "Web",estado: "En progreso"},
    { id: 4, titulo: "Herramientas Informáticas", categoria: "Web", estado: "En progreso" },
    { id: 5, titulo: "Juego Educativo", categoria: "Móvil", estado: "Finalizado"},
  ];

  //const obtenerProyectos = () => [...proyectos];

  const agregarProyecto = (nuevoProyecto) => {
    proyectos.push(nuevoProyecto);
  };

  //const eliminarProyecto = (id) => {
  //  proyectos = proyectos.filter((p) => p.id !== id);
  //};

  //const buscarProyecto = (texto) => {
    //return proyectos.filter((p) =>
      //p.titulo.toLowerCase().includes(texto.toLowerCase()),
    //);
  //};

  return {
    //obtenerProyectos,
    agregarProyecto,
    //eliminarProyecto,
    //buscarProyecto,
  };
})();

export default proyectoService;
