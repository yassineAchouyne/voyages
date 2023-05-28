import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import AuthUser from "../AuthUser";

export default function Contact() {
  const { http } = AuthUser();
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [sujet, setSujet] = useState("");
  const [message, setMessage] = useState("");
  const [send, setSend] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
    http
      .post("/contact", {
        nom: nom,
        email: email,
        sujet: sujet,
        message: message,
      })
      .then((res) => {
        setSend(true);
        setNom("");
        setEmail("");
        setSujet("");
        setMessage("");
      });
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <NavBar scrol={true} />
      <section className="ftco-section mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div className="row no-gutters mb-5 d-flex justify-content-center">
                  <div className="col-md-7">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      {send && (
                        <div
                          className="alert alert-success alert-dismissible fade show"
                          role="alert"
                        >
                          Votre message a été envoyé, merci!
                        </div>
                      )}
                      <form>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" for="name">
                                Nom Complet
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={nom}
                                onChange={(e) => setNom(e.target.value)}
                                placeholder="Nom"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" for="email">
                                Email Address
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" for="subject">
                                Sujet
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                value={sujet}
                                onChange={(e) => setSujet(e.target.value)}
                                id="subject"
                                placeholder="Sujet"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" for="#">
                                Message
                              </label>
                              <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="form-control"
                                id="message"
                                cols="30"
                                rows="4"
                                placeholder="Message"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group mt-1 d-flex justify-content-center">
                              <button
                                className="btn btn-primary"
                                onClick={handelSubmit}
                              >
                                Envoyer message
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker"></span>
                      </div>
                      <div className="text">
                        <p>
                          <span>Address:</span> N. 16 . Hassan II, Safi,Morocco
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone"></span>
                      </div>
                      <div className="text">
                        <p>
                          <span>Tel:</span>{" "}
                          <a href="tel://2125213461545">+212 52134-61545</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <div className="text">
                        <p>
                          <span>Email:</span>{" "}
                          <a href="mailto:Rihlaty@contact.com">
                          Rihlaty@contact.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-globe"></span>
                      </div>
                      <div className="text">
                        <p>
                          <span>Site web</span> <a href="/">www.rihlaty.ma</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
