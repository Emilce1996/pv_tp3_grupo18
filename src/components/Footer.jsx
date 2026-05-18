import { useState } from "react";
import logo from "../assets/Logo.jpg";

const Footer = () => {
  const [mensaje] = useState(
    "© 2026 | Plataforma de Gestión de Proyectos Educativos - Grupo 18 | FI UNJu",
  );

  return (
    <footer className="footer">
      <img src={logo} alt="Logo" className="footer-logo" />
      <p className="footer-text">{mensaje}</p>
    </footer>
  );
};

export default Footer;
