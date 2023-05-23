import React from "react";
import styles from "../../scss/globals.module.scss";
import Header from "../header/Header";
import GreenPanel from "../greenPanel/GreenPanel";
import Footer from "../footer/Footer";

const { mainLayout } = styles;

export default function MainLayout() {
  return (
    <div className={mainLayout}>
      <Header/>
      <GreenPanel/>
      <Footer/>
      
    </div>
  );
}
