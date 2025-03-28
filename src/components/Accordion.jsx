import { useState } from "react";

const faqData = [
    {
        question: "What types of apartments are available at The Pinnacle?",
        answer: "The Pinnacle offers luxurious 3+1 BHK and 4+1 BHK apartments designed for spacious living, featuring modern amenities and high-end finishes."
    },
    {
        question: "Where is The Pinnacle located?",
        answer: "The Pinnacle is located in Sector 67, Mohali, with convenient access to Chandigarh International Airport, IT City Mohali, educational institutions, hospitals, and major business hubs."
    },
    {
        question: "What are the key amenities provided at The Pinnacle?",
        answer: "Residents enjoy a range of amenities, including a clubhouse, gymnasium, swimming pool, spa, indoor games, landscaped green spaces, sports facilities like tennis and basketball courts, and 24x7 security with a 5-tier system."
    },
    {
        question: "Is The Pinnacle a gated community?",
        answer: "Yes, The Pinnacle is a gated community with a secure environment, offering 24x7 CCTV surveillance, security guards, and access control systems for the safety of all residents."
    },
    {
        question: "What is the size range of apartments at The Pinnacle?",
        answer: "The apartments range from approximately 2,950 sq. ft. to 3,900 sq. ft., offering ample living space, thoughtful design, and modern interiors."
    },
    {
        question: "What is Mivan technology, and how is it used in the construction of The Pinnacle?",
        answer: "Mivan technology is an advanced construction technique used for formwork, ensuring high-quality, durable, and earthquake-resistant buildings. It enhances the overall structural integrity and timely project completion."
    },
    {
        question: "Are there recreational facilities for children and families?",
        answer: "Yes, The Pinnacle offers a dedicated children's play area, green spaces for family outings, sports courts, indoor game zones, and more to cater to the recreational needs of residents."
    },
    ,
    {
        question: "Is The Pinnacle suitable for investment purposes?    ",
        answer: "Absolutely! The strategic location, high-end amenities, robust construction quality, and promising growth in Mohali’s real estate market make The Pinnacle an excellent investment option."
    },
    ,
    {
        
        question: "What is the proximity of The Pinnacle to key landmarks?",
        answer: "The Pinnacle enjoys close proximity to Chandigarh International Airport, IT City Mohali, reputed schools, hospitals, shopping centers, and various commercial hubs."
    },
    ,
    {
        question: "Is there adequate parking available?",
        answer: "Yes, The Pinnacle provides ample covered parking spaces for residents and visitors, ensuring a hassle-free experience."
    },
    ,
    {
        question: "Can I book a site visit for The Pinnacle?",
        answer: "Yes, site visits can be arranged. Please contact our sales team or visit our website to schedule an appointment for a guided tour of the property."
    },
    ,
    {
        question: "What is the open space ratio at The Pinnacle?",
        answer: "The Pinnacle boasts 82% open space, ensuring a serene living environment with lush green landscapes and natural surroundings."
    },
];

export default function Accordion() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index); };
    return (
        <div className="w-full px-4 md:px-20 py-10">
                       <div className="w-full max-w-5xl mx-auto max-h-[300px] overflow-y-auto scrollbar scrollbar-track-[#173f63] scrollbar-thumb-[#173f63]">
                {faqData.map((item, index) => (
                    <div key={index} className="border-b border-gray-300">
                        <button
                            className="w-full flex justify-between items-center text-left py-4 px-6 text-lg font-medium text-gray-700 hover:bg-gray-100 transition-all"
                            onClick={() => toggleAccordion(index)}
                        >
                            {item.question}
                            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
                        </button>
                        {openIndex === index && (
                            <div className="p-5 bg-gray-50 text-gray-600">{item.answer}</div>
                        )}
                    </div>
                ))}               
            </div>
        </div>



    );
}

