import React from 'react';
/* import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; */
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Importa el módulo de estilo NavBar.module.css y asígnalo a la variable `navbarStyles`
import NavbarStyles from './components/NavBar/NavBar.module.css';



import './App.css';
/* import ImagenLogo from './components/Logo/ImagenLogo.module.css'; */



import RouterPrincipal from './components/routers/RouterPrincipal';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <header className={NavbarStyles.NavBar}>
        {/* Utiliza el estilo asignado a la variable `navbarStyles` */}
       {/*  <ImagenLogo /> */}
        
      </header>
      <main>
        <RouterPrincipal />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;