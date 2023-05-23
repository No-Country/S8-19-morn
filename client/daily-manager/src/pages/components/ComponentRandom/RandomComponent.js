import React from 'react';

import styles from '../../scss/globals.module.scss';



/* Para agregar estilos al componente, simplemente:  */

const { nombreDelEstilo } = styles ; 





export default function RandomComponent() {
  return (
    <div>
        <h1>Componente consumiendo estilos globales de h1 .-</h1>

        <h5 className={nombreDelEstilo}> Agregar clase 'nombreDelEstilo' y descomentar la LN 9 para cambiar el estilo</h5>
        
    </div>
  )
}
