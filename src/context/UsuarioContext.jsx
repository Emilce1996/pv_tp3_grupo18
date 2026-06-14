import { createContext, useState, useEffect } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  //Verificacion del localStorage antes de cargar datos
const [usuario, setUsuario] = useState(() => {
    //Esto busca si ya hay datos guardados en el nombre de "perfilUsuario"
    const datosGuardados = localStorage.getItem("perfilUsuario");
    
    if (datosGuardados) {
      // si se encunetran datos, se convierten de texto JSON a objetos de react
    return JSON.parse(datosGuardados);
    }
    return {
    nombre: "Juan Perez",
    dni: "26156230",
    rol: "Docente",
    institucion: "Universidad Nacional de Jujuy"
    };
});

useEffect(() => {
    // Cada vez que usuario se cambie, se convierte a texto y lo guardamos
    localStorage.setItem("perfilUsuario", JSON.stringify(usuario));
  }, [usuario]); //

const actualizarPerfil = (datosActualizados) => {
    setUsuario(datosActualizados);
};

return (
    <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
    {children}
    </UsuarioContext.Provider>
);
};