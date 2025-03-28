import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import floor1 from "../images/floor1.png";
import floor2 from "../images/floor2.png";
import floor3 from "../images/floor3.png";
import map1 from "../images/map1.png";
import floor1_3D from "../images/ame1.png";
import floor2_3D from "../images/ame2.png";
import floor3_3D from "../images/price1.png";
import floor4_3D from "../images/price2.png";
import floor5_3D from "../images/price3.png";
import floor6_3D from "../images/ame6.png";

const tabs = ["3BHK", "3BHK+S", "4BHK+S"];
const tabs3D = ["Living Room", "Outdoor Living", "Kitchen", "Master Bedroom", "Dining", "Kids Bedroom"];
const slides = {
  "3BHK": { img: floor1, type: "3BHK", size: "2200-2500 sq.ft.", ex: "EXCLUSIVE 3BHK apartment" },
  "3BHK+S": { img: floor2, type: "3BHK+S", size: "2500-2800 sq.ft.", ex: "EXCLUSIVE 3BHK + S apartment" },
  "4BHK+S": { img: floor3, type: "4BHK+S", size: "2800-3200 sq.ft.", ex: "EXCLUSIVE 4BHK + S apartment" },
};

const lowerDetails = {
  "3BHK": { img: map1, type: "3BHK", size: "2300-2500 sq.ft.", label: "Type 1" },
  "3BHK+S": { img: map1, type: "3BHK+S", size: "2500-2800 sq.ft.", label: "Type 2" },
  "4BHK+S": { img: map1, type: "4BHK+S", size: "2800-3200 sq.ft.", label: "Type 3" },
};

const slide3D = {
  "Living Room": {
    img3D: floor1_3D,
    Type: "Living Room",
    Para: "Spacious and well-lit, large windows for natural light.",
    Para2: "High-quality materials and modern aesthetics.",
    Para3: "Entertainment ReadyEquipped <br/> with audio-visual setup for movie nights and gatherings"
  },
  "Outdoor Living": {
    img3D: floor2_3D,
    Type: "Outdoor Living",
    Para: "Spacious and Well-LitLarge windows for natural light and a warm ambiance.",
    Para2: "Stylish FurnishingsModern furniture that combines comfort and elegance.",
    Para3: "Entertainment ReadyEquipped <br/> with audio-visual setup for movie nights and gatherings.",
  },
  "Kitchen": {
    img3D: floor3_3D,
    Type: "Kitchen",
    Para: "Spacious and Well-LitLarge windows for natural light and a warm ambiance.",
    Para2: "Stylish FurnishingsModern furniture that combines comfort and elegance.",
    Para3: "Entertainment ReadyEquipped <br/> with audio-visual setup for movie nights and gatherings.",
  },
  "Master Bedroom": {
    img3D: floor4_3D,
    Type: "Master Bedroom",
    Para: "Spacious and Well-LitLarge windows for natural light and a warm ambiance.",
    Para2: "Stylish FurnishingsModern furniture that combines comfort and elegance.",
    Para3: "Entertainment ReadyEquipped <br/> with audio-visual setup for movie nights and gatherings.",
  },
  "Dining": {
    img3D: floor5_3D,
    Type: "Dining",
    Para: "Spacious and Well-LitLarge windows for natural light and a warm ambiance.",
    Para2: "Stylish FurnishingsModern furniture that combines comfort and elegance.",
    Para3: "Entertainment ReadyEquipped <br/> with audio-visual setup for movie nights and gatherings.",
  },
  "Kids Bedroom": {
    img3D: floor6_3D,
    Type: "Kids Bedroom",
    Para: "Spacious and Well-LitLarge windows for natural light and a warm ambiance.",
    Para2: "Stylish FurnishingsModern furniture that combines comfort and elegance.",
    Para3: "Entertainment ReadyEquipped <br/> with audio-visual setup for movie nights and gatherings.",
  }
};


export default function UnitPlans() {
  const [selectedTab, setSelectedTab] = useState("3BHK");
  const [viewType, setViewType] = useState("2D");
  const [selected3DTab, setSelected3DTab] = useState("Living Room");
  const selectedSlide = slide3D[selected3DTab];

  const handleNext = () => setSelectedTab(tabs[(tabs.indexOf(selectedTab) + 1) % tabs.length]);
  const handlePrev = () => setSelectedTab(tabs[(tabs.indexOf(selectedTab) - 1 + tabs.length) % tabs.length]);

  return (
    <div className="w-full p-4 relative bg-[#f9f9f9] flex flex-col items-center">
      <button className="absolute md:right-2 xs:right-0 sm:right-0  top-4 border border-[#173f63] rounded-lg     text-sm font-semibold flex"
        onClick={() => setViewType(viewType === "2D" ? "3D" : "2D")}>
        <span className={`px-3 py-1 ${viewType === "2D" ? "bg-[#173f63] text-white" : "text-gray-700"}`}>2D</span>
        <span className={`px-3 py-1 ${viewType === "3D" ? "bg-[#173f63] text-white" : "text-gray-700"}`}>3D</span>
      </button>

      {viewType === "2D" && (
        <div className="w-full max-w-7xl">
          <div className="flex max-w-7xl  w-full  md:space-x-4 xs:space-x-2 sm:space-x-2  justify-start mb-4 flex-wrap">
            {tabs.map((tab) => (
              <button key={tab} onClick={() => setSelectedTab(tab)}
                className={`px-4 py-2 font-semibold rounded-md transition-all ${selectedTab === tab ? "bg-[#173f63] text-white" : "bg-gray-200"}`}>{tab}</button>
            ))}
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md flex flex-col gap-12 md:flex-row items-center relative">
            <button onClick={handlePrev} className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
              <ChevronLeft className="w-8 h-8 text-gray-700" />
            </button>
            <img src={slides[selectedTab].img} alt="floor plan" className="w-full max-w-xl rounded-lg" />
            <div className="w-full md:w-2/5 p-4">
              <button className="text-white bg-[#173F63] rounded p-2 w-full md:w-auto mb-2">{slides[selectedTab].size}</button>
              <h2 className="text-lg text-[#173F63] font-bold">{slides[selectedTab].ex}</h2>
              <p className="text-gray-600 mt-2">Where Comfort Meets Happiness, Everyday!</p>
              <button className="p-[2px] text-white bg-[#173f63] w-[20%] rounded">Type</button>
              {/* Details Section */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                {["Super Area", "Rera Carpet Area", "External Wall Area", "Common Areas"].map((label, index) => (
                  <div key={index} className="p-2">
                    <h4 className="text-gray-500 border-b border-[#173f63] pb-1">{label}</h4>
                    <div className="font-extrabold">- &nbsp;- &nbsp;-</div>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={handleNext} className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
              <ChevronRight className="w-8 h-8 text-[#173F63]" />
            </button>
          </div>
          <div className="flex space-x-8 sm:space-x-4  xs:hidden ms-20   sm:hidden md:block lg:block  justify-evenly  mt-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-20 border border-[#173f63] py-2  text-xs sm:text-sm font-semibold transition-all duration-300 rounded-md ${selectedTab === tab ? "bg-[#173f63] text-white >" : "bg-gray-100 text-[#173f63]"
                  }`}>
                {tab}
              </button>
            ))}
          </div>
          <div className="mt-6  flex flex-col max-w-[1000px] sm:flex-row gap-4 w-full">
            <div
              className="bg-white text-left p-4 sm:p-2 flex flex-row items-center border shadow-md rounded-md w-full sm:w-[325px]"
              style={{ borderColor: "rgb(0, 51, 83)" }}>
              <div className="w-[64px] h-[64px] flex items-center justify-center">
                <img src={lowerDetails[selectedTab].img} alt="Apartment map" className="w-full h-auto" />
              </div>
              <div className="px-3 flex-1">
                <h6 className="font-semibold text-[#003353]">
                  {lowerDetails[selectedTab].type}
                  <span className="text-gray-400"> {lowerDetails[selectedTab].size} </span>
                </h6>
                <p className="uppercase text-xs text-[#858585] font-semibold">{lowerDetails[selectedTab].label}</p>
              </div>
            </div>
          </div>
        </div>)}
      {viewType === "3D" && (
        <div className="w-full max-w-7xl mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src={selectedSlide.img3D} alt={selected3DTab} className="w-full rounded-lg" />
            <div className="border p-6 rounded-lg text-left">
              <h2 className="text-3xl font-bold text-[#173F63]">{selectedSlide.Type}</h2>
              <p className="text-gray-600 mt-2">{selectedSlide.Para}</p>
              <p className="text-gray-600 mt-2">{selectedSlide.Para2}</p>
              <p className="text-gray-600 mt-2">{selectedSlide.Para3}</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {tabs3D.map((tab) => (
              <button key={tab} onClick={() => setSelected3DTab(tab)} className={`px-4 py-2 text-sm rounded-full font-semibold ${selected3DTab === tab ? "bg-[#173f63] text-white" : "bg-gray-300 text-gray-700"}`}>{tab}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}




// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import floor1 from "../images/floor1.png";
// import floor2 from "../images/floor2.png"
// import floor3 from "../images/floor3.png";
// import map1 from "../images/map1.png";
// import floor1_3D from "../images/ame1.png";
// import floor2_3D from "../images/ame2.png";
// import floor3_3D from "../images/price1.png";
// import floor4_3D from "../images/price2.png";
// import floor5_3D from "../images/price3.png";
// import floor6_3D from "../images/ame6.png";

// const tabs = ["3BHK", "3BHK+S ", "4BHK+S"];
// const tabs3D = ["Living Room", "Outdoor Living", "Kitchen", "Master Bedroom", "Dining", "Kids Bedroom"];
// // const slides = {
// //   "3BHK": { img: floor1, type: "3BHK", size: "2200-2500 sq.ft.", ex: "EXCLUSIVE 3BHK apartment" },
// //   "3BHK+S": { img: floor2, type: "3BHK+S", size: "2500-2800 sq.ft.", ex: "EXCLUSIVE 3BHK + S apartment" },
// //   "4BHK+S": { img: floor3, type: "4BHK+S", size: "2800-3200 sq.ft.", ex: "EXCLUSIVE 4BHK + S apartment" },
// // };
// const slides = {
//   "3BHK": { img: floor1, type: "3BHK", size: "2200-2500 sq.ft.", ex: "EXCLUSIVE 3BHK apartment" },
//   "3BHK+S": { img: floor2, type: "3BHK+S", size: "2500-2800 sq.ft.", ex: "EXCLUSIVE 3BHK + S apartment" },
//   "4BHK+S": { img: floor3, type: "4BHK+S", size: "2800-3200 sq.ft.", ex: "EXCLUSIVE 4BHK + S apartment" },
// };
// const lowerDetails = {
//   "3BHK": { img: map1, type: "3BHK", size: "2300-2500 sq.ft.", label: "Type 1" },
//   "3BHK+S": { img: map1, type: "3BHK+S", size: "2500-2800 sq.ft.", label: "Type 2" },
//   "4BHK+S": { img: map1, type: "4BHK+S", size: "2800-3200 sq.ft.", label: "Type 3" },
// };
// const slide3D = {
//   "Living Room": {
//     img3D: floor1_3D,
//     Type: "Living Room",
//     Para: "Spacious and well-lit, large windows for natural light.",
//     Para2: "High-quality materials and modern aesthetics.",
//     Para3: "Entertainment ReadyEquipped <br/> with audio-visual setup for movie nights and gatherings"
//   },
//   "Outdoor Living": {
//     img3D: floor2_3D,
//     Type: "Outdoor Living",
//     Para: "Spacious and Well-LitLarge windows for natural light and a warm ambiance.",
//     Para2: "Stylish FurnishingsModern furniture that combines comfort and elegance.",
//     Para3: "Entertainment ReadyEquipped <br/> with audio-visual setup for movie nights and gatherings.",
//   },
//   "Kitchen": {
//     img3D: floor3_3D,
//     Type: "Kitchen",
//     Para: "Spacious and Well-LitLarge windows for natural light and a warm ambiance.",
//     Para2: "Stylish FurnishingsModern furniture that combines comfort and elegance.",
//     Para3: "Entertainment ReadyEquipped <br/> with audio-visual setup for movie nights and gatherings.",
//   },
//   "Master Bedroom": {
//     img3D: floor4_3D,
//     Type: "Master Bedroom",
//     Para: "Spacious and Well-LitLarge windows for natural light and a warm ambiance.",
//     Para2: "Stylish FurnishingsModern furniture that combines comfort and elegance.",
//     Para3: "Entertainment ReadyEquipped <br/> with audio-visual setup for movie nights and gatherings.",
//   },
//   "Dining": {
//     img3D: floor5_3D,
//     Type: "Dining",
//     Para: "Spacious and Well-LitLarge windows for natural light and a warm ambiance.",
//     Para2: "Stylish FurnishingsModern furniture that combines comfort and elegance.",
//     Para3: "Entertainment ReadyEquipped <br/> with audio-visual setup for movie nights and gatherings.",
//   },
//   "Kids Bedroom": {
//     img3D: floor6_3D,
//     Type: "Kids Bedroom",
//     Para: "Spacious and Well-LitLarge windows for natural light and a warm ambiance.",
//     Para2: "Stylish FurnishingsModern furniture that combines comfort and elegance.",
//     Para3: "Entertainment ReadyEquipped <br/> with audio-visual setup for movie nights and gatherings.",
//   }
// };

// export default function UnitPlans2() {
//   const [selectedTab, setSelectedTab] = useState("3BHK");
//   const [viewType, setViewType] = useState("2D");
//   const [selected3DTab, setSelected3DTab] = useState("Living Room");
//   const selectedSlide = slide3D[selected3DTab];

//   const handleNext = () => {
//     const currentIndex = tabs.indexOf(selectedTab);
//     setSelectedTab(tabs[(currentIndex + 1) % tabs.length]);
//   };
//   const handlePrev = () => {
//     const currentIndex = tabs.indexOf(selectedTab);
//     setSelectedTab(tabs[(currentIndex - 1 + tabs.length) % tabs.length]);
//   };

//   return (
//     <div className="w-full p-4 relative bg-[#f9f9f9] flex flex-col items-center">
//       {/* Toggle View Button */}
//       <button className="absolute md:right-2 xs:right-0 sm:right-0  top-4 border border-[#173f63] rounded-lg     text-sm font-semibold flex"
//         onClick={() => setViewType(viewType === "2D" ? "3D" : "2D")}>
//         <span className={`px-3 py-1 ${viewType === "2D" ? "bg-[#173f63] text-white" : "text-gray-700"}`}>2D</span>
//         <span className={`px-3 py-1 ${viewType === "3D" ? "bg-[#173f63] text-white" : "text-gray-700"}`}>3D</span>
//       </button>
//       {/* Tabs */}

//       {/* Main Content */}
//       {viewType === "2D" && (
//         <div className=" w-full">
//           <div className="flex max-w-7xl  w-full  md:space-x-4 xs:space-x-2 sm:space-x-2  justify-start mb-4 flex-wrap">
//             {tabs.map((tab) => (
//               <button key={tab} onClick={() => setSelectedTab(tab)}
//                 className={`px-4 py-2 font-semibold rounded-md transition-all ${selectedTab === tab ? "bg-[#173f63] text-white" : "bg-gray-200"}`}>{tab}</button>
//             ))}
//           </div>
//           <div className="max-w-full p-6 bg-white rounded-lg shadow-md flex flex-col gap-12 md:flex-row items-center">
//             {/* <button onClick={handlePrev} className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
//               <ChevronLeft className="w-8 h-8 text-gray-700" />
//             </button>
//             <img
//               src={slides[selectedTab].img}
//               alt="floor plan"
//               className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto rounded-lg"
//             />      */}
//             <button onClick={handlePrev} className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
//               <ChevronLeft className="w-8 h-8 text-gray-700" />
//             </button>
//             <img src={slides[selectedTab].img} alt="floor plan" className="w-full max-w-xl rounded-lg" />
//             <div className="w-full md:w-2/5 p-4">
//               <button className="text-white bg-[#173F63] rounded p-2 w-full md:w-auto mb-2">{slides[selectedTab].size}</button>
//               <h2 className="text-lg text-[#173F63] font-bold">{slides[selectedTab].ex}</h2>
//               <p className="text-gray-600 mt-2">Where Comfort Meets Happiness, Everyday!</p>
//               <button className="p-[2px] text-white bg-[#173f63] w-[20%] rounded">Type</button>
//               {/* Details Section */}
//               <div className="grid grid-cols-2 gap-4 mt-4">
//                 {["Super Area", "Rera Carpet Area", "External Wall Area", "Common Areas"].map((label, index) => (
//                   <div key={index} className="p-2">
//                     <h4 className="text-gray-500 border-b border-[#173f63] pb-1">{label}</h4>
//                     <div className="font-extrabold">- &nbsp;- &nbsp;-</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <button onClick={handleNext} className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
//               <ChevronRight className="w-8 h-8 text-[#173F63]" />
//             </button>
//           </div>
//           <div className="flex space-x-8 sm:space-x-4  xs:hidden ms-20   sm:hidden md:block lg:block  justify-evenly  mt-4">
//             {tabs.map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setSelectedTab(tab)}
//                 className={`px-20 border border-[#173f63] py-2  text-xs sm:text-sm font-semibold transition-all duration-300 rounded-md ${selectedTab === tab ? "bg-[#173f63] text-white >" : "bg-gray-100 text-[#173f63]"
//                   }`}>
//                 {tab}
//               </button>
//             ))}
//           </div>
//           <div className="mt-6  flex flex-col max-w-[1000px] sm:flex-row gap-4 w-full">
//             <div
//               className="bg-white text-left p-4 sm:p-2 flex flex-row items-center border shadow-md rounded-md w-full sm:w-[325px]"
//               style={{ borderColor: "rgb(0, 51, 83)" }}>
//               <div className="w-[64px] h-[64px] flex items-center justify-center">
//                 <img src={lowerDetails[selectedTab].img} alt="Apartment map" className="w-full h-auto" />
//               </div>
//               <div className="px-3 flex-1">
//                 <h6 className="font-semibold text-[#003353]">
//                   {lowerDetails[selectedTab].type}
//                   <span className="text-gray-400"> {lowerDetails[selectedTab].size} </span>
//                 </h6>
//                 <p className="uppercase text-xs text-[#858585] font-semibold">{lowerDetails[selectedTab].label}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       {viewType === "3D" && (
//         <div className="w-full max-w-7xl     mx-auto xs:mt-10 sm:mt-10 md:mt-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <img src={selectedSlide.img3D} height={338} alt={selected3DTab} className="w-full rounded-lg" />
//             <div className="border p-6 rounded-lg text-left">
//               <h2 className="text-3xl font-bold  text-[#173F63]">{selectedSlide.Type}</h2>
//               <p className="text-gray-600 mt-2">{selectedSlide.Para}</p>
//               <p className="text-gray-600 mt-2">{selectedSlide.Para2}</p>
//               <p className="text-gray-600 mt-2">{selectedSlide.Para3}</p>

//             </div>
//           </div>
//           <div className="flex flex-wrap justify-center gap-2 mt-4">
//             {tabs3D.map((tab) => (
//               <button key={tab} onClick={() => setSelected3DTab(tab)}
//                 className={`px-4 py-2 text-sm rounded-full font-semibold ${selected3DTab === tab ? "bg-[#173f63] text-white" : "bg-gray-300 text-gray-700"}`}>{tab}</button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
