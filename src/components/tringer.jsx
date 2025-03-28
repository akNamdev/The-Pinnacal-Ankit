import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ame1 from "../images/ame1.png";
import ame2 from "../images/ame2.png";
import ame3 from "../images/ame3.png";
import ame4 from "../images/ame4.png";
import ame5 from "../images/ame5.png";
import ame6 from "../images/ame6.png";
import ame7 from "../images/ame7.png";
import ame8 from "../images/ame8.png";
import ame9 from "../images/ame9.png";
import ame10 from "../images/ame10.png";
import ame11 from "../images/ame11.png";
import ame12 from "../images/ame12.png";
import ame13 from "../images/ame13.png";
import ame14 from "../images/ame14.png";

const amenitiesData = [
    {
        title: "Yoga & Meditation", img: ame1,
        icon: "https://thepinnacle.realtynivesh.com/_next/static/media/taracelough-amenitiesicon.a8ba4cab.svg"
    },
    {
        title: "Swimming Pool", img: ame2,
        icon: "  https://thepinnacle.realtynivesh.com/_next/static/media/swimmingpool-amenitiesicon.5876bd6f.svg"
    },
    {
        title: "Gymnasium", img: ame3,
        icon: "https://thepinnacle.realtynivesh.com/_next/static/media/gym-amenitiesicon.159929fe.svg"
    },
    {
        title: "Co-working Spaces", img: ame4,
        icon: "https://thepinnacle.realtynivesh.com/_next/static/media/co-workingspacee-amenitiesicon.fdce4826.svg"
    },
    {
        title: "Spa & Sauna", img: ame5,
        icon: "https://thepinnacle.realtynivesh.com/_next/static/media/spa-amenitiesicon.65fee620.svg"
    },
    
    {
        title: "Indoor Games Arcade", img: ame6,
        icon: "https://thepinnacle.realtynivesh.com/_next/static/media/indoorgames-amenitiesicon.eba8749b.svg"
    },
    {
        title: "Restaurant & Coffee Shop", img: ame7,
        icon: "https://thepinnacle.realtynivesh.com/_next/static/media/cafeandrestro-amenitiesicon.243e446e.svg"
    },
    {
        title: "Kids Play Area", img: ame8,
        icon: "https://thepinnacle.realtynivesh.com/_next/static/media/cafeandrestro-amenitiesicon.243e446e.svg"
    },
    {
        title: "Terrace Lounge", img: ame9,
        icon: "https://thepinnacle.realtynivesh.com/_next/static/media/vollybollcourt-amenitiesicon.a5fd3810.svg"
    },
    {
        title: "swimming", img: ame10,
        icon: "https://thepinnacle.realtynivesh.com/_next/static/media/yoga-amenitiesicon.95127362.svg"
    },
    {
        title: "Sports Arena", img: ame11,
        icon: "https://thepinnacle.realtynivesh.com/_next/static/media/yoga-amenitiesicon.95127362.svg"
    },
    {
        title: "Conference Room", img: ame12,
        icon: "https://thepinnacle.realtynivesh.com/_next/static/media/tennis-amenitiesicon.8cd189e4.svg"
    },
    {
        title: "Movie Theater", img: ame13,
        icon: "https://thepinnacle.realtynivesh.com/_next/static/media/carparking-amenitiesicon.fc5f6bde.svg"
    },
    {
        title: "car Parking area", img: ame14,
        icon: "https://thepinnacle.realtynivesh.com/_next/static/media/sitoutarea-amenitiesicon.2b4409cd.svg"

    },
];

export default function Amenities() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const newIndex = Math.min(
                Math.floor(window.scrollY / 300), // Adjust speed
                amenitiesData.length - 1
            );
            setCurrentIndex(newIndex);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="max-w-[1266px] mx-auto pb-5">
            {/* First Row: 2 Columns */}
            <div className="grid  md:grid-cols-2 sm:grid-cols-1 gap-5">
                {amenitiesData.slice(0, 2).map((amenity, index) => (
                    <motion.div
                        key={index}
                        className="h-[325px] group  relative overflow-hidden rounded-lg"
                        initial={{ opacity: 25, scale: 0.95 }}
                        animate={{
                            opacity: index === currentIndex ? 1 : 1,
                            scale: index === currentIndex ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.2 }}

                    >
                        <img src={amenity.img} alt={amenity.title} className="w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110 object-cover rounded-lg" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#00000080]  text-white text-xl font-bold">

                            {amenity.title}
                        </div>
                        <div className=" absolute bottom-4  animate-bounce right-4">                            
                            <img src={amenity.icon} alt="Amenity Icon" className="w-10 h-10" />
                        </div>
                    </motion.div>
                ))}
            </div>
            {/* Second Row: 3 Columns */}
            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 mt-5">
                {amenitiesData.slice(2, 5).map((amenity, index) => (
                    <motion.div
                        key={index + 2}
                        className="h-[325px] relative overflow-hidden rounded-lg group "
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{
                            opacity: index + 2 === currentIndex ? 1 : 1,
                            scale: index + 2 === currentIndex ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src={amenity.img} alt={amenity.title} className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110 " />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#00000080] bg-opacity-50 text-white text-xl font-bold">

                            {amenity.title}
                        </div>
                        <div className=" absolute bottom-4 animate-bounce right-4">                        
                            <img src={amenity.icon} alt="Amenity Icon" className="w-10 h-10" />
                        </div>
                    </motion.div>
                ))}
            </div>
            {/* Third Row: 2 Columns */}
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5 mt-5">
                {amenitiesData.slice(5, 7).map((amenity, index) => (
                    <motion.div
                        key={index + 5}
                        className="h-[325px] relative overflow-hidden group rounded-lg"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{
                            opacity: index + 5 === currentIndex ? 1 : 1,
                            scale: index + 5 === currentIndex ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        <img src={amenity.img} alt={amenity.title} className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110 " />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#00000080]  text-white text-xl font-bold">
                            {amenity.title}
                        </div>
                        <div className=" absolute bottom-4 right-4 animate-bounce">                           
                            <img src={amenity.icon} alt="Amenity Icon" className="w-10 h-10" />
                        </div>
                    </motion.div>
                ))}
            </div>
            {/* Fourth Row: 3 Columns */}
            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 mt-5">
                {amenitiesData.slice(7, 10).map((amenity, index) => (
                    <motion.div
                        key={index + 7}
                        className="h-[325px] relative overflow-hidden group rounded-lg"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{
                            opacity: index + 7 === currentIndex ? 1 : 1,
                            scale: index + 7 === currentIndex ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src={amenity.img} alt={amenity.title} className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110 " />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#00000080] bg-opacity-50 text-white text-xl font-bold">

                            {amenity.title}
                        </div>
                        <div className=" absolute bottom-4 right-4 animate-bounce">
                            {/* <span className="text-4xl ">{amenity.icon}</span> */}
                            <img src={amenity.icon} alt="Amenity Icon" className="w-10 h-10" />
                        </div>
                    </motion.div>
                ))}
            </div>
            {/* Fifth Row: Full Width */}
            <div className="grid grid-cols-1 mt-5">
                <motion.div
                    className="h-[325px] relative overflow-hidden rounded-lg group"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{
                        opacity: 10 === currentIndex ? 1 : 1,
                        scale: 10 === currentIndex ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                >
                    <img src={amenitiesData[10].img} alt={amenitiesData[10].title} className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110 " />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#00000080] bg-opacity-50 text-white text-xl font-bold">

                        {amenitiesData[10].title}
                    </div>
                    <div className=" absolute animate-bounce  bottom-4 right-4">                     
                        {/* <img src={amenity.icon.trim()} alt="Amenity Icon" className="w-10 h-10" /> */}
                        {/* <img src={amenity.icon}  alt="Animity Icon  " className="w-10 h-10" /> */}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
