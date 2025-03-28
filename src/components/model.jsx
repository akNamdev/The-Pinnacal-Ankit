import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import theppt from "../images/theppt.webp";
import sals from "../images/sals.webp";

export function Model() {
    const [openModal, setOpenModal] = useState(false);
    return (
            <>
            <Button className="w-[300px] bg-[black] " onClick={() => setOpenModal(true)}>Contact Us </Button>
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Body>
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
                </Modal.Body>
            </Modal>
        </>
    );
}
