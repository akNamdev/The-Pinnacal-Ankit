import React, { useState, useEffect } from "react";
import uparrow from "../images/uparrow.png";

const features = [
  {
        title: "Prime Location",
    description: "Experience the convenience of a prime location, with easy access to all major destinations.",
    image: "https://s3-alpha-sig.figma.com/img/2ef0/ba7f/c2837dcfadb10dc62122ae65be587856?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PrYLEPw6WMwNKXE4Uqed4AocQs~sXlvYQoC6VHduHgbxGaD55MpbMTae8y7KavTzZHwgImdeXzyjuNingfx51Zn21gBq-x2P0oqdhDciJ6uUIkV6X7oY~tRTLm~5y659HIgFSxkRhBBzPYEsjvUJCfKgWuy45gVfESTmAdr8g8Utn7J3tuJr0J8VrCKEeyGlJ70vtFlPHc7x2nMMxsLQcH93FKZnidBkGUriDlamfYtzVhQdOyJk2kf-2DbAQ2nnC5hrlzj8hJNKPoB-QHKJ6lW1KwgbTN3KRZHeAfGmtglfuHtAUpsOXNdHLdrMikND8nuuDajvodRLS4z~ICL44A__"
  },
    {
    title: "Spacious Residences",
    description: "Enjoy luxurious and spacious residences designed for ultimate comfort and elegance.",
    image: "https://s3-alpha-sig.figma.com/img/8bfd/2b0c/b98954e871278ea80b68870e6081fde5?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=D3M8svdMFkV6OBLgBAraEzjdtlVWbn06XsR8V8n09yGyYga1YA5he6AEk~-JoAwUFpVIpNPqVceGwe6eaXU8sC3m0hvw30K1ediV5Q1G~OkNv30MpNK-lPjWknUjtD4drvrLMBiok3Q~iNb8QLZveYSXqcoIVopfV-U0HaTK6UeGwpCYFQxU3L4p9zS7xxFhYjLWZXxRq9DAo0off0bDM-LU3m~kEFsc9E7xDJecpf55RSsRW7Jg09DhYmI6IjTU43c1zyTKSuCxlyQIjEdh5DOGAVp~dG01453lCHMxJkd-s8Ufd-KjPxOUqDBBmkPV6TFAF8YMMW4958SEcwDwOA__"
  }
  ,
  {
    title: "Extensive Amenities",
    
    description: "Indulge in world-class amenities, from swimming pools to fitness centers and more.",
    image: "https://s3-alpha-sig.figma.com/img/0a7b/5593/ed356981612264e4a18b027414eb66b2?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lvLd4S4dQPax1hpOp-M6JgTaeCn4nDHlU9Fcrzm64t6Y1JHbYeW1juAZ1Anh6Vh8dGrE50v8wofMLDGacvc5X68tbKRoS0VNAp3oFqQIn-Xs7pOxTGuoro60YI9w62CW72XYkEZJztR4lNfrHAp3wXolUR0RUDSGZzkm3KgdbwzXzgoxxf9hPCHMt8jAnXXrGB3uUJSUJNevdISwk98H5SDFbfdD~35uSewFmXz3ed3K5V6XAgTSCMmGsY2sz-l~eBl6tFgJMq03nIHmpdzlADfLIERDAa015i4QOQEycraafwzLXFcM18G~NJANp8BM7C6qBG5oCmxOtNcmhWmiQg__"
  },
  {
    title: "Advanced Mivan Construction",
    description: "Built with advanced Mivan technology, ensuring durability and high-quality construction.",
    image: "https://s3-alpha-sig.figma.com/img/6795/b66a/f061198c1d5b2909398df92448ff65c8?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nAsvNn2vuq6Ur-jv1N9C0JshTaXGqkpQaGpZn5-vPa-h-Q3U42Xqd7SMHkDXLEDd0Y2ZqnTtcDULSJ24lLwMwffE97uyiLN48eC~hixBcZG6v59l~Ub~ZvCWFyVI4OqzMwAQMAJcJunsdWDgnGKp9KKr2xpOQdhQFQeo~H0xH0mFFR1dQj53vADA11TZr514a4gxh2Z6sWg2JDBiioxsP~Mo7C2JYRDCZ~TLifVL8~jn6GeCNMUL0XxEQZFGNn8aEfrat50KNrMJCEzwAm60DWoMQn6Uq-QoafVEfLIjzF-2YILNXVD4gay6Wf~aIz9mAjvl0QNnzS9K5paTop2ttQ__"
  },
  {
    title: "Ample Open Space",
    description: "Relax in vast open spaces, perfectly designed for leisure and tranquility.",
    image: "https://s3-alpha-sig.figma.com/img/91bf/624a/cfabbfae6d391f008db907565fcf8e07?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MS9Hb60UdbKwop2igjrrYZe-hkwLP5OvSwID856DxtrKy2muXN49jM9V8lWhcdf~wj58K3gGd9N6snlQsADwGueOuArUd6fZ9Pkm8ZwcN9Ed8SdoBRxwy-LPSeq8~7vtIghALw9XgDQc-CbpzHsRjmcHcnLulbXr8UyndqnBRdXWRU-sJhozOzjh2Z6XhEJLjUcqdrE8EjwRD9F27toVAXOJJtY1U0atpnhDiBkOgXyocsVaTu7MKA-t6FhF76IM1zPC5-HIwCgQ0vxggKFkRbSWX2A7rXWUcAkRI9dC3VTB3h2WgpeR1bTOgyHbYgIE4kmoyO8dCAMgnfuqnFq0mg__"
  },
  {
    title: "Enhanced Security",
    description: "Surround yourself with lush greenery and beautifully landscaped parks.",
    image: "https://s3-alpha-sig.figma.com/img/59b2/dc7c/a4403dea9c5c11ac01dd0af634cd13ce?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XM2aDMG4JP0P4sYpOjVqtPWGMqg4uQT3OzPRv1IAosCfZoF8TVzsGP2k3Cf9lhBfGBHcK350fjNIAtsJAu9hDXA~EZpv0M3NAWV39Jg4YpG0VBo~k~fzS02vOItqc5X3-z~FtvdCg8IEj3kkIHN7f1Y5fgZ2UnSZ~BKkERkVT5FyNyunytt65sYGYZ5sRfVzn5mIZgpPcJpCEdJVhpbX~DshcSUw81rY3wz09wd0ML1iWvqKBzGpBuiyR6kCYVCIuqSyTppKh18eFmzFVHnM-v-D8OM7mgQwZT6e6~Iz9ROdAiVyUwyGBppCwLG~GJwwbN7SuKQNBxP2VXcnx8inzA__"
  },
];
const FeatureSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const nextFeature = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % features.length);
  };
  return (
    <>
      <div className=" pt-10">
        <h1 className=' md:text-[44.1px] md:leading-[60.68px] lg:text-[44.1px] lg:leading-[60.68px] sm:text-[40px] xs:text-[40px] sm:leading-[30.68px]  text-[#474536]  font-bold uppercase text-center '> key Highlights</h1>
        <p className='text-[22.05px]  leading-[50.92px] font-medium text-center'>Your Dream Home Awaits you to Own Exquisite Site in Sushma Belleza</p>
      </div>
      <div className="flex w-full h-[500px] overflow-x-auto md:overflow-hidden">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative transition-all duration-500 h-full cursor-pointer
            ${index === activeIndex ? "w-full md:w-[50%]" : "w-[30%] md:w-[10%]"}
            `}
            style={{
              backgroundImage: `url(${feature.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }} onClick={() => setActiveIndex(index)}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <h2
              className={`absolute text-white transition-all duration-500 text-sm sm:text-lg md:text-xl
                ${index === activeIndex
                  ? "top-4 left-4"
                  : "bottom-10 left-4  rotate-[-90deg] origin-center"}`}>
              {feature.title}
            </h2>
            {index === activeIndex && (
              <p className="absolute left-4 bottom-4 text-white font-semibold text-sm sm:text-lg md:text-[20px] w-3/4 md:w-1/2">
                {feature.description}
              </p>
            )}
            <button
              onClick={nextFeature}
              className="absolute top-4 right-4 p-2 rounded-full border-2 border-white"
            >
              <img src={uparrow} alt="Next" width={20} height={20} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeatureSection;

