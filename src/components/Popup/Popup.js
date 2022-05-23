import React from "react";
import "./popup.css"
const Popup =({heading, children, closeModal})=>{
    return <>
     <div className="overlay"></div>
                    <div className="modal">
                        <header className="modal__header">
                            <h3>{heading}</h3>
                            <button onClick={closeModal} className="close-button">&times;</button>
                        </header>
                        <main className="modal__main d-flex flex-col gap-1">
                            {children}
                        </main>
                    </div></>

}
export default Popup;