import React from 'react'
import { useState } from "react";
import { Modal } from "flowbite-react";
import theppt from "../images/theppt.webp";
import sals from "../images/sals.webp";
import banner from "../images/banner.png";
import bg from "../images/bg.png";
import ab2 from "../images/ab2.png";
import ScrollCounterSection from './counter';
// import { Tabing } from './OurTabing2';
import hightbg from "../images/hightbg.png";
import SilckSlider from './silckSlider';
import FeatureSection from './keyHeilight';
import UnitPlans from './unitPlan';
import Pricelist from './pricelist';
import TerraceLounge from '../components/tringer';
import ProjectStatus from './projectStatus';
import Accordion from './Accordion';
import YouIntrested from './youIntrested';
import BankSlider from './approveBank';
import ContactForm from './contactForm';
import SateliteToggle from './sateliteToggle';
import NumberContact from './numberContact';
import Testimonial from './testimonial';
import Downlod from './downlod';
import map from "../images/map.webp";


export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [isGoogleMap, setIsGoogleMap] = useState(true)
  return (
    <div>
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
      {/* <Tabing /> */}
      <div className="py-20">
        <h2 className="text-[#173F63] text-[32px] text-center font-bold tracking-wider uppercase ">
          Location Map
        </h2>
        <p className="text-gray-500 text-[22px] text-center mb-3">
          Strategically located in the heart of Mohali, The Pinnacle offers
          seamless connectivity to Chandigarh, IT hubs, and key urban
          conveniences.
        </p>
        <div className=
          "w-full ">
          <div className="grid lg:grid-cols-[70%_auto] md:grid-cols-1 sm:grid-cols-1">
            <div className="">
              <div className="">
                <div className="relative w-full h-full">
                  <div className="relative w-full h-full overflow-hidden">
                    {isGoogleMap ? (
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.0115613707653!2d-73.96960812425448!3d40.8496699659248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f7cb6988eb31%3A0xd4bf7e0161358af2!2sThe%20Pinnacle%20Apartments!5e0!3m2!1sen!2sin!4v1733734228434!5m2!1sen!2sin"
                        title="tab-content"
                        width="100%"
                        height="475px"
                        allowFullScreen
                        loading="eager"
                      />
                    ) : (
                      <div className="w-full h-full">
                        <div
                          className="max-w-full bg-[#173F63] h-[468px] bg-cover bg-center flex items-center justify-center"
                          style={{ backgroundImage: `url(${hightbg})` }}
                        >
                          <img
                            src={map}
                            alt="Google Map Placeholder"
                            className="w-[400px] h-[350px]"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <div
                        style={{ zIndex: 10 }}
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 flex overflow-hidden rounded-bl-lg rounded-br-lg"
                      >
                        <button
                          aria-label="Near By"
                          className={`outline-none py-2 px-5 lg:px-10 rounded-bl-2xl sm:rounded-bl-3xl   font-semibold border border-gray-300 text-sm lg:text-lg tracking-wide
              ${isGoogleMap ? "bg-[#173F63] text-white" : "bg-white text-[#173F63]"}`}
                          onClick={() => setIsGoogleMap(true)}
                        >
                          Near By
                        </button>

                        <button
                          aria-label="Google Map"
                          className={`outline-none py-2 px-5 lg:px-10  rounded-br-2xl sm:rounded-br-3xl  font-semibold border text-sm lg:text-lg tracking-wide
              ${isGoogleMap ? "bg-white text-[#173F63]" : "bg-[#173F63] text-white"}`}
                          onClick={() => setIsGoogleMap(false)}
                        > Google Map
                        </button>
                      </div>
                </div>
              </div>
            </div>
            <div className="">
              <video
                loop
                muted
                autoPlay
                className="object-cover w-[400px] h-[468px] "
                src="https://thepinnacle.realtynivesh.com/videos/Location-video.mp4"
                alt="Location Video"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <h2 className="text-[#173F63] text-[32px] text-center font-semibold tracking-wider ">
          NEARBY,{" "}
          <span className="font-bold text-[32] uppercase">
            {" "}
            The Pinnacle{" "}
          </span>
        </h2>
        <SilckSlider />
      </div>
      <FeatureSection />
      <UnitPlans />
      <section className="py-10" id="Price-List">
        <div className="">
          <h1 className=" text-center font-bold text-[#173F63] text-[40px] leading-[55.04px]">Price List </h1>
          <p className="text-[18px] text-center pb-10 leading-[21.39px]">Explore The PINNACLE mohali Price list, Payment Plan and Latest offers</p>
          <Pricelist />
        </div>
      </section>
      <section className='my-10'>
        <h1 className='text-[40px] leading-[55.04px] text-center font-bold text-[#173F63] pb-3 uppercase'> Amenities</h1>
        <p className='text-center text-[#5A5454] pb-10 text-[18px] leading-[21.39px] '>Discover the Premium amenities at The Pinnacle Mohali
        </p>
        <TerraceLounge />
      </section>
      <section>
        <ProjectStatus />
      </section>
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
      <YouIntrested/>      
      <section className="my-10">
        <h2 className=" text-center font-bold text-4xl text-[#173F63]">Approved Banks</h2>
        <p className="text-2xl text-center  text-black py-5">Easy & Hassle-Free Bank Loan Options for Your Dream Home</p>
        <BankSlider />
      </section>
      <ContactForm/>
      <div className="py-5">
      <SateliteToggle/>
      </div>
      <NumberContact/>
      <Testimonial/>
      <Downlod/>
      <div className="py-5"></div>

    </div>
  )
}
