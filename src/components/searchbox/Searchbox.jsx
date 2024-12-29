import React from 'react'
import styles from "./searchbox.module.css"
import search from "../../assets/icons/search.png"

export default function Searchbox({onSearch}) {
  return (
         <div className={styles.innerWrapper2}>
            <input type="text" onChange={onSearch} placeholder="...جستجو با شماره آی پی" />
            <img src={search} />
          </div>
  )
}
