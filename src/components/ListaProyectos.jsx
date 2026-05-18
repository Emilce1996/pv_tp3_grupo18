import proyectoService from "../services/proyectoService";
import { useState } from "react";
import ProyectoCard from "./ProyectoCard";
import DetalleProyecto from "./DetalleProyecto";

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
  const [busqueda, setBusqueda] = useState("");
  const [seleccionado, setSeleccionado] = useState(null);

  // Estados del formulario
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [estado, setEstado] = useState("En progreso");

  const eliminarProyecto = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
  };

  // Filtrado directo sobre el estado
  const proyectosFiltrados = proyectos.filter((p) =>
    p.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  const handleAgregarProyecto = (e) => {
    e.preventDefault();
    if (!titulo.trim() || !categoria.trim()) {
      alert("Completa todos los campos antes de guardar");
      return;
    }

    const nuevo = {
      id: Date.now(),
      titulo,
      categoria,
      estado,
      descripcion: {
        parrafo1:
          "React es una biblioteca JavaScript de código abierto para construir interfaces de usuario...",
        parrafo2:
          "Su objetivo principal es minimizar errores al construir interfaces mediante componentes reutilizables...",
      },
      recursos: [
        { nombre: "Documento PDF", href: "#" },
        { nombre: "Repositorio GitHub", href: "#" },
      ],
      equipo: [
        { nombre: "Lourdes Medina", rol: "Frontend" },
        { nombre: "Emilce Sivila", rol: "Backend" },
      ],
    };

    proyectoService.agregarProyecto(nuevo);
    setProyectos(proyectoService.obtenerProyectos());

    // Resetear formulario
    setTitulo("");
    setCategoria("");
    setEstado("En progreso");
  };

  return (
    <main>
      {seleccionado ? (
        <>
          <h2 className="detalle-title">Detalles del Proyecto</h2>
          <DetalleProyecto proyecto={seleccionado} />
          <button className="btn-volver" onClick={() => setSeleccionado(null)}>
            ⬅️ Volver a proyectos
          </button>
        </>
      ) : (
        <>
          <h2 className="lista-title">Proyectos Disponibles</h2>
          <input
            type="text"
            placeholder="Buscar proyecto..."
            value={busqueda}
            onChange={({ target: { value } }) => setBusqueda(value)}
            className="input-busqueda"
          />

          <div className="cards">
            {proyectosFiltrados.map((p) => (
              <ProyectoCard
                key={p.id}
                proyecto={p}
                onEliminar={eliminarProyecto}
                onVerDetalle={setSeleccionado}
              />
            ))}
          </div>

          {/* Formulario integrado */}
          <form className="form-proyecto" onSubmit={handleAgregarProyecto}>
            <h3 className="form-title">Agregar Nuevo Proyecto</h3>

            <input
              type="text"
              placeholder="Título del proyecto"
              value={titulo}
              onChange={({ target: { value } }) => setTitulo(value)}
              required
            />

            <input
              type="text"
              placeholder="Categoría (ej: Web, Móvil)"
              value={categoria}
              onChange={({ target: { value } }) => setCategoria(value)}
              required
            />

            <select value={estado} onChange={({ target: { value } }) => setEstado(value)}>
              <option value="En progreso">En progreso</option>
              <option value="Finalizado">Finalizado</option>
              <option value="Pendiente">Pendiente</option>
            </select>

            <button type="submit" className="btn-agregar">
              Guardar proyecto
            </button>
          </form>
        </>
      )}
    </main>
  );
};

export default ListaProyectos;
