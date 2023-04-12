import React, { useState, useEffect } from "react";
import NavBar from "@/Components/NavBar/NavBar";
import Resultat from "@/Components/Resultat_de_recherche/Resultat";
import ConfirmPassword from "./Auth/ConfirmPassword";
import Confirmer from "@/Components/Confirmer_reservation/Confirmer";
import Paiment from "@/Components/Paiment/Paiment";
function App() {
  const [scrol, setScrol] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) setScrol(true);
      else setScrol(false);
    });
  }, []);

  return (
            <main>
              <NavBar scrol={scrol} />
              <Paiment/>
            </main>
  );
}

export default App;