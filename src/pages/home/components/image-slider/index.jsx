import React, { useState } from "react";
import "./image-slider.css";
import Carousel from 'react-bootstrap/Carousel';

const ImageSlider = ()=>{
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/flap/1688/280/image/94bb668d24cc89b7.jpg?q=50"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/flap/1688/280/image/fbb5e74e1d2ace58.jpg?q=50"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/bee297d0ace9332f.jpg?q=50"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/flap/1688/280/image/88928cba4ae417a5.jpg?q=50"
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/flap/1688/280/image/b90e41d95dc21455.jpg?q=50"
          alt="Fifth slide"
        />
      </Carousel.Item>
    </Carousel>
  )
};

export default ImageSlider;