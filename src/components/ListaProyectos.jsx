import proyectoService from "../services/proyectoService";
import { useState } from "react";
import ProyectoCard from "./ProyectoCard";
import DetalleProyecto from "./DetalleProyecto";

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(
    proyectoService.obtenerProyectos(),
  );
  const [busqueda, setBusqueda] = useState("");
  const [seleccionado, setSeleccionado] = useState(null);

  const eliminarProyecto = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
  };

  const proyectosFiltrados = busqueda
    ? proyectoService.buscarProyecto(busqueda)
    : proyectos;

  return (
    <main>
      {seleccionado ? (
        <>
          <h2 className="detalle-title">Detalles del Proyecto</h2>
          <DetalleProyecto proyecto={seleccionado} />
          <button className="btn-volver" onClick={() => setSeleccionado(null)}>
            ⬅️ Volver a proyectos
          </button>
        </>
      ) : (
        <>
          <h2 className="lista-title">Proyectos Disponibles</h2>
          <input
            type="text"
            placeholder="Buscar proyecto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="input-busqueda"
          />

          <div className="cards">
            {proyectosFiltrados.map((p) => (
              <ProyectoCard
                key={p.id}
                proyecto={p}
                onEliminar={eliminarProyecto}
                onVerDetalle={setSeleccionado}
              />
            ))}
          </div>

          
        </>
      )}
    </main>
  );
};

export default ListaProyectos;
