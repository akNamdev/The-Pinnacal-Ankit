import banner from "../images/banner.png";
import bg from "../images/bg.png";
import ab2 from "../images/ab2.png";
import mohali from "../images/mohali.png";
import mName from "../images/mName.png";
import acros from "../images/acros.png";
import key from "../images/key.png";
import down from "../images/down.png";
import offer from "../images/offer.png";
import ppt2 from "../images/PPT2.png";
import OurTabing from "./OurTabing2";

import ContactForm from "./contactForm";
import ScrollCounterSection from "./counter";
import Downlod from "./downlod";
import YouIntrested from "./youIntrested";
import SateliteToggle from "./sateliteToggle";
import NumberContact from "./numberContact"
import ProjectStatus from "./projectStatus";
import FeatureSection from "./keyHeilight";
import { useState } from "react";
import { Modal } from "flowbite-react";
import theppt from "../images/theppt.webp";
import sals from "../images/sals.webp";
import Testimonial from "./testimonial";
import Accordion from "./Accordion";


export default function About() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div
        className=" max-w-full h-[900px] bg-cover bg-center relative flex"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* <div className="absolute w-full h-full bg-[#00000080]"></div> */}
        <div className="grid grid-cols-2  items-center ms-7 ">
          <div className="text-white">
            <h1 className="text-6xl  text-white ">
              LUXURY BUILT
              <br />
              AROUND NATURE
            </h1>
            <h3 className="text-[30px] p-4">with Outdoor Living Balconies</h3>
            <h3 className="text-[20px] p-2">
              Sushma in Financial District, Zirakpur
            </h3>
            <button
              onClick={() => setOpenModal(true)}
              className="  px-6 my-4 font-semibold text-black  transition-all  py-2 rounded-full duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#aa6020] focus:ring-opacity-50"
              style={{
                backgroundImage: "url('https://thepinnacle.realtynivesh.com/images/themebgimg.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              aria-label="Enquiry Now"
            >
              ENQUIRY NOW
            </button>

            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white rounded-lg w-[90%] md:w-4xl h-[70vh] pt-16  p-6 relative shadow-lg">
                  <button
                    onClick={() => setOpenModal(false)}
                    className="absolute top-4 right-4 text-gray-600 text-3xl"
                  >
                    &times;
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-[50%_30%] gap-8">
                    <div className="text-center">
                      <h1 className="text-[35px] font-semibold text-center text-gray-700">
                        Talk to our Relationship  <br />Manager!
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
            <h3> Rera No - PBRERA-SAS81-PR0693</h3>
          </div>
          <div></div>
        </div>
      </div>
      {/* Luxury Apartments */}
      <div
        className="max-w-full bg-[#182D41] px-4 md:px-10 lg:px-16 py-8"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[40%_auto] gap-6 md:gap-10 items-center">

          <div className="pt-6 md:pt-[45px] text-center md:text-left">
            <img
              src={ab2}
              alt="Luxury Apartments"
              className="w-[200px] sm:w-[250px] md:w-[350px] lg:w-[400px] mx-auto md:mx-0"
            />
            <h3 className="text-[#FFC267] font-semibold text-[28px] sm:text-[32px] md:text-[40px] lg:text-[46px] mt-4">
              Luxury Apartments
            </h3>
          </div>
          {/* Right Side - Description & Button */}
          <div>
            <div className="text-white pt-4 md:pt-[74.55px] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[21px] leading-[22px] sm:leading-[24px] md:leading-[28px] lg:leading-[33.18px] text-justify">
              Sushma Elementa Kasauli is offering beautifully designed
              residential property in the hills of Kasauli. The property is
              located in Kasauli, Solan. Sushma Elementa Kasauli is a fully RERA
              Registered Project By Sushma Group. The possession of this
              property will start from Dec, 2024. The architects who have
              designed this property are well experienced in their field.
              <br />
              <br />
              Elementa Kasauli offers top-notch facilities that will add value
              to your life. There are 8 Towers, 7 Floors, and 382 Units in
              total. The project is spread over 4.4 acres of green and clean
              land. Sushma Elementa offers 1 BHK apartments, 2 BHK apartments,
              and 1 RK Studio Apartments, which you can choose as per your
              needs.
            </div>

            <div className="flex justify-center md:justify-start">
              <button className="bg-[#E0A267] text-black mt-6 px-6 py-3 rounded-md font-semibold text-[14px] sm:text-[16px] md:text-[18px] hover:bg-[#d18f55] transition-all">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <ScrollCounterSection />
      {/* The Pride Of Mohali */}
      <div className="max-w-full bg-[#182D41] px-4 md:px-10 lg:px-16 py-8 flex items-end"
        style={{
          backgroundImage: `url(${mohali})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "90vh",
        }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full">
          <div>
            <h2 className="text-4xl sm:text-5xl text-white pb-2">
              The Pride Of
            </h2>
            <img
              src={mName}
              alt="Project Name"
              className="w-[250px] sm:w-[350px] md:w-[369px]" />
            <h3 className="text-white text-[20px] sm:text-[22px] md:text-[25px] leading-[30px] sm:leading-[35px]">
              Live amidst nature and openness.
            </h3>
            <h3 className="text-white text-[20px] sm:text-[22px] md:text-[25px]">
              Sector 83 Alpha IT City Mohali
            </h3>
          </div>
          <div>
            <div className="grid md:grid-cols-2  sm:grid-cols-1 xs:grid-cols-1 gap-4">
              <div className="text-white flex flex-col items-start">
                <img
                  src={acros}
                  alt="Land Area"
                  className="w-[40px] sm:w-[45px]" />
                <h4 className="text-[16px] sm:text-[18px]">SPREAD ACROSS</h4>
                <h2 className="text-[24px] sm:text-[28px] md:text-[30px]">
                  08 acres
                </h2>
              </div>
              <div className="text-white flex flex-col items-start">
                <img
                  src={key}
                  alt="Handover Date"
                  className="w-[40px] sm:w-[45px]" />
                <h4 className="text-[16px] sm:text-[18px]">HANDOVER DATE</h4>
                <h2 className="text-[24px] sm:text-[28px] md:text-[30px]">
                  DECEMBER 2028
                </h2>
              </div>
            </div>
            <h3 className="text-white text-[20px] sm:text-[22px] md:text-[25px] pb-3">
              6 Towers | S+36 floors | 76% Open area
            </h3>
            <button
              className="bg-[#C17B11] text-white px-5 py-2 rounded-full flex items-center gap-3 hover:bg-[#A0670E] transition"
              aria-label="Download Brochure">
              <img
                src={down}
                alt="Download Icon"
                className="w-[20px] sm:w-[24px]" />
              Brochure
            </button>
          </div>
        </div>
      </div>
      {/* key Highlights */}
      <section>
        <FeatureSection />
      </section>
      {/* our Project  */}
      <div
        className="max-w-full mx-auto px-4 sm:px-6 md:px-10  lg:px-16 py-6" id="OurContent"
      >
        <h2 className="text-[#182D41] font-bold text-[32px] sm:text-[36px] md:text-[44px] text-center">
          Our Products
        </h2>
        <p className="text-[#5D615B] font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-[28px] sm:leading-[35px] md:leading-[50px] text-center mt-2">
          The pinnacle offers luxury 3+1 BHK & 4+1 BHK apartments in Mohali Near
          Chandigarh
        </p>
        <div className="mt-6">
        <OurTabing/>
        </div>
      </div>
      {/* Project Status  */}
      <section>
        <ProjectStatus />
      </section>
      {/* pre launch offer  */}
      <div
        className="max-w-full h-[531px]  md:block  xs:hidden sm:hidden  "
        style={{
          backgroundImage: `url(${offer})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "531px",
        }}>
        <div className=" ps-[309px] pt-[37px] xs:items-center">
          <img src={ppt2} alt="" width={132} height={143} />
        </div>
        <div className="cursor-pointer " onClick={() => setOpenModal(true)} >
          <h2 className=" ps-[170px] xs:mx-auto text-[#F4AE43] text-[43.95px] leading-[42.21px]">
            Pre-Launch Offer!
          </h2>
          <h3 className=" ps-[187px] text-[27.95px] text-white  leading-[26.21px] py-3">
            Avail exclusive benefits on{" "}
          </h3>
          <h2 className=" ps-[118px] text-[#F4AE43] text-[47.15px] leading-[45.28px]">
            Pinnacle Apartments
          </h2>
          <h2 className="ps-[307px] text-white text-[35px] leading-[34px] pt-2">
            Mohali{" "}
          </h2>
          <h4 className=" ps-[180px] text-[17.13px] text-white leading-[16.45px]   pt-[29.43px]">
            <div className="   max-w-[350px] border border-white rounded p-2 ">
              Limited units available, don’t miss out!
            </div>
          </h4>
        </div>
      </div>
      <div
        className="max-w-full h-[531px]  md:hidden hidden sm:block xs:block "
        style={{
          backgroundImage: `url(${offer})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "531px",
        }}
      >
        <div className="  pt-[37px] flex  justify-center ">
          <img src={ppt2} alt="" width={132} height={143} />
        </div>
        <div className="   ">
          <h2 className=" text-center text-[#F4AE43] text-[43.95px] leading-[42.21px]">
            Pre-Launch Offer!
          </h2>
          <h3 className=" text-center  text-[27.95px] text-white  leading-[26.21px] py-3">
            Avail exclusive benefits on{" "}
          </h3>
          <h2 className=" text-center  text-[#F4AE43] text-[47.15px] leading-[45.28px]">
            Pinnacle Apartments
          </h2>
          <h2 className=" text-white text-center text-[35px] leading-[34px] pt-2">
            Mohali{" "}
          </h2>
          <h4 className=" text-[17.13px] text-center text-white leading-[16.45px]   pt-[29.43px]">
            <div className="items-center">
              <div className="flex justify-center max-w-[350px] text-center border border-gray-300 border-opacity-50 rounded-md p-3 font-medium">
                Limited units available, don’t miss out!
              </div>
            </div>

          </h4>
        </div>
      </div>
      {/* TESTIMONIAL */}
      <Testimonial />
      <YouIntrested />
      {/* <Interested/> */}
      {/* faq section */}
      <section>
        <div className="max-w-full pt-[117px] " id="faq">
          <h1 className="text-[#173F63] text-center mb-6  uppercase font-semibold text-[42px] leading-[57.79px]">
            Frequently asked questions
          </h1>
          <div className="max-w-full mx-auto ">
            <Accordion />
          </div>
        </div>
      </section>
      <YouIntrested />
      <div className="" id="contact">
        <div className="max-w-full" >
          <ContactForm />
        </div>
      </div>
      <div className="max-w-full  py-8  ">
        <SateliteToggle />
        <NumberContact />
      </div>
      {/*Downloads  */}
      <Downlod />
      <div className="max-w-full mt-5  ">
      </div>
    </>
  );
}