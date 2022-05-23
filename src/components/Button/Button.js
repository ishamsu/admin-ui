import React from "react";
import "./button.css"
const Button =({className,onClick,label,icon,isDisabled})=>{

 return  <button  data-testid= "button"  className={"button" + " " + className} onClick={onClick} disabled={isDisabled}>
     {icon}
     <span>
     {label}
     </span></button>

}
export default Button