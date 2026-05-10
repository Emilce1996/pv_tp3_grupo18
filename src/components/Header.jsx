import { useState } from "react";
import {obtenerProyectos} from "../services/proyectoService";

const Header = ()=> {

    const proyectos = obtenerProyectos ();
    
    //constante para guardar la cantidad de proyectos actuales, con ayuda de la funcion obtenerProyectos ().
    const cant = proyectos.length;


    const [infor] = useState({
        titulo: "Plataforma de Gestion de Proyectos Educativos",
        subtitulo: "Bienvenido al sistema de organización académica",});

    return (
        <header className="header"> 
            <h1 className="header-title">{infor.titulo}</h1>
            <p>{infor.subtitulo}</p>

            <div className="contproyects-badge"></div>
            Cantidad de proyectos actuales:<strong>{cantidad}</strong>
        </header>
    );
};
export default Header;