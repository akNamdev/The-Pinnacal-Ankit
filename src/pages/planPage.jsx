import Downlod from "../components/downlod";
import GetOpt from "../components/getOpt";
import NumberContact from "../components/numberContact";
import SateliteToggle from "../components/sateliteToggle";
import YouIntrested from "../components/youIntrested";
import planBalc from "../images/planBalc.webp";
import sitePlan from "../images/siteplanImg.webp";
import wholeBanner from "../images/wholeBanner.webp";
import TowerPlans from "../components/towerPlan";
import UnitPlans from "../components/unitPlan";
import Accordion from "../components/Accordion";

export default function Plans() {
  return (
    <>
      <div className="">
      
        <div
          className="w-full h-[80vh] flex justify-center items-center relative "
          style={{
            backgroundImage: `url(https://thepinnacle.realtynivesh.com/images/subHeaderBgimg.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute w-full h-full bg-[#00000080]"></div>
          <h1 className="text-white z-10 text-[40px] uppercase text-center ">
            LUXURY BUILT <br />
            AROUND NATURE
          </h1>
        </div>      
        
        <section className="my-5" id="Unit-Plan">
          <h1 className="uppercase  text-[40px] leading-[55.04px] font-bold  text-center text-[#003353]">Unit plan</h1>
          <p className="text-[18px] leading-[21.39px] text-center text-[#5A5454]">Explore the pinnacle floor plans, Site plan & Tower plans</p>
          <UnitPlans />
        </section>
        {/* Experience outdoor */}
        <section>
          <div className="max-w-full py-12 px-5 sm:px-10 md:px-20">
            <h1 className="text-[#173F63] text-center mb-6  uppercase font-bold text-[32px] leading-[57.79px]">
              Experience outdoor living, Balconies as big as rooms!
            </h1>
          </div>
          <img className="max-w-[100%] h-auto" src={planBalc} />
        </section>
        {/* Site Plan  */}
        <div className="" id="Site-Plan"></div>
        <section className="max-w-full bg-[#FFF9EF] my-4 lg:block md:block sm:block xs:block">
          <h2 className="text-[#173F63] font-semibold text-center text-[40px] mt-10 uppercase sm:text-[32px] xs:text-[28px]">
            {" "}
            Site Plan
          </h2>
          <p className="text-gray-600 leading-[21.39px] py-6 text-[18px] font-semibold text-center sm:text-[16px] xs:text-[14px]">
            Explore The Pinnacle floor plans, Site plan & Tower plans
          </p>
          <img
            src={sitePlan}
            alt="Site Plan"
            className="w-[90%] h-[80vh] mx-auto sm:w-full sm:h-auto xs:w-full xs:h-auto"
          />
          <div className="border sm:border-none w-[90%] mx-auto border-[#D9D9D9] rounded-xl">
            <ol className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 sm:gap-x-2 gap-y-6 sm:gap-y-4 2xl:gap-y-6 px-3 pb-5 sm:pb-24 pt-5 sm:pt-10 md:pt-14">
              <li className="capitalize font-supera600 text-[#565555] text-xs sm:text-[14px] md:text-sm lg:text-lg xl:text-[21px] flex">
                <span className="pr-1 font-supera600 text-[#173F63]">
                  1&nbsp;
                </span>
                Entrance Plaza
              </li>
              <li className="capitalize font-supera600 text-[#565555] text-xs sm:text-[14px] md:text-sm lg:text-lg xl:text-[21px] flex">
                <span className="pr-1 font-supera600 text-[#173F63]">
                  2&nbsp;
                </span>
                Exit Plaza
              </li>
              <li className="capitalize font-supera600 text-[#565555] text-xs sm:text-[14px] md:text-sm lg:text-lg xl:text-[21px] flex">
                <span className="pr-1 font-supera600 text-[#173F63]">
                  3&nbsp;
                </span>
                Water Plaza
              </li>
              <li className="capitalize font-supera600 text-[#565555] text-xs sm:text-[14px] md:text-sm lg:text-lg xl:text-[21px] flex">
                <span className="pr-1 font-supera600 text-[#173F63]">
                  4&nbsp;
                </span>
                Welcome Water Body
              </li>
              <li className="capitalize font-supera600 text-[#565555] text-xs sm:text-[14px] md:text-sm lg:text-lg xl:text-[21px] flex">
                <span className="pr-1 font-supera600 text-[#173F63]">
                  5&nbsp;
                </span>
                Clubhouse Drop-off Area
              </li>
              <li className="capitalize font-supera600 text-[#565555] text-xs sm:text-[14px] md:text-sm lg:text-lg xl:text-[21px] flex">
                <span className="pr-1 font-supera600 text-[#173F63]">
                  6&nbsp;
                </span>
                Club Pool Area
              </li>
              <li className="capitalize font-supera600 text-[#565555] text-xs sm:text-[14px] md:text-sm lg:text-lg xl:text-[21px] flex">
                <span className="pr-1 font-supera600 text-[#173F63]">
                  7&nbsp;
                </span>
                Experience Walk
              </li>
              <li className="capitalize font-supera600 text-[#565555] text-xs sm:text-[14px] md:text-sm lg:text-lg xl:text-[21px] flex">
                <span className="pr-1 font-supera600 text-[#173F63]">
                  8&nbsp;
                </span>
                Driveway
              </li>
              <li className="capitalize font-supera600 text-[#565555] text-xs sm:text-[14px] md:text-sm lg:text-lg xl:text-[21px] flex">
                <span className="pr-1 font-supera600 text-[#173F63]">
                  9&nbsp;
                </span>
                Play Courts
              </li>
              <li className="capitalize font-supera600 text-[#565555] text-xs sm:text-[14px] md:text-sm lg:text-lg xl:text-[21px] flex">
                <span className="pr-1 font-supera600 text-[#173F63]">
                  10&nbsp;
                </span>
                Cricket Practice Pitch
              </li>
              <li className="capitalize font-supera600 text-[#565555] text-xs sm:text-[14px] md:text-sm lg:text-lg xl:text-[21px] flex">
                <span className="pr-1 font-supera600 text-[#173F63]">
                  11&nbsp;
                </span>
                Senior Citizen Court
              </li>
              <li className="capitalize font-supera600 text-[#565555] text-xs sm:text-[14px] md:text-sm lg:text-lg xl:text-[21px] flex">
                <span className="pr-1 font-supera600 text-[#173F63]">
                  12&nbsp;
                </span>
                Dense Planting
              </li>
              <li className="capitalize font-supera600 text-[#565555] text-xs sm:text-[14px] md:text-sm lg:text-lg xl:text-[21px] flex">
                <span className="pr-1 font-supera600 text-[#173F63]">
                  13&nbsp;
                </span>
                Butterfly Garden
              </li>
              <li className="capitalize font-supera600 text-[#565555] text-xs sm:text-[14px] md:text-sm lg:text-lg xl:text-[21px] flex">
                <span className="pr-1 font-supera600 text-[#173F63]">
                  14&nbsp;
                </span>
                Club Lawn With Cabana
              </li>
              <li className="capitalize font-supera600 text-[#565555] text-xs sm:text-[14px] md:text-sm lg:text-lg xl:text-[21px] flex">
                <span className="pr-1 font-supera600 text-[#173F63]">
                  15&nbsp;
                </span>
                Building Drop-Off Plaza
              </li>
              <li className="capitalize font-supera600 text-[#565555] text-xs sm:text-[14px] md:text-sm lg:text-lg xl:text-[21px] flex">
                <span className="pr-1 font-supera600 text-[#173F63]">
                  16&nbsp;
                </span>
                Internal Courtyard
              </li>
              <li className="capitalize font-supera600 text-[#565555] text-xs sm:text-[14px] md:text-sm lg:text-lg xl:text-[21px] flex">
                <span className="pr-1 font-supera600 text-[#173F63]">
                  17&nbsp;
                </span>
                Water Body with Signage
              </li>
              <li className="capitalize font-supera600 text-[#565555] text-xs sm:text-[14px] md:text-sm lg:text-lg xl:text-[21px] flex">
                <span className="pr-1 font-supera600 text-[#173F63]">
                  18&nbsp;
                </span>
                Open Air Amphitheatre
              </li>
              <li className="capitalize font-supera600 text-[#565555] text-xs sm:text-[14px] md:text-sm lg:text-lg xl:text-[21px] flex">
                <span className="pr-1 font-supera600 text-[#173F63]">
                  19&nbsp;
                </span>
                Outdoor Gym
              </li>
              <li className="capitalize font-supera600 text-[#565555] text-xs sm:text-[14px] md:text-sm lg:text-lg xl:text-[21px] flex">
                <span className="pr-1 font-supera600 text-[#173F63]">
                  20&nbsp;
                </span>
                Yoga Lawn With Wooden Decks
              </li>
              <li className="capitalize font-supera600 text-[#565555] text-xs sm:text-[14px] md:text-sm lg:text-lg xl:text-[21px] flex">
                <span className="pr-1 font-supera600 text-[#173F63]">
                  21&nbsp;
                </span>
                Central Lawn
              </li>
              <li className="capitalize font-supera600 text-[#565555] text-xs sm:text-[14px] md:text-sm lg:text-lg xl:text-[21px] flex">
                <span className="pr-1 font-supera600 text-[#173F63]">
                  22&nbsp;
                </span>
                Viewing Deck
              </li>
              <li className="capitalize font-supera600 text-[#565555] text-xs sm:text-[14px] md:text-sm lg:text-lg xl:text-[21px] flex">
                <span className="pr-1 font-supera600 text-[#173F63]">
                  23&nbsp;
                </span>
                Fragrance Garden
              </li>
              <li className="capitalize font-supera600 text-[#565555] text-xs sm:text-[14px] md:text-sm lg:text-lg xl:text-[21px] flex">
                <span className="pr-1 font-supera600 text-[#173F63]">
                  24&nbsp;
                </span>
                Kids Play Area
              </li>
              <li className="capitalize font-supera600 text-[#565555] text-xs sm:text-[14px] md:text-sm lg:text-lg xl:text-[21px] flex">
                <span className="pr-1 font-supera600 text-[#173F63]">
                  25&nbsp;
                </span>
                Commercial Plaza
              </li>
            </ol>
          </div>
        </section>
        <div className="" id="Tower-plans"></div>
        <TowerPlans />
        {/* A Wholesome  */}
        <section className="max-w-full py-5">
          <img className="w-full block " src={wholeBanner} alt="Whole Banner" />
        </section>
        <YouIntrested />
        <section>
          <div className="max-w-full pt-[117px] ">
            <h1 className="text-[#173F63] text-center mb-6  uppercase font-semibold text-[42px] leading-[57.79px]">
              Frequently asked questions
            </h1>
            <Accordion />
          </div>
        </section>
        <section className="py-10 bg-[F1F1F1]">
          <GetOpt />
        </section>
        <section className="py-10">
          <SateliteToggle />
        </section>
        <section className="py-5">
          <NumberContact />
        </section>
        <section className="py-5">
          <Downlod />
        </section>
        <section className="py-5">
         
        </section>
      </div>
    </>
  );
}
