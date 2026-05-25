import proyectoService from "../services/proyectoService";
import { useState, useEffect, useRef } from "react";
import ProyectoCard from "./ProyectoCard";
import DetalleProyecto from "./DetalleProyecto";
import RegistroActividad from "./RegistroActividad";
import FormularioProyecto from "./FormularioProyecto";

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(
    proyectoService.obtenerProyectos(),
  );
  const [busqueda, setBusqueda] = useState("");
  const [seleccionado, setSeleccionado] = useState(null);
  const [ultimaActualizacion, setUltimaActualizacion] = useState("");
  const [historialAcciones, setHistorialAcciones] = useState([]);

  const actualizarRegistro = () => {
    const ahora = new Date();
    const dia = String(ahora.getDate()).padStart(2, "0");
    const mes = String(ahora.getMonth() + 1).padStart(2, "0");
    const anio = ahora.getFullYear();
    const horas = String(ahora.getHours()).padStart(2, "0");
    const minutos = String(ahora.getMinutes()).padStart(2, "0");

    const formato = `Última actualización de la lista: ${dia}/${mes}/${anio} a las ${horas}:${minutos} hs.`;
    setUltimaActualizacion(formato);
  };

  // bandera para evitar la primera ejecución del useEffect
  const isFirstRender = useRef(true);

  const eliminarProyecto = (id) => {
    const proyectoEliminado = proyectos.find((p) => p.id === id);
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());

    // Registro de acción
    setHistorialAcciones((prev) => [
      ...prev,
      {
        tipo: "Eliminado",
        titulo: proyectoEliminado?.titulo,
        fecha: new Date().toLocaleString(),
      },
    ]);

    actualizarRegistro();
  };

  const proyectosFiltrados = busqueda
    ? proyectoService.buscarProyecto(busqueda)
    : proyectos;

  // efecto que se dispara solo cuando cambia proyectos
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (proyectos.length >= 0) {
      setTimeout(() => {
        const ahora = new Date();
        const dia = String(ahora.getDate()).padStart(2, "0");
        const mes = String(ahora.getMonth() + 1).padStart(2, "0");
        const anio = ahora.getFullYear();
        const horas = String(ahora.getHours()).padStart(2, "0");
        const minutos = String(ahora.getMinutes()).padStart(2, "0");

        const formato = `Última actualización de la lista: ${dia}/${mes}/${anio} a las ${horas}:${minutos} hs.`;
        setUltimaActualizacion(formato);
      }, 0);
    }
  }, [proyectos]);

  // callback que recibe el nuevo proyecto desde FormularioProyecto
  const handleGuardarProyecto = (nuevoProyecto) => {
    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.obtenerProyectos());

    // Registro de acción
    setHistorialAcciones((prev) => [
      ...prev,
      {
        tipo: "Agregado",
        titulo: nuevoProyecto.titulo,
        fecha: new Date().toLocaleString(),
      },
    ]);

    actualizarRegistro();
  };

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

          {/* Buscador */}
          <input
            type="text"
            placeholder="Buscar proyecto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="input-busqueda"
          />

          {/* Formulario independiente */}
          <FormularioProyecto onGuardar={handleGuardarProyecto} />

          {/* Cards debajo del formulario */}
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

          {/* Registro de actividad */}
          {ultimaActualizacion && (
            <RegistroActividad ultimaActualizacion={ultimaActualizacion} />
          )}
          {historialAcciones.length > 0 && (
            <table className="tabla-historial">
              <thead>
                <tr>
                  <th>Acción</th>
                  <th>Proyecto</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {historialAcciones.map((accion, index) => (
                  <tr key={index}>
                    <td>{accion.tipo}</td>
                    <td>{accion.titulo}</td>
                    <td>{accion.fecha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </main>
  );
};

export default ListaProyectos;
