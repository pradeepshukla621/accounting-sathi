import React from "react";
import "./AboutUs.css";
import aboutLeftImg from "../../assets/images/About-Us.svg";


function AboutUs() {
    return (
        <>
            <div className="wrap-about-us">
                <div className="top-section ">
                    <div className="d-flex justify-content-center ">
                        <button className="aboutUs-btn ">About Us </button>
                    </div>
                    <p className="about-title">Who We Are </p>
                    <p className="about-title-text"> We specialize accounting & financial </p>

                </div>

                <div className="bottom-section d-flex">
                    <div className="about-left">
                        <img src={aboutLeftImg} alt="aboutLeftImg" />
                    </div>
                    <div className="about-right">
                        <p>
                            Switch from spreadsheets and outdated accounting software to Accounting Sathi: a modern, 
                            hassle-free money management solution. Our tech-savvy team has crafted software that 
                            simplifies everything from income tracking to expense management. Forget "good
                             enough" – Accounting Sathi impresses with powerful, user-friendly features.
                        </p>

                        <button className="get-started-custom">Get Started</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutUs;