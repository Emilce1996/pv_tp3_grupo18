import { useState } from "react";
import "../css/detalleProyecto.css"

const DetalleProyecto = (props)=>{

    if (!props.proyectoSeleccionado) {
        return (
            <div>
                <p>Por favor, selecciona un proyecto para ver su detalle extendido.</p>
            </div>
        );
    }

    return (
        <main className="project-detail">
            <h1>Proyecto: {props.proyectoSeleccionado.titulo}</h1>
            <section className="detail-section">
                <h2>Información sobre el Proyecto</h2>
                <article>
                    <h3>Descripción del Proyecto</h3>{props.proyectoSeleccionado.descripcionExtendida && props.proyectoSeleccionado.descripcionExtendida.map((parrafo, index) => (
                        <p key={index}>{parrafo}</p>
                    ))}
                </article>
            </section>

            <section className="detail-section">
                <h2>Lista de Recursos</h2>
                <ul>
                    {props.proyectoSeleccionado.recursos?.drive && (
                        <li>
                            <a href={props.proyectoSeleccionado.recursos.drive} target="_blank">
                                (Ver Documento en Drive)
                            </a>
                        </li>
                    )}
                    {props.proyectoSeleccionado.recursos?.pdf && (
                        <li>
                            <a href={props.proyectoSeleccionado.recursos.pdf} target="_blank">
                                (Ver Documento en PDF)
                            </a>
                        </li>
                    )}
                    {props.proyectoSeleccionado.recursos?.github && (
                        <li>
                            <a href={props.proyectoSeleccionado.recursos.github} target="_blank">
                                (Ver Enlace a GitHub)
                            </a>
                        </li>
                    )}
                </ul>
            </section>

            <section className="detail-section">
                <h2>Equipo involucrado</h2>
                <table className="team-table">
                    <thead>
                        <tr>
                            <th>Nombre del Integrante</th>
                            <th>Rol</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.proyectoSeleccionado.equipo && 
                        props.proyectoSeleccionado.equipo.map((integrante, index) => (
                            <tr key={index}>
                                <td>{integrante.nombre}</td>
                                <td>{integrante.rol}</td>
                            </tr>))} 
                    </tbody>
                </table>
            </section>
        </main>
    );
};

export default DetalleProyecto;