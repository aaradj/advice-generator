import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styles from "./main.module.css";


function Main() {
    const [data,setData] = useState("click to get Advice")
    const [click,setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    useEffect(()=>{
        const getData = async () =>{
            await axios.get("https://api.adviceslip.com/advice")
            .then(response=>{
                setData(response.data.slip.advice)
                console.log(data)
            })
            .catch(err=>{
                console.log("somthing went wrong")
            })
        }
        getData()
    },[click]);

  return (
    <div>
        <h1>{data}</h1>
        <button onClick={handleClick}>get advice</button>
    </div>
  )
}

export default Main;

