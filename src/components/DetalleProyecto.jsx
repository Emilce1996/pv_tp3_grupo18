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
              <ul>
                {recursos.map((r, i) => (
                  <li key={i}>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      {r.nombre}
                    </a>
                  </li>
                ))}
              </ul>
            </td>
          </tr>

          {/* Equipo */}
          <tr>
            <th>Equipo</th>
            <td>
              <ul>
                {equipo.map((m, i) => (
                  <li key={i}>
                    {m.nombre} - {m.rol}
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
