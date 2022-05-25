import React from "react";
import "./input.css"
const Input =({value,type, name, placeholder,handleChange, className,icon})=>{
return <>
<div className="input__wrapper">
<input value ={value} type={type} placeholder={placeholder} name={name} onChange={handleChange} className={"input" +" "+ className}/>
   {icon && <i className="input--icon">
   {icon}</i>}
    </div>
    </>
    
}

export default Input