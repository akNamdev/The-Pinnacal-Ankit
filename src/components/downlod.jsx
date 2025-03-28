// import React from 'react'
import down1 from "../images/dwon1.png";
import down2 from "../images/down2.png";
import { useState } from "react";
import price from "../images/price.png";
import brou from "../images/brochure.png";
import site from "../images/site.png";
import downlod2 from "../images/downlod2.webp"
import { Modal } from "flowbite-react";
import theppt from "../images/theppt.webp";
import sals from "../images/sals.webp";
// import { motion } from "framer-motion";


export default function Downlod() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalSite, setopenModalSite] = useState(false);
  const [openModalPrice, setopenModalPrice] = useState(false);

  return (

    <>


      <div className="max-w-full  md:block lg:block sm:hidden xs:hidden  lg:h-[598px] xs:h-full sm:h-full   bg-[#173F63] ">
        <div className="grid lg:grid-cols-[45%_auto] md:grid-col-1  md:gap-5 sm:gap-5  relative">
          <div className="">
            <h1 className="text-[42px] leading-[57.79px] text-[white] font-bold md:pt-[139px] sm:pt-[50px] xs:pt-[70px] ps-[100.97px] pb-[38.39px]">
              DOWNLOADS
            </h1>
            <div className="space-y-4 ps-[100.97px]">
              <button onClick={() => setOpenModal(true)} className=" flex items-center  gap-3  w-[256px] h-[70.23px]  px-6 py-3 border border-white rounded-lg text-white hover:bg-white hover:text-[#0D335D] transition">
                <img src={brou} alt="" className="w-[36.01px] h-[32px]" />{" "}
                <p className="text-[23.1px] leading-[31.46px]"> Brochure </p>
                <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg w-[90%] md:w-4xl h-[70vh] pt-16  p-6 relative shadow-lg">

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenModal(false);
                        }}
                        className="absolute top-4 right-4 text-gray-600 text-3xl"
                      >
                        &times;
                      </button>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="text-center">
                          <h1 className="text-[35px] uppercase font-semibold text-gray-700">
                            Download Brochure
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
              </button>
              <button onClick={() => setopenModalSite(true)} className=" flex items-center gap-3  w-[256px] h-[70.23px]  px-6 py-3 bg-[#D1A854] text-white rounded-lg hover:bg-[#C19642] transition">
                <img src={site} alt="" />{" "}
                <p className="text-[23.1px] leading-[31.46px]">Site Plans</p>
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
              </button>
              <button onClick={() => setopenModalPrice(true)} className=" flex items-center    gap-5 w-[256px] h-[70.23px] px-8 py-3 border border-white rounded-lg text-white hover:bg-white hover:text-[#0D335D] transition">
                <img src={price} alt="" />
                <p className="text-[23.1px] leading-[31.46px]">Price List</p>
                <Modal dismissible show={openModalPrice} onClose={() => setopenModalPrice(false)}>
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg w-[90%] md:w-4xl h-[70vh] pt-16  p-6 relative shadow-lg">

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setopenModalPrice(false);
                        }}
                        className="absolute top-4 right-4 text-gray-600 text-3xl"
                      >
                        &times;
                      </button>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="text-center">
                          <h1 className="text-[35px] font-semibold uppercase text-gray-700">
                            Download Price List
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
              </button>
            </div>
          </div>
          <div
            className="md:animate-bounce sm:animate-bounce sm:mb-4 md:mb-4 lg:animate-none"

          >
            <img
              src={down1}
              className="h-[598px] w-[901px] xs:hidden md:hidden sm:hidden lg:block"
              alt="down1"
            />
          </div>
          <div className="absolute top-[193px] left-[480px] hidden  lg:block">
            <img src={down2} alt="" />
          </div>
        </div>
      </div>
      <div className="md:hidden lg:hidden sm:block xs:block  my-3 relative">
        <div className="bg-[#173f63]">
          <h1 className="text-center text-[40px] font-semibold text-white ">Downloads</h1>
          <div className="grid grid-cols-3 gap-3 ps-5 py-10">
            <div className="" onClick={() => setOpenModal(true)} >
              <img src={brou} alt="" height={70} width={70} className="border border-white rounded-full p-4" />
              <p className="text-white font-semibold  py-10">Boucher</p>
            </div>
            <div className="" onClick={() => setopenModalSite(true)}>
              <img src={site} alt="" height={70} width={70} className="text-white bg-white rounded-full p-3 " />
              <p className="text-white font-semibold  py-10">Site Plan</p>
            </div>
            <div className="" onClick={() => setopenModalPrice(true)}>
              <img src={price} alt="" height={60} width={60} className="border border-white rounded-full p-3" />
              <p className="text-white font-semibold  py-10">PriceList</p>
            </div>
          </div>
        </div>
                <div className="flex justify-center">
          <img src={downlod2} alt="" height={100} width={380} className="py-3 animate-bounceSlow" />
        </div>
        
      </div>
          </>


  )
}
