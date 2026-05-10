import { useState } from "react";
import proyectoService from "../services/proyectoService";
import "../css/listaProyectos.css";

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
  const [busqueda, setBusqueda] = useState("");

  const eliminar = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
  };

  const filtrar = (texto) => {
    setBusqueda(texto);
    if (texto.trim() === "") {
      setProyectos(proyectoService.obtenerProyectos());
    } else {
      setProyectos(proyectoService.buscarProyecto(texto));
    }
  };

  return (
    <main className="lista-proyectos">
      <h2>Lista de Proyectos</h2>
      <input
        type="text"
        placeholder="Buscar proyecto..."
        value={busqueda}
        onChange={(e) => filtrar(e.target.value)}
      />
      <ul>
        {proyectos.map((p) => (
          <li key={p.id}>
            <strong>{p.titulo}</strong> - {p.categoria} ({p.estado})
            <button onClick={() => eliminar(p.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ListaProyectos;
