import SilckSlider from "../components/silckSlider";
import whyimg1 from "../images/whyimg1.webp";
import whyimg2 from "../images/whyimg2.webp";
import whyimg3 from "../images/whyimg3 (1).webp";
import whyimg4 from "../images/whyimg4.webp";
import map from "../images/map.webp";
import hightbg from "../images/hightbg.png";
import theppt from "../images/theppt.webp";
import sals from "../images/sals.webp";
import { useState } from "react";
import location from "../images/locationsvg.png";
import coll from "../images/collsvg.png";
import message from "../images/msgsvg.png";
import Downlod from "../components/downlod";
import YouIntrested from "../components/youIntrested";
import SateliteToggle from "../components/sateliteToggle";
import locatbg from "../images/locatbg.png"
import Accordion from "../components/Accordion";

export default function Location() {
  const [isGoogleMap, setIsGoogleMap] = useState(true)
 
  return (
    <>
      <div className=" relative ">

        <div className="relative">

        </div>
        <div
          className="w-full h-[80vh] flex justify-center items-center relative"
          style={{
            backgroundImage: `url(${locatbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute w-full h-full bg-[#00000080]"></div>
          <h1 className="text-white z-10 text-5xl uppercase text-center font-semibold">
            Live at the heart of all the <br /> action!
          </h1>
        </div>

        {/* Why Mohali */}
        <section className="max-w-full mt-7">
          <div>
            <h1 className="text-[#173F63] font-bold tracking-wider text-left block sm:hidden md:hidden text-lg xs:text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px] leading-[40px] sm:leading-[50px] md:leading-[60px] uppercase ps-5 py-5 mb-2">
              WHY
              <br />
              Mohali- The Pinnacle?
            </h1>

            <h1 className="text-[#173F63] font-bold tracking-wider md:text-center xs:text-center hidden md:block text-lg xs:text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px] leading-[40px] sm:leading-[50px] md:leading-[60px] uppercase ps-5 py-5 mb-2 lg:text-left">
              WHY
              <br />
              Mohali- The Pinnacle?
            </h1>



            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className=" ps-3">
                <img
                  src={whyimg1}
                  alt=""
                  className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px]"
                />
                <h2 className="text-2xl font-semibold p-3 px-3">Why Mohali.</h2>
                <p className="p-2 text-gray-500">
                  Mohali is a thriving urban hub known for its excellent
                  infrastructure, strategic location near Chandigarh, robust
                  connectivity, and modern lifestyle amenities, making it a
                  prime destination for both residential and commercial
                  investments.
                </p>
              </div>

              <div className=" border-l-1 border-gray-300 ps-3">
                <img
                  src={whyimg2}
                  alt=""
                  className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px]"
                />
                <h2 className="text-2xl font-semibold p-3  px-3">
                  Stay Connected..
                </h2>
                <p className="p-2 text-gray-500">
                  Mohali is a thriving urban hub known for its excellent
                  infrastructure, strategic location near Chandigarh, robust
                  connectivity, and modern lifestyle amenities, making it a
                  prime destination for both residential and commercial
                  investments.
                </p>
              </div>

              <div className=" border-l-1 border-gray-300 ps-3  px-3">
                <img
                  src={whyimg3}
                  alt=""
                  className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px]"
                />
                <h2 className="text-2xl font-semibold p-3">
                  Great Infrastructure.
                </h2>
                <p className="p-2 text-gray-500">
                  Mohali is a thriving urban hub known for its excellent
                  infrastructure, strategic location near Chandigarh, robust
                  connectivity, and modern lifestyle amenities, making it a
                  prime destination for both residential and commercial
                  investments.
                </p>
              </div>

              <div className=" border-l-1 px-3 border-gray-300 ps-3">
                <img
                  src={whyimg4}
                  alt=""
                  className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px]"
                />
                <h2 className="text-2xl font-semibold p-3">
                  Best Investment Opportunities.
                </h2>
                <p className="p-2 text-gray-500">
                  Mohali is a thriving urban hub known for its excellent
                  infrastructure, strategic location near Chandigarh, robust
                  connectivity, and modern lifestyle amenities, making it a
                  prime destination for both residential and commercial
                  investments.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Nearby, The Pinnacle */}
        <section className="max-w-full mt-10">
          <h2 className="text-[#173F63] text-[32px] text-center font-semibold tracking-wider ">
            NEARBY,{" "}
            <span className="font-bold text-[32] uppercase">
              {" "}
              The Pinnacle{" "}
            </span>
          </h2>
           <SilckSlider />
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
        </section>
        {/* Contact Form  */}
        <section>
          <YouIntrested />
        </section>
        {/* faq section */}
        <section>
          <div className="max-w-full pt-[50px] " id="faq">
            <h1 className="text-[#173F63] text-center mb-6  uppercase font-semibold text-[42px] leading-[57.79px]">
              Frequently asked questions
            </h1>
            <div className="max-w-[1548px] mx-auto ">
              <Accordion />
            </div>
          </div>
        </section>
        {/* We Are Excited To Meet You section */}
        <section className="my-10">
          <div className="max-w-[1200px] mx-auto h-auto bg-white my-7 text-black px-4 relative">
            {/* <button className="absolute top-0 right-4 font-bold text-4xl">
              &times;
            </button> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="mx-auto">
                <h1 className="text-[35px] font-semibold py-6 text-center text-gray-500">
                  We Are Excited To Meet You
                </h1>
                <img
                  src={theppt}
                  alt=""
                  className="w-[290px] md:w-[350px] mx-auto py-3"
                />
                <img
                  src={sals}
                  alt=""
                  className="w-[200px] md:w-[250px] pt-[50px] mx-auto"
                />
              </div>
              <div className="mx-auto mt-7">
                <input
                  type="text"
                  name="name"
                  id=""
                  required="enter your name"
                  placeholder="Your Name"
                  className="w-full md:w-[80%] focus:outline-none px-3 mb-6 border-t-0 border-l-0 border-r-0 py-2 border-b-2 border-gray-300"
                />
                <input
                  type="email"
                  name="email"
                  id=""
                  required="enter your email"
                  placeholder="Enter Your Email Address"
                  className="w-full md:w-[80%] focus:outline-none px-3 mb-6 border-t-0 border-l-0 border-r-0 py-2 border-b-2 border-gray-300"
                />
                <input
                  type="tel"
                  name="phone"
                  id=""
                  required="enter your phone"
                  placeholder="Enter Your Phone Number"
                  className="w-full md:w-[80%] focus:outline-none px-3 mb-6 border-t-0 border-l-0 border-r-0 py-2 border-b-2 border-gray-300"
                />

                <div className="flex gap-8 items-center">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    className="transform scale-150 ms-3 text-2xl"
                    value=""
                  />
                  <p className="text-[14px] text-gray-400">
                    I agree to receive newsletters, or relevant marketing
                    content <br /> and The Pinnacle Terms and Conditions
                  </p>
                </div>

                <button className="bg-[#173F63] py-2 my-6 text-white rounded-full w-full md:w-[80%]">
                  Get Otp
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* map satelite or  */}
        <div className="py-10">
          <SateliteToggle />
        </div>
        {/* Contact Us section */}
        <section className="max-w-full  py-5">
          <h2 className="upperCase text-[40px] text-[#173F63] font-bold text-center py-5">
            Contact us
          </h2>
          <div className="hidden lg:block">
            <div className="grid grid-cols-1 relative md:grid-cols-3 gap-6 bg-[#173F63] text-white mt-8 py-8 px-4 md:px-16 rounded-lg">
              <div className="flex flex-col items-center text-center">
                <div className="p-3  pb-[30px]  ">
                  <img
                    src={coll}
                    alt=""
                    className="absolute top-[-20px] left-[190px]"
                  />
                </div>
                <p>+91 89680 66698</p>
                <p>+91 99880 10405</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className=" pb-[30px]   ">
                  <img
                    src={message}
                    alt=""
                    className="absolute top-[-20px] left-[630px]"
                  />
                </div>
                <p>sales@realtynivesh.com</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className=" pb-[30px]  ">
                  <img src={location} alt="" className="absolute top-[-20px]" />
                </div>
                <p>Showroom No. 12 Level 2, UPTOWN</p>
                <p>Insignia PR-7 Airport Road, Zirakpur, Punjab</p>
              </div>
            </div>
          </div>
          <div className=" bg-[#f1f1f1] lg:hidden sm:block md:block text-white mt-8 py-8 px-4 md:px-16 rounded-lg">
            <div className=" flex mb-2 bg-[#173F63] flex-row gap-3 justify-around items-center text-center border-b-5 rounded-lg border-white p-4">
              <img src={coll} alt="" />

              <p className="text-[30px]">+91 89680 66698</p>
            </div>
            <div className=" flex flex-row mb-2 bg-[#173F63]  justify-around items-center text-center  border-b-5 rounded-lg border-white  p-4">
              <img src={coll} alt="" />

              <p className="text-[30px]">+91 89680 66698</p>
            </div>
            <div className=" flex flex-row gap-4  mb-2  bg-[#173F63] justify-around items-center text-center border-b-5 rounded-lg border-white p-4">
              <img src={location} alt="" />

              <p className="text-[25px]">sales@realtynivesh.com</p>
            </div>
            <div className=" flex flex-row gap-4  mb-2  bg-[#173F63] justify-around items-center text-center border-b-5 rounded-lg border-white p-4">
              <img src={location} alt="" />

              <p className="">
                Showroom No. 12 Level 2, UPTOWN <br />
                Insignia PR-7 Airport Road, <br /> Zirakpur, Punjab
              </p>
            </div>
          </div>
        </section>
        {/* Downlod */}
        <section className="mt-7 mb-10">
          <Downlod />
        </section>

      </div>
    </>
  );
}
