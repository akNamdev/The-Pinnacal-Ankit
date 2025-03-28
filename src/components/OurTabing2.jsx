import { useState } from "react";
import our from "../images/our.png";
import hightbg from "../images/hightbg.png";
// import highmid from "../images/highmid.png";  // If the image is in `src/images/`
import down from "../images/down.png";
import phone from "../images/phone.png";
import whatsup from "../images/whatsup.png";
import arr from "../images/arr.png";
import high2 from "../images/high2.png";
import high3 from "../images/high3.png";
import selling from "../images/selling.png";
import roundlogo from "../images/roundlogo.png";
import { Modal } from "flowbite-react";
import theppt from "../images/theppt.webp";
import sals from "../images/sals.webp";
import highMid from "../images/highMid.png"
const tabs = [
  {
    id: "3BHK",
    title: "3BHK",
    bgImage: our,
    area: "2300 - 2500 Sq.ft",
    description:
      "Reckoned as the most sought after 2/3/4 BHK Flats & Apartments in Zirakpur and appointed with higher-end features, strategic location on PR-7, Chandigarh International Airport Road Mohali.",
  },
  {
    id: "3BHK+S",
    title: "3BHK+S",
    bgImage: high2,
    area: "2300 - 2500 + 2500 Sq.ft",
    description:
      "Luxury 3BHK+S apartments with modern design, prime location on PR-7, and premium amenities.",
  },
  {
    id: "4BHK+S",
    title: "4BHK+S",
    bgImage: high3,
    area: "2500 - 3000 Sq.ft",
    description:
      "Spacious 4BHK+S apartments offering premium living at Zirakpur with state-of-the-art amenities.",
  },
];
const OurTabing2 = () => {
  const [activeTab, setActiveTab] = useState("3BHK");
  const [openModal, setOpenModal] = useState(false);
  const [openModalSite, setopenModalSite] = useState(false);
  return (
    <>
      <div className="w-full max-w-[1500px] mx-auto block sm:hidden xs:hidden md:block">
        <div className="flex pb-4 justify-between items-center  ">
          <div className=" border-b-[1px] border-gray-500 w-full">
            <div className="flex  ">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-[20px] text-center ${activeTab === tab.id
                    ? "border-b-[6px] rounded-md  border-[#173f63] transform transition-all duration-[500ms]  translate-x-0 hover:translate-x-0  text-[20px] text-[#173f63] font-bold "
                    : "opacity-50 font-bold  text-[20px]"
                    }`}
                >
                  {tab.title}
                </button>
              ))}

            </div>
          </div>
          <div className="px-4 py-2 text-[20px] text-[#173f63] font-semibold">
            {String(tabs.findIndex((tab) => tab.id === activeTab) + 1).padStart(2, "0")}/
            {String(tabs.length).padStart(2, "0")}
          </div>
        </div>
        {/* Tab Content */}
        {tabs.map((tab) =>
          activeTab === tab.id ? (
            <div className=" pb-20">
              <div
                key={tab.id}
                className="max-w-full h-[780px] bg-cover  bg-center flex relative"
                style={{ backgroundImage: `url(${tab.bgImage})` }}>
                {/* Selling & Logo */}
                <img src={selling} className="absolute top-20 left-4" alt="Selling" />
                <img
                  src={roundlogo}
                  width={118}
                  height={118}
                  className="absolute top-20 right-[540px] bg-gray-300 animate-spin duration-[3s] rounded-full"
                  alt="Logo" />
                {/* Right Side Content */}
                <div
                  className="absolute right-[113px] bg-[#0D2840] h-[780px] w-[389px]"
                  style={{ backgroundImage: `url(${hightbg})` }}>
                  {/* Marquee */}
                  <div className="h-[77px] w-[400px] mt-[45.8px] bg-white">
                    <marquee className="text-black text-[20px] leading-[31.5px] pt-5 font-bold">
                      Ask us for the best offers &nbsp;&nbsp;&nbsp;&nbsp; Ask us for the best offers
                      &nbsp;&nbsp;&nbsp;&nbsp; Ask us for the best offers
                    </marquee>
                  </div>
                  {/* Apartment Details */}
                  <h1 className="text-[44.66px] leading-[74.45px] font-semibold text-white ps-[28.42px]">
                    High Rise Luxury Apartments
                  </h1>
                  <h1 className="text-[54.66px] leading-[74.45px] font-semibold text-white ps-[28.42px]">
                    {tab.area}
                  </h1>
                  <h3 className="text-[22.49px] leading-[30.63px] text-white ps-[28.42px]">
                    Ground + S+36 Storey
                  </h3>
                  {/* Image */}
                  <div className="bg-white h-[100px] w-[389px] mt-5">
           
                    <img src={highMid} alt="highMid Image" className="px-[33.76px] py-[13px]" />

                  </div>
                  {/* Icons */}
                  <div className="p-4 flex items-center justify-around">
                    <a href="tel:+918968066698" className="text-white hover:underline">
                      <img src={phone} alt="Phone" />
                    </a>
                    <button
                      onClick={() => window.open("https://wa.me/+917976291139", "_blank")}
                      className="">
                      <img src={whatsup} alt="WhatsApp" />
                    </button>
                    {/* <img src={whatsup} alt="WhatsApp"/> */}
                    <img src={down} alt="Download" onClick={() => setopenModalSite(true)} className="border-2 border-white p-4 rounded-full" />
                  </div>
                  {/* Explore Button */}
                  <button onClick={() => setOpenModal(true)} className="bg-white text-black px-3 ms-[28.93px] rounded py-1 flex items-center gap-4">
                    Explore Now <img src={arr} alt="Arrow" />
                  </button>
                </div>
                {/* Description */}
                <div className="text-[20px] leading-[31.5px] text-gray-700 max-w-[700px] lg:block xl:block dark:text-gray-900 absolute left-0 bottom-5 ps-[10px]">
                  {tab.description}
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>

      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg w-[90%] md:w-4xl h-[70vh] pt-16  p-6 relative shadow-lg">
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-4 right-4 text-gray-600 text-3xl"
            >
              &times;
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <h1 className="text-[28px] font-semibold text-gray-700">
                  We Are Excited To Meet You
                </h1>
                <img
                  src={theppt}
                  alt="Property Image"
                  className="w-[250px] md:w-[300px] mx-auto py-3"
                />
                <img
                  src={sals}
                  alt="Salutation Image"
                  className="w-[150px] md:w-[200px] mx-auto pt-4"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full focus:outline-none px-3 mb-4 border-b-2 border-gray-300 py-2"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                  className="w-full focus:outline-none px-3 mb-4 border-b-2 border-gray-300 py-2"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Your Phone Number"
                  className="w-full focus:outline-none px-3 mb-4 border-b-2 border-gray-300 py-2"
                />
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="agreement"
                    className="transform scale-125"
                  />
                  <label htmlFor="agreement" className="text-sm text-gray-600">
                    I agree to receive newsletters and relevant marketing content
                  </label>
                </div>
                <button className="bg-[#173F63] text-white py-3 rounded-full w-full mt-6">
                  Get OTP
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal dismissible show={openModalSite} onClose={() => setopenModalSite(false)}>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg w-[90%] md:w-4xl h-[70vh] pt-16  p-6 relative shadow-lg">

            <button
              onClick={(e) => {
                e.stopPropagation();
                setopenModalSite(false);
              }}
              className="absolute top-4 right-4 text-gray-600 text-3xl"
            >
              &times;
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <h1 className="text-[35px] font-semibold uppercase text-gray-700">
                  Download Site Plans
                </h1>
                <img
                  src={theppt}
                  alt="Property Image"
                  className="w-[250px] md:w-[300px] mx-auto py-3"
                />
                <img
                  src={sals}
                  alt="Salutation Image"
                  className="w-[150px] md:w-[200px] mx-auto pt-4"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full focus:outline-none px-3 mb-4 border-b-2 border-gray-300 py-2"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                  className="w-full focus:outline-none px-3 mb-4 border-b-2 border-gray-300 py-2"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Your Phone Number"
                  className="w-full focus:outline-none px-3 mb-4 border-b-2 border-gray-300 py-2"
                />
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="agreement"
                    className="transform scale-125"
                  />
                  <label htmlFor="agreement" className="text-sm text-gray-600">
                    I agree to receive newsletters and relevant marketing content
                  </label>
                </div>
                <button className="bg-[#173F63] text-white py-3 rounded-full w-full mt-6">
                  Get OTP
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default OurTabing2;
