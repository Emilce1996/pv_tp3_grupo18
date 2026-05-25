const RegistroActividad = ({ ultimaActualizacion }) => {
  if (!ultimaActualizacion) return null;

  return (
    <div className="registro-actividad">
      <p>{ultimaActualizacion}</p>
    </div>
  );
};

export default RegistroActividad;
