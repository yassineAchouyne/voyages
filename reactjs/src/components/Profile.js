import React, { useEffect, useState } from "react";
import AuthUser from "./AuthUser";
import styles from "./Resultat_de_recherche/Resultat.module.css";
import Footer from "./Footer/Footer";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { http, user, setToken, token } = AuthUser();
  const navigate = useNavigate();
  const [villes, setVilles] = useState([]);
  const [nom, setNom] = useState(user.nom);
  const [prenom, setPrenom] = useState(user.prenom);
  const [tel, setTel] = useState(user.tel);
  const [email, setEmail] = useState(user.email);
  const [ville, setVille] = useState(user.ville);
  const [current_password, setCurrent_password] = useState();
  const [new_password, setNew_password] = useState();
  const [message, setMessage] = useState({
    color: '', 
    msg: "",
    visible: false,
  });
  useEffect(() => {
    http.get("ville").then((res) => setVilles(res.data));
  });

  const UpdateProfile = () => {
    http
      .put("/Uprofile", {
        user: user.id,
        nom: nom,
        prenom: prenom,
        tel: tel,
        email: email,
        ville: ville,
      })
      .then((res) => {
        setToken(res.data, token);
        http.get("ville").then((res) => setVilles(res.data));
      });
  };

  const updatePassword = () => {
    http
      .put("/Upassword", {
        user: user.id,
        current_password: current_password,
        new_password: new_password,
      })
      .then((res) => {
        setMessage({color:"success",msg:res.data.message,visible:true})
      }).catch(err=>setMessage({color:"danger",msg:"Mot de passe actuel incorrect",visible:true}));
  };
  return (
    <>
    <header className={styles.menu} style={{ backgroundColor: "#4A739A", color:"#000" }}>
    <nav>
      <img src="./img/pngwing.com.png" onClick={() => navigate("/")} d />
      <h3 href="" className={styles.connecter} >
        Mon profile
      </h3>
      <a>
        {/* <img className={styles.img} src="./img/icons8-filter-64.png" /> */}
      </a>
    </nav>
  </header>
  <br />
  <br />
    <div  >
      <div class="container rounded mt-5 mb-5" style={{ backgroundColor: "#EFEFEF"}}>
        <div class="row">
          <div class="col-md-6 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Paramètres du profil</h4>
              </div>
              <div class="row mt-2">
                <div class="col-md-6">
                  <label class="labels">Nom</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nom"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">Prenom</label>
                  <input
                    type="text"
                    class="form-control"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    placeholder="Prenom"
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Télephone</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter Télephone"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Email</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div class="col-md-12">
                <label class="labels">ville</label>
                <select
                  class="form-control"
                  value={ville}
                  onChange={(e) => setVille(e.target.value)}
                >
                  <option selected disabled>
                    ------ Ville ------
                  </option>
                  {villes.map((v) => (
                    <option value={v.id}>{v.nom}</option>
                  ))}
                </select>
              </div>
              <div class="mt-3 text-center">
                <button
                  class="btn btn-primary profile-button"
                  type="button"
                  onClick={UpdateProfile}
                >
                  Enregistrer
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center experience">
                <span>Edit Mot de passe</span>
              </div>
              {message.visible && (
              <div class={"alert alert-"+message.color} role="alert">
               {message.msg}
              </div>
            )}
              <div class="col-md-12">
                <label class="labels">mot de passe actuel</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="mot de passe actuel"
                  value={current_password}
                  onChange={(e) => setCurrent_password(e.target.value)}
                />
              </div>
              <br />
              <div class="col-md-12">
                <label class="labels">nouveau mot de passe</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="nouveau mot de passe"
                  value={new_password}
                  onChange={(e) => setNew_password(e.target.value)}
                />
              </div>
              <div class="mt-3 text-center">
                <button
                  class="btn btn-primary profile-button"
                  type="button"
                  onClick={updatePassword}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
