import React from 'react'
import styles from './ResultsContainer.module.css'

export default function ResultsContainer(props) {

  return (
    <>
      <section className={`${props.className} ${styles.resultsContainer}`}>
      <h2>{props.title}</h2>
          <div className={styles.table}>
            <div className={styles.tableDescription}>
              <h3>Nombre</h3>
              <h3>Tienda</h3>
              <h3>Marca</h3>
              <h3>Precio Unitario</h3>
              <h3>url</h3>
              <h3>Agregar</h3>
            </div>
            <div className={styles.tableResults}>
              {props.children}
            </div>
          </div>
      </section>
    </>
  )
}