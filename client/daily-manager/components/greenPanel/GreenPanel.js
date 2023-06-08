import React from "react";
import styles from "../../scss/globals.module.scss";
import Image from "next/image";
import ezeIa from "../../public/eze.png";
import Link from "next/link";

const { greenPanel, avatar, userTitle, greenPanel__link } = styles;

export default function GreenPanel() {
  return (
    <div className={greenPanel}>
      <Image src={ezeIa} alt="userAvatar" className={avatar} />
      <h5 className={userTitle}>JHON DOE</h5>
      <nav>
        <ul>          
          <Link className={greenPanel__link} href='/budget'>
            <li >my BUDGET</li>
          </Link>
          <Link className={greenPanel__link} href='/todo' as={'/todo'} >
            <li >my TODO</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
