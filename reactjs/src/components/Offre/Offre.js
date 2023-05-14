import React, { useState,useEffect } from 'react'
import styles from './Offre.module.css'
import AuthUser from '../AuthUser';
export default function Offre() {
  const { http, storage } = AuthUser();
  const [offres, setOffres] = useState([]);

  const handleCopyClick = (code) => {
    navigator.clipboard.writeText(code);
  }

  useEffect(() => {
    http.get("offres").then((res) => setOffres(res.data));
  }, []);
  return (
    <section>
      <div className={styles.titre}>
        <h1>Découvrez nos offres</h1>
        <span></span>
      </div>
      <div className={styles.LesArticle}>
        {offres.map((offre) => (
          <article>
            <img src={storage + offre.photo} />
            <p>
              {offre.description}
            </p>
            <button onClick={()=>handleCopyClick(offre.codePromo)} >J'achète</button>
          </article>
        ))}
      </div>
    </section>
  );
}
