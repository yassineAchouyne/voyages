import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./Install.module.css";
import AuthUser from "../AuthUser";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Install() {
    const { http, user,storage } = AuthUser();
    const { state } = useLocation();
    const [billet,setBillet]=useState('')
  useEffect(() => {
    http
      .post("/reserves", { id_user: user.id, id_bus:state.bus.id,date:state.date })
      .then((res) => setBillet(res.data));
  }, []);

  const handleDownload = () => {
    const fileUrl = storage+billet; // URL du fichier à télécharger
    const fileName = billet; // Nom du fichier
    
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };
  return (
    <>
      <NavBar scrol={"true"} />
      <div className={styles.body}>
        <div>
          <h1 className={styles.title}>opération réussie</h1>
          <h3>Veuillez télécharger le billet avant de fermer la fenêtre</h3>
          <div className={styles.button}>
            <button onClick={handleDownload}>
              Télécharger <i class=" ms-3 bi bi-download"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
