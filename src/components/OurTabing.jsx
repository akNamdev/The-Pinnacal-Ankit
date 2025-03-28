import our from "../images/our.png";
import down from "../images/down.png";
import phone from "../images/phone.png";
import whatsup from "../images/whatsup.png";
import high2 from "../images/high2.png";
import high3 from "../images/high3.png";
import { useState } from "react";
import downarr from "../images/downarr.png"
// import OurTabing2 from "./ourTabing2";
import OurTabing2 from "./OurTabing2";
const tabs = [
  
  { id: "tab1", title: "3 BHK", image: our, size: "2500 - 2800 sq.ft", floors: "Ground + 17 storey" },
  { id: "tab2", title: "3 BHK + S", image: high2, size: "2500 - 2800 sq.ft", floors: "Ground + 17 storey" },
  { id: "tab3", title: "4 BHK + S", image: high3, size: "3000 - 3500 sq.ft", floors: "Ground + 37 storey" },
]

export function OurTabing () {
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  return (
    <>
      <OurTabing2 />
      {/* sm or md sacreen only */}
      <div className="hidden xs:block sm:block md:hidden">
        {/* Tab Buttons */}
        <div className="flex justify-start gap-2 border-b p-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors text-white ${activeTab === tab.id ? "bg-[#ba6f22]" : "bg-[#173f63]"
                }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        {/* Tab Content */}
        {tabs.map((tab) =>
          activeTab === tab.id ? (
            <div key={tab.id} className="p-5">
              <div
                className="max-w-full h-[300px] bg-cover bg-center flex relative"
                style={{ backgroundImage: `url(${tab.image})` }}
              ></div>

              <div className="pt-4 relative bottom-20 w-[90%] mx-auto bg-white">
                {/* Title */}
                <h2 className="pl-5 sm:pl-8 font-bold text-[22px] sm:text-[34px] leading-tight text-[#173F63] uppercase">
                  High Rise Luxury Apartments
                </h2>
                {/* Size & Floors */}
                <p className="pl-5 sm:pl-8 mt-2 font-semibold text-[18px] sm:text-[24px] text-[#3E3B3B] uppercase">
                  {tab.size} {tab.floors}
                </p>
                {/* Marquee */}
                <marquee
                  direction="left"
                  behavior="scroll"
                  scrollamount="5"
                  className="text-black text-[20px] leading-[31.5px] pt-5 font-bold"
                >
                  Ask us for the best offers &nbsp;&nbsp;&nbsp;
                  <span className="text-[#ba6f22]">Ask us for the best offers</span>
                  &nbsp;&nbsp;&nbsp; Ask us for the best offers
                </marquee>
                {/* Info Boxes */}
                <div className=" my-2 flex items-center">
                  <div className="w-full bg-[#173F63] py-3">
                    <div className="flex justify-around">
                      {/* Type */}
                      <div className="w-1/3 flex flex-col justify-center items-center">
                        <img src={phone} alt="Semi Furnished Icon" className="w-6 sm:w-8" />
                        <span className="text-white text-[12px]">Type</span>
                        <p className="text-white uppercase text-[12px]">SEMI FURNISHED</p>
                      </div>
                      {/* Price on Request */}
                      <div className="w-1/3 flex flex-col justify-center items-center border-x border-white">
                        <img src={whatsup} alt="Price on Request" className="w-6 sm:w-8" />
                        <p className="text-white text-[12px]">On Request</p>
                        <small className="text-white text-[6px]">T&C Apply*</small>
                      </div>
                      {/* Hand Over */}
                      <div className="w-1/3 flex flex-col justify-center items-center">
                        <img src={down} alt="Hand Over Icon" className="w-6 sm:w-8" />
                        <span className="text-white text-[12px]">Hand Over</span>
                        <p className="text-white uppercase text-[12px]">December 2028</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Contact & Enquiry */}
                <div className="w-full bg-[#173f63] py-4 px-4 sm:px-6 flex flex-row flex-wrap justify-around items-center gap-x-4">
                  <div className="flex gap-x-4">
                    {[phone, whatsup, downarr].map((icon, index) => (
                      <div key={index} className="hover:bg-[#ba6f22] p-2 rounded-md">
                        <img src={icon} alt="Contact Icon" className="w-10 h-10 sm:w-10 sm:h-10" />
                      </div>
                    ))}
                  </div>
                  <button className="bg-[#ba6f22] text-white p-2 rounded-md text-sm sm:text-base cursor-pointer">
                    Enquiry Now &rarr;
                  </button>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </>
  );
}


