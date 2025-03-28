
import Accordion from "../components/Accordion";
import Downlod from "../components/downlod";
import GetOpt from "../components/getOpt";
import NumberContact from "../components/numberContact";
import SateliteToggle from "../components/sateliteToggle";
import YouIntrested from "../components/youIntrested";
import galbg from "../images/galbg.png"
import stage from "../images/stage.png"
import Specification from "../components/Specification"

export default function Gallery() {

  const sections = [
    { id: "simple-flate", title: "Sample Plats" },
    { id: "Project-walk-through", title: "Project Walk Through" },
    { id: "Project-Gallery", title: "Project Gallery" },
    { id: "Construction-updates", title: "Construction Updates" },
  ];
  return (
    < >   
      <div
        className="w-full h-[80vh] flex justify-center items-center relative"
        style={{
          backgroundImage: `url(${galbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute w-full h-full bg-[#00000080]"></div>
        <h1 className="text-white z-10 md:text-[77.67px]  xs:text-[40px] xs:leading-[50px]  sm:text-[40px] sm:leading-[50px] md:leading-[101.48px] uppercase text-center font-semibold">
          LUXURY BUILT  <br />
          AROUND NATURE
        </h1>
      </div>
      {/* Sample Flat */}
      <section className="mt-10" id="simple-flate">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-[40px] text-center font-bold leading-tight sm:leading-[45px] md:leading-[55.04px] text-[#173F63] uppercase">
            Sample Plats
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-center leading-snug sm:leading-[21.39px] text-[#5A5454]">
            Explore The Pinnacle Mohali Project Gallery & Construction Updates.
          </p>
          <div className="p-4 sm:p-6 xs:p-0  xs:pt-2 md:p-16">
            <img src={stage} alt="Project stage" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>
      <Specification />
      {/* <section className="mt-10 " id="Project-walk-through"   >
        <div className="">
          <h1 className="text-[40px] text-center font-bold leading-[55.04px] text-[#173F63] uppercase">Project walk through </h1>
          <p className="text-[18px] text-center leading-[21.39px] text-[#5A5454]">Explore The Pinnacle mohali  Project gallery & Construction Updates.</p>
          <div className=" md:p-16 xs:p-6 sm:p-6 ">
            <img src={stage} alt="" className="w-full h-full" />
          </div>
        </div>
      </section>
      <section className="mt-10 " id="Project-Gallery"   >
        <div className="">
          <h1 className="text-[40px] text-center font-bold leading-[55.04px] text-[#173F63] uppercase">Project Gallery</h1>
          <p className="text-[18px] text-center leading-[21.39px] text-[#5A5454]">Explore The Pinnacle mohali  Project gallery & Construction Updates.</p>
          <div className=" md:p-16 xs:p-6 sm:p-6 ">
            <img src={stage} alt="" className="w-full h-full" />
          </div>
        </div>
      </section>
      <section className="mt-10 " id="Construction-updates"   >
        <div className="">
          <h1 className="text-[40px] text-center font-bold leading-[55.04px] text-[#173F63] uppercase">
            Construction updates</h1>
          <p className="text-[18px] text-center leading-[21.39px] text-[#5A5454]">Explore The Pinnacle mohali  Project gallery & Construction Updates.</p>
          <div className=" md:p-16 xs:p-6 sm:p-6 ">
            <img src={stage} alt="" className="w-full h-full" />
          </div>
        </div>
      </section> */}
      <section className="my-10">
        <YouIntrested />
      </section>
      <section className="max-w-full mx-auto ">
        <Accordion />
        
      </section>
      <section className="my-10">
        <GetOpt />
      </section>
      <section className="my-10">
        <SateliteToggle />
      </section>
      <section className="my-10">
        <NumberContact />
    </section >
      <section className="my-10">
        <Downlod />
      </section>
 
    </>

  )
}