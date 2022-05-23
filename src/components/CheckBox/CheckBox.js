import React  from "react";
const CheckBox =({id,name,checked,onChange})=>{
    return <input data-testid= "checkbox" type="checkbox" id={id} name={name} checked={checked}  onChange={onChange}/>
}
export default CheckBox