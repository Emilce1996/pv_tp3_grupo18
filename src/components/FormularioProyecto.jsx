import { useState } from "react";

const FormularioProyecto = ({ onGuardar }) => {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [estado, setEstado] = useState("En progreso");
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
      alert("Debes ingresar la URL del PDF y del repositorio GitHub.");
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
      id: Date.now(),
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

    // Reset
    setTitulo("");
    setCategoria("");
    setEstado("En progreso");
    setDescripcion("");
    setPdf("");
    setGithub("");
    setNumIntegrantes(0);
    setIntegrantes([]);
  };

  return (
    <form className="form-proyecto" onSubmit={handleSubmit}>
      <h3 className="form-title">Agregar Nuevo Proyecto</h3>

      <input
        type="text"
        placeholder="Título del proyecto"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Categoría (ej: Web, Móvil)"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        required
      />

      <select value={estado} onChange={(e) => setEstado(e.target.value)}>
        <option value="En progreso">En progreso</option>
        <option value="Finalizado">Finalizado</option>
        <option value="Pendiente">Pendiente</option>
      </select>

      <textarea
        placeholder="Descripción del proyecto"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="URL del Documento PDF"
        value={pdf}
        onChange={(e) => setPdf(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="URL del Repositorio GitHub"
        value={github}
        onChange={(e) => setGithub(e.target.value)}
        required
      />

      <h4 className="form-subtitle">Elegir cantidad de integrantes</h4>
      <input
        type="number"
        min="1"
        placeholder="Cantidad de integrantes"
        value={numIntegrantes}
        onChange={handleNumIntegrantesChange}
        required
      />

      {integrantes.map((integrante, index) => (
        <div key={index} className="integrante-fields">
          <input
            type="text"
            placeholder="Nombre"
            value={integrante.nombre}
            onChange={(e) =>
              handleIntegranteChange(index, "nombre", e.target.value)
            }
            required
          />
          <input
            type="text"
            placeholder="Apellido"
            value={integrante.apellido}
            onChange={(e) =>
              handleIntegranteChange(index, "apellido", e.target.value)
            }
            required
          />
          <input
            type="text"
            placeholder="Rol"
            value={integrante.rol}
            onChange={(e) =>
              handleIntegranteChange(index, "rol", e.target.value)
            }
            required
          />
        </div>
      ))}

      <button type="submit" className="btn-agregar">
        Guardar proyecto
      </button>
    </form>
  );
};

export default FormularioProyecto;
