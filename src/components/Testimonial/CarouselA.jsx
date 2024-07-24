import React from 'react';
import { Carousel } from 'react-bootstrap';


import ExampleCarouselImage from '../../assets/images/lady.jpg';
import ExampleCarouselImageB from '../../assets/images/yoga.png';

function CarouselA() {
  return (
    <div className="App bg-info ">
      <Carousel className="">
        <Carousel.Item className="">
          <img className="d-flex " src={ExampleCarouselImage} alt="First slide" width='50%' height="50%" />
        </Carousel.Item>
        <Carousel.Item className="">
          <img className="d-flex " src={ExampleCarouselImageB} alt="Second slide"  width='50%' height="50%"/>
        </Carousel.Item>
        <Carousel.Item className="">
          <img className="d-flex  " src="https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg" alt="Third slide" width='50%' height="50%" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselA;



