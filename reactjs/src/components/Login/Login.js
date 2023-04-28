import React, { useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import Logine from "../logine";
import Register from "../register";

export default function Login() {
  const [connect, setConnect] = useState(true);
  const [inscrire, setInscrire] = useState(true);

  return (
    <div>
      <header className={styles.menu}>
        <p>Contactz-vous à votre compte</p>
      </header>
      <br />
      <br />
      <br />
      <br />
      <section className={styles.login}>
        <article>
          <div
            className={styles.header}
            onClick={() => {
              setConnect(!connect);
              setInscrire(true);
            }}
          >
            <div>
              <img src="img/anmeldung.png" />
              <h4>Se connecter</h4>
            </div>
            <img src={connect ? "img/down-chevron.png" : "img/up-arrow.png"} />
          </div>
          <div hidden={connect}>
            <Logine />
          </div>
        </article>

        <article>
          <div
            className={styles.header}
            onClick={() => {
              setConnect(true);
              setInscrire(!inscrire);
            }}
          >
            <div>
              <img src="img/anmeldung.png" />
              <h4>S'inscrire</h4>
            </div>
            <img src={inscrire ? "img/down-chevron.png" : "img/up-arrow.png"} />
          </div>
          <div hidden={inscrire}>
            <Register/>
          </div>
        </article>
      </section>
    </div>
  );
}
