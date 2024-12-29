import React, { useState } from 'react'
import styles from "./formSelect.module.css"
import arrow from "../../assets/icons/sideBarIcons/arrowDown.png"

export default function FormSelect({name,value,label,data,handleChange}) {


  const[isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.inputWrapper} >
      <label>{label}</label>
      <select name={name} onChange={handleChange}
      onClick={()=>setIsOpen(!isOpen)}>
        <option disabled selected hidden>انتخاب کنید</option>
        {
          data.map((item)=>(
            <option  key={item}>{item}</option>
          ))
        }
      </select>
        <div className={isOpen ? `${styles.flip}` : `${styles.noFlip}`} >
          <img src={arrow} />
        </div>
    </div>
  )
}
