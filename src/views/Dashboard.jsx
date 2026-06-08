import { Container, Card } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container className="mt-4">
      {/* Título principal */}
      <h2 className="dashboard-title">Sección Principal</h2>

      {/* Texto introductorio */}
      <div className="dashboard-intro">
        <p>
          Bienvenido al portal académico donde podrás encontrar herramientas
          para organizar tus tareas, visualizar tus avances y colaborar con tu
          equipo de colaboradores.
        </p>
        <p>
          Nuestro objetivo es acompañarte para facilitar la planificación y el
          seguimiento de proyectos educativos, promoviendo la organización, la
          responsabilidad y el trabajo en equipo.
          <br />
          <em style={{ color: "var(--violeta-oscuro)" }}>
            “Aprender a gestionar es aprender a crecer.”
          </em>
        </p>
        <p>
          Guía de la web: en esta sección principal encontrarás el texto
          introductorio y las estadísticas generales (Total de Proyectos y
          Proyectos en Curso). Mediante el navegador accedés a tus proyectos y
          tu perfil.
        </p>
        <p>
          Cada apartado cumple una función específica:
          <br />
          <strong>Inicio</strong> te ofrece una visión general con métricas y
          mensajes motivadores;
          <br />
          <strong>Proyectos</strong> te permite crear, visualizar y gestionar
          tus trabajos académicos;
          <br /> <strong>Perfil</strong> concentra tu información personal y
          académica.
        </p>
        <p>
          Además, la plataforma está pensada para acompañarte en la organización
          de tus tareas, brindando herramientas claras y accesibles. Podés
          explorar recursos asociados a cada proyecto, consultar el equipo de
          trabajo y registrar tus avances.
        </p>
        <p>
          Explora cada sección para potenciar tu aprendizaje, fortalecer la
          colaboración con tu equipo y desarrollar habilidades de gestión que te
          serán útiles en tu vida académica y profesional.
        </p>
      </div>

      {/* Cards de métricas */}
      <div className="dashboard-metrics">
        <Card>
          <Card.Body>
            <Card.Title>Total de proyectos:</Card.Title>
            <Card.Text
              className="fs-3 fw-bold"
              style={{ color: "var(--violeta-oscuro)" }}
            >
              12
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Proyectos en curso:</Card.Title>
            <Card.Text
              className="fs-3 fw-bold"
              style={{ color: "var(--violeta-oscuro)" }}
            >
              5
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Dashboard;
