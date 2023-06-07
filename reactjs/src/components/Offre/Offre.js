import React, { useState,useEffect } from 'react'
import styles from './Offre.module.css'
import AuthUser from '../AuthUser';
import { useTranslation } from 'react-i18next';
export default function Offre() {
  const [t] = useTranslation();
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
        <h1>{t('titreOffre')}</h1>
        <span></span>
      </div>
      <div className={styles.LesArticle}>
        {offres.map((offre) => (
          <article>
            <img src={storage + offre.photo} />
            <p>
              {offre.description}
            </p>
            <button onClick={()=>handleCopyClick(offre.codePromo)} >{t('achète')}</button>
          </article>
        ))}
      </div>
    </section>
  );
}
