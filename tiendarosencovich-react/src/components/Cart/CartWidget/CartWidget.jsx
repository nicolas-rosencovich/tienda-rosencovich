// cartwidget.jsx
import styles from '../CartWidget/CartWidget.module.css'
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import carritoImg from '../../../assets/images/carrito1.png'




const CartWidget = () => {
  const { cart, getTotalItems } = useContext(CartContext);

  return (
    <Link 
      to="/cart"
      className={cart.length > 0 ? styles.cartWidgetVisible : styles.cartWidgetHidden}
      style={{
        display: cart.length > 0 ? 'block' : 'none', 
        margin: '0px 30px 30px 30px'  
      }} 
    >
      <img src={carritoImg} alt="Esta es la imagen de un carrito" className={styles.img} />
      {getTotalItems()} 
    </Link>
  );
};

export default CartWidget;