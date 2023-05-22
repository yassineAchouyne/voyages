import React from "react";
import styles from "./Paiment.module.css";
import AuthUser from "../AuthUser";
import Login from "../Login/Login";
import { useLocation, useNavigate } from "react-router-dom";
export default function Paiment() {
  const { state } = useLocation();
  const{getToken,user} = AuthUser();
  const navigate = useNavigate()

const handelClick = ()=>{
  navigate("/installer",{ state: {bus:state.bus,date:state.date}})
}



  if(!getToken()){
    return <Login/>
  }
  return(
    <div className={styles.paiment}>
      <article className={styles.art}>
        <div className={styles.header}>
          <h4>DÉTAIL DE PAIEMENT</h4>
          {/* <h5>lundi, janvier 09, 2023 21:15:25</h5> */}
        </div>
        <div className={styles.img}>
          <img src="img/payment-cards.png" />
        </div>
        <label>
          Nom du porteur de la carte
          <input
            className="form-control ps-4 mt-2"
            type={"text"}
            placeholder={"Nom du porteur de la carte"}
          />
        </label>
        <label>
          Numéro de carte de paiement
          <input
            className="form-control ps-4 mt-2"
            type={"text"}
            placeholder={"Numéro de carte de paiement"}
          />
        </label>
        <label>
          Date d'expiration
          <div className="d-flex">
            <input className="form-control w-25 ps-4 mt-2" type={"number"} placeholder={"mois"} />
            <input className="form-control w-25 ps-4 ms-5 mt-2" type={"number"}  placeholder={"annee"}/>
          </div>
        </label>
        <label>
        Code de vérification
          <div className="d-flex">
            <input className="form-control w-25 ps-4 mt-2" type={"number"} placeholder={"CVS"} />
          </div>
        </label>
        <label >
            <input type={"checkbox"} className='me-2'/>
            Confirmer l'acceptation des<a href="">conditions générales d’utilisation du service</a> 
        </label>
      </article>

      <div className={styles.divReght}>
        <article>
          <div className={styles.header}>
            <h4>DÉTAIL DE LA COMMANDE</h4>
          </div>
          <div className="p-2">
            <span className="row m-0" ><span className="col-2">Identifiant</span>:5fcbacaf-e620-428e-aa51-0171612730e4</span>
            <span className="row m-0" ><span className="col-2">Trajet</span>:Voyage de {state.villeD} vers {state.villeA} le {state.date}  à {state.bus.dateDebart}</span>
            <span className="row m-0" ><span className="col-2">Montant</span>:{state.bus.prix+5} MAD</span>
          </div>
        </article>

        <article>
          <div className={styles.header}>
            <h4>DÉTAIL DU VOYAGE</h4>
          </div>
          <div className="p-2">
            <span className="row m-0" ><span className="col-4">Compagnie de voyage	</span>: {state.bus.libelle}</span>
            <span className="row m-0" ><span className="col-4">Date de départ</span>:Voyage de {state.villeD} vers {state.villeA} le {state.date} </span>
            <span className="row m-0" ><span className="col-4">Heure de départ</span>:à {state.bus.dateDebart}</span>
          </div>
        </article>

        <article>
          <div className={styles.header}>
            <h4>INFORMATIONS DU CLIENT</h4>
          </div>
          <div className="p-2">
            <span className="row m-0" ><span className="col-4">E-mail</span>: {user.email}</span>
          </div>
        </article>
        <div className="row p-3">
            <button className={`btn btn-success col-5`} onClick={handelClick}>Valider</button>
            <div className="col-2"></div>
            <button className={`btn btn-danger col-5 `}>Annuler</button>
        </div>
      </div>
    </div>
  );
}
