import React, { useState } from 'react';
import styles from './Fornisseur.module.css'
const Fornisseur = () => {

    const[images , setImages] = useState([
        "img/téléchargement.jpeg",
        "img/logoAutoroute.jpg",
        'img/images (2).jpeg',
        'img/images (3).jpeg',
        'img/images (4).jpeg',
        'img/logo (1).jpg',
        'img/logo.jpg',
        'img/logoAutoroute.jpg',
        'img/téléchargement.jpeg',
    ])
    return (
        <section>
        <div className={styles.titre}>
             <h1 >Nos fournisseur</h1>
            <span></span>
         </div>
        <div className={styles.marquee_container}>
          <div className={styles.marquee}>
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index}`} />
            ))}
          </div>
        </div>
        </section>
      );
    };

export default Fornisseur;
