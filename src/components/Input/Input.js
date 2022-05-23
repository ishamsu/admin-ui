import React from "react";
import "./input.css"
const Input =({value,type, name, placeholder,handleChange, className})=>{
return <input value ={value} type={type} placeholder={placeholder} name={name} onChange={handleChange} className={"input" +" "+ className}/>
}

export default Input