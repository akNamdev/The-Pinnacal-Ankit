import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import one from "../images/image (1).png";
import two from "../images/image (2).png";
import three from "../images/image (3).png";
import four from "../images/image (4).png";
import five from "../images/image (5).png";
import six from "../images/image (6).png";
import seven from "../images/image (7).png";
import eight from "../images/image (8).png";
import ten from "../images/image (10).png";
import image from "../images/image.png";

const images = [
    { src: one, km: "03", bott: "Railway Station only 5km" },
    { src: image, km: "01", bott: "Hotel" },
    { src: two, km: "05", bott: "Manav Rachena School" },
    { src: three, km: "03", bott: "University" },
    { src: four, km: "07", bott: "5-star Hotel" },
    { src: five, km: "05", bott: "Infosoft Ground" },
    { src: six, km: "07", bott: "Fortis Hospital" },
    { src: seven, km: "02", bott: "Cricket Stadium" },
    { src: eight, km: "03", bott: "Nexus Elante Chandigarh" },
    { src: ten, km: "20", bott: "HDFC Bank" },
];
function SilckSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const slider = {
        centerMode: true,
      
        infinite: true,
        slidesToShow: 3, 
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 2,                  
                },

            },
            {
                breakpoint: 480, 
                settings: {
                    slidesToShow: 1,
                    
                },
            },
        ],
    };
    return (
        <div className="max-w-full mt-5 relative text-center mb-0 pb-0 h-[370px]">
            <Slider {...slider}>
                {images.map((item, index) => (
                    <div
                        key={index}
                        className={`relative w-[290px] h-[315px] m-1 transition-transform duration-300 ${index === activeIndex ? "scale-100" : "scale-90 opacity-100"
                            }`}>
                        <img
                            src={item.src}
                            alt={`Image ${index + 1}`}
                            className="w-full h-[315px] object-cover rounded-lg shadow-md"/>
                        <div
                            className={`absolute top-0 left-0 inset-0 w-full bg-black transition-all duration-300 ${index === activeIndex ? "bg-opacity-70" : "bg-opacity-0"
                                }`}>
                            {index === activeIndex && (
                                <div className="pt-[100px] text-center">
                                    <p className="text-[70px] text-white font-extrabold">{item.km}</p>
                                    <p className="text-[50px] text-white font-bold">KM</p>
                                </div>
                            )}
                        </div>
                        <p className="text-gray-500 font-semibold py-2">{item.bott}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SilckSlider;





// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { useState } from "react";
// import one from "../images/image (1).png";
// import two from "../images/image (2).png";
// import three from "../images/image (3).png";
// import four from "../images/image (4).png";
// import five from "../images/image (5).png";
// import six from "../images/image (6).png";
// import seven from "../images/image (7).png";
// import eight from "../images/image (8).png";
// import ten from "../images/image (10).png";
// import image from "../images/image.png";

// const images = [
//   { src: one, km: "03", label: "IT City", bott: "Railway Station only 5km" },
//   { src: image, km: "01", label: "IT City", bott: "Hotel" },
//   { src: two, km: "05", label: "IT City", bott: " Manav Rachena School" },
//   { src: three, km: "03", label: "IT City", bott: "University " },
//   { src: four, km: "07", label: "IT City", bott: "5 star Hotel " },
//   { src: five, km: "05", label: "IT City", bott: " infosoft ground" },
//   { src: six, km: "07", label: "IT City", bott: " Fortis Hospital " },
//   { src: seven, km: "02", label: "IT City", bott: " Cricket stadium " },
//   { src: eight, km: "03", label: "IT City", bott: "Nexus Elante chandigarh" },
//   { src: ten, km: "20", label: "IT City", bott: " HDFC Bank " },

// ];

// function SilckSlider() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const settings = {
//     centerMode: true,
//     infinite: true,
//     slidesToScroll: 1,
//     dots: false,
//     autoplay: true,
//     autoplaySpeed: 1500,
//     arrows: false,
//     beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           autoplay: true,
//         }
//       }
//     ],
//     slidesToShow: 4,
//     speed: 500,
//   };

//   return (
//     <div className="max-w-full mt-5 h-[315px] relative text-center">
//       <Slider {...settings}>
//         {images.map((item, index) => (
//           <div key={index} className="group relative w-[290px] h-[315px] m-1">
//             <img src={item.src} alt={`Image ${index + 1}`} className="w-[290px] h-[315px] object-cover" />
//             <div
//               className={`absolute top-0 left-0 inset-0 w-[92.5%] bg-black transition-all duration-300 ${
//                 index === activeIndex ? "bg-opacity-70" : "bg-opacity-0"
//               }`}
//             >
//               {index === activeIndex && (
//                 <div className="pt-[100px] text-center">
//                   <p className="text-[70px] text-white font-extrabold">{item.km}</p>
//                   <p className="text-[50px] text-white font-bold">KM</p>                  
//                 </div>
//               )}
//             </div>
//             <div className=" text-gray-500 text-center w-full font-semibold py-5"> {item.bott}</div>
//           </div>
//         ))}
     

//       </Slider>
//     </div>
//   );
// }

// export default SilckSlider;