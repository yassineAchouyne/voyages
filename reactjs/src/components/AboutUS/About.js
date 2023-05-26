import React from "react";
import  "./About.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
export default function About() {
  return (
    <section>
      <NavBar scrol={true} />
      <div class="container text-center" style={{ marginTop: "100px" }}>
        <h2>Qui Sommes-Nous?</h2>
        <h3>rihlaty.ma</h3>
        <div class="">
          <div class="red-border">&nbsp;</div>
          <p class="ct-u-size22 ct-u-fontWeight300 marginTop40">
            rihlaty.ma vous permet de rechercher les prix et horaires des
            autocars, de comparer les offres de plusieurs sociétés de transport,
            et de réserver vos billets en ligne, tout cela en 2 minutes
            seulement !
          </p>
          <p>
            C’est de vous aider à trouver les bonnes conditions de voyages qui
            vous plairont le plus. Nous sommes conscients de toutes les
            difficultés et de tous les obstacles auxquels vous faites face, au
            quotidien, lorsque vous souhaitez rendre visiter à votre famille, à
            vos amis, ou même pour vos déplacements professionnels. Nous sommes
            là pour vous faciliter la vie ! Nous avons l’ambition de créer un
            petit paradis pour vous, un monde, où acheter et réserver son billet
            de voyage, se fait en deux clics ! Notre sens de l’engagement, notre
            passion, nos innovations, nos équipes, nos moyens… tout est mobilisé
            pour vous satisfaire, et vous permettre de vivre l’expérience client
            que vous méritez ! Nous vous donnons accès à des moyens innovants,
            grâce aux toutes dernières technologies, et créons un monde
            accessible à toute personne, à tout moment, et en tout lieu. Grâce à
            la disponibilité immédiate de nos services, finis les longues
            attentes et la désorganisation que vous subissez lorsque vous
            achetez votre billet en gare !
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}
