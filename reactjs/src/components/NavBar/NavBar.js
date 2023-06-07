import React ,{useState,useEffect}from "react";
import styles from './NavBar.module.css'
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AuthUser from "../AuthUser";
export default function NavBar(props) { 
  const{user,token} = AuthUser();
  const navigate = useNavigate() ;
  const [t , i18n] = useTranslation();
  if(props.scrol)var st={backgroundColor:"#4A739A"}
  return (
    <header  className={styles.menu} style={st}>
      <img src="./img/pngwing.com.png" onClick={()=>navigate("/")}/>
      <nav>
        {
        token ? <Link to="/profile" className={styles.connecter}>{user.prenom} {user.nom}</Link>:
        <Link to="/login" className={styles.connecter}>SE CONNECTER</Link>
        }
        <span>
          {
            i18n.language == "fr" ? 
            <img src="./img/morocco.png" onClick={()=>i18n.changeLanguage('ar')} /> :
            <img src="./img/france.png" onClick={()=>i18n.changeLanguage('fr')} />
          }
        </span>
      </nav>
    </header>
  );
}
