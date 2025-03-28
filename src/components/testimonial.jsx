import React, { useState, useEffect } from "react";
import test1 from "../images/test1.png";
import test2 from "../images/test2.png";
import star from "../images/star.png";
import dot from "../images/dot.png";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    image: test1,
    text: "This is the first testimonial. Lorem Ipsum is simply dummy text of the printing and typesetting industry This is the first testimonial.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    image: test2,
    text: "This is the second testimonial. It has been the industry's standard dummy text ever since the 1500s. This is the second testimonial. It has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 3,
    image: test1,
    text: "This is the third testimonial. When an unknown printer took a galley of type and scrambled it.This is the third testimonial. When an unknown printer took a galley of type and scrambled it.",
  },
  {
    id: 4,
    image: test2,
    text: "This is the fourth testimonial. It was popularized in the 1960s with the release of Letraset sheets. This is the fourth testimonial. It was popularized in the 1960s with the release of Letraset sheets.",
  },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-[1548px] w-full h-[60vh] md:h-[742px] mt-5 mb-3  relative">
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-center">
        <video
          src="https://thepinnacle.realtynivesh.com/videos/testimonalbg.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          className="w-full h-full object-cover scale-[1.35] md:scale-[1.30] lg:scale-[1.30] xl:scale-125"
          aria-label="Background Video"
        />
      </div> 
      <div className="bg-black bg-opacity-50 relative h-full">
        <div className="relative w-full max-w-[1200px] mx-auto mt-10">
          <h1 className="text-center text-[32px] md:text-[42px] font-semibold text-white py-5">
            TESTIMONIAL
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">        
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {testimonials.map((item, index) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt="Testimonial"
                  className={`w-[150px] md:w-[349px] cursor-pointer border-2 rounded-md ${
                    activeIndex === index
                      ? "border-white bg-black text-white"
                      : "border-transparent"
                  } transition-all`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>    
            <AnimatePresence mode="popLayout">    
            < motion.div className="flex flex-col items-center md:pt-24 lg:pt-24 sm:pt-5 xs:pt-5 md:items-start text-center md:text-left">
              <img src={dot} alt="" className="  md:py-10 lg:py-10 sm:py-2 xs:py-2 items-center" />                        
                <motion.p
                  key={activeIndex}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-[16px] text-white md:text-[18px] leading-[24px] md:leading-[29px] transition-all duration-300"
                >
                  {testimonials[activeIndex].text}
                  </motion.p>          
              <div className="border border-white w-[150px] md:w-[310px] mt-4"></div>
              <img src={star} alt="" className="md:py-10 lg:py-10 sm:py-2 xs:py-2 items-center" />
            </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

