import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ImagenDashboard from "../assets/ImagenDashboard.png";

const Dashboard = () => {
  return (
    <Container className="mt-5">
      {/*Título */}
      <Row className="mb-4">
        <Col>
          <h1 className="display-5 fw-bold" style={{ color: 'var(--violeta-oscuro)' }}>
            Plataforma de Gestión de Proyectos Educativos
          </h1>
          <p className="lead fw-semibold" style={{ color: 'var(--violeta-oscuro)', opacity: 1 }}>
            Bienvenido al sistema de organización académica
          </p>
          <hr style={{ borderColor: 'var(--violeta-medio)', borderWidth: '3px' }} />
        </Col>
      </Row>

      {/* Imagen*/} 
        <Col xs={13} className="d-flex justify-content-center my-3">
          <img 
            src={ImagenDashboard} 
            alt="Colaboración y gestión integral en proyectos académicos" 
            className="img-fluid rounded-3 shadow-lg"
            style={{ 
              width: '100%',
              maxWidth: '900px',
              height: 'auto',
            }}
          />
        </Col>

      {/*Proyecto Destacad */}
      <Row className="mt-5 mb-5">
        <Col>
          <Card className="shadow border-0" style={{ background: 'var(--violeta-claro)' }}>
            <Card.Body className="p-4">
              <Card.Subtitle 
                className="text-uppercase text-center mb-4 fw-bold" 
                style={{ color: 'var(--violeta-oscuro)', letterSpacing: '1px' }}
              >
                Proyecto Destacado
              </Card.Subtitle>
              <Card.Title className="fw-semibold mb-3" style={{ color: 'var(--violeta-oscuro)' }}>
                Sistema de Educación
              </Card.Title>
              <Card.Text className="mb-3 fw-normal" style={{ color: 'var(--texto)' }}>
                Este sistema tiene como objetivo digitalizar y optimizar los procesos educativos de una institución.
              </Card.Text>
              
              {/* Botón, para ver el detalle del proyecto */}
              <Button 
                className="border-0 fw-bold px-4"
                style={{ 
                  backgroundColor: 'var(--violeta-medio)', 
                  color: 'white' 
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = 'var(--violeta-oscuro)'}
                onMouseOut={(e) => e.target.style.backgroundColor = 'var(--violeta-medio)'}
              >
                Ver detalle del proyecto
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Título de la sección de Estadísticas */}
      <Row className="mb-5">
        <Col>
          <h3 className="fw-bold" style={{ color: 'var(--violeta-oscuro)' }}>Estadísticas</h3>
        </Col>
      </Row>

      <Row className="mb-4">
        {/*Proyectos Totales */}
        <Col md={4} className="mb-3">
          <Card className="h-100 shadow border-2" style={{ background: 'rgba(193, 94, 206, 0.9)' }}>
            <Card.Body className="text-center p-5">
              <Card.Title className="h5 text-uppercase fw-bold" style={{ color: 'var(--violeta-medio)' }}>
                Proyectos Totales
              </Card.Title>
              <Card.Text className="display-4 fw-bold my-2" style={{ color: 'var(--violeta-oscuro)' }}>4</Card.Text>
              <Card.Text className="small fw-semibold" style={{ color: 'var(--texto)' }}>
                proyectos activos en la plataforma
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/*Tareas para Hoy */}
        <Col md={4} className="mb-3">
          <Card className="h-100 shadow border-2" style={{ background: 'rgba(193, 94, 206, 0.9)' }}>
            <Card.Body className="text-center p-5">
              <Card.Title className="h5 text-uppercase fw-bold" style={{ color: 'var(--violeta-medio)' }}>
                Tareas para Hoy
              </Card.Title>
              <Card.Text className="display-4 fw-bold my-2" style={{ color: 'var(--violeta-oscuro)' }}>9</Card.Text>
              <Card.Text className="small fw-semibold" style={{ color: 'var(--texto)' }}>
                    Tareas pendientes de revisión
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Tarjeta de mensajes Pendientes */}
        <Col md={4} className="mb-3">
          <Card className="h-100 shadow border-2" style={{ background: 'rgba(193, 94, 206, 0.9)' }}>
            <Card.Body className="text-center p-5">
              <Card.Title className="h5 text-uppercase fw-bold" style={{ color: 'var(--violeta-medio)' }}>
                Mensajes Pendientes
              </Card.Title>
              <Card.Text className="display-4 fw-bold my-2" style={{ color: 'var(--violeta-oscuro)' }}>5</Card.Text>
              <Card.Text className="small fw-semibold" style={{ color: 'var(--texto)' }}>
                    Mensajes sin leer...
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* 4. Sección: Novedades Recientes (Reutiliza tu clase .registro-actividad) */}
      <Row className="mb-4">
        <Col>
          <div className="mb-5 registro-actividad mb-2 text-start shadow-lg">
            🔔 Novedades Recientes
          </div>
          <Card className="shadow-none" style={{ background: 'var(--violeta-claro)' }}>
            <Card.Body className="p-3">
              <Card.Text className="mb-0" style={{ color: 'var(--violeta-oscuro)' }}>
                <strong>Alicia Castellon </strong> subió un archivo al proyecto "Juego Educativo"
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;