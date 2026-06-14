import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Trash3 } from "react-bootstrap-icons";

const ProyectoCard = ({ proyecto, onEliminar }) => {
  const { id, titulo, categoria, estado } = proyecto;

  return (
    <Card className="mb-3 proyecto-card">
      <Card.Header>
        <h3>{titulo}</h3>
      </Card.Header>
      <Card.Body>
        <p>
          <strong>Categoría:</strong> {categoria}
        </p>
        <p>
          <strong>Estado:</strong> {estado}
        </p>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <Link to={`/proyectos/${id}`}>
          <Button className="btn-detalle">Ver detalle</Button>
        </Link>
        <Button className="btn-eliminar" onClick={() => onEliminar(id)}>
          <Trash3
            style={{
              marginRight: "0.4rem",
              position: "relative",
              top: "-2px",
            }}
          />
          Eliminar
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ProyectoCard;
