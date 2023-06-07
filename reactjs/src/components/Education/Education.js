import React from 'react'
import styles from './Education.module.css'
import { useTranslation } from 'react-i18next';

export default function Education() {
    const { t } = useTranslation();
  return (
    <section className={styles.education}>
        <div className={styles.titre}>
            <h1 >{t('titreE')}</h1>
            <span></span>
        </div>
        <div className={styles.info}>
            <p>{t('description')}</p>
        </div>
        <div className={styles.partee}>
            <article>
                <img src='./img/number-one.png'/>
                <div>
                    <h3>{t('Choisir')}</h3>
                    <p>{t('ChoisirDesc')}</p>
                </div>
            </article>
            <hr/>
            <article>
                <img src='./img/number-2.png'/>
                <div>
                    <h3>{t('Reserver')}</h3>
                    <p>{t('ReserverDesc')}</p>
                </div>
            </article>
            <hr/>
            <article>
                <img src='./img/number-3.png'/>
                <div>
                    <h3>{t('Embarquer')}</h3>
                    <p>{t('EmbarquerDesc')}</p>
                </div>
            </article>
        </div>
    </section>
  )
}
