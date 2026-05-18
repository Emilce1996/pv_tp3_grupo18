import { useState } from "react";

const Header = () => {
  const [titulo] = useState("Bienvenido a Gestión de Proyectos Educativos");

  return (
    <header className="header">
      <h1 className="header-title">{titulo}</h1>
    </header>
  );
};

export default Header;
