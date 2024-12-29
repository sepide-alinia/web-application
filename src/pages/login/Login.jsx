import styles from "./login.module.css";
import LoginContainer from "../../components/loginContainer/LoginContainer";
import { Title } from "../../components/title/Title";
import Button from "../../components/button/Button";
import LoginInput from "../../components/loginInput/LoginInput";
import user from "../../assets/icons/loginIcons/user.png";
import key from "../../assets/icons/loginIcons/key.png";
import eye from "../../assets/icons/loginIcons/eye.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {

  
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState("true");
  let nav = useNavigate()

  
  const handleChange = (e) => {
    e.preventDefault()
    setUserInfo((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value.trim(),
    }));
    
  };
  
  const handleSubmit = (e)=>{


    e.preventDefault()
    if(userInfo.username.trim() ==="" || userInfo.username.trim() ===null ){
      toast.error("لطفا نام کاربری خود را وارد نمایید.")
    }if(userInfo.password.trim() ==="" || userInfo.password.trim() ===null ){
      toast.error("لطفا کلمه عبور خود را وارد نمایید.")
    }else{
      toast.success("شما با موفقیت وارد شدید")
      nav("/manager/addCustomer")
    }
  }


  return (
    <LoginContainer>
      <Title>
        <p>ورود به حساب</p>
      </Title>
      
      <form action="#"
       onSubmit={handleSubmit}
       >

      <LoginInput
        handleChange={handleChange}
        placeholder={"نام کاربری"}
        name={"username"}
        value={userInfo.username}
        type={"text"}
        imgURL={user}
        />
      <LoginInput
        handleChange={handleChange}
        handlePasswordEye={() => setShowPassword(!showPassword)}
        placeholder={"رمز عبور"}
        name={"password"}
        value={userInfo.password}
        type={showPassword ? "password" : "text"}
        imgURL={key}
        passwordEye={eye}
        />

      <div className={styles.forgotPassWrapper}>
        <Link to={"/forgetPassword"} className={styles.forgotPass}>
          فراموشی رمز عبور
        </Link>
      </div>

   
      <Button type={"submit"} 
      text={"ورود"} 
      />
        </form>
    </LoginContainer>
  );
}
