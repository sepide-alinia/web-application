import styles from "./backArrow.module.css";
import React from "react";
import backArrow from "../../assets/icons/loginIcons/Arrow left.png";
import { useNavigate } from "react-router-dom";

export const BackArrow = () => {
  let navigate = useNavigate();
  return (
    <div onClick={()=>navigate(-1)} className={styles.backArrow}>
      <img 
       src={backArrow} 
       alt="backArrow" />
    </div>
  );
};
