import { Container, Card, ListGroup } from "react-bootstrap";

const PerfilUsuario = () => {
  return (
    <Container className="mt-4 d-flex justify-content-center">
      <div style={{ maxWidth: "400px", width: "100%" }}>
        {/* Título principal fuera de la card */}
        <h2 className="dashboard-title text-center"> Perfil del Usuario</h2>

        {/* Card con degradado violeta */}
        <Card
          className="mt-3 shadow-sm"
          style={{
            background:
              "linear-gradient(to top, var(--violeta-claro), var(--violeta-medio))",
            borderRadius: "12px",
          }}
        >
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item
                style={{
                  background: "transparent",
                  color: "var(--violeta-oscuro)",
                }}
              >
                <strong></strong> 👤
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  background: "transparent",
                  color: "var(--violeta-oscuro)",
                }}
              >
                <strong>Nombre:</strong> Natalia
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  background: "transparent",
                  color: "var(--violeta-oscuro)",
                }}
              >
                <strong>Rol:</strong> Profesora
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  background: "transparent",
                  color: "var(--violeta-oscuro)",
                }}
              >
                <strong>Institución:</strong> Facultad de Ingeniería - UNJu
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default PerfilUsuario;
