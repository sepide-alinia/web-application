import React from "react";
import styles from "./modal.module.css";

export default function RemoveModal({ip,handleClose,handleRemove}) {
  return (
    <div className={styles.modal}>
      <div>
        <p>IP حذف</p>
        <p>اطمینان دارید؟  IP: {ip}  ایا از حذف</p>
        <p> .دیگر نمیتوانند دسترسی داشته باشند IP : {ip}کاربران مرتبط با این آدرس </p>
        <div className={styles.btnWrapper}>
            <button onClick={handleClose}>انصراف</button>
            <button onClick={handleRemove}>حذف</button>
        </div>
      </div>
    </div>
  );
}
