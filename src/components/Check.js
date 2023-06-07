import React,{useState,useEffect,useRef} from 'react'
// import Swiper from "swiper";
import "./content.css";
import "../../src/index.css";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation]);
const Check = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
      const swiper = new SwiperCore(sliderRef.current, {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      return () => {
        swiper.destroy();
      };
    }, []);
    
  return (
    <div>
      <div className="swiper-container" ref={sliderRef}>
        <div className="swiper-wrapper">
          {/* Render your slide content here */}
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
}

export default Check