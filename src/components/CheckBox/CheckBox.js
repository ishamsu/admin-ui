import React  from "react";
import "./check-box.css"
const CheckBox =({id,name,checked,onChange})=>{
    return <input data-testid= "checkbox" type="checkbox" id={id} name={name} checked={checked}  onChange={onChange}/>
}
export default CheckBox