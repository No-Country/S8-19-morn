import React from "react";

import styles from "../../scss/globals.module.scss";
import Login from "../Login";
import Link from "next/link";

/* Para agregar estilos al componente, simplemente:  */

const { header,linkLogo } = styles;

export default function Header() {
  return (
    <header className={header}>
      <Link href='/' className={linkLogo}>
        <h2>DailyManager</h2>
      </Link>
      <Login />
    </header>
  );
}
