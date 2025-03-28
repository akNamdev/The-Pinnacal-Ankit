import { useEffect, useState, useRef } from "react";
import acr from "../images/acres.png";
import sq from "../images/sq.png";
import home from "../images/home.png";
import Tower from "../images/tower.png";
import bg from '../images/bg.png'
import counterbg from '../images/counterbg.png'

const ScrollCounterSection = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]); // Initial values
  const counterRef = useRef(null);
  const numbers = [8, 650, 6, 100000]; // Target values

  useEffect(() => {
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {          
          let start = 0;
          const interval = setInterval(() => {
            setCounts((prevCounts) =>
              prevCounts.map((val, i) =>
                val < numbers[i] ? val + Math.ceil(numbers[i] / 50) : numbers[i]
              )
            );
            start++;
            if (start > 50) clearInterval(interval);
          }, 100);
        }
      },
      { threshold: 0.2 }
    );
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <div
      className="max-w-full bg-cover bg-center flex justify-center p-6"
      style={{ backgroundImage: `url(${counterbg})` }}>
      <div
        ref={counterRef}
        className="max-w-[1269px] pt-10 pb-10 px-6 md:px-16"      >
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xs:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { img: acr, label: "Acres Land Area" },
            { img: home, label: "Leisure Homes" },
            { img: Tower, label: "Towers | S+36" },
            { img: sq, label: "Sq Ft Club House" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 border-b-2 border-[#D1A963] p-4 justify-center sm:justify-start"
            >
              <img src={item.img} alt={item.label} width={70} height={70} />
              <div>
                <h1 className="text-xl sm:text-xl md:text-3xl lg:text-4xl font-extrabold text-[#173F63]">
                  {counts[index].toLocaleString()}
                </h1>
                <h3 className="text-sm xs:text-base sm:text-base md:text-lg lg:text-xl text-[#173F63] font-bold">
                  {item.label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollCounterSection;