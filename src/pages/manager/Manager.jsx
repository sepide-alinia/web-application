import React from 'react'
import SideBar from '../../components/sideBar/SideBar'
import styles from "./manager.module.css"
import { Outlet } from 'react-router-dom'

export default function Manager() {
  return (
    <div className={styles.page}>
        <SideBar/>
        <Outlet/>
    </div>
  )
}
