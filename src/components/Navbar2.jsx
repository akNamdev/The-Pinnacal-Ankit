const Navbar2 = ({ menues }) => {
  
  if (!Array.isArray(menues)) {
    console.error("menues prop should be an array");
    return null;
  }
  return (    
    <div className=" relative w-full  mx-auto">
      <div className=" md:w-[90%] w-full md:ms-[90px] rounded-b-2xl absolute bg-white  top-0  z-[999999999]  items-center   ">
        <ul className=" sm:my-2 2xl:my-3 flex flex-wrap justify-around gap-10 sm:gap-0 xs:gap-2">
          {menues.map((menu, index) => (
            <li
              key={index}
              className="sm:min-w-[130px] md:px-3 sm:px-6 py-1.5 inline-flex justify-center rounded-lg sm:rounded-full whitespace-nowrap font-bold text-sm md:text-[13px] cmd:text-sm lg:text-base xl:text-xl text-center tracking-wide uppercase text-[#121212] sm:text-[#474536] bg-[#FFFFFF80] sm:bg-inherit sm:duration-1000 bg-no-repeat bg-cover bg-center hover:bg-[#ba6f22] hover:text-white"
            >

               <a href={menu.url}>{menu.name}</a>

            </li>
          ))}


        </ul>
      </div>
    </div>
  );
};
export default Navbar2;