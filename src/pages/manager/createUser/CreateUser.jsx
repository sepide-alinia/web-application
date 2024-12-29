import React, { useState } from "react";
import Container from "../../../components/cntr/Container";
import Description from "../../../components/description/Description";
import FormHeader from "../../../components/formHeader/FormHeader";
import FormInput from "../../../components/formInput/FormInput";
import FormTitle from "../../../components/formTitle/FormTitle";
import AddCancle from "../../../components/addCancle/AddCancle";
import FormSelect from "../../../components/formSelect/FormSelect";

export default function CreateUser() {
  const formSelect1 = ["ایتم یک", "ایتم دو", "ایتم سه"];
  const [addUser, setAddUser] = useState({
    name: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
    position: "",
    password: "",
    passwordRepeat: "",
    priceRange: "",
    quantityRange: "",
  });

  const onsubmit =(e)=>{
    e.preventDefault();
    console.log(addUser);
  }

  const onclick =()=>{
    setAddUser({
        name: "",
        lastName: "",
        userName: "",
        phoneNumber: "",
        position: "",
        password: "",
        passwordRepeat: "",
        priceRange: "",
        quantityRange: "",
    })  
  }

  const handleChange = (e) =>{
    const {value,name} = e.target
    setAddUser(prev =>({...prev,[name]:[value]}));
    console.log(addUser);
    
  }

  return (
    <Container>
      <Description
        title={"افزودن کاربر"}
        description={"برای ثبت اطلاعات مشتری جدید فرم‌ زیر را تکمیل کنید"}
      />

      <form action="#">
        <div className="formWrapper">
          <FormHeader text={"اطلاعات شخصی"} />
          <div className="form">
            <FormInput
              label={"نام"}
              type={"text"}
              placeholder={"مثال: محمد"}
              handleChange={handleChange}
              value={addUser.name}
              name={"name"}
            />
            <FormInput
              label={" نام خانوادگی"}
              type={"text"}
              placeholder={"مثال: محمدی"}
              handleChange={handleChange}
              value={addUser.lastName}
              name={"lastName"}
            />
            <FormInput
              label={"نام کاربری"}
              type={"text"}
              placeholder={"مثال: محمدی"}
              handleChange={handleChange}
              value={addUser.userName}
              name={"userName"}
            />
            <FormInput
              label={"شماره موبایل"}
              type={"text"}
              placeholder={"شماره موبایل کاربر را  وارد کنید"}
              handleChange={handleChange}
              value={addUser.phoneNumber}
              name={"phoneNumber"}
            />
            <FormSelect
              label={"نوع سمت"}
              handleChange={handleChange}
              value={addUser.position}
              name={"position"}
              data={formSelect1}
            />
            <FormInput
              label={"رمز عبور"}
              type={"text"}
              placeholder={"رمز عبور کاربر را  وارد کنید"}
              handleChange={handleChange}
              value={addUser.password}
              name={"password"}
            />
            <FormInput
              label={"تکرار رمز عبور"}
              type={"text"}
              placeholder={"رمز عبور کاربر را مجددا وارد کنید"}
              handleChange={handleChange}
              value={addUser.passwordRepeat}
              name={"passwordRepeat"}
            />
          </div>
        </div>
        <div className="formWrapper">
          <FormHeader text={"اطلاعات شغلی"} />
          <div className="form">
            <FormTitle text={"دسترسی فاکتورها"} />
            <div className="space"></div>
            <FormInput
              label={"محدوده قیمت"}
              type={"text"}
              placeholder={"رقم مورد نظر را بنویسید"}
              handleChange={handleChange}
              value={addUser.priceRange}
              name={"priceRange"}
            />
            <FormInput
              label={"محدوده تعداد"}
              type={"text"}
              placeholder={"تعداد مورد نظر را بنویسید"}
              handleChange={handleChange}
              value={addUser.quantityRange}
              name={"quantityRange"}
            />
          </div>
        </div>
        <AddCancle
          text={"افزودن کاربر"}
          onclick={onclick}
          onsubmit={onsubmit}
        />
      </form>
    </Container>
  );
}
