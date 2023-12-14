//itemlistcontainer.jsx
import React, { useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import style from '../ItemListContainer/Itemlistcontainer.module.css';
import {getDocs, getDoc,collection, query, where} from 'firebase/firestore';
import {db} from '../../../firebase/client';
import { useParams } from 'react-router-dom';
const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams()

  useEffect(() => {
    setLoading(true)
 
    const collectionRef = categoryId
      ? query(collection(db, 'productos', ), where('category', '==', categoryId))
      : collection(db, 'productos')

    getDocs(collectionRef)
      .then(response => {
        const productosAdapted = response.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ...data}
        })
        setProductos(productosAdapted)
      })  
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })  
  }, [categoryId])

  return (
    <div className="container">
      <div className="row">
        <div className={style.col}>
          <h2 className="mt-5">{greeting}</h2>
          <ItemList productos={productos}/>
        
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;