import React from "react";

import styles from "../../scss/globals.module.scss";

/* Para agregar estilos al componente, simplemente:  */

const { header } = styles;

export default function Header() {
  return (
    <header className={header}>
      <div className="row  p-0 m-0 align-items-center">
      <div className="col-1 p-0 justify-content-center">
      {/* <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" className=" border rounded-3 p-1 m-1 text-decoration-none"><i className="bi bi-list bi-lg py-2 p-1"></i></a> */}
      <button className="btn float-end" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" role="button">
                <i className="bi bi-list fs-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"></i>
            </button>
      </div>

      <div className="col-11">
      <h2>DailyManager</h2>
      </div>
      </div>
    </header>
  );
}
