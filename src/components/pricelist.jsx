import React from 'react'
import price1 from "../images/price1.png"
import price2 from "../images/price2.png"
import price3 from "../images/price3.png"
import { useState } from "react";
import theppt from "../images/theppt.webp";
import sals from "../images/sals.webp";
import { Modal } from "flowbite-react";
export default function Pricelist() {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div>
            {/* frist */}
            <div className="hidden md:flex w-[95%] mx-auto h-[200px] rounded-[22px] shadow-md">
                {/* Image Section */}
                <div className="w-[35%] h-full relative rounded-l-[22px] overflow-hidden">
                    <div className="w-full h-full relative transform transition duration-1000 hover:scale-110">
                        <img
                            src={price1}
                            alt="3 BHK Apartment"
                            layout="fill"
                            objectFit="cover"
                            className="absolute top-0 w-full h-[200px]"
                        />
                    </div>
                </div>
                {/* Details Section */}
                <div className="bg-[#F8F2E8] w-[38%] pl-3 py-2 flex flex-col justify-center h-full">
                    <h4 className="text-[#173F63] font-bold text-[19px] uppercase">3 BHK</h4>
                    <div className="text-[#173F63] mt-1 font-semibold text-[14px] uppercase">
                        2300-2500 SQFT.
                    </div>
                    <p className="text-[#173F63] mt-2 text-[12px] capitalize">
                        Introducing our 3BHK Apartments @ The Pinnacle Mohali, a magnificent
                        testament to luxury and modern living. These stunning towers offer
                        spacious living spaces.
                    </p>
                </div>
                {/* Price Section */}
                <div className="w-[27%] cursor-pointer rounded-r-[22px] overflow-hidden relative" >
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-[#173F63] transition-transform duration-500"
                    >
                        {/* <h6 className="font-medium text-[15px] text-white">Unlock Price</h6> */}
                    </div>
                    <div onClick={() => setOpenModal(true)}
                        className="absolute inset-0 bg-cover bg-[#0000003d] flex flex-col justify-center items-center transition-transform duration-500 "    >
                        <h6 className="text-white font-semibold text-[16px]">Company Price</h6>
                        <p className="text-white font-medium text-[22px] line-through">
                            ₹ 10,500/- <span className="text-[13px]">Per Sqft</span>
                        </p>
                        <h6 className="text-white font-semibold text-[20px] mt-1">Our Price</h6>
                        <p className="text-white font-bold text-[35px] py-2">₹ 9950/-*</p>
                        <p className="text-white text-[13px]">Per Sqft</p>

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
                                        <h1 className="text-[35px] font-semibold text-gray-500">
                                            View Price Sheet
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
                </div>
            </div>;
            <div className="block md:hidden">
                <div className="relative w-full h-[310px] rounded overflow-hidden">
                    <img
                        alt="Apartment Image"
                        loading="lazy"
                        decoding="async"
                        className="object-cover w-full h-full"
                        src={price1} />
                </div>
                <div className="mt-3.5">
                    <div className="relative max-w-[300px] h-[50px] flex items-center pl-3.5 bg-[#b26827] bg-bottom text-white tracking-wide font-semibold text-[18px]">
                        3 BHK+S | 2500-2800 SQFT.
                        <div className="absolute top-0 right-0 w-0 h-0 border-t-[50px] border-t-transparent border-r-[50px] border-r-white"></div>
                    </div>
                    <p className="mt-3.5 text-sm text-gray-500  font-semibold leading-snug">
                        Introducing our 3BHK+S Apartments @ The Pinnacle Mohali, A magnificent testament to luxury and modern living. These stunning towers offer spacious living spaces.
                    </p>
                </div>
                <div className="w-full mt-5 relative rounded-lg">
                    <div onClick={() => setOpenModal(true)} className="group flex justify-center items-center text-white text-[18px] font-semibold bg-[#173F63] hover:bg-[b26827] rounded-md gap-4 px-7 py-4 w-full cursor-pointer">
                        <span>
                            <svg width="18" height="23" className="fill-current" viewBox="0 0 43 56" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.9739 18.9836H34.3744V13.7846C34.3744 6.61 28.5515 0.787109 21.3769 0.787109C14.2022 0.787109 8.37933 6.61 8.37933 13.7846V18.9836H5.77982C2.92037 18.9836 0.580811 21.3232 0.580811 24.1827V50.1777C0.580811 53.0372 2.92037 55.3767 5.77982 55.3767H36.9739C39.8333 55.3767 42.1729 53.0372 42.1729 50.1777V24.1827C42.1729 21.3232 39.8333 18.9836 36.9739 18.9836ZM21.3769 42.3792C18.5174 42.3792 16.1778 40.0396 16.1778 37.1802C16.1778 34.3207 18.5174 31.9812 21.3769 31.9812C24.2363 31.9812 26.5759 34.3207 26.5759 37.1802C26.5759 40.0396 24.2363 42.3792 21.3769 42.3792ZM29.4353 18.9836H13.3184V13.7846C13.3184 9.33948 16.9317 5.72617 21.3769 5.72617C25.822 5.72617 29.4353 9.33948 29.4353 13.7846V18.9836Z"></path>
                            </svg>
                        </span>
                        Unlock Price
                    </div>
                    <div className="hidden duration-1000 bg-backgroud-theme-local bg-cover w-full flex-col rounded-md overflow-hidden">
                        <div className="w-full flex justify-center py-4">
                            <div className="text-[#173F63] text-center font-semibold text-[16px]">
                                Company Price
                                <p className="relative font-medium text-[22px] text-[#173F63] after:absolute after:left-1/2 after:top-1/2 after:w-full after:h-[1px] after:bg-red-500 after:-translate-x-1/2 after:-translate-y-1/2">
                                    ₹ 10,500/-
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <svg width="117" height="3" viewBox="0 0 117 3" xmlns="http://www.w3.org/2000/svg">
                                <path d="M58.5002 2.7124V0.961426L0.338924 2.12365L58.5002 2.7124Z" fill="black"></path>
                                <path d="M58.5001 2.7124V0.961426L116.661 2.12365L58.5001 2.7124Z" fill="black"></path>
                            </svg>
                        </div>
                        <div className="w-full py-4 flex flex-col justify-center items-center">
                            <h6 className="font-semibold text-[16px] text-[#173F63]">Our Price</h6>
                            <p className="font-bold text-[36px] text-[#173F63]">₹ 9950/-*</p>
                            <p className="text-[6px] text-[#173F63]">T&C Apply</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Secound */}
            <div className="hidden md:flex w-[95%] mx-auto h-[200px] rounded-[22px] shadow-md">
                {/* Image Section */}
                <div className="w-[35%] h-full relative rounded-l-[22px] overflow-hidden">
                    <div className="w-full h-full relative transform transition duration-1000 hover:scale-110">
                        <img
                            src={price2}
                            alt="3 BHK Apartment"
                            layout="fill"
                            objectFit="cover"
                            className="absolute top-0 w-full h-[200px]"
                        />
                    </div>
                </div>
                {/* Details Section */}
                <div className="bg-[#F8F2E8] w-[38%] pl-3 py-2 flex flex-col justify-center h-full">
                    <h4 className="text-[#173F63] font-bold text-[19px] uppercase">3 BHK</h4>
                    <div className="text-[#173F63] mt-1 font-semibold text-[14px] uppercase">
                        2300-2500 SQFT.
                    </div>
                    <p className="text-[#173F63] mt-2 text-[12px] capitalize">
                        Introducing our 3BHK Apartments @ The Pinnacle Mohali, a magnificent
                        testament to luxury and modern living. These stunning towers offer
                        spacious living spaces.
                    </p>
                </div>
                {/* Price Section */}
                <div
                    className="w-[27%] cursor-pointer rounded-r-[22px] overflow-hidden relative"

                >
                    <div
                        className="absolute inset-0 flex flex-col justify-center items-center bg-[#173F63] transition-transform duration-500"
                    >
                        {/* <h6 className="font-medium text-[15px] text-white">Unlock Price</h6> */}
                    </div>

                    <div onClick={() => setOpenModal(true)}
                        className="absolute inset-0 bg-cover bg-[#0000003d] flex flex-col justify-center items-center transition-transform duration-500 "    >
                        <h6 className="text-white font-semibold text-[16px]">Company Price</h6>
                        <p className="text-white font-medium text-[22px] line-through">
                            ₹ 10,500/- <span className="text-[13px]">Per Sqft</span>
                        </p>
                        <h6 className="text-white font-semibold text-[20px] mt-1">Our Price</h6>
                        <p className="text-white font-bold text-[35px] py-2">₹ 9950/-*</p>
                        <p className="text-white text-[13px]">Per Sqft</p>
                    </div>
                </div>
            </div>
            <div className="block md:hidden">
                <div className="relative w-full h-[310px] rounded overflow-hidden">
                    <img
                        alt="Apartment Image"
                        loading="lazy"
                        decoding="async"
                        className="object-cover w-full h-full"
                        src={price2}
                    />
                </div>
                <div className="mt-3.5">
                    <div className="relative max-w-[300px] h-[50px] flex items-center pl-3.5 bg-[#b26827] bg-bottom text-white tracking-wide font-semibold text-[18px]">
                        3 BHK+S | 2800-3200 SQFT.
                        <div className="absolute top-0 right-0 w-0 h-0 border-t-[50px] border-t-transparent border-r-[50px] border-r-white"></div>
                    </div>
                    <p className="mt-3.5 text-sm text-gray-500 font-semibold leading-snug p-2">
                        Introducing our 3bhk+s  Apartments @ The Pinnacle Mohali  , A magnificent testament to luxury and modern living. These stunning towers offer spacious living spaces.
                    </p>
                </div>
                <div onClick={() => setOpenModal(true)} className="w-[90%] mx-auto mt-5 relative rounded-lg">
                    <div className="group flex justify-center items-center text-white text-[18px] font-semibold bg-[#173F63] hover:bg-[b26827] rounded-md gap-4  px-2 py-4 w-full cursor-pointer ">
                        <span>
                            <svg width="18" height="23" className="fill-current" viewBox="0 0 43 56" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.9739 18.9836H34.3744V13.7846C34.3744 6.61 28.5515 0.787109 21.3769 0.787109C14.2022 0.787109 8.37933 6.61 8.37933 13.7846V18.9836H5.77982C2.92037 18.9836 0.580811 21.3232 0.580811 24.1827V50.1777C0.580811 53.0372 2.92037 55.3767 5.77982 55.3767H36.9739C39.8333 55.3767 42.1729 53.0372 42.1729 50.1777V24.1827C42.1729 21.3232 39.8333 18.9836 36.9739 18.9836ZM21.3769 42.3792C18.5174 42.3792 16.1778 40.0396 16.1778 37.1802C16.1778 34.3207 18.5174 31.9812 21.3769 31.9812C24.2363 31.9812 26.5759 34.3207 26.5759 37.1802C26.5759 40.0396 24.2363 42.3792 21.3769 42.3792ZM29.4353 18.9836H13.3184V13.7846C13.3184 9.33948 16.9317 5.72617 21.3769 5.72617C25.822 5.72617 29.4353 9.33948 29.4353 13.7846V18.9836Z"></path>
                            </svg>
                        </span>
                        Unlock Price
                    </div>
                    <div className="hidden duration-1000 bg-backgroud-theme-local bg-cover w-full flex-col rounded-md overflow-hidden">
                        <div className="w-full flex justify-center py-4">
                            <div className="text-[#173F63] text-center font-semibold text-[16px]">
                                Company Price
                                <p className="relative font-medium text-[22px] text-[#173F63] after:absolute after:left-1/2 after:top-1/2 after:w-full after:h-[1px] after:bg-red-500 after:-translate-x-1/2 after:-translate-y-1/2">
                                    ₹ 10,500/-
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <svg width="117" height="3" viewBox="0 0 117 3" xmlns="http://www.w3.org/2000/svg">
                                <path d="M58.5002 2.7124V0.961426L0.338924 2.12365L58.5002 2.7124Z" fill="black"></path>
                                <path d="M58.5001 2.7124V0.961426L116.661 2.12365L58.5001 2.7124Z" fill="black"></path>
                            </svg>
                        </div>
                        <div className="w-full py-4 flex flex-col justify-center items-center">
                            <h6 className="font-semibold text-[16px] text-[#173F63]">Our Price</h6>
                            <p className="font-bold text-[36px] text-[#173F63]">₹ 9950/-*</p>
                            <p className="text-[6px] text-[#173F63]">T&C Apply</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* third */}
            <div className="hidden md:flex w-[95%] mx-auto h-[200px] rounded-[22px] shadow-md">
                {/* Image Section */}
                <div className="w-[35%] h-full relative rounded-l-[22px] overflow-hidden">
                    <div className="w-full h-full relative transform transition duration-1000 hover:scale-110">
                        <img
                            src={price3}
                            alt="3 BHK Apartment"
                            layout="fill"
                            objectFit="cover"
                            className="absolute top-0 w-full h-[200px]"
                        />
                    </div>
                </div>
                {/* Details Section */}
                <div className="bg-[#F8F2E8] w-[38%] pl-3 py-2 flex flex-col justify-center h-full">
                    <h4 className="text-[#173F63] font-bold text-[19px] uppercase">3 BHK</h4>
                    <div className="text-[#173F63] mt-1 font-semibold text-[14px] uppercase">
                        2300-2500 SQFT.
                    </div>
                    <p className="text-[#173F63] mt-2 text-[12px] capitalize">
                        Introducing our 3BHK Apartments @ The Pinnacle Mohali, a magnificent
                        testament to luxury and modern living. These stunning towers offer
                        spacious living spaces.
                    </p>
                </div>
                {/* Price Section */}
                <div
                    className="w-[27%] cursor-pointer rounded-r-[22px] overflow-hidden relative">
                    <div
                        className="absolute inset-0 flex flex-col justify-center items-center bg-[#173F63] transition-transform duration-500"
                    > </div>
                    <div onClick={() => setOpenModal(true)}
                        className="absolute inset-0 bg-cover bg-[#0000003d] flex flex-col justify-center items-center transition-transform duration-500 "    >
                        <h6 className="text-white font-semibold text-[16px]">Company Price</h6>
                        <p className="text-white font-medium text-[22px] line-through">
                            ₹ 10,500/- <span className="text-[13px]">Per Sqft</span>
                        </p>
                        <h6 className="text-white font-semibold text-[20px] mt-1">Our Price</h6>
                        <p className="text-white font-bold text-[35px] py-2">₹ 9950/-*</p>
                        <p className="text-white text-[13px]">Per Sqft</p>
                    </div>
                </div>
            </div>;
            <div className="block md:hidden">
                <div className="relative w-full h-[310px] rounded overflow-hidden">
                    <img
                        alt="Apartment Image"
                        loading="lazy"
                        decoding="async"
                        className="object-cover w-full h-full"
                        src={price3}
                    />
                </div>
                <div className="mt-3.5">
                    <div className="relative max-w-[300px] h-[50px] flex items-center pl-3.5 bg-[#b26827] bg-bottom text-white tracking-wide font-semibold text-[18px]">
                        4 BHK+S | 3000-3500 SQFT.
                        <div className="absolute top-0 right-0 w-0 h-0 border-t-[50px] border-t-transparent border-r-[50px] border-r-white"></div>
                    </div>
                    <p className="mt-3.5 text-sm text-gray-500 font-semibold leading-snug p-2">
                        Introducing our 3bhk+s  Apartments @ The Pinnacle Mohali  , A magnificent testament to luxury and modern living. These stunning towers offer spacious living spaces.
                    </p>
                </div>
                <div
                    className="w-full mt-5 relative rounded-lg">
                    <div onClick={() => setOpenModal(true)}
                        className="group flex justify-center items-center text-white text-[18px] font-semibold bg-[#173F63] hover:bg-[b26827] rounded-md gap-4 px-7 py-4 w-full cursor-pointer">
                        <span>
                            <svg width="18" height="23" className="fill-current" viewBox="0 0 43 56" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.9739 18.9836H34.3744V13.7846C34.3744 6.61 28.5515 0.787109 21.3769 0.787109C14.2022 0.787109 8.37933 6.61 8.37933 13.7846V18.9836H5.77982C2.92037 18.9836 0.580811 21.3232 0.580811 24.1827V50.1777C0.580811 53.0372 2.92037 55.3767 5.77982 55.3767H36.9739C39.8333 55.3767 42.1729 53.0372 42.1729 50.1777V24.1827C42.1729 21.3232 39.8333 18.9836 36.9739 18.9836ZM21.3769 42.3792C18.5174 42.3792 16.1778 40.0396 16.1778 37.1802C16.1778 34.3207 18.5174 31.9812 21.3769 31.9812C24.2363 31.9812 26.5759 34.3207 26.5759 37.1802C26.5759 40.0396 24.2363 42.3792 21.3769 42.3792ZM29.4353 18.9836H13.3184V13.7846C13.3184 9.33948 16.9317 5.72617 21.3769 5.72617C25.822 5.72617 29.4353 9.33948 29.4353 13.7846V18.9836Z"></path>
                            </svg>
                        </span>
                        Unlock Price
                    </div>
                    <div
                        className="hidden duration-1000 bg-backgroud-theme-local bg-cover w-full flex-col rounded-md overflow-hidden">
                        <div className="w-full flex justify-center py-4">
                            <div className="text-[#173F63] text-center font-semibold text-[16px]">
                                Company Price
                                <p className="relative font-medium text-[22px] text-[#173F63] after:absolute after:left-1/2 after:top-1/2 after:w-full after:h-[1px] after:bg-red-500 after:-translate-x-1/2 after:-translate-y-1/2">
                                    ₹ 10,500/-
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex justify-center">
                            <svg width="117" height="3" viewBox="0 0 117 3" xmlns="http://www.w3.org/2000/svg">
                                <path d="M58.5002 2.7124V0.961426L0.338924 2.12365L58.5002 2.7124Z" fill="black"></path>
                                <path d="M58.5001 2.7124V0.961426L116.661 2.12365L58.5001 2.7124Z" fill="black"></path>
                            </svg>
                        </div>
                        <div className="w-full py-4 flex flex-col justify-center items-center">
                            <h6 className="font-semibold text-[16px] text-[#173F63]">Our Price</h6>
                            <p className="font-bold text-[36px] text-[#173F63]">₹ 9950/-*</p>
                            <p className="text-[6px] text-[#173F63]">T&C Apply</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
