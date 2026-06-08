import { Alert } from "react-bootstrap";

const RegistroActividad = ({ ultimaActualizacion, tipoAccion }) => {
  if (!ultimaActualizacion) return null;

  let variant = "info";
  if (tipoAccion === "Agregado") variant = "success";
  if (tipoAccion === "Eliminado") variant = "danger";

  return (
    <Alert
      variant={variant}
      className="mt-3"
      style={{ fontWeight: "bold", color: "#4B0082" }}
    >
      {ultimaActualizacion}
    </Alert>
  );
};

export default RegistroActividad;
