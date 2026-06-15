// src/components/Header.jsx
import { useContext, useState } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import { PersonCircle } from "react-bootstrap-icons";

const Header = () => {
  const [titulo] = useState("Gestión de Proyectos Educativos");
  const { usuario } = useContext(UsuarioContext);

  return (
    <header
      className="header"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "var(--violeta-medio)",
      }}
    >
      {/* Título principal */}
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

      {/* Subtítulo */}
      <p
        style={{
          margin: "1.5rem 0 1rem",
          fontSize: "1.2rem",
          fontWeight: "bold",
          color: "var(--violeta-oscuro)",
          fontStyle: "italic",
          textAlign: "center",
        }}
      >
        Bienvenido al sistema de seguimiento de proyectos
      </p>

      {/* Tarjeta de usuario debajo y centrada */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "var(--violeta-claro)",
          borderRadius: "12px",
          padding: "0.6rem 1rem",
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          justifyContent: "center",
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
