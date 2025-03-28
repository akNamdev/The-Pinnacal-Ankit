// import React from 'react'
import location from "../images/locationsvg.png";
import coll from "../images/collsvg.png";
import message from "../images/msgsvg.png";

export default function NumberContact() {
  return (
    <>
    
   <section className="max-w-full py-5">
            <h2 className="upperCase text-[40px]  text-[#173F63] font-bold text-center py-5">
              Contact us
            </h2>
            <div className="hidden lg:block">
              <div className="grid grid-cols-1 relative md:grid-cols-3 gap-6 bg-[#173F63] text-white mt-8 py-8 px-4 md:px-16 rounded-lg">
                <div className="flex flex-col items-center text-center">
                  
                  <div className="p-3  pb-[30px]  ">
                    <img
                      src={coll}
                      alt=""
                      className="absolute top-[-20px] left-[230px]"
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
                <p className="text-[30px] ">+91 89680 66698</p>
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
    </>
  )
}
