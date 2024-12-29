import { sideBarData } from "../../data/sideBarData";
import React, { useState } from "react";
import styles from "./sideBar.module.css";
import logo from "../../assets/images/Logo.png";
import groupUsers from "../../assets/icons/sideBarIcons/groupUsers.png"
import SideBarItem from "../sideBarItem/SideBarItem";



export default function SideBar() {



  return (

    <div className={styles.SideBar}>

      <div className={styles.logoWrapper}>
        <img src={logo} />
        <p>پنل مدیر</p>
      </div>

      <div className={styles.dashBoard}>
        <img src={groupUsers} />
        <p>داشبورد</p>
      </div>

      {sideBarData.map((item,index)=>
      <SideBarItem item={item} key={index}/>
      )}
    
    </div>
  );
}
