import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
export default function Cgu() {
  return (
    <section>
      <NavBar scrol={true} />
      <div class="container text-center" style={{ marginTop: "100px" }}>
        <h3>Conditions Générales d'Utilisation</h3>
        <div class="">
          <div class="red-border">&nbsp;</div>
          <details>
            <summary>Article 1. L’objet</summary>
            <p>
              Les présentes conditions d’utilisation visent à définir :
              <ol>
                <li>
                  les relations contractuelles entre le Responsable de
                  traitement, et toute personne physique ou morale souhaitant
                  procéder, via le Site, à une réservation de transport en
                  autocars, suivie ou non d’un achat de titre de transport
                  (ci-après dénommée l’« Usager »), ainsi que
                </li>
                <li>
                  les conditions applicables à toute réservation et achat
                  effectués par le biais du Site .
                </li>
              </ol>
              (ci-après les « Conditions Générales d’Utilisation »).
              <br />
              <br />
              L’Usager prend acte que la validation d’une réservation d’un titre
              de transport par l’intermédiaire du Site implique une acceptation
              sans condition ni réserve par celui-ci des présentes Conditions
              Générales d’Utilisation, la reconnaissance d’en avoir une parfaite
              connaissance et la renonciation à se prévaloir de ses propres
              conditions d’achat, le cas échéant.
              <br />
              <br />
              Avant toute réservation, l’Usager déclare avoir la pleine capacité
              juridique, lui permettant de s’engager au titre des présentes
              Conditions Générales d’Utilisation, et que la réservation et
              l’achat envisagés sont limités à une utilisation strictement
              personnelle.
              <br />
              <br />
              Afin de se conformer à toute nouvelle réglementation ou en vue
              d'améliorer l’utilisation du Site, le Responsable de traitement se
              réserve la possibilité de modifier, à tout moment et à sa seule
              discrétion, les Conditions Générales d’Utilisation accessibles en
              ligne, de sorte que toutes modifications des Conditions Générales
              d’Utilisation s’imposeront à l’Usager et au Transporteur à la date
              de validation de la réservation effectuée par l’Usager, sans
              aucune autre formalité à la charge du Responsable de traitement.
            </p>
          </details>

          <div class="red-border">&nbsp;</div>
          <details>
            <summary>Article 2. Les offres de transport</summary>
            <p>
              Les offres de transport proposées sur le Site correspondent à des
              voyages en autocar selon les modalités décrites sur le Site et
              dans la limite des places disponibles. Les Transporteurs pourront
              à tout moment actualiser si nécessaire les offres proposées sur le
              Site, étant entendu que le prix applicable sera celui en vigueur
              au jour de la validation de la réservation.
            </p>
          </details>

          <div class="red-border">&nbsp;</div>
          <details>
            <summary>Article 3. Les prix des transports</summary>
            <p>
              Les prix des transports figurant sur le Site sont en Dirhams (dhs)
              toutes taxes comprises (TTC) tenant compte de la TVA applicable au
              jour de la validation de la réservation. Tout changement du taux
              de la TVA pourra être répercuté sur le prix des transports.{" "}
            </p>
          </details>
        </div>
      </div>
      <Footer />
    </section>
  );
}
