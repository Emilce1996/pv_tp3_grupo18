import React from "react";
const RegistroActividad = ({fecha}) => {
    
    if (!fecha) return null;
    return(
        <div className="registro-actividad">
            <p>
                <strong>Última actualizacion de la lista:</strong> {fecha} hs.
            </p>
        </div>
    );
}

export default RegistroActividad;