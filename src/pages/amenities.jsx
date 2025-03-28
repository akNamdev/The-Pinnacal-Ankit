import React from 'react'
import amebg from "../images/anebg.png";
import NumberContact from "../components/numberContact";
import SateliteToggle from "../components/sateliteToggle";
import YouIntrested from "../components/youIntrested";
import Downlod from "../components/downlod";
import GetOpt from "../components/getOpt";
import TerraceLounge from '../components/tringer';
import Accordion from '../components/Accordion';


export default function Amenities() {
    return (
        <>
 
            
            <div
                className="w-full h-[80vh] flex justify-center items-center relative"
                style={{
                    backgroundImage: `url(${amebg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute w-full h-full bg-[#00000080]"></div>

                <h1 className="text-white z-10 text-5xl uppercase text-center font-semibold">
                    Live at the heart of all the <br /> action!
                </h1>
            </div> 

            {/* Amenities */}
             <section className='my-10'>
                <h1 className='text-[40px] leading-[55.04px] text-center font-bold text-[#173F63] pb-3 uppercase'> Amenities</h1>
                <p className='text-center text-[#5A5454] pb-10 text-[18px] leading-[21.39px] '>Discover the Premium amenities at The Pinnacle Mohali
                </p>
                <TerraceLounge/>   

            </section>        
            <section className="my-10">
                <YouIntrested />
            </section>
            <section className="max-w-full mx-auto ">
             <Accordion/>
            </section>
            <section className="my-10">
                
                <GetOpt />
            </section>
            <section className="my-10">
                <SateliteToggle />
            </section>
            <section className="my-10">
                <NumberContact />
            </section>            
            <section className="my-10">
                <Downlod />
            </section>
           
        </>
    )
}
