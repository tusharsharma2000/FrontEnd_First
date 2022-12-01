import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Poco from "../../../../common/assets/images/img-slider-1.webp";
import Mi from "../../../../common/assets/images/img-slider-2.webp";
import Pixel from "../../../../common/assets/images/img-slider-3.webp";
import Rog from "../../../../common/assets/images/img-slider-4.webp";
import Samsung from "../../../../common/assets/images/img-slider-5.webp";

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
          src={Rog}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Pixel}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Poco}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Mi}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Samsung}
          alt="Fifth slide"
        />
      </Carousel.Item>
    </Carousel>
  )
};

export default ImageSlider;