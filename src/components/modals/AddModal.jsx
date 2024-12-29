import React, { useEffect, useRef } from "react";
import styles from "./modal.module.css";
import ip from "../../assets/icons/ip.png";
export default function AddModal({handleClose,handleChange,value,add}) {
  const refre = useRef(null)

  useEffect(()=>{
      refre.current.focus()
  },[])
  return (
    <div className={styles.modal}>
      <div>
        <div className={styles.title}>
            <p onClick={handleClose}>x</p>
            <p>جدید IP افزودن </p>
        </div>
        <p> .جدید را وارد کنید IP آدرس </p>
        <div className={styles.inputWrapper}>
          <input onChange={handleChange} value={value} type="text" placeholder="مثال: 192.168.1.2"  ref={refre}/>
          <img src={ip} />
        </div>
        <button onClick={add}>
            افزودن
        </button>
      </div>
    </div>
  );
}
