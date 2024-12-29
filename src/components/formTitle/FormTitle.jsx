import React from 'react'
import styles from "./formTitle.module.css"

export default function FormTitle({text}) {
  return (
    <div className={styles.wrapper}>
        <h4>{text}</h4>
        </div>
  )
}
