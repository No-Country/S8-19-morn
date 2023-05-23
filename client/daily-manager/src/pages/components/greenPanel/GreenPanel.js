import React from "react";
import styles from "../../scss/globals.module.scss";
import Image from "next/image";
import ezeIa from "../../../../public/eze.png";

const {greenPanel, avatar, userTitle} = styles;

export default function GreenPanel() {
  return (
    <div className={greenPanel}>
      <Image src={ezeIa} alt='userAvatar' className={avatar}/>
      <h5 className={userTitle}>JHON DOE</h5>
      <nav>
      <ul>
        <li>my FINANCES</li>
        <li>my LEARNING</li>
        <li>my WEATHER</li>
        <li>my NEWS</li>
      </ul>

      </nav>
      
    </div>
  );
}
