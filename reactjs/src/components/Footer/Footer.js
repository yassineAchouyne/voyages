import React from 'react'
import styles from './Footer.module.css'
import { useTranslation } from 'react-i18next'
export default function Footer() {
  const [t] = useTranslation();
  return ( 
    <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.footer_col}>
              <h4>Rihlaty.MA</h4>
              <ul className={styles.imgF} >
                {/* <li><a href="#">Location d'autobus</a></li>
                <li><a href="#">Info sur les transporteurs</a></li>
                <li><a href="#">Info sur les villes et les destination</a></li> */}
                <img src="./img/pngwing.com.png" />
              </ul>
              
            </div>
            <div className={styles.footer_col}>
              <h4>{t('Aide')}</h4>
              <ul>
             <li><a href="/about">{t('about')}</a></li>
                <li><a href="/contact">{t('contact')}</a></li>
                <li><a href="/faq">{t('Questions')}</a></li>
                {/* <li><a href="">Méthodes de payement</a></li> */}
                {/* <li><a href="">Vidéo explicative</a></li> */}
              </ul>
            </div>
            <div className={styles.footer_col}>
           <h4>{t('Cec')}</h4>
              <ul>
             <li><a href="/Cgu">{t('Cgu')}</a></li>
                {/* <li><a href="">Garntie de remboursemant</a></li> */}
              </ul>
            </div>
            <div className={styles.footer_col}>
              <h4>{t('suivez')}</h4>
              <div className={styles.social_links}>
                <a href="#"><img src='img/facebook.png'/></a>
                <a href="#"><img src='img/twitter.png'/></a>
                <a href="#"><img src='img/instagram.png'/></a>
                <a href="#"><img src='img/linkedin.png'/></a>
              </div>
            </div>
          </div>
        </div>
        </footer>
  )
}
