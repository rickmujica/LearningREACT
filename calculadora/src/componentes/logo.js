import React from 'react';
import freeCodeCampLogo from '../imagenes/freecodecamp-logo.jpg';

const LogoFreeCodeCamp = (props) => (
<div className='freecodecamp-logo-contenedor'>
        <img
        src={freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='Logo de FreeCodeCamp' />
      </div>
);

export default LogoFreeCodeCamp;
