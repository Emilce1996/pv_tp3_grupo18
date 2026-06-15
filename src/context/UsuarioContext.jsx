import { createContext, useState, useEffect } from "react";

const UsuarioContext = createContext();

const UsuarioProvider = ({ children }) => {
  // Inicializar estado desde localStorage si existe
  const usuarioGuardado = localStorage.getItem("usuario");
  const [usuario, setUsuario] = useState(
    usuarioGuardado
      ? JSON.parse(usuarioGuardado)
      : {
          nombre: "Carla Zapana",
          dni: "23938247",
          rol: "Docente",
          institucion: "Facultad de Ingeniería - UNJu",
        },
  );

  // Función para actualizar perfil
  const actualizarPerfil = (nuevoPerfil) => {
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      ...nuevoPerfil,
    }));
  };

  // Persistir cambios en localStorage
  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario]);

  return (
    <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export { UsuarioContext, UsuarioProvider };
