import styles from "./loginContainer.module.css"
import logo from "../../assets/images/Logo.png"
import achar from "../../assets/images/acharIMG.png"


export default function LoginContainer({children}){

    return<div className={styles.loginCntr}>
    
    <div className={styles.logoWrapper}>
        <img src={logo} alt="logo" />
    </div>

    <div>
    {children}
    </div>

    <div className={styles.acharWrapper}>
        <img  src={achar} alt="achar" />
    </div>
    
    
    </div>
}