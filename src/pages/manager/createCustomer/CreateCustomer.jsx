import React, { useState } from "react";
import styles from "./createCustomer.module.css";
import Container from "../../../components/cntr/Container";
import Description from "../../../components/description/Description";
import FormTitle from "../../../components/formTitle/FormTitle";
import FormInput from "../../../components/formInput/FormInput";
import FormHeader from "../../../components/formHeader/FormHeader";
import FormSelect from "../../../components/formSelect/FormSelect";
import Table from "../../../components/table/table";
import add from "../../../assets/icons/add.png";
import AddCancle from "../../../components/addCancle/AddCancle";

//you can also make an object and map it, if it was select, show me a selectbox, if not give me a text input. it'll be much cleaner

export default function CreateCustomer() {
  const formSelect1 = ["زن", "مرد"];
  const formSelect2 = ["سیستم-سیستم", "اسامی"];
  const formSelect3 = [
    "سایت",
    "اینستاگرام",
    "ویزیتور",
    "بازاریاب تلفنی",
    "معرفی توسط همکار",
    "رهگذر فروشگاه",
  ];
  const formSelect4 = ["گروه یک", "گروه دو", "گروه سه", "گروه چهار"];
  const formSelect5 = ["آیتم یک", "آیتم دو", "آیتم سه", "آیتم چهار"];
  const formSelect6 = ["آیتم یک", "آیتم دو", "آیتم سه", "آیتم چهار"];
  const formSelect7 = ["آیتم یک", "آیتم دو", "آیتم سه", "آیتم چهار"];
  const formSelect8 = [" تهران", " شهرستان"];
  const formSelect9 = ["مصرفی ", " تولیدی"];

  const [noOfRows, setNoOfRows] = useState([
    { communicationID: "", communicationMeans: "" },
  ]);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    lastName: "",
    userID: "",
    sexuality: "",
    visitors: "",
    getToKnow: "",
    asanCode: "",
    financialCode: "",
    categorization: "",
    province: "",
    city: "",
    postID: "",
    address: "",
    cellPhone: "",
    telephone: "",
    goodsCategory: "",
    noOfRows,
    shipping: "",
    volume: "",
  });

  const handleChange = (e) => {
    setPersonalInfo((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const handleTableChange = (e, i) => {
    const onChangeVal = [...noOfRows];
    onChangeVal[i][e.target.name] = e.target.value;
    setNoOfRows(onChangeVal);
  };

  const onclick = () => {
    setPersonalInfo({
      name: "",
      lastName: "",
      userID: "",
      sexuality: "",
      visitors: "",
      getToKnow: "",
      asanCode: "",
      financialCode: "",
      categorization: "",
      province: "",
      city: "",
      postID: "",
      address: "",
      cellPhone: "",
      telephone: "",
      goodsCategory: "",
      noOfRows,
      shipping: "",
      volume: "",
    });
  };
  const onsubmit = (e) => {
    e.preventDefault();
    console.log(personalInfo);
  };

  return (
    <Container>
      <Description
        title={"افزودن مشتری"}
        description={"برای ثبت اطلاعات مشتری جدید فرم‌ زیر را تکمیل کنید"}
      />

      <form action="#">
        <div className="formWrapper">
          <FormHeader text={"اطلاعات شخصی"} />
          <div className="form">
            <FormTitle text={"اطلاعات فردی"} />
            <div className="space"></div>

            <FormInput
              label={"نام"}
              type={"text"}
              placeholder={"نام مشتری را  وارد کنید"}
              handleChange={handleChange}
              value={personalInfo.name}
              name={"name"}
            />

            <FormInput
              label={"نام خانوادگی"}
              type={"text"}
              placeholder={"نام خانوادگی  مشتری را  وارد کنید"}
              handleChange={handleChange}
              value={personalInfo.lastName}
              name={"lastName"}
            />

            <FormInput
              label={"کد ملی"}
              type={"text"}
              placeholder={"کد ملی مشتری را  وارد کنید"}
              handleChange={handleChange}
              value={personalInfo.userID}
              name={"userID"}
            />

            <FormSelect
              handleChange={handleChange}
              label={"جنسیت"}
              value={personalInfo.sexuality}
              name={"sexuality"}
              data={formSelect1}
            />
            <FormSelect
              handleChange={handleChange}
              label={"ویزیتور ها"}
              value={personalInfo.visitors}
              name={"visitors"}
              data={formSelect2}
            />
            <FormSelect
              handleChange={handleChange}
              label={"نحوه آشنایی"}
              value={personalInfo.getToKnow}
              name={"getToKnow"}
              data={formSelect3}
            />

            <FormInput
              label={"کد آسان"}
              type={"text"}
              placeholder={"کد آسان را  وارد کنید"}
              handleChange={handleChange}
              value={personalInfo.asanCode}
              name={"asanCode"}
            />

            <FormInput
              label={"کد اقتصادی"}
              type={"text"}
              placeholder={"کد اقتصادی را  وارد کنید"}
              handleChange={handleChange}
              value={personalInfo.financialCode}
              name={"financialCode"}
            />

            <FormSelect
              handleChange={handleChange}
              label={"گروه بندی"}
              value={personalInfo.categorization}
              name={"categorization"}
              data={formSelect4}
            />

            <div className="space"></div>
            <FormTitle text={"اطلاعات آدرس"} />
            <div className="space"></div>

            <div className={styles.innerWrapper}>
              <div>
                <FormSelect
                  handleChange={handleChange}
                  label={"استان "}
                  value={personalInfo.province}
                  name={"province"}
                  data={formSelect5}
                />
                <FormSelect
                  handleChange={handleChange}
                  label={"شهر "}
                  value={personalInfo.city}
                  name={"city"}
                  data={formSelect6}
                />

                <FormInput
                  label={"کد پستی "}
                  type={"text"}
                  placeholder={"کد پستی را  وارد کنید"}
                  handleChange={handleChange}
                  value={personalInfo.postID}
                  name={"postID"}
                />
              </div>
              <div className={styles.textarea}>
                <p>نشانی</p>
                <textarea
                  name="address"
                  onChange={handleChange}
                  rows="7"
                  cols="60"
                  placeholder="متن مورد نظر خود را بنویسید"
                ></textarea>
              </div>
            </div>

            <FormTitle text={"اطلاعات تماس"} />
            <div className="space"></div>

            <FormInput
              label={"شماره موبایل"}
              type={"text"}
              placeholder={"مثال: ۰۹۱۰۲۹۳۰۴۹۱"}
              handleChange={handleChange}
              value={personalInfo.cellPhone}
              name={"cellPhone"}
            />
            <FormInput
              label={"شماره تلفن"}
              type={"text"}
              placeholder={"مثال: ۱۲۳۴۱۹۲-۰۲۱"}
              handleChange={handleChange}
              value={personalInfo.telephone}
              name={"telephone"}
            />

            <FormTitle text={"سایر راه های ارتباطی "} />
            <div className="space"></div>

            <div className={styles.tableHead}>
              <div>راه ارتباطی</div>
              <div>شناسه ارتباطی</div>
            </div>

            <Table
              placeholder1={"مثال: تلگرام یا نام"}
              handleChange={handleTableChange}
              value1={noOfRows.communicationMeans}
              name1={"communicationMeans"}
              placeholder2={" @Adib مثال: ۰۹۱۶۱۲۳۴۵۶۷۸ یا "}
              value2={noOfRows.communicationID}
              name2={"communicationID"}
              noOfRows={noOfRows}
            />

            <div
              className={styles.imgWrapper}
              onClick={() =>
                setNoOfRows([
                  ...noOfRows,
                  { communicationID: "", communicationMeans: "" },
                ])
              }
            >
              <div>
                <img src={add} />
              </div>
              <div>
                <p>افزودن راه ارتباطی</p>
              </div>
            </div>
          </div>
        </div>
        <div className="formWrapper">
          <FormHeader text={"اطلاعات سفارش"} />
          <div className="form">
            <FormSelect
              handleChange={handleChange}
              label={"گروه کالا"}
              value={personalInfo.goodsCategory}
              name={"goodsCategory"}
              data={formSelect7}
            />
            <FormSelect
              handleChange={handleChange}
              label={" باربری"}
              value={personalInfo.shipping}
              name={"shipping"}
              data={formSelect8}
            />
            <FormSelect
              handleChange={handleChange}
              label={"حجم سفارش"}
              value={personalInfo.volume}
              name={"volume"}
              data={formSelect9}
            />
          </div>
        </div>
        <AddCancle
          text={"افزودن مشتری"}
          onclick={onclick}
          onsubmit={onsubmit}
        />
      </form>
    </Container>
  );
}
