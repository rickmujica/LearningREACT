import './App.css';
import freeCodeCampLogo from './imagenes/logoFreeCodeCamp.png';
import Boton from './componentes/Boton.jsx';
import Contador  from './componentes/Contador.jsx';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1 );
  }


  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
     <div className='freecodecamp-logo-contenedor'>
       <img className='freecodecamp-logo'
       src={freeCodeCampLogo}
       alt='Logo de FreeCodeCamp' />
     </div>
     <div className='contenedor-principal'>
     <h1>Contador de Clics</h1>
     <p>con REACT, usando el HOOK 'useState'</p>
     <p>by Ricardo Urbieta</p>
        <Contador numClics={numClics} />
        <Boton 
          texto='Clic'
          esBoton={true}
          manejarClic={manejarClic}
       
       />
        <Boton
          texto='Reiniciar'
          esBoton={false}
          manejarClic={reiniciarContador} 

        />
     </div>
    </div>
  );
}

export default App;
