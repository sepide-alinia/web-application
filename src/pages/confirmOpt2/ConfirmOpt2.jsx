import { BackArrow } from "../../components/backArrow/BackArrow";
import Button from "../../components/button/Button";
import LoginContainer from "../../components/loginContainer/LoginContainer";
import LoginInput from "../../components/loginInput/LoginInput";
import { Title } from "../../components/title/Title";
import styles from "./confirmOpt2.module.css";
import key from "../../assets/icons/loginIcons/key.png";
import eye from "../../assets/icons/loginIcons/eye.png";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ConfirmOpt2 = () => {
  const [newPassword, setNewPassword] = useState({
    newPasswordText: "",
    repeatNewPassword: "",
  });

  let nav = useNavigate()
  const [showPassword1, setShowPassword1] = useState("true");
  const [showPassword2, setShowPassword2] = useState("true");

  const handleChange = (e) => {
    setNewPassword((prev) => ({
      ...prev,
      [e.target.name]: e.target.value.trim(),
    }));
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(newPassword.newPasswordText.trim()===""|| newPassword.newPasswordText.trim()===null){
      toast.error("لطفا کادر رمز عبور جدید را پر کنید.")
     
    }else if(newPassword.repeatNewPassword.trim()===""|| newPassword.repeatNewPassword.trim()===null){
      toast.error("لطفا کادر تکرار رمز عبور جدید را پر کنید.") 
     
    }else if(newPassword.newPasswordText.trim()!== newPassword.repeatNewPassword.trim()){
      toast.error(".رمز عبور شما یکسان نیست") 
     
    }else{
        nav("/")
    }
    
  }

  return (
    <LoginContainer>
      <BackArrow />
      <Title>
        <p>انتخاب رمز عبور جدید</p>
      </Title>

<form action="#" onSubmit={handleSubmit}>

      <LoginInput
        handleChange={handleChange}
        name={"newPasswordText"}
        type={showPassword1 ? "password" : "text"}
        value={newPassword.newPasswordText}
        placeholder={"رمز عبور جدید"}
        imgURL={key}
        passwordEye={eye}
        handlePasswordEye={(e) => setShowPassword1(!showPassword1)}
        />
      <LoginInput
        handleChange={handleChange}
        name={"repeatNewPassword"}
        type={showPassword2 ? "password" : "text"}
        value={newPassword.repeatNewPassword}
        placeholder={"تکرار رمز عبور جدید"}
        imgURL={key}
        passwordEye={eye}
        handlePasswordEye={(e) => setShowPassword2(!showPassword2)}
        />

      <div className={styles.btnWrapper}>
        <Button text={"انتخاب رمز عبور جدید"}
        type={"submit"} />
      </div>
        </form>
    </LoginContainer>
  );
};
