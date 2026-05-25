import "../css/detalleProyecto.css";

const DetalleProyecto = ({ proyecto }) => {
  if (!proyecto) return null;

  const { titulo, descripcion, recursos, equipo } = proyecto;

  return (
    <section className="detalle">
      <table className="detalle-table">
        <tbody>
          {/* Fila de título */}
          <tr>
            <td colSpan="2" className="detalle-titulo">
              {titulo}
            </td>
          </tr>

          {/* Descripción */}
          <tr>
            <th>Descripción</th>
            <td>
              <p>{descripcion.parrafo1}</p>
              <p>{descripcion.parrafo2}</p>
            </td>
          </tr>

          {/* Recursos */}
          <tr>
            <th>Recursos</th>
            <td>
              <ul className="detalle-recursos">
                {recursos.map((r, i) => (
                  <li key={i}>
                    <button
                      className="btn-recurso"
                      onClick={(e) => e.preventDefault()}
                    >
                      📂 {r.nombre}
                    </button>
                  </li>
                ))}
              </ul>
            </td>
          </tr>

          {/* Equipo */}
          <tr>
            <th>Equipo</th>
            <td>
              <ul className="detalle-equipo">
                {equipo.map((m, i) => (
                  <li key={i}>
                    👥{" "}
                    <span className="equipo-nombre">
                      {m.nombre} {m.apellido}
                    </span>
                    <span className="equipo-rol"> - {m.rol}</span>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default DetalleProyecto;
