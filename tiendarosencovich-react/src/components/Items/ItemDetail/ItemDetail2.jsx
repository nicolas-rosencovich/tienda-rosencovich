//itemdetail.jsx
import styles from '../ItemDetail/ItemDetail.module.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link, NavLink } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
const ItemDetail = ({ categoryid, nombre, img, precio, stock, categoria, descripcion }) => {
    const [cantidadAgregada, setCantidadAgregada] = useState(0);

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (cantidad) => {
        setCantidadAgregada(cantidad);
        const item = {
            categoryid, 
            titulo,
            precio,
            img
    } 
    addItem(item, cantidad);
}

    return (
        <div className={styles.divcard}>
        <article className={styles.CardItem}>
            <header className={styles.Header}>
                <h2 className={styles.ItemHeader}>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className={styles.ItemImg} />
            </picture>
            <section>
                <p className={styles.Info}>
                    Categoria:{categoria}
                </p>
                <p className={styles.Info}>
                    Descripcion: {descripcion}
                </p>
                <p className={styles.Info}>
                    Precio: {precio}
                </p>
            </section>
            <div className={styles.ItemFooter}>
                    {cantidadAgregada > 0 ? (
                        <>
                            <Link to='/cart' className={styles.boton}>Terminar mi compra</Link>
                            <NavLink to='/' className={styles.boton}>Seguir comprando</NavLink>
                        </>
                    ) : (
                        <ItemCount inicial={1} stock={stock} onAdd={handleOnAdd} />
                    )}
                </div>
            </article>
        </div>
    );
};
export default ItemDetail;