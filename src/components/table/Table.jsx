import React from "react";
import styles from "./table.module.css";

export default function Table({placeholder1,handleChange,value1,name1,placeholder2,value2,name2,noOfRows}) {
  return (<>
    {noOfRows.map((item,index)=>(
      <div key={index} className={styles.tableHead}>
        {/* declaring e and i bcz we wanna make sure we're handling the correct index, bcz we have multiple fields. if there's one, we don't need this. plus, we use this method in array of objects and dynamically. */}
      <input type="text" placeholder={placeholder2} onChange={(e)=>handleChange(e,index)} value2={item.communicationID} name={name2}/>
      <input type="text" placeholder={placeholder1} onChange={(e)=>handleChange(e,index)} value1={item.goodsCategory} name={name1}/> 
    </div>
    ))}
    </>
  );
}
