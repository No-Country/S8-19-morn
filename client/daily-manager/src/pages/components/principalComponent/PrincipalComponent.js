import React from "react";
import Image from "next/image";
import LandingImg from "../../../../public/landingImg.png";
import styles from "../../scss/globals.module.scss";

const { ppalComponent, landingImg } = styles;

export default function PrincipalComponent() {
  return (
    <div className={ppalComponent}>
      <h3>Te ayudamos a manejar tu tiempo y tus prioridades.</h3>
      <Image src={LandingImg} alt='landingImg' className={landingImg} />
    </div>
  );
}
