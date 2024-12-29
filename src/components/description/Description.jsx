import React from 'react'
import styles from "./description.module.css"

export default function Description({title,description}) {
  return (
    <div className={styles.wrapper}>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
  )
}
