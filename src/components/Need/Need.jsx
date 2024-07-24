import React from "react";
import "./Need.css";
import NeedImg from "../../assets/images/contact_illus.svg"


function Need() {
    return (
        <>
        <div className="wrap-need d-flex">
            <div className="row">
            <div className="col-lg col-md">
                <p className="need-heading">We’ve got everything you need?</p>
                <p className="need-content">
                We save you from all that boring paperwork! From global hiring, to instant payments, and 
                taxes, we’ve got your back.
                </p> 

                <button className="get-started-custom ">Get Started</button>

            </div>

            <div className="col-lg col-md col-sm mt-3">
                <img className="need-img" src={NeedImg} alt="" srcset=""  />
            </div>
        
        </div>
        </div>
        </>
    );
}

export default Need;