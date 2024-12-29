import Button from "../../components/button/Button";
import LoginContainer from "../../components/loginContainer/LoginContainer";
import LoginInput from "../../components/loginInput/LoginInput";
import { Title } from "../../components/title/Title";
import styles from "./forgotPassword.module.css";
import user from "../../assets/icons/loginIcons/user.png";
import { useState } from "react";
import { BackArrow } from "../../components/backArrow/BackArrow";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
    const [username, setUsername] = useState("");
    let nav = useNavigate()


    const handleSubmit= (e) => {
      
        e.preventDefault()
        if(username.trim()==="" || username.trim()===null ){
          toast.error("لطفا نام کاربری خود را وارد کنید.")
        }else{
          nav("/confirmOPT1")
        }
        
    }

  return (
    <LoginContainer>
      <BackArrow />
      <Title>فراموشی رمز عبور</Title>

      <div className={styles.text}>
        <p>نام کاربری خود را وارد کنید</p>
      </div>
            <form action="#" onSubmit={handleSubmit}>

      <LoginInput
        type={"text"}
        value={username}
        handleChange={(e) => setUsername(e.target.value.trim())}
        imgURL={user}
        placeholder={"نام کاربری"}
        />

      <div className={styles.btnWrapper}>
        <Button text={"درخواست رمز یکبار مصرف"} 
        type={"submit"} 
        />
      </div>
        </form>
    </LoginContainer>
  );
}

export default ForgotPassword;
