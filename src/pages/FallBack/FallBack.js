import React from "react";
import "./fallBack.css"
const FallBack = ({heading,subHeading,icon})=>{
    return <>
    <div className='d-flex x-center text-center flex-col y-center mt-4'>
      {icon}
        <div className='heading mb-1 text-center'>
          {heading}
        </div>
        <div>
        {subHeading}
        </div>
    </div>

    </>

}
export default FallBack;