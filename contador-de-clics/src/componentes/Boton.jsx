import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton({ texto, esBoton, manejarClic }) {

  return (
    <button
    className={ esBoton ? 'boton-clic' : 'boton-reiniciar' }
    onClick={manejarClic}>
      {texto}
    </button>
  ); 

}

export default Boton;