import { useState, useContext, useEffect } from "react";
import { Container, Card, ListGroup, Button, Form } from "react-bootstrap";
import { UsuarioContext } from "../context/UsuarioContext";

const PerfilUsuario = () => {

  const { usuario, actualizarPerfil } = useContext(UsuarioContext);
  const [ modoEdicion, setModoEdicion] = useState (false);
  const [ formulario, setFormulario]= useState ({});

  useEffect ( () => {
    if (usuario) {
      setFormulario({ ...usuario});
    }
  }, [usuario]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleGuardar = (e) => {
    e.preventDefault(); // eviatmos que la pag. se recargue completamente
    actualizarPerfil(formulario); 
    setModoEdicion(false); // se cierra el form
  };

  const handleCancelar = () => {
    setFormulario({ ...usuario });
    setModoEdicion(false);
  };


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
            {/* Formulario*/}
            <Form onSubmit={handleGuardar}>
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
                {/* Nombre*/}
                <strong>Nombre:</strong> {" "}
                {modoEdicion ? (
                    <Form.Control
                      type="text"
                      name="nombre" 
                      size="sm"
                      value={formulario.nombre || ""}
                      onChange={handleChange}/> ) : (
                    usuario?.nombre
                  )}
              </ListGroup.Item>
              {/*Rol */}
              <ListGroup.Item
                style={{
                  background: "transparent",
                  color: "var(--violeta-oscuro)",
                }}>
                <strong>Rol:</strong> {" "}
                {modoEdicion ? (
                    <Form.Control
                      type="text"
                      name="rol" 
                      size="sm"
                      value={formulario.rol || ""}
                      onChange={handleChange}
                    />
                  ) : (
                    usuario?.rol
                  )}
              </ListGroup.Item>
              {/* Institucion */}
              <ListGroup.Item
                style={{
                  background: "transparent",
                  color: "var(--violeta-oscuro)",
                }}
              >
                <strong>Institución:</strong> {" "}
                {modoEdicion ? (
                    <Form.Control
                      type="text"
                      name="institucion" 
                      size="sm"
                      value={formulario.institucion || ""}
                      onChange={handleChange}
                    />
                  ) : (
                    usuario?.institucion
                  )}
              </ListGroup.Item>
            </ListGroup>
            </Form>
            {/* Botones */}
            <div className="d-grid gap-2 mt-3">
                {modoEdicion ? (
                  <>
                    <Button variant="success" size="sm" onClick={handleGuardar}>
                      Guardar Cambios
                    </Button>
                    <Button variant="secondary" size="sm" onClick={handleCancelar}>
                      Cancelar
                    </Button>
                  </>
                ) : (
                  <Button variant="primary" size="sm" onClick={() => setModoEdicion(true)}>
                    Editar Perfil
                  </Button>
                )}
              </div>
            {/*</Form>*/}
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default PerfilUsuario;
