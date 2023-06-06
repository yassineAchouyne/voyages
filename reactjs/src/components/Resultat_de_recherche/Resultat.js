import React, { useState } from "react";
import styles from "./Resultat.module.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Footer from "../Footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import AuthUser from "../AuthUser";
export default function Resultat() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { storage, http, user, token } = AuthUser();
  const { state } = useLocation();
  const [personne, setPersonne] = useState(1);
  const [plase, setPlase] = useState(1);
  const [tabPlace, setTtabPlace] = useState([]);
  const [idbus, setIdbus] = useState();
  const [comment, setComment] = useState();
  const [comments_text, setComments_text] = useState([]);
  const [tab, setTab] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  ]);
  const handleClose = () => {
    setShow(false);
    setComments_text([]);
  };
  const handleShow = (id) => {
    setShow(true);
    setIdbus(id);
    http.get(`/comment/${id}`).then((res) => {
      setComments_text(res.data);
    });
  };
  if (state.resultat.length == 0) {
    return (
      <>
        <header
          className={styles.menu}
          style={{ backgroundColor: "#4A739A", color: "#000" }}
        >
          <nav>
            <img src="./img/pngwing.com.png" onClick={() => navigate("/")} d />
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
          <div className={styles.lesArticle}>
            <div className={styles.aucun}>
              <h1>Aucun résultat de recherche</h1>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const villeD = state.villes.find(
    (u) => u.id === state.resultat[0].lieuDebart
  );
  const villeA = state.villes.find(
    (u) => u.id === state.resultat[0].lieuArrive
  );

  const reserver = (res) => {
    navigate("/confirm", {
      state: {
        res: res,
        villeD: villeD,
        villeA: villeA,
        date: state.date,
        personne: personne,
        plase: plase,
      },
    });
  };

  const placeReserve = (id) => {
    http.get(`/placeReserve/${id}`).then((res) => {
      setTtabPlace(res.data.tabPlace);
    });
  };

  const PlaceExist = (p) => {
    if (tabPlace.includes(p)) return true;
    return false;
  };

  const handleComment = (id) => {
    http
      .post(`/comment`, { message: comment, user: user.id, bus: id })
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <>
      <header className={styles.menu} style={{ backgroundColor: "#4A739A" }}>
        <nav>
          <img src="./img/pngwing.com.png" onClick={() => navigate("/")} d />
          <h3 href="" className={styles.connecter} style={{ color: "#000" }}>
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div></div>
          <h1 className={styles.titre}>
            {" "}
            {villeD.nom} → {villeA.nom}{" "}
          </h1>
          <select
            className="me-5 form-control"
            style={{ width: "120px" }}
            value={personne}
            onChange={(e) => setPersonne(e.target.value)}
          >
            <option value="1">un Personne</option>
            <option value="2">2 Personnes</option>
            <option value="3">3 Personnes</option>
            <option value="4">4 Personnes</option>
            <option value="5">5 Personnes</option>
          </select>
        </div>

        <div className={styles.lesArticle}>
          {state.resultat.map((res) => (
            <article key={res.id}>
              {placeReserve(res.id)}
              <div>
                <img className={styles.tmp} src={storage + res.image} />
                <p className={styles.time}>
                  {res.dateDebart.substring(0, 5)} →{" "}
                  {res.dateArrive.substring(0, 5)}
                </p>
                <dir>
                  <span>{res.statut}</span>
                </dir>
              </div>
              <div>
                <label className="d-flex">
                  <span style={{ width: "170px" }}>N° Plase :</span>
                  <select
                    className="form-control"
                    onChange={(e) => setPlase(e.target.value)}
                  >
                    {tab.map(
                      (p) =>
                        !PlaceExist(p) && (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        )
                    )}
                  </select>
                </label>
                <img
                  className={styles.info}
                  onClick={() => handleShow(res.id)}
                  src="img/info.png"
                />
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className={styles.comments}>
            {comments_text.map((c) => (
              <div className="card mb-2">
                <div className="card-body">
                  <h5 className="card-title fs-6">{c.nom + " " + c.prenom} </h5>
                  <p className="card-text fs-6">{c.comment_text}</p>
                </div>
              </div>
            ))}
            <div>
              {token && (
                <textarea
                  className="form-control"
                  placeholder="Comment"
                  onChange={(e) => setComment(e.target.value)}
                />
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            {...(token && "disabled")}
            onClick={() => handleComment(idbus)}
          >
            Envoyer
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </>
  );
}
