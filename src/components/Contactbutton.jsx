

import { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import cont from "../images/cont.webp"
import {  Modal } from "flowbite-react";
import theppt from "../images/theppt.webp";
import sals from "../images/sals.webp";

export default function ContactButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <div className="fixed bottom-6 right-6 flex flex-col  z-[9999999999999999] items-end space-y-2">
                {isOpen && (
                    <div className="bg-white p-4 rounded-2xl shadow-lg w-72">
                        <div className="flex items-center justify-between">
                            <h4 className="font-semibold">Need immediate assistance?</h4>
                            <button onClick={() => setIsOpen(false)}>
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="flex items-center mt-3">
                            <img
                                src={cont}
                                alt="Agent"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="ml-3">
                                <p className="text-sm font-medium">Realty Nivesh</p>
                                <p className="text-xs text-gray-500">Real Estate Agent</p>
                            </div>
                        </div>
                        <div className=" my-2">
                            <button onClick={() => setOpenModal(true)}
                                className='bg-[#173f63] w-full p-3  rounded-lg text-white font-semibold'>Contact Now</button>
                        </div>
                        <div className="mt-2 space-y-2">

                            <a
                                href="tel:+7976291139"
                                className="flex items-center p-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                            >
                                <Phone className="w-5 h-5 mr-2" /> Call Now
                            </a>
                            <a
                                href="https://wa.me/7976291139"
                                className="flex items-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                            >
                                <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
                            </a>

                        </div>
                    </div>
                )}              
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative flex items-center justify-center rounded-full shadow-lg w-24 h-24"                >
                    {/* Wave Animation */}
                    
                    <div className="wave-container absolute inset-0 flex items-center justify-center">
                        <div className="circle w-16 h-16 border-[10px] border-[#173f63] absolute delay1"></div>
                        <div className="circle w-16 h-16 border-[10px] border-[#173f63] absolute delay2"></div>
                        <div className="circle w-16 h-16 border-[10px] border-[#173f63] absolute delay3"></div>
                        <div className="circle w-16 h-16 border-[10px] border-[#173f63] absolute delay4"></div>
                        <div className="relative rounded-full">
                            <img                              
                                src={cont}
                                alt="Profile" className="w-20 h-20 rounded-full bg-center bg-cover"
                            />
                        </div>
                    </div>
                </button>
            </div>
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>

                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg w-[90%] md:w-4xl h-[70vh] pt-16  p-6 relative shadow-lg">
                        <button
                            onClick={() => setOpenModal(false)}
                            className="absolute top-4 right-4 text-gray-600 text-3xl"
                        >&times;</button>
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
        </>
    );
}
