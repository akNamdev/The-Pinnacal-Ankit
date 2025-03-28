// import React from 'react';
import theppt from "../images/theppt.webp";
import sals from "../images/sals.webp";

export default function GetOpt() {
  return (
    <>

      <div className="max-w-full h-auto bg-[#F1F1F1] my-7 text-black px-4">
        <div className="grid  md:grid-cols-[60%_auto]  sm:grid-cols-1 xs:grid-cols-1 ">
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
              className="w-full md:w-[80%]  placeholder:text-black bg-[#F1F1F1] focus:outline-none px-3 mb-6 border-t-0 border-l-0 border-r-0 py-2 border-b-2 border-gray-300"
            />

            <input
              type="tel"
              name="phone"
              id=""
              required="enter your phone"
              placeholder=" Your Phone Number"
              className="w-full md:w-[80%]  bg-[#F1F1F1] placeholder:text-black focus:outline-none px-3 mb-6 border-t-0 border-l-0 border-r-0 py-2 border-b-2 border-gray-300"
            />
            <input
              type="email"
              name="email"
              id=""
              required="enter your email"
              placeholder=" Email Id"
              className="w-full md:w-[80%] bg-[#F1F1F1]  placeholder:text-black  focus:outline-none px-3 mb-6 border-t-0 border-l-0 border-r-0 py-2 border-b-2 border-gray-300"
            />

            <div className="flex gap-8 items-center">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                className="transform bg-[#F1F1F1] scale-150 ms-3 text-2xl"
                value=""
              />
              <p className="text-[14px] text-gray-400">
                I agree to receive newsletters, or relevant marketing content <br /> and The Pinnacle Terms and Conditions
              </p>
            </div>

            <button className="bg-[#173F63] py-2 my-6 text-white rounded-full w-full md:w-[80%]">
              Get Otp
              
            </button>
          </div>
        </div>
      </div>


    </>
  )
}
