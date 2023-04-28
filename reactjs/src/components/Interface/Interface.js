import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Interface.module.css";
import AuthUser from "../AuthUser";
export default function Interface() {
  const navigate = useNavigate();
  const{http} = AuthUser();
  const[lieuDebart,setLieuDebart] = useState();
  const[lieuArrive,setLieuArrive] = useState();
  const[date,setDate] = useState();
    
   const recherch = () =>{
    http.post('resultat',{lieuDebart,lieuArrive,date}).then(res=>
      // alert(res.data)
      navigate('resultat',{state:res.data})
      )
   }

  return (
    <section className={styles.interface}>
      <div>
        <h1 className={styles.title}>
          Achetez vos tickets d'autocar au meilleur prix!
        </h1>
        <form>
          <select onChange={(e)=>setLieuDebart(e.target.value)}>
            <option selected disabled>------Vill du départ------</option>
            <option value="1">SAFI</option>
          </select>

          <select onChange={(e)=>setLieuArrive(e.target.value)}>
            <option>------Vill d'arriveé------</option>
            <option value="1">SAFI</option>
            <option value="2">RABAT</option>
          </select>


          <input type="date" onChange={(e)=>setDate(e.target.value)}/>

          {/* <Link to={'/resultat'} > */}
            <button type="button"  style={{color:"#fff"}} onClick={recherch}  className={styles.recherch}>RECHERCHER</button>
            {/* </Link> */}
          
        </form>
        <h3 className={styles.soustitre}>Destinations les plus recherchées :</h3>
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
