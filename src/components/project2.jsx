
export default function Project2() {
    const steps = [
        "Start Of Raft",
        "Completion Stilt",
        "Completion 3rd Floor",
        "Completion 4th Floor",
        "Completion 5th Floor",
        "Completion 6th Floor",
        "Completion 7th Floor",
        "Completion 8th Floor",
        "Completion 9th Floor",
        "Completion 10rd Floor",
        "Completion 11th Floor",
        "Completion 12th Floor",
        "Completion 13th Floor",
        "Completion 14th Floor",
        "Completion 15th Floor",
        "Completion 16th Floor",
        "Completion 17th Floor",
        "Project ready for handover",
        
    ];
    return (
        <div className="grid sm:grid-cols-3 xs:grid-cols-3 md:hidden lg:hidden gap-6 text-center">
            {steps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center">            
                    <div className="flex justify-center items-center size-[38px] rounded border-2 border-[#131313]">
                        <div className={`size-[24px] rounded flex justify-center items-center ${index >= 8 ? "bg-yellow-500" : "bg-[#173f63]"
                                }`}
                        >
                            {index >= 0 && index <= 7 && (
                                <span style={{ fontSize: "20px", color: "white" }}>&#10004;</span>
                            )}
                        </div>
                    </div>
                    <h6 className="mt-4  font-semibold          
                           text-center text-[#4E4E4E]">
                        {step}
                    </h6>
                </div>
            ))}
        </div>
    );
}
