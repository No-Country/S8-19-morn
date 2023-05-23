import React from "react";
import styles from "../../scss/globals.module.scss"
import RandomComponent from "../ComponentRandom/RandomComponent";

const { mainLayout } = styles;

export default function MainLayout() {
  return (
    <div className={mainLayout}>
      <h1>Hola Mundo!</h1>
      <p>Prueba de estilos y color secundario _.-</p>
      <RandomComponent/>
    </div>
  );
}
