import React, { useState } from "react";
import styles from "../../scss/globals.module.scss";
import Image from "next/image";
import ezeIa from "../../public/eze.png";
import Link from "next/link";

const { greenPanel, avatar, userTitle } = styles;

export default function GreenPanel() {

  return (
    <>
            <nav className={greenPanel}>
              <Image src={ezeIa} alt='userAvatar' className={avatar} />
              <h5 className={userTitle}>JHON DOE</h5>

              <ul className="menu">
                <li>
                  <Link href="my-finances" className="list-group-item border-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                    my FINANCES
                  </Link>
                </li>
                <li>
                  <Link href="my-learning" className="list-group-item border-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                    my LEARNING
                  </Link>
                </li>
                <li>
                  <Link href="my-weather" className="list-group-item border-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                    my WEATHER
                  </Link>
                </li>
                <li>
                  <Link href="my-news" className="list-group-item border-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                    my NEWS
                  </Link>
                </li>
              </ul>

            </nav>
          
    </>
  );
}
