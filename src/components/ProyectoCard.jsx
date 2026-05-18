const ProyectoCard = ({ proyecto, onEliminar, onVerDetalle }) => {
  const { id, titulo, categoria, estado } = proyecto;

  return (
    <div className="card">
      <div className="card-header">
        <h3>{titulo}</h3>
      </div>
      <div className="card-body">
        <p>
          <strong>Categoría:</strong> {categoria}
        </p>
        <p>
          <strong>Estado:</strong> {estado}
        </p>
      </div>
      <div className="card-footer">
        <button className="btn-detalle" onClick={() => onVerDetalle(proyecto)}>
          Ver detalle
        </button>
        <button className="btn-eliminar" onClick={() => onEliminar(id)}>
          🗑️
        </button>
      </div>
    </div>
  );
};

export default ProyectoCard;
