import { useState } from "react";
import tower1 from "../images/tower1.png";
import site from "../images/whyimg3 (1).webp";
import site2 from "../images/siteplanImg.webp";

const TowerPlans = () => {
  const [selectedImage, setSelectedImage] = useState(tower1);
  const [activeTab, setActiveTab] = useState("A");
  const [move, setMove] = useState(false); // State for image move animation

  const handleButtonClick = (tower) => {
    switch (tower) {
      case "A":
        setSelectedImage(tower1);
        break;
      case "B":
        setSelectedImage(site);
        break;
      case "C":
        setSelectedImage(site2);
        break;
      default:
        break;
    }
    setActiveTab(tower);
    setMove(true); 
  };

  
  const handleTransitionEnd = () => {
    setMove(false);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center my-10 lg:justify-end gap-16  items-center lg:items-end pb-10">
      <div className="w-[90%] lg:w-auto lg:pl-5">
        {/* Title and Description for Desktop */}
        <div className="hidden lg:block">
          <div className="px-5 sm:px-5 mb-[20px] xl:container mx-auto">
            <h2
              className="uppercase font-bold text-[24px] sm:text-[32px] cmd:text-[36px] text-left"
              style={{ color: "rgb(23, 63, 99)" }}
            >
              Tower Plans
            </h2>
            <p
              className="font-supera600 capitalize text-[13px] sm:text-[15px] md:text-[16px] text-left"
              style={{ color: "rgb(90, 84, 84)" }}
            >
              Click on the buttons below to view the tower plans in detail!
            </p>
          </div>
        </div>

        {/* Title and Description for Mobile */}
        <div className="block lg:hidden">
          <div className="px-5 sm:px-5 mb-[20px] xl:container mx-auto">
            <h2
              className=" sm:text-[32px] text-[50px]  text-[#173f63] font-extrabold text-center"
            >
              Tower Plans
            </h2>
            <p
              className="capitalize text-[13px]  sm:text-[15px] md:text-[16px] text-center"

            >
              Click on the buttons below to view the tower plans in detail!
            </p>
          </div>
        </div>


        {/* Buttons for Tower Plans */}
        <div className="flex flex-col-reverse">
          {/* <ul className="flex flex-col gap-y-5 sm:gap-y-6 lg:gap-y-8 mt-10">
            <li
              onClick={() => handleButtonClick("A")}
              className="w-[90%] lg:w-[400px] h-[45px] cxs:h-[50px] lg:h-[54px] mx-auto lg:mx-0 font-supera600 tracking-wider text-sm xs:text-base cxs:text-[21px] flex justify-center items-center border-[1.34px] border-[#173F63] rounded-full cursor-pointer transition-colors bg-[#173F63] text-white"
            >
              Tower A-B-C-D-E
            </li>
            <li
              onClick={() => handleButtonClick("B")}
              className="w-[90%] lg:w-[400px] h-[45px] cxs:h-[50px] lg:h-[54px] mx-auto lg:mx-0 font-supera600 tracking-wider text-sm xs:text-base cxs:text-[21px] flex justify-center items-center border-[1.34px] border-[#173F63] rounded-full cursor-pointer transition-colors text-[#173F63]"
            >
              Tower F-G-H
            </li>
            <li
              onClick={() => handleButtonClick("C")}
              className="w-[90%] lg:w-[400px] h-[45px] cxs:h-[50px] lg:h-[54px] mx-auto lg:mx-0 font-supera600 tracking-wider text-sm xs:text-base cxs:text-[21px] flex justify-center items-center border-[1.34px] border-[#173F63] rounded-full cursor-pointer transition-colors text-[#173F63]"
            >
              Tower I-J-K-L
            </li>
          </ul> */}
          <ul className="flex flex-col gap-y-5 sm:gap-y-6 lg:gap-y-8 mt-10">
            {[
              { id: "A", label: "Tower A-B-C-D-E" },
              { id: "B", label: "Tower F-G-H" },
              { id: "C", label: "Tower I-J-K-L" },
            ].map((item) => (
              <li
                key={item.id}
                onClick={() => handleButtonClick(item.id)}
                className={`w-[90%] lg:w-[400px] h-[45px] cxs:h-[50px] lg:h-[54px] mx-auto lg:mx-0 font-supera600 tracking-wider text-sm xs:text-base cxs:text-[21px] flex justify-center items-center border-[1.34px] border-[#173F63] rounded-full cursor-pointer transition-all duration-300 ${activeTab === item.id
                    ? "bg-[#173F63] text-white"
                    : "bg-white text-[#173F63]"
                  }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Responsive Image for Large Screens */}
      <div className="hidden md:block lg:block py-1 w-[50%] h-[370px] relative overflow-hidden rounded-[20px] shadow-[0px_0px_10px_2px_#00000050]">
        <div className="w-full h-full flex items-end justify-end relative">
          <img
            alt="Image"
            loading="lazy"
            decoding="async"
            className={`absolute transition-all duration-500 ease-in-out ${move ? 'left-[0px] transform -translate-x-[200px]' : 'left-1200'}`}
            src={selectedImage}   //duration-500 ease-in-out transform translate-x-[-500px]
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: "0px",
              color: "transparent",
            }}
            onTransitionEnd={handleTransitionEnd} // Reset move state after transition
          />
        </div>
      </div>
    </div>
  );
};

export default TowerPlans;



