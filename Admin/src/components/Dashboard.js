import { useEffect, useState } from "react";
import AuthUser from "./AuthUser";

function Dashboard() {
  const { user, http } = AuthUser();
  const [villes, setVilles] = useState([]);
  const [dashboard, setDashboard] = useState({
    jourDH: "",
    hierDH: "",
    countUser: "",
    countReserve: "",
    reservation: [],
  });
  console.log(dashboard);
  useEffect(() => {
    http.get("dash").then((res) => setDashboard(res.data));
    http.get("ville").then((res) => setVilles(res.data));
  }, []);
  const getVille = (id) => {
    let ville = villes.find((u) => u.id === id)
    if (ville) return ville.nom
  };
  return (
    <div className="dashboard-container">
      <nav class="navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0">
        <div class="container-fluid px-0">
          <div
            class="d-flex justify-content-between w-100"
            id="navbarSupportedContent"
          >
            <div class="d-flex align-items-center"></div>
            <ul class="navbar-nav align-items-center ">
              <li class="nav-item dropdown ms-lg-3">
                <a
                  class="nav-link dropdown-toggle pt-1 px-0"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div class="media d-flex align-items-center">
                    <div class="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                      <span class="mb-0 font-small fw-bold text-gray-900">
                        {user.nom + " " + user.prenom}
                      </span>
                    </div>
                  </div>
                </a>
                <div class="dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-1">
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <svg
                      class="dropdown-icon text-gray-400 me-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    My Profile
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <svg
                      class="dropdown-icon text-gray-400 me-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Settings
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <svg
                      class="dropdown-icon text-gray-400 me-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Messages
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <svg
                      class="dropdown-icon text-gray-400 me-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Support
                  </a>
                  <div role="separator" class="dropdown-divider my-1"></div>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <svg
                      class="dropdown-icon text-danger me-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      ></path>
                    </svg>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="row">
        <div class="col-12 mb-4">
          <div class="card bg-yellow-100 border-0 shadow">
            <div class="card-header d-sm-flex flex-row align-items-center flex-0">
              <div class="d-block mb-3 mb-sm-0">
                <h2 class="fs-3 fw-extrabold">
                  Chiffre d'affaire aujourd'hui{" "}
                  <span className="text-success">{dashboard.jourDH} DH</span>{" "}
                </h2>
                <div class="small mt-2">
                  <span class="fw-normal me-2">Hier</span>
                  <span class="fas fa-angle-up text-success"></span>
                  <span class="text-success fw-bold">
                    {dashboard.hierDH} DH
                  </span>
                </div>
              </div>
            </div>
            <div class="card-body p-2">
              {/* <div class="ct-chart-sales-value ct-double-octave ct-series-g"></div> */}
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-xl-6 mb-6">
          <div class="card border-0 shadow">
            <div class="card-body">
              <div class="row d-block d-xl-flex align-items-center">
                <div class="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                  <div class="icon-shape icon-shape-primary rounded me-4 me-sm-0">
                    <svg
                      class="icon icon-md"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                    </svg>
                  </div>
                  <div class="d-sm-none">
                    <h2 class="h5">Nombre des clients</h2>
                    <h3 class="fw-extrabold mb-1">{dashboard.countUser}</h3>
                  </div>
                </div>
                <div class="col-12 col-xl-7 px-xl-0">
                  <div class="d-none d-sm-block">
                    <h2 class="h5">Nombre des clients</h2>
                    <h3 class="fw-extrabold mb-1">{dashboard.countUser}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-xl-6 mb-6">
          <div class="card border-0 shadow">
            <div class="card-body">
              <div class="row d-block d-xl-flex align-items-center">
                <div class="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                  <div class="icon-shape icon-shape-secondary rounded me-4 me-sm-0">
                    <svg
                      class="icon icon-md"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div class="d-sm-none">
                    <h2 class="fw-extrabold h5">
                      Les reservations aujourd'hui
                    </h2>
                    <h3 class="mb-1">{dashboard.countReserve}</h3>
                  </div>
                </div>
                <div class="col-12 col-xl-7 px-xl-0">
                  <div class="d-none d-sm-block">
                    <h2 class="h5">Les reservations aujourd'hui</h2>
                    <h3 class="fw-extrabold mb-1">{dashboard.countReserve}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 ">
          <div class="row">
            <div class="col-12 mb-4">
              <div class="card border-0 shadow">
                <div class="card-header">
                  <div class="row align-items-center">
                    <div class="col">
                      <h2 class="fs-5 fw-bold mb-0">
                        Les reservations aujourd'hui
                      </h2>
                    </div>
                    <div class="col text-end">
                      {/* <a href="#" class="btn btn-sm btn-primary">
                        See all
                      </a> */}
                    </div>
                  </div>
                </div>
                <div class="table-responsive">
                  <table class="table align-items-center table-flush">
                    <thead class="thead-light">
                      <tr>
                        <th class="border-bottom" scope="col">
                          Nom Voyageure
                        </th>
                        <th class="border-bottom" scope="col">
                          Autobus
                        </th>
                        <th class="border-bottom" scope="col">
                          débart
                        </th>
                        <th class="border-bottom" scope="col">
                          arrivé
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {dashboard.reservation.map((res) => (
                        <tr>
                          <td class="fw-bolder text-gray-500">
                            {" "}
                            {res.prenom + " " + res.nom}
                          </td>

                          <td class="fw-bolder text-gray-500">{res.libelle}</td>
                          <td class="fw-bolder text-gray-500">{getVille(res.lieuDebart) +' '+res.dateDebart}</td>
                          <td class="fw-bolder text-gray-500">{getVille(res.lieuArrive) +' '+res.dateArrive}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
