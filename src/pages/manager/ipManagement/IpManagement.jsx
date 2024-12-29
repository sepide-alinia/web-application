import Container from "../../../components/cntr/Container";
import Description from "../../../components/description/Description";
import React, { useState } from "react";
import styles from "./ipManagement.module.css";
import add2 from "../../../assets/icons/add2.png";
import { IPData } from "../../../data/IPData";
import RemoveModal from "../../../components/modals/removeModal";
import AddModal from "../../../components/modals/AddModal";
import deleteCan from "../../../assets/icons/delete.png";
import Searchbox from "../../../components/searchbox/Searchbox";

export default function IpManagement() {
  const [data, setData] = useState(IPData);
  const [originalData] = useState(IPData);
  // we copied the original data and use it for data filtering so that we can modify our array when filtering and the main data is intact
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedIP, setSelectedIP] = useState("");
  const [selectedID, setSelectedID] = useState("");
  const [value, setValue] = useState("");

  const handleAdd = () => {
    setShowAddModal(true);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const add = () => {
    setData((prev) => [
      ...prev,
      {
        id: data.length + 1,
        ip: value,
        registerDate: "1403/08/20",
        lastSignUpDate: "1403/08/20",
        img: deleteCan,
      },
    ]);
    setShowAddModal(false);
  };

  const showPopUp = (_, ip, id) => {
    setShowRemoveModal(true);
    setSelectedIP(ip);
    setSelectedID(id);
  };
  const handleRemove = () => {
    const updatedIPData = data.filter((ip) => ip.id !== selectedID);
    setData(updatedIPData);
    setShowRemoveModal(false);
  };

  const handleClose = () => {
    setShowRemoveModal(false);
    setShowAddModal(false);
    setValue("");
  };

  // must turn the search result to lower case
  const onSearch = (e) => {
    const searchResult = e.target.value.toLowerCase();
    console.log(searchResult);
    
    if (!searchResult) return setData(originalData);
    setData(originalData.filter((item) => item.ip.includes(searchResult)));
  };

  return (
    <>
      {showRemoveModal && (
        <RemoveModal
          ip={selectedIP}
          handleClose={handleClose}
          handleRemove={handleRemove}
        />
      )}
      {showAddModal && (
        <AddModal
          handleClose={handleClose}
          handleChange={handleChange}
          value={value}
          add={add}
        />
      )}

      <Container>
        <Description
          title={" ها IP مدیریت"}
          description={"برای ثبت اطلاعات مشتری جدید فرم‌ زیر را تکمیل کنید"}
        />
        <div className={styles.wrapper}>
          <div className={styles.innerWrapper} onClick={handleAdd}>
            <img src={add2} />
            <p> جدید IP افزودن </p>
          </div>

          <Searchbox onSearch={onSearch} />
        </div>

        <div className={styles.tableWrapper}>
          <div className={styles.tableHead}>
            <p>#</p>
            <p>آدرس آی پی ها</p>
            <p>تاریخ ثبت</p>
            <p>تاریخ آخرین ورود</p>
            <p>عملیات</p>
          </div>

          {data.map((item, i) => {
            return (
              <div
                key={item.id}
                className={styles.tableHead}
                style={{
                  backgroundColor:
                    i % 2 === 0
                      ? "rgba(249, 251, 255, 1)"
                      : "rgba(255, 255, 255, 1)",
                }}
              >
                <p>{item.id}</p>
                <p>{item.ip}</p>
                <p>{item.registerDate}</p>
                <p>{item.lastSignUpDate}</p>
                <div
                  onClick={(e) => {
                    showPopUp(e, item.ip, item.id);
                  }}
                >
                  <img src={item.img} />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}
