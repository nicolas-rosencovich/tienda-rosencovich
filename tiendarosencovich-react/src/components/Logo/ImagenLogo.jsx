import {ContenedorImagen} from '../NavBar/NavBar.module.css'
import TiendaImagen from '.././../assets/images/logoRandom.jpg';
import style from './ImagenLogo.module.css';
const Logo = () => {
    return (
        <div className={style.ContenedorImagen}>
           <a href="#"><img src={TiendaImagen} alt="TiendaRosencovich" className={ContenedorImagen}/></a>
        </div>
    );
  };
  export default Logo  