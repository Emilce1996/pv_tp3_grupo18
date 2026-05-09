import { useState } from "react";

const Nav = () => {
  const [links] = useState([
    { id: 1, nombre: "Inicio", href: "#" },
    { id: 2, nombre: "Proyectos", href: "#" },
    { id: 3, nombre: "Usuario", href: "#" },
  ]);

  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.href}>{link.nombre}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
