import React from 'react';
import styles from '../../scss/globals.module.scss';

const {footer} = styles;


export default function Footer() {
  return (
    <footer className={footer}>
        <p>Todos los derechos reservados @DailyManager- Powered by NoCountry - 2023</p>
    </footer>
  )
}
