import Downlod from "../components/downlod";
 import locat from "../images/locat.png";
import paymentbg from "../images/paymentbg.png"
import Interested from "../components/intrested";
import BankSlider from "../components/approveBank";
import GetOpt from "../components/getOpt";
import SateliteToggle from "../components/sateliteToggle";
import Pricelist from "../components/pricelist";
import offer from "../images/offer.png"
import Accordion from "../components/Accordion";
import { useState } from "react"; 
import { Modal } from "flowbite-react";
import theppt from "../images/theppt.webp";
import sals from "../images/sals.webp";
import NumberContact from "../components/numberContact";
export default function Price() {
  const [openModal,setOpenModal] = useState(false);
  
  return (
    <>

      <div
        className="w-full h-[80vh] flex justify-center items-center relative"
        style={{
          backgroundImage: `url(${locat})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute w-full h-full bg-[#00000080]"></div>

        <h1 className="text-white z-10 text-5xl uppercase text-center font-semibold">
          Live at the heart of all the <br /> action!
        </h1>
      </div>
      {/* Price section */}
      <section className="py-10" id="Price-List">
        <div className="">
          <h1 className=" text-center font-bold text-[#173F63] text-[40px] leading-[55.04px]">Price List </h1>
          <p className="text-[18px] text-center pb-10 leading-[21.39px]">Explore The PINNACLE mohali Price list, Payment Plan and Latest offers</p>
          <Pricelist />
        </div>
      </section>
      {/* payment Structure */}
      <section className="w-full h-full  bg-[#173F63]" id="Payment-Structure">
        <div className="w-full h-full "
          style={{
            backgroundImage: `url(${paymentbg})`,
            backgroundSize: "cover",

            backgroundPosition: "center"
          }}  >
          <h2 className="font-extrabold text-[40px]      text-white text-center py-10 xs:py-5 sm:py-5">PAYMENT STRACTURE</h2>


          <div className="bg-white relative top-8 xs:px-10 sm:top-0 z-20 2xl:container mx-auto rounded-2xl sm:rounded-xl overflow-hidden mb-16 sm:mb-0 sm:mt-8 cmd:mt-14 px-0 bxxs:px-3  sm:px-16 py-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] sm:shadow-none">
            <h6 className="font-supera600 text-[27px] text-[#494949] text-center mb-2 sm:mb-8">
              Milestone&nbsp;Details
            </h6>
            <div className="grid grid-cols-1 h-[550px] gap-y-[30px] sm:gap-y-[40px] py-2 overflow-y-auto sm:pr-2">
              <div className="w-[98%] 3xl:container mx-auto h-full sm:h-[35px] md:h-full flex items-center gap-x-4 md:gap-x-7 cmd:gap-x-12 ">
                <div className="size-[35px] md:size-[40px] cmd:size-[53.14px] rounded-full bg-[#173F63] flex justify-center items-center font-supera600 text-[13px] md:text-[14px] cmd:text-[18.5px] text-[#fff]">
                  01
                </div>
                <div className="w-[88%] h-full pr-1 pb-1 cxs:pb-3 flex justify-between items-end border-b-[0.9px] border-b-[#D9D9D9] sm:border-b-[#141413] font-supera600 leading-tight xs:leading-snug sm:leading-normal text-[12px] bxxs:text-[14px] md:text-[16px] cmd:text-[18.5px] text-[#3A3A39] sm:text-[#141413]">
                  <div>Within 30 Days of Booking</div>
                  <div className="ml-8 text-right">25% of Sale Price</div>
                </div>
              </div>
              <div className="w-[98%] 3xl:container mx-auto h-full sm:h-[35px] md:h-full flex items-center gap-x-4 md:gap-x-7 cmd:gap-x-12 ">
                <div className="size-[35px] md:size-[40px] cmd:size-[53.14px] rounded-full bg-[#173F63] flex justify-center items-center font-supera600 text-[13px] md:text-[14px] cmd:text-[18.5px] text-[#fff]">
                  02
                </div>
                <div className="w-[88%] h-full pr-1 pb-1 cxs:pb-3 flex justify-between items-end border-b-[0.9px] border-b-[#D9D9D9] sm:border-b-[#141413] font-supera600 leading-tight xs:leading-snug sm:leading-normal text-[12px] bxxs:text-[14px] md:text-[16px] cmd:text-[18.5px] text-[#3A3A39] sm:text-[#141413]">
                  <div>On Start of Raft</div>
                  <div className="ml-8 text-right">10% of Sale Price</div>
                </div>
              </div>
              <div className="w-[98%] 3xl:container mx-auto h-full sm:h-[35px] md:h-full flex items-center gap-x-4 md:gap-x-7 cmd:gap-x-12 ">
                <div className="size-[35px] md:size-[40px] cmd:size-[53.14px] rounded-full bg-[#173F63] flex justify-center items-center font-supera600 text-[13px] md:text-[14px] cmd:text-[18.5px] text-[#fff]">
                  03
                </div>
                <div className="w-[88%] h-full pr-1 pb-1 cxs:pb-3 flex justify-between items-end border-b-[0.9px] border-b-[#D9D9D9] sm:border-b-[#141413] font-supera600 leading-tight xs:leading-snug sm:leading-normal text-[12px] bxxs:text-[14px] md:text-[16px] cmd:text-[18.5px] text-[#3A3A39] sm:text-[#141413]">
                  <div>On Completion of Stilt</div>
                  <div className="ml-8 text-right">10% of Sale Price</div>
                </div>
              </div>
              <div className="w-[98%] 3xl:container mx-auto h-full sm:h-[35px] md:h-full flex items-center gap-x-4 md:gap-x-7 cmd:gap-x-12 ">
                <div className="size-[35px] md:size-[40px] cmd:size-[53.14px] rounded-full bg-[#173F63] flex justify-center items-center font-supera600 text-[13px] md:text-[14px] cmd:text-[18.5px] text-[#fff]">
                  04
                </div>
                <div className="w-[88%] h-full pr-1 pb-1 cxs:pb-3 flex justify-between items-end border-b-[0.9px] border-b-[#D9D9D9] sm:border-b-[#141413] font-supera600 leading-tight xs:leading-snug sm:leading-normal text-[12px] bxxs:text-[14px] md:text-[16px] cmd:text-[18.5px] text-[#3A3A39] sm:text-[#141413]">
                  <div>On Completion of 3rd Floor</div>
                  <div className="ml-8 text-right">5% of Sale Price</div>
                </div>
              </div>
              <div className="w-[98%] 3xl:container mx-auto h-full sm:h-[35px] md:h-full flex items-center gap-x-4 md:gap-x-7 cmd:gap-x-12 ">
                <div className="size-[35px] md:size-[40px] cmd:size-[53.14px] rounded-full bg-[#173F63] flex justify-center items-center font-supera600 text-[13px] md:text-[14px] cmd:text-[18.5px] text-[#fff]">
                  05
                </div>
                <div className="w-[88%] h-full pr-1 pb-1 cxs:pb-3 flex justify-between items-end border-b-[0.9px] border-b-[#D9D9D9] sm:border-b-[#141413] font-supera600 leading-tight xs:leading-snug sm:leading-normal text-[12px] bxxs:text-[14px] md:text-[16px] cmd:text-[18.5px] text-[#3A3A39] sm:text-[#141413]">
                  <div>On Completion of 6th Floor</div>
                  <div className="ml-8 text-right">5% of Sale Price</div>
                </div>
              </div>
              <div className="w-[98%] 3xl:container mx-auto h-full sm:h-[35px] md:h-full flex items-center gap-x-4 md:gap-x-7 cmd:gap-x-12 ">
                <div className="size-[35px] md:size-[40px] cmd:size-[53.14px] rounded-full bg-[#173F63] flex justify-center items-center font-supera600 text-[13px] md:text-[14px] cmd:text-[18.5px] text-[#fff]">
                  06
                </div>
                <div className="w-[88%] h-full pr-1 pb-1 cxs:pb-3 flex justify-between items-end border-b-[0.9px] border-b-[#D9D9D9] sm:border-b-[#141413] font-supera600 leading-tight xs:leading-snug sm:leading-normal text-[12px] bxxs:text-[14px] md:text-[16px] cmd:text-[18.5px] text-[#3A3A39] sm:text-[#141413]">
                  <div>On Completion of 9th Floor</div>
                  <div className="ml-8 text-right">5% of Sale Price</div>
                </div>
              </div>
              <div className="w-[98%] 3xl:container mx-auto h-full sm:h-[35px] md:h-full flex items-center gap-x-4 md:gap-x-7 cmd:gap-x-12 ">
                <div className="size-[35px] md:size-[40px] cmd:size-[53.14px] rounded-full bg-[#173F63] flex justify-center items-center font-supera600 text-[13px] md:text-[14px] cmd:text-[18.5px] text-[#fff]">
                  07
                </div>
                <div className="w-[88%] h-full pr-1 pb-1 cxs:pb-3 flex justify-between items-end border-b-[0.9px] border-b-[#D9D9D9] sm:border-b-[#141413] font-supera600 leading-tight xs:leading-snug sm:leading-normal text-[12px] bxxs:text-[14px] md:text-[16px] cmd:text-[18.5px] text-[#3A3A39] sm:text-[#141413]">
                  <div>On Completion of 12th Floor</div>
                  <div className="ml-8 text-right">5% of Sale Price</div>
                </div>
              </div>
              <div className="w-[98%] 3xl:container mx-auto h-full sm:h-[35px] md:h-full flex items-center gap-x-4 md:gap-x-7 cmd:gap-x-12 ">
                <div className="size-[35px] md:size-[40px] cmd:size-[53.14px] rounded-full bg-[#173F63] flex justify-center items-center font-supera600 text-[13px] md:text-[14px] cmd:text-[18.5px] text-[#fff]">
                  08
                </div>
                <div className="w-[88%] h-full pr-1 pb-1 cxs:pb-3 flex justify-between items-end border-b-[0.9px] border-b-[#D9D9D9] sm:border-b-[#141413] font-supera600 leading-tight xs:leading-snug sm:leading-normal text-[12px] bxxs:text-[14px] md:text-[16px] cmd:text-[18.5px] text-[#3A3A39] sm:text-[#141413]">
                  <div>On Completion of 15th Floor</div>
                  <div className="ml-8 text-right">5% of Sale Price</div>
                </div>
              </div>
              <div className="w-[98%] 3xl:container mx-auto h-full sm:h-[35px] md:h-full flex items-center gap-x-4 md:gap-x-7 cmd:gap-x-12 ">
                <div className="size-[35px] md:size-[40px] cmd:size-[53.14px] rounded-full bg-[#173F63] flex justify-center items-center font-supera600 text-[13px] md:text-[14px] cmd:text-[18.5px] text-[#fff]">
                  09
                </div>
                <div className="w-[88%] h-full pr-1 pb-1 cxs:pb-3 flex justify-between items-end border-b-[0.9px] border-b-[#D9D9D9] sm:border-b-[#141413] font-supera600 leading-tight xs:leading-snug sm:leading-normal text-[12px] bxxs:text-[14px] md:text-[16px] cmd:text-[18.5px] text-[#3A3A39] sm:text-[#141413]">
                  <div>On Completion of 18th Floor</div>
                  <div className="ml-8 text-right">5% of Sale Price</div>
                </div>
              </div>
              <div className="w-[98%] 3xl:container mx-auto h-full sm:h-[35px] md:h-full flex items-center gap-x-4 md:gap-x-7 cmd:gap-x-12 ">
                <div className="size-[35px] md:size-[40px] cmd:size-[53.14px] rounded-full bg-[#173F63] flex justify-center items-center font-supera600 text-[13px] md:text-[14px] cmd:text-[18.5px] text-[#fff]">
                  10
                </div>
                <div className="w-[88%] h-full pr-1 pb-1 cxs:pb-3 flex justify-between items-end border-b-[0.9px] border-b-[#D9D9D9] sm:border-b-[#141413] font-supera600 leading-tight xs:leading-snug sm:leading-normal text-[12px] bxxs:text-[14px] md:text-[16px] cmd:text-[18.5px] text-[#3A3A39] sm:text-[#141413]">
                  <div>On Start of Plumbing Work</div>
                  <div className="ml-8 text-right">10% of Sale Price</div>
                </div>
              </div>
              <div className="w-[98%] 3xl:container mx-auto h-full sm:h-[35px] md:h-full flex items-center gap-x-4 md:gap-x-7 cmd:gap-x-12 ">
                <div className="size-[35px] md:size-[40px] cmd:size-[53.14px] rounded-full bg-[#173F63] flex justify-center items-center font-supera600 text-[13px] md:text-[14px] cmd:text-[18.5px] text-[#fff]">
                  11
                </div>
                <div className="w-[88%] h-full pr-1 pb-1 cxs:pb-3 flex justify-between items-end border-b-[0.9px] border-b-[#D9D9D9] sm:border-b-[#141413] font-supera600 leading-tight xs:leading-snug sm:leading-normal text-[12px] bxxs:text-[14px] md:text-[16px] cmd:text-[18.5px] text-[#3A3A39] sm:text-[#141413]">
                  <div>On Start of PO Work</div>
                  <div className="ml-8 text-right">10% of Sale Price</div>
                </div>
              </div>
              <div className="w-[98%] 3xl:container mx-auto h-full sm:h-[35px] md:h-full flex items-center gap-x-4 md:gap-x-7 cmd:gap-x-12 ">
                <div className="size-[35px] md:size-[40px] cmd:size-[53.14px] rounded-full bg-[#173F63] flex justify-center items-center font-supera600 text-[13px] md:text-[14px] cmd:text-[18.5px] text-[#fff]">
                  12
                </div>
                <div className="w-[88%] h-full pr-1 pb-1 cxs:pb-3 flex justify-between items-end border-b-[0.9px] border-b-[#D9D9D9] sm:border-b-[#fdfdfd] font-supera600 leading-tight xs:leading-snug sm:leading-normal text-[12px] bxxs:text-[14px] md:text-[16px] cmd:text-[18.5px] text-[#3A3A39] sm:text-[#141413]">
                  <div>On Possession</div>
                  <div className="ml-8 text-right">5% of Sale Price</div>
                </div>
              </div>

            </div>
          </div>;


        </div>
      </section>
      {/* current Offers */}
      <section className="my-10" id="Current-Offers">
        <h1 className="text-[40px] leading-[55.04px]  my-4 font-bold text-center  uppercase text-[#173F63]">current Offers
        </h1>
        <div onClick={() => setOpenModal(true)}
          className="w-full flex items-center justify-center min-h-[50vh]"
          style={{
            backgroundImage: `url(${offer})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            // height: "500px",
          }}>
          <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-10 text-center sm:text-center md:text-left">
            <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl text-[#d19c2ab7] font-bold md:pt-[100px] md:ps-[200px]">
              Stay tuned
            </h1>
            <p className="text-white text-lg sm:text-2xl md:text-3xl uppercase md:ps-[150px] py-4">
              exciting latest offer on
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-[80px] font-bold uppercase text-white md:ps-[80px]">
              the pinnacle
            </h1>
            <p className="uppercase text-white text-xl sm:text-3xl md:text-[40px] font-semibold md:ps-[160px]">
              coming soon!
            </p>
            <div className="mt-6 md:ps-[200px]">
              <button className="uppercase text-white border p-3 rounded border-white">
                your dream home awaits!
              </button>
            </div>
          </div>
        </div>
      </section>
      <Interested />
      {/* Approved Banks */}
      <section className="my-10">
        <h2 className=" text-center font-bold text-4xl text-[#173F63]">Approved Banks</h2>
        <p className="text-2xl text-center  text-black py-5">Easy & Hassle-Free Bank Loan Options for Your Dream Home</p>
        <BankSlider />
      </section> 
     <div className="max-w-full  " id="faq">
        <h1 className="text-[#173F63] text-center mb-6  uppercase font-semibold text-[42px] leading-[57.79px]">
          Frequently asked questions
        </h1>
        <div className="max-w-full mx-auto ">
          <Accordion />
        </div>
      </div>
      <section className="my-10">
        <GetOpt />
      </section>
      <section className="my-10">
        <SateliteToggle />

        <NumberContact />
      </section>
      <section className="my-10">
        <Downlod />
      </section>
   
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>

        {/* <Modal.Body> */}
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
                <h1 className="text-[35px] font-semibold text-gray-700">
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
        {/* </Modal.Body> */}

      </Modal>


    </>
  )
}
