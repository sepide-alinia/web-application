import React from 'react'
import styles from "./formHeader.module.css"

export default function FormHeader({text}) {
  return (
    <div className={styles.grayWrapper}>
        <div className={styles.wrapper}>{text}</div>
    </div>
  )
}
