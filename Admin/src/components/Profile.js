import React, { useEffect, useState } from "react";
import AuthUser from "./AuthUser";

export default function Profile() {
  const { http, user, saveToken, token } = AuthUser();
  const [villes, setVilles] = useState([]);
  const [nom, setNom] = useState(user.nom);
  const [prenom, setPrenom] = useState(user.prenom);
  const [tel, setTel] = useState(user.tel);
  const [email, setEmail] = useState(user.email);
  const [ville, setVille] = useState(user.ville);

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
        saveToken(res.data, token);
        http.get("ville").then((res) => setVilles(res.data));
      });
  };
  console.log(user);
  return (
    <div>
      <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
          <div class="col-md-5 border-right">
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
              <div class="mt-5 text-center">
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
          <div class="col-md-4">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center experience">
                <span>Edit Experience</span>
                <span class="border px-3 p-1 add-experience">
                  <i class="fa fa-plus"></i>&nbsp;Experience
                </span>
              </div>
              <br />
              <div class="col-md-12">
                <label class="labels">Experience in Designing</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="experience"
                  value=""
                />
              </div>
              <br />
              <div class="col-md-12">
                <label class="labels">Additional Details</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="additional details"
                  value=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
