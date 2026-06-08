import "../css/detalleProyecto.css";
import { useParams, Link } from "react-router-dom";
import proyectoService from "../services/proyectoService";
import { Container, Button } from "react-bootstrap";

const DetalleProyecto = () => {
  const { id } = useParams();
  const proyecto = proyectoService.obtenerProyectoPorId(Number(id));

  if (!proyecto) {
    return (
      <Container className="mt-4 detalle-container">
        <h2 className="detalle-title">Proyecto no encontrado</h2>
        <Link to="/proyectos">
          <Button className="btn-volver">⬅️ Volver al listado</Button>
        </Link>
      </Container>
    );
  }

  const { titulo, descripcion, recursos, equipo, categoria, estado } = proyecto;

  return (
    <Container className="mt-4 detalle-container">
      <table className="detalle-table">
        <tbody>
          <tr>
            <th></th>
            <td>
              <h2 className="detalle-title">{titulo}</h2>
              <p className="detalle-subtitle">
                <strong>Categoría:</strong> {categoria} |{" "}
                <strong>Estado:</strong> {estado}
              </p>
            </td>
          </tr>
          <tr>
            <th>Descripción</th>
            <td>
              <p>{descripcion.parrafo1}</p>
              <p>{descripcion.parrafo2}</p>
            </td>
          </tr>
          <tr>
            <th>Recursos</th>
            <td>
              <ul>
                {recursos.map((r, i) => (
                  <li key={i}>
                    <Button
                      className="btn-recurso"
                      size="sm"
                      onClick={(e) => e.preventDefault()}
                    >
                      {r.nombre}
                    </Button>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <th>Equipo</th>
            <td>
              <ul>
                {equipo.map((m, i) => (
                  <li key={i}>
                    👥{" "}
                    <strong>
                      {m.nombre} {m.apellido}
                    </strong>{" "}
                    - <em>{m.rol}</em>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <Link to="/proyectos">
        <Button className="btn-volver">⬅️ Volver al listado</Button>
      </Link>
    </Container>
  );
};

export default DetalleProyecto;
