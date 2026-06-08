import { NavLink } from "react-router-dom";

const Nav = () => {
  const links = [
    { id: 1, nombre: "Inicio", path: "/inicio" },
    { id: 2, nombre: "Proyectos", path: "/proyectos" },
    { id: 3, nombre: "Mi Perfil", path: "/perfil" },
  ];

  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: "none",
              })}
            >
              {link.nombre}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
