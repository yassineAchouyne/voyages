import React, { useState, useEffect } from "react";
import AuthUser from "./AuthUser";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function Buses() {
  const { http } = AuthUser();
  const [buses, setBuses] = useState([]);
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(false);
  const [del, setDel] = useState(false);
  const [villes, setVilles] = useState([]);

  const [libelle, setLibelle] = useState();
  const [lieuDebart, setLieuDebart] = useState();
  const [lieuArrive, setLieuArrive] = useState();
  const [dateDebart, setDateDebart] = useState();
  const [dateArrive, setDateArrive] = useState();
  const [capacite, setCapacite] = useState();
  const [prix, setPrix] = useState();
  const [statut, setStatut] = useState();
  const [photo, setPhoto] = useState();
  const [id, setId] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    http.get("buses").then((res) => setBuses(res.data));
    http.get("ville").then((res) => setVilles(res.data));
  }, []);
  const Ajouter = () => {
    http
      .post("buses", {
        libelle,
        lieuDebart,
        lieuArrive,
        dateDebart,
        dateArrive,
        capacite,
        prix,
        statut,
        photo,
      })
      .then((res) => {
        setBuses(res.data);
        setShow(false);
      });
  };

  const Modifier = (id) => {
    http
      .put("buses/" + id, {
        libelle,
        lieuDebart,
        lieuArrive,
        dateDebart,
        dateArrive,
        capacite,
        prix,
        statut,
        photo,
      })
      .then((res) => {
        setBuses(res.data);
        setUpdate(false);
      });
  };

  const delet = (id) => {
    http.delete("buses/" + id).then((res) => {
      setBuses(res.data);
      setDel(false);
    });
  };

  return (
    <>
      <div class="card border-0 shadow">
        <div class="card-body">
          <Modal show={show} onHide={handleClose}>
            <Modal.Body>
              <form>
                <label className="w-100">
                  libellé :
                  <input
                    type={"text"}
                    className="form-control mt-2"
                    placeholder="saisir votre libellé"
                    onChange={(e) => setLibelle(e.target.value)}
                  />
                </label>
                <div className="d-flex">
                  <label className="w-100">
                    Lieu débart :
                    <select
                      className="form-control mt-2 "
                      onChange={(e) => setLieuDebart(e.target.value)}
                    >
                      <option selected disabled>
                        ------Vill du départ------
                      </option>
                      {villes.map((ville) => (
                        <option value={ville.id}>{ville.nom}</option>
                      ))}
                    </select>
                  </label>
                  <label className="w-100">
                    Date débart :
                    <input
                      type={"time"}
                      className="form-control mt-2"
                      onChange={(e) => setDateDebart(e.target.value)}
                    />
                  </label>
                </div>

                <div className="d-flex">
                  <label className="w-100">
                    Lieu d'arriveé :
                    <select
                      className="form-control mt-2"
                      onChange={(e) => setLieuArrive(e.target.value)}
                    >
                      <option selected disabled>
                        ------Vill d'arriveé------
                      </option>
                      {villes.map((ville) => (
                        <option value={ville.id}>{ville.nom}</option>
                      ))}
                    </select>
                  </label>
                  <label className="w-100">
                    Date d'arriveé :
                    <input
                      type={"time"}
                      className="form-control mt-2"
                      onChange={(e) => setDateArrive(e.target.value)}
                    />
                  </label>
                </div>

                <div className="d-flex">
                  <label className="w-100">
                    Capacité:
                    <input
                      type={"number"}
                      placeholder="Capacité"
                      className="form-control mt-2"
                      onChange={(e) => setCapacite(e.target.value)}
                    />
                  </label>
                  <label className="w-100">
                    prix :
                    <input
                      type={"number"}
                      className="form-control mt-2"
                      placeholder="prix"
                      onChange={(e) => setPrix(e.target.value)}
                    />
                  </label>
                </div>

                <div className="d-flex">
                  <label className="w-100">
                    Statut :
                    <select
                      className="form-control mt-2"
                      onChange={(e) => setStatut(e.target.value)}
                    >
                      <option selected disabled>
                        ------Statut------
                      </option>
                      <option value={"autorout"}>autorout</option>
                      <option value={"ordinaire"}>ordinaire</option>
                    </select>
                  </label>
                  <label className="w-100">
                    Photo :
                    <input
                      type={"file"}
                      className="form-control mt-2"
                      onChange={(e) => setPhoto(e.target.value)}
                    />
                  </label>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={Ajouter}>
                Ajouter
              </Button>
            </Modal.Footer>
          </Modal>
          <button
            onClick={handleShow}
            class="btn btn-gray-800 d-inline-flex align-items-center me-2"
          >
            <svg
              class="icon icon-xs me-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            New Task
          </button>
          <div class="table-responsive">
            <table class="table table-centered table-nowrap mb-0 rounded">
              <thead class="thead-light">
                <tr>
                  <th class="border-0 rounded-start"></th>
                  <th class="border-0">Capacite</th>
                  <th class="border-0">Débart</th>
                  <th class="border-0">Arrive</th>
                  <th class="border-0">Statut</th>
                  <th class="border-0">Prix</th>
                  <th class="border-0 rounded-end">Action</th>
                </tr>
              </thead>
              <tbody>
                {buses.map((bus) => (
                  <>
                    <tr key={bus.id}>
                      <td class="border-0">
                        <a href="#" class="d-flex align-items-center">
                          <img
                            class="me-2 image image-small rounded-circle"
                            alt="Image placeholder"
                            src="assets/img/germany.svg"
                          />
                          <div>
                            <span class="h6">Germany</span>
                          </div>
                        </a>
                      </td>
                      <td class="border-0 fw-bold">{bus.capacite}</td>
                      <td class="border-0 fw-bold">
                        {bus.lieuDebart + " " + bus.dateDebart}
                      </td>
                      <td class="border-0 fw-bold">
                        {bus.lieuArrive + " " + bus.dateArrive}
                      </td>
                      <td class="border-0 fw-bold">{bus.statut}</td>
                      <td class="border-0 fw-bold">{bus.prix} DH</td>
                      <td class="border-0 fw-bold">
                        <button
                          className="btn text-primary fs-5"
                          onClick={() => {
                            setUpdate(true);
                            setLibelle("");
                            setLieuDebart(bus.lieuDebart);
                            setLieuArrive(bus.lieuArrive);
                            setDateDebart(bus.dateDebart);
                            setDateArrive(bus.dateArrive);
                            setCapacite(bus.capacite);
                            setPrix(bus.prix);
                            setStatut(bus.statut);
                            setPhoto("");
                            setId(bus.id);
                          }}
                        >
                          <i class="bi bi-pencil-square"></i>
                        </button>
                        <button
                          className="btn text-danger fs-5"
                          onClick={() => {
                            setDel(true);
                            setId(bus.id);
                          }}
                        >
                          <i class="bi bi-trash3-fill"></i>
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Modal show={update} onHide={() => setUpdate(false)}>
          <Modal.Body>
            <form>
              <label className="w-100">
                libellé :
                <input
                  type={"text"}
                  className="form-control mt-2"
                  placeholder="saisir votre libellé"
                  value={libelle}
                  onChange={(e) => setLibelle(e.target.value)}
                />
              </label>
              <div className="d-flex">
                <label className="w-100">
                  Lieu débart :
                  <select
                    className="form-control mt-2 "
                    defaultValue={lieuDebart}
                    onChange={(e) => setLieuDebart(e.target.value)}
                  >
                    <option selected disabled>
                      ------Vill du départ------
                    </option>
                    {villes.map((ville) => (
                      <option value={ville.id}>{ville.nom}</option>
                    ))}
                  </select>
                </label>
                <label className="w-100">
                  Date débart :
                  <input
                    type={"time"}
                    className="form-control mt-2"
                    value={dateDebart}
                    onChange={(e) => setDateDebart(e.target.value)}
                  />
                </label>
              </div>

              <div className="d-flex">
                <label className="w-100">
                  Lieu d'arriveé :
                  <select
                    className="form-control mt-2"
                    defaultValue={lieuArrive}
                    onChange={(e) => setLieuArrive(e.target.value)}
                  >
                    <option selected disabled>
                      ------Vill d'arriveé------
                    </option>
                    {villes.map((ville) => (
                      <option value={ville.id}>{ville.nom}</option>
                    ))}
                  </select>
                </label>
                <label className="w-100">
                  Date d'arriveé :
                  <input
                    type={"time"}
                    className="form-control mt-2"
                    value={dateArrive}
                    onChange={(e) => setDateArrive(e.target.value)}
                  />
                </label>
              </div>

              <div className="d-flex">
                <label className="w-100">
                  Capacité:
                  <input
                    type={"number"}
                    placeholder="Capacité"
                    className="form-control mt-2"
                    value={capacite}
                    onChange={(e) => setCapacite(e.target.value)}
                  />
                </label>
                <label className="w-100">
                  prix :
                  <input
                    type={"number"}
                    className="form-control mt-2"
                    placeholder="prix"
                    value={prix}
                    onChange={(e) => setPrix(e.target.value)}
                  />
                </label>
              </div>

              <div className="d-flex">
                <label className="w-100">
                  Statut :
                  <select
                    className="form-control mt-2"
                    defaultValue={statut}
                    onChange={(e) => setStatut(e.target.value)}
                  >
                    <option selected disabled>
                      ------Statut------
                    </option>
                    <option value="autorout">autorout</option>
                    <option value="ordinaire">ordinaire</option>
                  </select>
                </label>
                <label className="w-100">
                  Photo :
                  <input
                    type={"file"}
                    className="form-control mt-2"
                    onChange={(e) => setPhoto(e.target.value)}
                  />
                </label>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setUpdate(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={() => Modifier(id)}>
              Modifier
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={del} onHide={() => setDel(false)}>
          <Modal.Body></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setDel(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={() => delet(id)}>
              supprimer
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
