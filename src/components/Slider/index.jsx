import React, { useState } from "react";
import SliderContent from "../SliderContent/index.jsx";
import imageSlider from "../imageSlider/index.jsx";
import Arrows from "../Arrows/index.jsx";
import Dots from "../Dots/index.jsx";
import logo from "../../images/tech-travel/logo.png";
import "./styles.css";

const len = imageSlider.length - 1;

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <div className="slider-container">
        <SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />
        <img src={logo} alt="" />
        <Arrows
          prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
          }
          nextSlide={() =>
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
          }
        />
        <Dots
          activeIndex={activeIndex}
          imageSlider={imageSlider}
          onclick={(activeIndex) => setActiveIndex(activeIndex)}
        />
      </div>
    </div>
  );
}

export default Slider;
