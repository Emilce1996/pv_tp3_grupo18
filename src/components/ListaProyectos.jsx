import { useState } from "react";
import proyectoService from "../services/proyectoService";

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(
    proyectoService.obtenerProyectos(),
  );
  const [busqueda, setBusqueda] = useState("");

  const agregarEjemplo = () => {
    const nuevo = {
      id: Date.now(),
      titulo: "Nuevo Proyecto",
      categoria: "Web",
      estado: "Finalizado",
    };
    proyectoService.agregarProyecto(nuevo);
    setProyectos(proyectoService.obtenerProyectos());
  };

  const eliminarProyecto = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
  };

  const proyectosFiltrados = busqueda
    ? proyectoService.buscarProyecto(busqueda)
    : proyectos;

  return (
    <main>
      <h2 className="lista-title">Proyectos Disponibles</h2>

      {/* Campo de búsqueda */}
      <input
        type="text"
        placeholder="Buscar proyecto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="input-busqueda"
      />

      <div className="cards">
        {proyectosFiltrados.map((p) => (
          <div key={p.id} className="card">
            <div className="card-header">
              <h3>{p.titulo}</h3>
            </div>
            <div className="card-body">
              <p>
                <strong>Categoría:</strong> {p.categoria}
              </p>
              <p>
                <strong>Estado:</strong> {p.estado}
              </p>
            </div>
            {/* Botón eliminar */}
            <button
              className="btn-eliminar"
              onClick={() => eliminarProyecto(p.id)}
            >
              🗑️ Eliminar Proyecto
            </button>
          </div>
        ))}
      </div>

      <button className="btn-agregar" onClick={agregarEjemplo}>
        ➕ Agregar Proyecto
      </button>
    </main>
  );
};

export default ListaProyectos;
