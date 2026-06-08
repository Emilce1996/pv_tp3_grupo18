import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const FormularioProyecto = ({ onGuardar }) => {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [estado, setEstado] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [pdf, setPdf] = useState("");
  const [github, setGithub] = useState("");
  const [numIntegrantes, setNumIntegrantes] = useState(0);
  const [integrantes, setIntegrantes] = useState([]);

  const handleNumIntegrantesChange = (e) => {
    const cantidad = parseInt(e.target.value, 10);
    setNumIntegrantes(cantidad);
    setIntegrantes(
      Array.from({ length: cantidad }, () => ({
        nombre: "",
        apellido: "",
        rol: "",
      })),
    );
  };

  const handleIntegranteChange = (index, field, value) => {
    const nuevos = [...integrantes];
    nuevos[index][field] = value;
    setIntegrantes(nuevos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!pdf || !github) {
      alert(
        "Debes ingresar el texto para el documento PDF y el repositorio GitHub.",
      );
      return;
    }

    if (numIntegrantes < 1) {
      alert("Debes ingresar al menos un integrante.");
      return;
    }

    const integrantesValidos = integrantes.filter(
      (i) =>
        i.nombre.trim() !== "" &&
        i.apellido.trim() !== "" &&
        i.rol.trim() !== "",
    );
    if (integrantesValidos.length < 1) {
      alert("Al menos un integrante debe tener nombre, apellido y rol.");
      return;
    }

    const nuevoProyecto = {
      titulo,
      categoria,
      estado,
      descripcion: {
        parrafo1: descripcion,
        parrafo2: "Detalles adicionales del proyecto...",
      },
      recursos: [
        { nombre: "Documento PDF", href: pdf },
        { nombre: "Repositorio GitHub", href: github },
      ],
      equipo: integrantesValidos,
    };

    onGuardar(nuevoProyecto);

    setTitulo("");
    setCategoria("");
    setEstado("");
    setDescripcion("");
    setPdf("");
    setGithub("");
    setNumIntegrantes(0);
    setIntegrantes([]);
  };

  return (
    <div className="formulario-container">
      <h3 className="formulario-title">Agregar Nuevo Proyecto</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className="form-label">Título del proyecto</Form.Label>
          <Form.Control
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="form-label">Categoría</Form.Label>
          <Form.Select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          >
            <option value="" disabled>
              Seleccionar categoría...
            </option>
            <option value="Web">Web</option>
            <option value="Móvil">Móvil</option>
            <option value="Desktop">Desktop</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="form-label">Estado</Form.Label>
          <Form.Select
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            required
          >
            <option value="" disabled>
              Seleccionar estado...
            </option>
            <option value="En progreso">En progreso</option>
            <option value="Finalizado">Finalizado</option>
            <option value="Pendiente">Pendiente</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="form-label">Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="form-label">Documento PDF</Form.Label>
          <Form.Control
            type="text"
            value={pdf}
            onChange={(e) => setPdf(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="form-label">Repositorio GitHub</Form.Label>
          <Form.Control
            type="text"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="form-label">
            Cantidad de integrantes
          </Form.Label>
          <Form.Control
            type="number"
            min="1"
            value={numIntegrantes}
            onChange={handleNumIntegrantesChange}
            required
          />
        </Form.Group>

        {integrantes.map((integrante, index) => (
          <Row key={index} className="mb-2">
            <Col>
              <Form.Control
                type="text"
                placeholder="Nombre"
                value={integrante.nombre}
                onChange={(e) =>
                  handleIntegranteChange(index, "nombre", e.target.value)
                }
                required
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Apellido"
                value={integrante.apellido}
                onChange={(e) =>
                  handleIntegranteChange(index, "apellido", e.target.value)
                }
                required
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Rol"
                value={integrante.rol}
                onChange={(e) =>
                  handleIntegranteChange(index, "rol", e.target.value)
                }
                required
              />
            </Col>
          </Row>
        ))}

        <Button type="submit" className="btn-guardar">
          Guardar proyecto
        </Button>
      </Form>
    </div>
  );
};

export default FormularioProyecto;
