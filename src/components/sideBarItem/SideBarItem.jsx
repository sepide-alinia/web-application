import React, { useRef, useState } from "react";
import styles from "./sideBarItem.module.css";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function SideBarItem({ item }) {
  let nav = useNavigate();

  const [open, isOpen] = useState(false);
  const ref = useRef(null)

  if (item.children) {
    // console.log(item.children);

    return (
      <>
        <div className={styles.labelWrapper} onClick={() => isOpen(!open)}>
          <span>
            <img src={item.icon} />
            <p>{item.Title}</p>
          </span>
          <img
            className={!open ? null : `${styles.flip}`}
            src={item.arrow}
          />
        </div>
        <div
          className={
            // !open ? `${styles.showChildren}` : `${styles.hideChildren}`
            `${open ? styles.showChildren : styles.hideChildren}`}
            style={{maxHeight: open? `${ref.current.scrollHeight+50}px`:"0"}}
            ref={ref}
          
        >
          {item.children.map((child, i) => (
            <SideBarItem key={i} item={child} />
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <Link to={item.path}>
          <div className={item.icon ? `${styles.labelWrapper2}` : null}>
            {item.icon ? <img src={item.icon} /> : null}
            <p>{item.Title}</p>
          </div>
        </Link>
      </>
    );
  }
}
