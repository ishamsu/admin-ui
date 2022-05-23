import { useState } from "react";
const useForm =()=>{
    const [value,setValue]=useState({})
    const handleChange =(e)=>{
        console.log("value useForm -----------------", e.target.value)
        setValue({...value, [e.target.name]: e.target.value})
    }
    return [value, setValue, handleChange] 

}
export default useForm;
