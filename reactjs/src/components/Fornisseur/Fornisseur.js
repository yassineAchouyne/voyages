import React, { useState } from 'react';
import styles from './Fornisseur.module.css'
import AuthUser from '../AuthUser'
import { useEffect } from 'react';
const Fornisseur = () => {
  const {http,storage}=AuthUser();

    const[images , setImages] = useState([])

    useEffect(()=>
    http.get('/fornisseur').then(res=>setImages(res.data))
    )
   
    return (
        <section>
        <div className={styles.titre}>
             <h1 >Nos fournisseur</h1>
            <span></span>
         </div>
        <div className={styles.marquee_container}>
          <div className={styles.marquee}>
            {images.map((image, index) => (
              <img key={index} src={storage + image.image}  alt={`Image ${index}`} />
            ))}
          </div>
        </div>
        </section>
      );
    };

export default Fornisseur;
