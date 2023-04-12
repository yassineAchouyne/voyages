import React, { useState, useEffect } from "react";
import NavBar from "@/Components/NavBar/NavBar";
import Resultat from "@/Components/Resultat_de_recherche/Resultat";
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
              <Resultat/>
            </main>
  );
}

export default App;
