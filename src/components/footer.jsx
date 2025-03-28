import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import rn from "../images/Rn.png";
import fut from "../images/futo.png";
import ContactButton from "./Contactbutton";
// import arrow from '../images/arrow.png'

const Footer = () => {
  return (
    <>
      <footer className=" text-white py-8 relative bg-black"
      // style={{
      //   backgroundImage: "url(https://thepinnacle.realtynivesh.com/images/footer-bg-image.webp)",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",// }}      
      >
        {/* <div className="absolute w-full h-full bg-black opacity-50"></div> */}


        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between border-b border-gray-600 pb-6">
            <div className="flex items-center mx-auto space-x-6 space ">
              <img
                src={rn}
                alt="Realty Nivesh"
                className="w-[164px] h-[89.09px]"
              />
              <img
                src={fut}
                alt="Pinnacle"
                className="w-[86.23px] h-[89.64px]"
              />
            </div>
          </div>
          <nav className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:flex flex-wrap justify-center md:justify-between gap-4 text-[17.85px] leading-[24.31px] md:ps-[141.95px] md:pe-[136.79px] pt-6 lg:mt-0">
            <a href="/" className="hover:text-yellow-400 transition text-center">About Us</a>
            <a href="/#OurContent" className="hover:text-yellow-400 transition text-center">Products</a>
            <a href="location" className="hover:text-yellow-400 transition text-center">Location Map</a>
            <a href="plans" className="hover:text-yellow-400 transition text-center">Floor Plans</a>
            <a href="Price" className="hover:text-yellow-400 transition text-center">Price</a>
            <a href="Amenities" className="hover:text-yellow-400 transition text-center">Amenities</a>
            <a href="Gallery" className="hover:text-yellow-400 transition text-center">Gallery</a>
            <a href="#Faq" className="hover:text-yellow-400 transition text-center">FAQ</a>
            <a href="#" className="hover:text-yellow-400 transition text-center">Download</a>
            <a href="/#contact" className="hover:text-yellow-400 transition text-center">Contact Us</a>
          </nav>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-6">
            <div className="flex items-center space-x-4 text-[21.74px] leading-[29.61px]">
              <FaPhoneAlt className="text-white" />
              <a href="tel:+918968066698" className="text-white hover:underline">
                +91 89680 66698
              </a>
              <FaPhoneAlt className="text-white" />
              <a href="tel:+919988010405" className="text-white hover:underline">
                +91 99880 10405
              </a>
            </div>
            <div className="flex space-x-4 text-xl mt-4 md:mt-0">
              <FaInstagram className="hover:text-yellow-400 w-[27.13px] h-[27.13px] cursor-pointer bg-white text-black rounded-full p-1" />
              <FaFacebookF className="hover:text-yellow-400  w-[27.13px] h-[27.13px] cursor-pointer bg-white text-black rounded-full p-1" />
              <FaTwitter className="hover:text-yellow-400  w-[27.13px] h-[27.13px] cursor-pointer bg-white text-black rounded-full p-1" />
              <FaPinterest className="hover:text-yellow-400  w-[27.13px] h-[27.13px] cursor-pointer bg-white text-black rounded-full p-1" />
              <FaYoutube className="hover:text-yellow-400  w-[27.13px] h-[27.13px] cursor-pointer bg-white text-black rounded-full p-1" />
            </div>
          </div>
          <div className="bg-black text-center    rounded-md">
            <span className=" text-white text-[24.52px] leading-[33.12px]">
              SALES PARTNER{" "}
            </span>
            <span className="text-[#FC6602] text-[19.81px] leading-[26.76px]  ms-2">
              REALTY{" "}
            </span>
            <span className="text-[#1EC8EC] text-[19.81px] leading-[26.76px] ">
              {" "}
              NIVESH :{" "}
            </span>
            <span className="text-[19.81px] leading-[26.76px">
              Showroom No. 12, Level 2, UPTOWN INSIGNIA PR-7 Airport Road,
              Zirakpur, Punjab rajes
            </span>
          </div>
        </div>
      </footer>
      <div className="flex flex-col md:flex-row justify-between align-center gap-[30px] bg-[#F1F1F1] text-sm text-black py-4 ">
        <div className="flex space-x-4 justify-center align-center md:justify-start ps-6">
          <a href="#">Disclaimer</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
        <p className="text-center md:text-right pe-5">
          
          {" "}
                    © Copyright 2024 SUSHMA GROUP. REALTY NIVESH All Rights Reserved.
        </p>
      </div>
      <ContactButton />
    </>
  );
};

export default Footer;