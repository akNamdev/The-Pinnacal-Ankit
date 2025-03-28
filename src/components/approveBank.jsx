import React from "react";
import Slider from "react-slick";
import sbi from "../images/sbi.png";
import hdfc from "../images/hdfc.png";
import kotak from "../images/kotak.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function BankSlider() {
  var Banker = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          
        }
      }
    ]
    
  };
  return (
    <div className="slider-container mx-auto items-center h-[120px] max-w-[1200px]">
      <Slider {...Banker}>
        
        <div>
          <div className=" w-full ">
            <img src={sbi} alt="" className="shadow-lg" />
          </div>
        </div>
        <div>
          <div className="w-full ">
            <img src={kotak} alt="" className="shadow-lg" />
          </div>
        </div>
        <div>
          <div className="w-full ">
            <img src={hdfc} alt="" className="shadow-lg" />
          </div>
        </div>
        <div>
          <div className="w-full ">
            <img src={kotak} alt="" className="shadow-lg" />
          </div>
        </div>
        <div>
          <div className="w-full ">
            <img src={hdfc} alt="" className="shadow-lg" />
          </div>
        </div>
        <div>
          <div className="w-full ">
            <img src={sbi} alt="" className="shadow-lg" />
          </div>
        </div>
        <div>
          <div className="w-full ">
            <img src={hdfc} alt="" className="shadow-lg" />       
          </div>
        </div>
        <div>
          <div className="w-full ">
            <img src={kotak} alt="" className="shadow-lg" />
          </div>
        </div>
      </Slider>
    </div>
  );
}
export default BankSlider;
