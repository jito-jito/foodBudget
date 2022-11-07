import React from 'react'
import Button from '../Button'
import styles from './ResultsContainer.module.css'


export default function ProductItem({
  hasSavedProduct,
  onAddProduct,
  onRemoveProduct,
  description,
  marketName,
  brand,
  singlePrice,
  link
}) {

  return (
    <>
     <div className={styles.tableProduct}>
        <p>{description}</p>
        <p>{marketName}</p>
        <p>{brand}</p>
        <p>{singlePrice}</p>
        <p>
          <a href={link}>link</a>
        </p>
        <div className={styles.tableProductsButtonContainer}>
          {hasSavedProduct ?
              <Button className={styles.tableProductsButtonRemove}onClick={() => onRemoveProduct()}></Button> :
              <Button className={styles.tableProductsButtonAdd}onClick={() => onAddProduct()}></Button>
          }
        </div>
      </div>

      <style jsx>{`
        
      `}</style>
    </>
  )
} 