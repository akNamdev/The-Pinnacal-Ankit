import { useState } from "react";

export default function SateliteToggle() {
  const [isGoogleMap, setIsGoogleMap] = useState(true);
  return (
    <>
    
      <section className="max-w-full h-[60vh] ">
        <div className="">
          <div className="relative w-full h-">
            <div className="relative w-full h-full overflow-hidden">
              {isGoogleMap ? (
                <iframe
                  className="h-[60vh] w-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4321788509955!2d-122.4194154846821!3d37.77492977975952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2fba5243%3A0x4d6c9bfc8f8d0e6c!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1633647890659!5m2!1sen!2sus"
                  title="Google Maps"
                  allowFullScreen
                  loading="eager"
                />

              ) : (
                <div className="w-full h-full">
                  <iframe
                    className="h-[60vh]"
                    src="https://satellites.pro/Jodhpur_map.Rajasthan.India"
                    title="tab-content"
                    width="100%"
                    // height="475px"

                    allowFullScreen
                    loading="eager"
                  />
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
      </section>

    </>
  )
}
