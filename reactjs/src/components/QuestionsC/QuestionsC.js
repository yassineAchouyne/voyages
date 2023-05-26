import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./QuestionsC.css";
export default function QuestionsC() {
  const questions = [
    {
      ques: "Q1: Qu’est ce qui me garantit que je trouverai la place que j’ai réservé dans l’autocar ?",
      res: "rihlaty.ma est un site marchand de billets d’autocars, partenaire de toutes les sociétés de transports visibles sur la plateforme www.rihlaty.ma.Dès lors que vous confirmez votre réservation, les données sont transmises immédiatement à la société de transport concernée. Cela permet de garantir la réservation de votre place auprès de l’opérateur partenaire.",
    },
    {
      ques: "Q2: rihlaty.ma prélève-t-il des frais de réservation ?",
      res: "Oui, des frais de réservation de 5dh par ticket peuvent être applicables sur certains trajets.",
    },
    {
        ques: "Q3: Devrais-je payer des frais supplémentaires avant d’embarquer ?",
        res: "Aucun frais supplémentaire lié à votre réservation ne vous sera exigé au moment de l’embarquement. Néanmoins, et selon le poids et la taille de vos bagages, certaines sociétés pourraient vous demander de payer des frais de bagages supplémentaires.",
      },
      {
        ques: "Q4: Comment puis-je payer pour mon billet ?",
        res: "Après la réservation, il vous sera demandé de payer votre billet. Vous pourrez choisir entre un paiement en ligne par carte bancaire ou PayPal, ou un paiement en espèces auprès des agences de cash (CashPlus, Fawatir, DAMANE Cash). Vous pouvez également utiliser le paiement mobile via MT Cash ou votre application bancaire (CIH, BMCE, Crédit agricole). Notre plateforme accepte tous types de cartes bancaires (Visa, Electron, CMI, Mastercard, JCB).",
      },
      {
        ques: "Q5: Combien de billets puis-je acheter ?",
        res: "Sur marKoub.ma, il n’y a aucune limitation de réservation. Toutefois, le nombre peut être limité par les disponibilités des sièges des autocars.",
      },
      {
        ques: "Q6: Est-ce que je peux acheter un billet pour une autre personne ?",
        res: "Les billets commercialisés sur marKoub ne sont pas nominatifs. Sur notre plateforme, chaque personne peut réserver plusieurs places, pour différents voyageurs. Nous ne demanderons aucune identité aux voyageurs.",
      },
  ];
  return (
    <section>
      <NavBar scrol={true} />
      <div class="container text-center" style={{ marginTop: "100px" }}>
        <h3>Comment pouvons-nous vous aider ?</h3>
        <div class="">
          {questions.map((res) => (
            <>
              <div class="red-border">&nbsp;</div>
              <details>
                <summary>{res.ques}</summary>
                <p>{res.res}</p>
              </details>
            </>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}
