import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import styles from "./Interface.module.css";
import AuthUser from "../AuthUser";
export default function Interface() {
  const navigate = useNavigate();
  const today = new Date().toISOString().substr(0, 10);
  const { http } = AuthUser();
  const [lieuDebart, setLieuDebart] = useState(0);
  const [lieuArrive, setLieuArrive] = useState(0);
  const [date, setDate] = useState(today);
  const [villes, setVilles] = useState([]);

  http.get("ville").then((res) => setVilles(res.data));

  const recherch = () => {
    http
      .post("resultat", { lieuDebart, lieuArrive, date })
      .then((res) =>
        navigate("resultat", { state: { resultat: res.data, villes: villes , date:date } })
      );
  };

  return (
    <section className={styles.interface}>
      <div>
        <h1 className={styles.title}>
          Achetez vos tickets d'autocar au meilleur prix!
        </h1>
        <form>
          <select onChange={(e) => setLieuDebart(e.target.value)}>
            <option selected disabled>
              ------Vill du départ------
            </option>
            {villes.map((ville) => (
              <option value={ville.id}>{ville.nom}</option>
            ))}
          </select>

          <select  onChange={(e) => setLieuArrive(e.target.value)}>
            <option selected disabled>
              ------Vill d'arriveé------
            </option>
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
            RECHERCHER
          </button>
          {/* </Link> */}
        </form>
        <h3 className={styles.soustitre}>
          Destinations les plus recherchées :
        </h3>
        <div className={styles.plusRecherch}>
          <a href="">ASFI→AGADIR</a>
          <a href="">ASFI→CASABLANCA</a>
          <a href="">ASFI→RABAT</a>
          <a href="">ASFI→TANGER</a>
          <a href="">ASFI→FES</a>
        </div>
      </div>
    </section>
  );
}
