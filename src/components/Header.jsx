import { useContext, useState } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import { PersonCircle } from "react-bootstrap-icons";

const Header = () => {
  const [titulo] = useState("Bienvenido a Gestión de Proyectos Educativos");
  const { usuario } = useContext(UsuarioContext);

  return (
    <header
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "var(--violeta-medio)",
      }}
    >
      {/* Título principal a la izquierda */}
      <h1
        className="header-title"
        style={{
          margin: 0,
          fontSize: "2rem",
          fontWeight: "bold",
          color: "var(--violeta-oscuro)",
          textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
          letterSpacing: "1px",
        }}
      >
        {titulo}
      </h1>

      {/* Tarjeta de usuario a la derecha */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "var(--violeta-claro)",
          borderRadius: "12px",
          padding: "0.6rem 1rem",
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        }}
      >
        <PersonCircle
          style={{
            fontSize: "1.8rem",
            marginRight: "1rem",
            color: "var(--violeta-oscuro)",
          }}
        />
        <div style={{ textAlign: "left" }}>
          <strong style={{ color: "var(--violeta-oscuro)" }}>
            {usuario.nombre}
          </strong>
          <br />
          <span style={{ fontSize: "0.9rem", color: "var(--violeta-oscuro)" }}>
            {usuario.rol}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
