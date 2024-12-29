import { useEffect, useRef, useState } from "react";
import Button from "../../components/button/Button";
import LoginContainer from "../../components/loginContainer/LoginContainer";
import { Title } from "../../components/title/Title";
import styles from "./ConfirmOpt1.module.css";
import { BackArrow } from "../../components/backArrow/BackArrow";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Timer } from "../../components/timer/Timer";

function ConfirmOpt1() {

  let nav = useNavigate()
const [code, setCode] = useState({
    first:"",
    second: "",
    third : "",
    fourth:""
  })
  const [isRunning, setIsRunning] = useState(true);

   
  const handleChange =(e)=>{

    const {name,value} = e.target
    setCode(c=>({
      ...c,
      [name]:value.trim()
    }))
    
    if(value.length===1){
      if(name==="first") input2.current.focus();
      if(name==="second") input3.current.focus();
      if(name==="third") input4.current.focus();
    }
    console.log(code);
    
  }
  
  const onKeyDown =(e)=>{
    if(e.key==="Backspace"){
      if(e.target.name==="second") input1.current.focus();
      if(e.target.name==="third") input2.current.focus();
      if(e.target.name==="fourth"){
        input3.current.focus();
       setCode(prev=>({...prev,fourth:""}))
      }
    }
    }
    


  //it equals to const verifiedCode = code.first + code.second + code.third + code.fourth
  const keys = Object.values(code)
  const verifiedCode = keys.join("")

  const input1 = useRef(null)
  const input2 = useRef(null)
  const input3 = useRef(null)
  const input4 = useRef(null)

  
  useEffect(()=>{
    input1.current.focus()
  },[])
 
  const handleClick= () =>{
    setIsRunning(true)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(verifiedCode.trim() ==="" || verifiedCode.trim() ===null || verifiedCode.length < 4 ){
      toast.error("رمز عبور صحیح نمی باشد.")
    }else{
      nav("/ConfirmOpt2")
    }
}
  
  return (
    <LoginContainer>
      <BackArrow/>


      <Title>
        <p>تایید رمز یکبار مصرف</p>
      </Title>

      <div className={styles.wrapper}>
        <div>
          <h3 className={styles.text}>
            رمز یک بار مصرف پیامک شده را وارد کنید
          </h3>
        </div>
      <form action="#" onSubmit={handleSubmit}>

        <div className={styles.squareWrapper}>
          <input name={"first"} value={code.first} onChange={handleChange} type="text" className={styles.square} ref={input1} maxLength={1}/>
          <input onKeyDown={onKeyDown} name={"second"} value={code.second} onChange={handleChange} type="text" className={styles.square} ref={input2} maxLength={1}/>
          <input onKeyDown={onKeyDown} name={"third"} value={code.third} onChange={handleChange} type="text" className={styles.square} ref={input3} maxLength={1} />
          <input onKeyDown={onKeyDown} name={"fourth"} value={code.fourth} onChange={handleChange} type="text" className={styles.square} ref={input4} maxLength={1} />
        </div>

      <div className={styles.countdownWrapper}>
        <Timer isRunning={isRunning} setIsRunning={setIsRunning}/>
        <p onClick={!isRunning ? handleClick : null}
        className= 
        {isRunning?
         `${styles.deActive}` 
         : `${styles.active}` } >
          { isRunning?
          "تا درخواست مجدد"
          :
         " درخواست مجدد"
          }
          </p>
      </div>

      <Button text={"تایید"} type={"submit"} />
      </form>
      </div>
    </LoginContainer>
  );
}

export default ConfirmOpt1;



