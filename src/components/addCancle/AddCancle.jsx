import React from 'react'
import styles from "./addCancle.module.css"


export default function AddCancle({text,onsubmit,onclick}) {
  return (
    <div className={styles.btnWrapper}>
        <button type='reset' onClick={onclick}>لغو</button>
        <button type='submit' onSubmit={onsubmit} >{text}</button>
    </div>
  )
}
