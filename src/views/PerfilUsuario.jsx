import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';

const PerfilUsuario = () => {
  const datosUsuario = {
    nombre: "Olivia Lopez",
    rol: "Alumno", 
    institucion: "Facultad de Ingeniería - UNJu",
    carrera: "Analista Programador Universitario",
    legajo: "APU-6460",
    correo: "olivia.lopez@fi.unju.edu.ar"
  };

  return (
    <div 
      className="d-flex" 
      style={{ 
        width: '100%',
        boxSizing: 'border-box',
        margin: '0 auto', 
        paddingTop: '50px',
        paddingBlockEnd: '50px',
      }}
    >
      <Card 
        className="shadow border-0" 
        style={{         
          maxWidth: '100px',      
          minWidth: '700px',      
          borderRadius: '16px',
          background: '#97429a',
          margin: '0 auto' 
        }}
      >
        <Card.Body className="p-5">
          <div className="d-flex ">
            <div 
              className=" d-flex align-items-center"
              style={{ 
                width: '100px', 
                height: '100px', 
                backgroundColor: 'var(--violeta-oscuro)',
              }}>
            </div>
            
            <div>
              <h2 className="fw-bold" style={{ color: 'var(--violeta-oscuro)', fontSize: '1.8rem' }}> {datosUsuario.nombre}
              </h2>
              <span 
                className="badge text-uppercase"
                style={{ backgroundColor: 'var(--violeta-claro)', color: 'var(--violeta-oscuro)', fontSize: '1rem' }}
              > {datosUsuario.rol}
              </span>
            </div>
          </div>

          <ListGroup className="mb-1">
            <ListGroup.Item className="d-flex" style={{ background: 'transparent' }}>
              <div>
                <div className="fw-bold text-uppercase mb-1" style={{ fontSize: '1.7rem' }}>Institución</div>
                <h5 className="mb-0 fw-semibold" style={{ color: 'var(--texto)', fontSize: '1rem' }}>{datosUsuario.institucion}</h5>
              </div>
              <span style={{ fontSize: '1.7rem' }}>🏛️</span>
            </ListGroup.Item>

            <ListGroup.Item className="d-flex" style={{ background: 'transparent' }}>
              <div>
                <div className="fw-bold text-uppercase" style={{ fontSize: '1.7rem' }}>Carrera / Área</div>
                <h5 className="mb-0 fw-semibold" style={{ color: 'var(--texto)', fontSize: '1.1rem' }}>{datosUsuario.carrera}</h5>
              </div>
              <span style={{ fontSize: '1.7rem' }}>🎓</span>
            </ListGroup.Item>

            <ListGroup.Item className="d-flex" style={{ background: 'transparent' }}>
              <div>
                <div className="stext-uppercase mb-1" style={{ fontSize: '1.7rem' }}>Identificación / Legajo</div>
                <h5 className="mb-0 fw-semibold" style={{ color: 'var(--texto)', fontSize: '1.1rem' }}>{datosUsuario.legajo}</h5>
              </div>
              <span style={{ fontSize: '1.7rem' }}>🆔</span>
            </ListGroup.Item>

            <ListGroup.Item className="d-flex" style={{ background: 'transparent' }}>
              <div>
                <div className="text-muted small fw-bold text-uppercase mb-1" style={{ fontSize: '1.7rem' }}>Contacto Directo</div>
                <h5 className="mb-0 fw-semibold" style={{ color: 'var(--texto)', fontSize: '1.2rem' }}>{datosUsuario.correo}</h5>
              </div>
            </ListGroup.Item>

          </ListGroup>

        </Card.Body>
      </Card>
      
    </div>
  );
};

export default PerfilUsuario;