import React, { useState, useEffect } from "react";
import AuthUser from "./AuthUser";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Preloader from "./Preloader";

export default function Offres() {
  const { http, storage } = AuthUser();
  const [offres, setOffres] = useState([]);
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(false);
  const [del, setDel] = useState(false);

  const [description, setDescription] = useState();
  const [remise, setRemise] = useState();
  const [codePromo, setCodePromo] = useState();
  const [photo, setPhoto] = useState();
  const [id, setId] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    http.get("offres").then((res) => {
      setOffres(res.data)
      setIsLoading(false);
    });
  }, []);
  const Ajouter = () => {
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("description", description);
    formData.append("remise", remise);
    formData.append("codePromo", codePromo);
    http.post("offres", formData).then((res) => {
      setOffres(res.data);
      setShow(false);
    });
    // console.log(photo)
  };

  const Modifier = (id) => {
    http
      .put("offres/" + id, {
        description,
        remise,
        codePromo,
        photo,
      })
      .then((res) => {
        setOffres(res.data);
        setUpdate(false);
      });
  };

  const delet = (id) => {
    http.delete("offres/" + id).then((res) => {
      setOffres(res.data);
      setDel(false);
    });
  };
  if (isLoading) return <Preloader />;
  return (
    <>
      <div class="card border-0 shadow">
        <div class="card-body">
          <Modal show={show} onHide={handleClose}>
            <Modal.Body>
              <form>
                <div className="d-flex">
                  <label className="w-100">
                    Remise :
                    <input
                      type={"number"}
                      className="form-control mt-2"
                      onChange={(e) => setRemise(e.target.value)}
                    />
                  </label>
                  <label className="w-100">
                    Code Promo :
                    <input
                      type={"number"}
                      className="form-control mt-2"
                      onChange={(e) => setCodePromo(e.target.value)}
                    />
                  </label>
                </div>

                <label className="w-100">
                  Description :
                  <textarea
                    className="form-control mt-2"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </label>
                <label className="w-100">
                  Photo :
                  <input
                    type={"file"}
                    className="form-control mt-2"
                    onChange={(e) => setPhoto(e.target.files[0])}
                  />
                </label>
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
                  <th class="border-0">Remise</th>
                  <th class="border-0">Code Promo</th>
                  <th class="border-0">Description</th>
                  <th class="border-0 rounded-end">Action</th>
                </tr>
              </thead>
              <tbody>
                {offres.map((offre) => (
                  <tr key={offre.id}>
                    <td class="border-0">
                      <a class="d-flex align-items-center">
                        <img
                          class="me-2"
                          width={"50"}
                          height={"30"}
                          style={{ borderRadius: "5px" }}
                          alt="Image placeholder"
                          src={storage + offre.photo}
                        />
                      </a>
                    </td>
                    <td class="border-0 fw-bold">{offre.remise}</td>
                    <td class="border-0 fw-bold">
                      { offre.codePromo}
                    </td>
                    <td class="border-0 fw-bold">
                      {offre.description}
                    </td>
                    <td class="border-0 fw-bold">
                      <button
                        className="btn text-primary fs-5"
                        onClick={() => {
                          setUpdate(true);
                          setCodePromo(offre.codePromo);
                          setRemise(offre.remise);
                          setDescription(offre.description);
                          setId(offre.id);
                        }}
                      >
                        <i class="bi bi-pencil-square"></i>
                      </button>
                      <button
                        className="btn text-danger fs-5"
                        onClick={() => {
                          setDel(true);
                          setId(offre.id);
                        }}
                      >
                        <i class="bi bi-trash3-fill"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Modal show={update} onHide={() => setUpdate(false)}>
          <Modal.Body>
          <form>
                <div className="d-flex">
                  <label className="w-100">
                    Remise :
                    <input
                      type={"number"}
                      className="form-control mt-2"
                      value={remise}
                      onChange={(e) => setRemise(e.target.value)}
                    />
                  </label>
                  <label className="w-100">
                    Code Promo :
                    <input
                      type={"number"}
                      className="form-control mt-2"
                      value={codePromo}
                      onChange={(e) => setCodePromo(e.target.value)}
                    />
                  </label>
                </div>

                <label className="w-100">
                  Description :
                  <textarea
                    className="form-control mt-2"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </label>
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
