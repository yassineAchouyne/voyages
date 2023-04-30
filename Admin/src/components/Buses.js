import React, { useState } from "react";
import AuthUser from "./AuthUser";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function Buses() {
  const { http } = AuthUser();
  const [buses, setBuses] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  http.get("buses").then((res) => setBuses(res.data));

  return (
    <>
      <div class="card border-0 shadow">
        <div class="card-body">

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
          <button onClick={handleShow} class="btn btn-gray-800 d-inline-flex align-items-center me-2">
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
                      <button className="btn btn-primary">modifier</button>
                      <button className="btn btn-danger">delet</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
