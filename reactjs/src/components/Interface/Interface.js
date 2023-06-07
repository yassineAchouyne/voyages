import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Interface.module.css";
import { useTranslation } from 'react-i18next';


import AuthUser from "../AuthUser";

export default function Interface() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const today = new Date().toISOString().substr(0, 10);
  const { http } = AuthUser();
  const [lieuDebart, setLieuDebart] = useState(0);
  const [lieuArrive, setLieuArrive] = useState(0);
  const [date, setDate] = useState(today);
  const [villes, setVilles] = useState([]);
  const [plusRecherch, setPlusRecherch] = useState([]);

  useEffect(() => {
    http.get("ville").then((res) => setVilles(res.data));
    http.get("phusRecherch").then((res) => setPlusRecherch(res.data));
  }, []);

  const recherch = () => {
    http.post("resultat", { lieuDebart, lieuArrive, date }).then((res) =>
      navigate("resultat", {
        state: { resultat: res.data, villes: villes, date: date },
      })
    );
  };

  const getVille = (id) => {
    let ville = villes.find((u) => u.id === id);
    if (ville) return ville.nom;
  };

  const RandRecherch = (debart, arrive) => {
    setLieuArrive(arrive);
    setLieuDebart(debart);
    // setLieuDebart(debart);
    // setLieuArrive(arrive);
    // recherch();
  };

  return (
    <section className={styles.interface}>
      <div>
        <h1 className={styles.title}>
          {/* Achetez vos tickets d'autocar au meilleur prix! */}
          {t("Gtitre")}
      
        </h1>
        <form>
          <select
            value={lieuDebart}
            onChange={(e) => setLieuDebart(e.target.value)}
          >
            <option selected>------ {t('villeD')} ------</option>
            {villes.map((ville) => (
              <option value={ville.id}>{ville.nom}</option>
            ))}
          </select>

          <select
            value={lieuArrive}
            onChange={(e) => setLieuArrive(e.target.value)}
          >
            <option selected>------ {t('villeA')} ------</option>
            {villes.map((ville) => (
              <option value={ville.id}>{ville.nom}</option>
            ))}
          </select>

          <input
            type="date"
            defaultValue={today}
            min={today}
            onChange={(e) => setDate(e.target.value)}
          />

          {/* <Link to={'/resultat'} > */}
          <button
            type="button"
            style={{ color: "#fff" }}
            onClick={recherch}
            className={styles.recherch}
          >
            {t('rechercher')}
          </button>
          {/* </Link> */}
        </form>
        <h3 className={styles.soustitre}>
          {t('Destinations')}
        </h3>
        <div className={styles.plusRecherch}>
          {plusRecherch.map((res, i) => (
            <button
              key={i}
              onClick={() => RandRecherch(res.lieuDebart, res.lieuArrive)}
            >
              {getVille(res.lieuDebart)}→{getVille(res.lieuArrive)}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
