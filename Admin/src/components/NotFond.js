import React from "react";

export default function NotFond() {
  return (
    <div class="d-flex align-items-center justify-content-center vh-100">
      <div class="text-center">
        <h1 class="display-1 fw-bold">404</h1>
        <p class="fs-3">
          {" "}
          <span class="text-danger">Opps!</span> Page not found.
        </p>
        <p class="lead">La page que vous cherchez n’existe pas.</p>
        <a href="/" class="btn btn-primary">
          Rentrer
        </a>
      </div>
    </div>
  );
}
