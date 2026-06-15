import { useContext, useState } from "react";
import { Container, Card, Form } from "react-bootstrap";
import { UsuarioContext } from "../context/UsuarioContext";
import {
  PersonVcard,
  Facebook,
  Pinterest,
  Instagram,
  Pencil,
} from "react-bootstrap-icons";

const PerfilUsuario = () => {
  const { usuario, actualizarPerfil } = useContext(UsuarioContext);

  const [editando, setEditando] = useState(false);
  const [formData, setFormData] = useState(usuario);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const guardarCambios = () => {
    actualizarPerfil(formData);
    setEditando(false);
  };

  return (
    <Container className="mt-4 d-flex justify-content-center">
      <div style={{ maxWidth: "400px", width: "100%" }}>
        {/* Título principal fuera de la tarjeta */}
        <h2 className="dashboard-title text-center">Perfil del Usuario</h2>

        <Card className="perfil-card">
          {/* Sección superior violeta oscuro */}
          <div className="perfil-header">
            <PersonVcard />
          </div>

          {/* Sección inferior con degradado */}
          <Card.Body className="perfil-body">
            {!editando ? (
              <>
                <p>
                  <strong>Nombre:</strong> {usuario.nombre}
                </p>
                <p>
                  <strong>DNI:</strong> {usuario.dni}
                </p>
                <p>
                  <strong>Rol:</strong> {usuario.rol}
                </p>
                <p>
                  <strong>Institución:</strong> {usuario.institucion}
                </p>

                {/* Íconos decorativos */}
                <div className="perfil-social">
                  <Facebook />
                  <Pinterest />
                  <Instagram />
                </div>

                {/* Botón centrado con ícono pencil */}
                <div className="perfil-actions">
                  <button
                    className="btn-guardar"
                    onClick={() => setEditando(true)}
                  >
                    <Pencil style={{ marginRight: "0.4rem" }} />
                    Editar Perfil
                  </button>
                </div>
              </>
            ) : (
              <>
                <Form>
                  <Form.Group className="mb-2">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control
                      type="text"
                      name="dni"
                      value={formData.dni}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label>Rol</Form.Label>
                    <Form.Select
                      name="rol"
                      value={formData.rol}
                      onChange={handleChange}
                    >
                      <option value="Docente">Docente</option>
                      <option value="Alumno">Alumno</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label>Institución</Form.Label>
                    <Form.Control
                      type="text"
                      name="institucion"
                      value={formData.institucion}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Form>

                <div className="perfil-actions">
                  <button
                    className="btn-detalle"
                    onClick={guardarCambios}
                    style={{ marginRight: "12px" }}
                  >
                    Guardar Cambios
                  </button>
                  <button
                    className="btn-eliminar"
                    onClick={() => setEditando(false)}
                    style={{ marginLeft: "12px" }}
                  >
                    Cancelar
                  </button>
                </div>
              </>
            )}
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default PerfilUsuario;
