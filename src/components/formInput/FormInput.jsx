import React from 'react'
import styles from "./formInput.module.css"
export default function FormInput({label,type,placeholder,handleChange,value,name,Class}) {
  return (
    <div className={`${styles.inputWrapper} ${Class}` }>
        <label>{label}</label>
        <input type={type} placeholder={placeholder}onChange={handleChange} value={value} name={name}/>
    </div>
  )
}
