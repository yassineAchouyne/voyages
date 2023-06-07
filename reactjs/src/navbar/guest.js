import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from "../components/NavBar/NavBar";
import Interface from "../components/Interface/Interface";
import Education from "../components/Education/Education";
import Offre from "../components/Offre/Offre";
import Fornisseur from "../components/Fornisseur/Fornisseur";
import Footer from "../components/Footer/Footer";
import Resultat from "../components/Resultat_de_recherche/Resultat";
import Confirmer from "../components/Confirmer_reservation/Confirmer";
import Paiment from "../components/Paiment/Paiment";
import Login from "../components/Login/Login";
import About from "../components/AboutUS/About";
import QuestionsC from "../components/QuestionsC/QuestionsC";
import Cgu from "../components/Cgu/Cgu";
import Contact from "../components/Contact/Contact";
import { useTranslation } from "react-i18next";

function Guest() {
    const [scrol, setScrol] = useState(false);
    const [t, i18n] = useTranslation();
    const element = document.getElementById("root");
    if (i18n.language == "ar") {
      element.setAttribute("dir", "rtl");
    }else {
      element.setAttribute("dir", "ltr");
    }
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 10) setScrol(true);
        else setScrol(false);
      });
    }, []);
  
    return (
        
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <NavBar scrol={scrol} />
                <Interface />
                <Education />
                <Offre />
                <Fornisseur />
                <Footer />
              </main>
            }
          />
          <Route path="/resultat" element={<Resultat/>} />
          <Route path="/confirm" element={<Confirmer/>} />
          <Route path="/paiment" element={<Paiment/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/faq" element={<QuestionsC/>} />
          <Route path="/Cgu" element={<Cgu/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
    );
}

export default Guest;
