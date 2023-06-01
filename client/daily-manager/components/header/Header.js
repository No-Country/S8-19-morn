import React from "react";

import styles from "../../scss/globals.module.scss";
import Login from "../Login";

/* Para agregar estilos al componente, simplemente:  */

const { header } = styles;

export default function Header() {
  return (
    <header className={header}>
      <h2>DailyManager</h2>
      <Login/>
    </header>
  );
}
