// Step 1. Install React Slick and Slick Carousel:
// npm install react-slick slick-carousel

// Step 2. Import the necessary inmports 
// import React from "react";
// import Slider from "react-slick";

// Step 3.(important to call where it is calling to use slick css property) Import the necessary  CSS files: In your index.js or App.js, import the Slick Carousel CSS files:
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// Step 4 below...

import React from "react";
import Slider from "react-slick";
import "./CardSlide.css"

//  this shoud be call where we calling this react slick slide function (MultiCardSlide) 
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

import LadyIcon from "../../assets/images/lady.jpg"


const testimonials = [
  {
    text: "AccuPay's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
    name: "Ora Wong",
    title: "Finance Director",
    image: `${LadyIcon}`
  },
  {
    text: "AccuPay's personalized service has been a game-changer for my small business. Efficient payroll processing.",
    name: "John D",
    title: "Small Business Owner",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5EPWbxY20TQYYEfm-wsApI8t2vxdPVqNVYQ&s"
  },
  {
    text: "AccuPay's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
    name: "Ora Wong",
    title: "Finance Director",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkAZQplu8jKihIJeY7KvZJ0aHqDVobrUX8eg&s"
  },
  // Add more testimonials as needed
];

const TestimonialCard = ({ testimonial }) => (
  <div className="testimonial-card">
    <p>{testimonial.text}</p>
    <div className="testimonial-author">
      <img src={testimonial.image} alt={testimonial.name} />
      <div>
        <h4>{testimonial.name}</h4>
        <p>{testimonial.title}</p>
      </div>
    </div>
  </div>
);


// Next and previous button add (if you dont want the next and prev button remove it here and its calling and finlly its css)

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`} 
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      onClick={onClick}
    />
  );
};
// Next and previous button code ends here



const MultiCardSlide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.65,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 1500,

    // Next and previous button calling
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </Slider>
  );
};

export default MultiCardSlide;
