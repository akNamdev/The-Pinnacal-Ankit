import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../images/logo.png";
import { useEffect, useState } from "react";
import { Modal } from "flowbite-react";
import { useLocation } from "react-router-dom";
import Navbar2 from "./Navbar2";
const navigation = [
  { name: "About Us", to: "/About", current: true },
  { name: "Products", to: "/#OurContent", current: true },
  { name: "PLANS", to: "Plans", current: true },
  { name: "Location Map", to: "location", current: true },
  { name: "Price", to: "price", current: true },
  { name: "Amenities", to: "Amenities", current: true },
  { name: "Gallery", to: "gallery", current: true },
  { name: "Contact Us", to: "/#contact", current: true },
];
const menuConfig = {
  "/price": [
    { url: "#Price-List", name: "Price" },
    { url: "#Payment-Structure", name: "Payment Structure" },
    { url: "#Current-Offers", name: "Current offers" },
  ],
  "/gallery": [
    { url: "#spec ", name: "Project walk through" },
    { url: "#simple-flate", name: "Sample flat" },
    { url: "#Project-Gallery", name: "Project Gallery" },
    { url: "#Construction-updates", name: "Construction updates" },
  ],
  "/Plans": [
    { url: "#Unit-Plan ", name: "UNIT PLAN" },
    { url: "#Site-Plan", name: "SITE-PLAN" },
    { url: "#Tower-plans", name: "Tower PLans" }
  ]
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [show, setShow] = useState(false)
  const [menus, setMenus] = useState(menuConfig["default"]);
  const location = useLocation();
  const path = ["/Plans", "/price", "/gallery"];
  useEffect(() => {
    if (path.includes(location.pathname)) {
      setShow(true);
      setMenus(menuConfig[location.pathname]);
    } else {
      setShow(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <Disclosure as="nav" className="fixed top-0 left-0 w-full  z-50 ">
      <div className={`${isScroll ? "bg-[#173F63]" : "bg-transparent"} duration-1000 transition-opacity ease-in-out  mx-auto max-w-full px-4 sm:px-6 lg:px-8`}>
        <div className="flex h-16 items-center justify-between">
          {/* Logo on the Left */}
          <div className="flex items-center">
            <img
            
              src={logo}
              alt="Logo"
              className="h-[50px] w-auto sm:h-[60px]"
            />
          </div>
          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.to}
                className={classNames(
                  item.current
                    ? "text-white"
                    : "text-white",
                  "px-3 py-2 uppercase text-[15.68px] leading-[21.36px] font-medium   relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[4px] after:bg-white after:transition-all after:duration-1000 hover:after:w-full "
                )}>
                {item.name}
              </a>
            ))}
            {/* left side model  */}
            <div className="relative">
              <button onClick={() => setOpenModal(true)}>
                <img
                  src="https://thepinnacle.realtynivesh.com/_next/static/media/hambar.69c3f09f.svg"
                  alt="Menu"
                />
              </button>
              {openModal && (
                <Modal
                  show={openModal}
                  onClose={() => setOpenModal(false)}
                  size="full"
                  className="fixed inset-0  w-full transform transition-all duration-1000 ease-in-out translate-y-0  h-auto bg-[#173F63] z-50"
                >
                  <div className="sticky   w-full bg-[#173F63] text-white text-end p-4 right-0 z-50">
                    <button onClick={() => setOpenModal(false)} className="text-white hover:text-gray-200 text-3xl">
                      <XMarkIcon className="h-10 w-10 " />
                    </button>
                    <div className="sticky  top-0 left-0 w-full   bg-[#173F63] text-white ">
                      <div className="flex flex-wrap justify-between">
                        <div className="">
                          <img src={logo} alt=" logo pinnacal" />
                        </div>
                        <div className="text-start">
                          <p className="font-semibold relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[4px] after:bg-white after:transition-all after:duration-1000 hover:after:w-full">
                            <a href="#OurContent">PRODUCTS</a> </p>
                          <ul>
                            <ul>
                              <li className="py-2"><a href="#" className="text-white ">3 BHK</a></li>
                              <li className="py-2"><a href="#" className="text-white ">3 BHK + S</a></li>
                              <li className="py-2"><a href="#" className="text-white ">4 BHK + S</a></li>
                            </ul>
                          </ul>
                        </div>
                        <div className="text-start">
                          <p className="font-semibold relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[4px] after:bg-white after:transition-all after:duration-1000 hover:after:w-full">
                            <a href="/price">PRICE</a>
                            PLANS</p>
                          <ul>
                            <li className="py-2">
                              <a href="#" className="text-white ">Unit Plan</a>
                            </li>
                            <li className="py-2">
                              <a href="#" className="text-white ">Site Plan</a>
                            </li>
                            <li className="py-2">
                              <a href="#" className="text-white ">Tower Plan</a>
                            </li>
                            <li className="py-2">
                              <a href="#" className="text-white ">Amenities</a>
                            </li>
                          </ul>
                        </div>
                        <div className="text-start">
                          <p className="font-semibold relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[4px] after:bg-white after:transition-all after:duration-1000 hover:after:w-full">

                            <a href="/location">LOCATION MAP</a>
                          </p>
                          <ul>
                            <li className="py-2">
                              <a href="#" className="text-white ">Near By</a>
                            </li>
                            <li className="py-2">
                              <a href="#" className="text-white ">Find Distance</a>
                            </li>
                            <li className="py-2">
                              <a href="#" className="text-white ">Key Highlights</a>
                            </li>
                          </ul>
                        </div>
                        <div className="text-start">
                          <p className="font-semibold relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[4px] after:bg-white after:transition-all after:duration-1000 hover:after:w-full">
                            <a href="/price">PRICE</a>
                          </p>
                          <ul>
                            <li className="py-2">
                              <a href="#" className="text-white ">Price Sheet</a>
                            </li>
                            <li className="py-2">
                              <a href="#" className="text-white ">Payment Structure</a>
                            </li>
                            <li className="py-2">
                              <a href="#" className="text-white ">Current Offers</a>
                            </li>
                          </ul>
                        </div>
                        <div className="text-start">
                          <p className="font-semibold relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[4px] after:bg-white after:transition-all after:duration-1000 hover:after:w-full" >GALLERY</p>
                          <ul>
                            <li className="py-2">
                              <a href="#" className="text-white ">Project Walk-Through</a>
                            </li>
                            <li className="py-2">
                              <a href="#" className="text-white ">Sample Flat</a>
                            </li>
                            <li className="py-2">
                              <a href="#" className="text-white ">Project Gallery</a>
                            </li>
                            <li className="py-2">
                              <a href="#" className="text-white ">Construction Updates</a>
                            </li>
                          </ul>
                        </div>
                        <div className="text-start">
                          <p className="font-semibold relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[4px] after:bg-white after:transition-all after:duration-1000 hover:after:w-full ">CONTACT US</p>
                          <ul>
                            <li className="py-2">
                              <a href="tel:+91 7976291139" className="text-white ">+91 7976291139</a>
                            </li>
                            <li className="py-2">
                              <a href="tel:+91 7976291139" className="text-white ">+91 7976291139</a>
                            </li>
                            <li className="py-2">
                              <button
                                onClick={() => window.open("https://wa.me/+917976291139", "_blank")}
                                className="bg-white text-black rounded-lg py-2 px-4"
                              >
                                WHATSAPP NOW
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                  </div>
                </Modal>
              )}
            </div>
          </div>
          {/* Mobile Menu Button on the Right */}
          <div className="sm:hidden">
            <DisclosureButton className="p-2 text-gray-500  rounded-md focus:outline-none">
              <img
                src="https://thepinnacle.realtynivesh.com/_next/static/media/hambar.69c3f09f.svg"
                alt="Menu"
              />
              <XMarkIcon className="hidden h-6 w-6 group-data-open:block" />
            </DisclosureButton>
          </div>
        </div>
        {/* Plan  */}
        {show && (
          <Navbar2 menues={menus} />
        )}
      </div>
      {/* Mobile Navigation Panel */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 bg-gray-800 px-4 pt-2 py-5 pb-7">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.to}
              className="block rounded-md  text-left  text-2xl px-10 py-2 text-white hover:bg-gray-600"
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}