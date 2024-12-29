
import React from 'react'
import styles from "./cntr.module.css"

export default function Container({children}) {
  return (
    <div className={styles.cntr}>
       {children}
    </div>
  )
}
