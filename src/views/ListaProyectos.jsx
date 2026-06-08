import proyectoService from "../services/proyectoService";
import { useState } from "react";
import "../css/styles.css";
import ProyectoCard from "../components/ProyectoCard";
import RegistroActividad from "../components/RegistroActividad";
import FormularioProyecto from "../components/FormularioProyecto";
import { Container, Form, Table } from "react-bootstrap";

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(
    proyectoService.obtenerProyectos(),
  );
  const [busqueda, setBusqueda] = useState("");
  const [ultimaActualizacion, setUltimaActualizacion] = useState("");
  const [historialAcciones, setHistorialAcciones] = useState([]);

  const actualizarRegistro = () => {
    const ahora = new Date();
    const formato = `Última actualización de la lista: ${ahora.toLocaleString(
      "es-AR",
      {
        hour12: false,
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      },
    )}`;
    setUltimaActualizacion(formato);
  };

  const eliminarProyecto = (id) => {
    const proyectoEliminado = proyectos.find((p) => p.id === id);
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());

    setHistorialAcciones((prev) => [
      ...prev,
      {
        tipo: "Eliminado",
        titulo: proyectoEliminado?.titulo,
        fecha: new Date().toLocaleString("es-AR", {
          hour12: false,
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      },
    ]);

    actualizarRegistro();
  };

  const handleGuardarProyecto = (nuevoProyecto) => {
    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.obtenerProyectos());

    setHistorialAcciones((prev) => [
      ...prev,
      {
        tipo: "Agregado",
        titulo: nuevoProyecto.titulo,
        fecha: new Date().toLocaleString("es-AR", {
          hour12: false,
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      },
    ]);

    actualizarRegistro();
  };

  const proyectosFiltrados = busqueda
    ? proyectoService.buscarProyecto(busqueda)
    : proyectos;

  return (
    <Container className="mt-4">
      {/* Título principal */}
      <h2 className="dashboard-title">Proyectos Disponibles</h2>

      {/* Buscador más corto */}
      <Form className="d-flex justify-content-center mb-3">
        <Form.Control
          type="text"
          placeholder="Buscar proyecto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{ maxWidth: "400px" }} // 🔹 ancho máximo
        />
      </Form>

      {/* Formulario */}
      <FormularioProyecto onGuardar={handleGuardarProyecto} />

      {/* Cards de proyectos (sin fondo blanco extra) */}
      <div className="cards">
        {proyectosFiltrados.map((p) => (
          <ProyectoCard key={p.id} proyecto={p} onEliminar={eliminarProyecto} />
        ))}
      </div>

      {/* Registro de actividad */}
      {ultimaActualizacion && (
        <RegistroActividad
          ultimaActualizacion={ultimaActualizacion}
          tipoAccion={historialAcciones[historialAcciones.length - 1]?.tipo}
        />
      )}

      {/* Tabla historial con Bootstrap */}
      {historialAcciones.length > 0 && (
        <Table striped bordered hover className="mt-3">
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
        </Table>
      )}
    </Container>
  );
};

export default ListaProyectos;
