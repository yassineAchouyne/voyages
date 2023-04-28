import React from "react";
import styles from "./Resultat.module.css";
import Footer from "../Footer/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
export default function Resultat() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const reserver = (res) => {
    navigate("/confirm", { state: res });
  };
  return (
    <>
      <header className={styles.menu} style={{ backgroundColor: "#4A739A" }}>
        <nav>
          <img src="./img/pngwing.com.png" onClick={()=>navigate("/")}/>
          <h3 href="" className={styles.connecter}>
            les voyage disponible
          </h3>
          <a>
            <img className={styles.img} src="./img/icons8-filter-64.png" />
          </a>
        </nav>
      </header>
      <br />
      <br />
      <br />
      <br />
      <section>
        <h1 className={styles.titre}>SAFI → CASABLANCA </h1>

        <div className={styles.lesArticle}>
          {state.map((res) => (
            <article key={res.id}>
              <div>
                <img className={styles.tmp} src={res.image} />
                <p className={styles.time}>
                  {res.dateDebart.substring(0, 5)} →{" "}
                  {res.dateArrive.substring(0, 5)}
                </p>
                <dir>
                  <span>{res.statut}</span>
                </dir>
              </div>
              <div>
                <label>
                  N° Plase :
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </label>
                <img className={styles.info} src="img/info.png" />
                <div>
                  <p>
                    prix par personne: <span>{res.prix} </span>DH
                  </p>
                  <button onClick={() => reserver(res)}>reserver</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
