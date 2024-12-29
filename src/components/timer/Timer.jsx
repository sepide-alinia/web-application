import React, { useEffect, useState } from "react";

export const Timer = ({isRunning,setIsRunning}) => {
  const [minute, setMinute] = useState(1);
  const [second, setSecond] = useState(59);
  const [currentTime, setCurrentTime] = useState(
    String(minute) + ":" + String(second)
  );


  useEffect(() => {
    if(isRunning){
        setTimeout(()=>{

          if(second>0){
            setSecond(second-1)}
            else if(second==0&&minute==0){
                setIsRunning(false)  
                setMinute(1)
                setSecond(59)
            }
            else if(second==0&& minute>0){
                setMinute(minute-1)
                setSecond(59)
            }
            let secondString=second<10?'0'+String(second):String(second)
            setCurrentTime(String(minute) + ":" + secondString)
            
            
        },1000)
       
    }
    
  }, [second,isRunning]);

  return <div>{currentTime}</div>;
};
