import React from "react";
import "./Testimonial.css"
import SliceIcon from "../../assets/images/sliceIcon.png"



// import UncontrolledExample from "./Carousel.jsx"
import CarouselA from "./CarouselA";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MultiCardSlide from "./CardSlide";




function Testimonial() {
  return (
    <>
      <div className="wrap-testimonial">
        <div className="testimonial-top d-flex row ">

          <div className="testimonial-left col-lg">
            <div className="d-flex justify-content-center">
              <button className="feature-btn "> Testimonial </button>
            </div>
            <p>Accupay Customer Stories</p>
          </div>

          <div className="testimonial-right col-lg">
            <img src={SliceIcon} alt="SliceIcon" srcset="" />


            <p>Startups thrive with AccuPay. Their flexible payroll solutions have been instrumental in our
              journey, providing the support</p>


          </div>
        </div>

        <div className="testimonial-bottom">
       

        <MultiCardSlide />

        {/* <CarouselA /> */}
        </div>


      </div>

    </>

  )
}

export default Testimonial;