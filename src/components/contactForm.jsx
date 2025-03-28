import { useState } from "react";
import contact from "../images/contact.png";

export default function ContactForm() {
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    
    phone: "",
    city: "",
    homeSize: "",
    broker: "",
    source: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };
  return (
    <>
      <div
      
        id="contact"
        className="grid grid-cols-1 md:grid-cols-[40%_auto] min-h-screen">
        <div className="hidden md:block">
          <img
            src={contact}
            alt="Building"
            className="w-full  h-[888px] object-cover" />
        </div>
        <div className="w-full bg-[#0F2C55] text-white h-[888px] sm:h-full xs:h-full p-8">
          <h2 className="text-[34.92px] text-center leading-[41.9px] font-bold text-[#D2AA64]">
            GET IN{" "}
            <span className="text-white text-[74.99px] leading-[89.99px]">
              TOUCH
            </span>
          </h2>
          <p className="text-[15.9px] text-center leading-[21.33px] text-[#D2AA64] mb-6">
            You have any questions? Feel free to contact us.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-[#D2AA64] text-sm">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full p-2 bg-[#0F2C55] border border-gray-400 rounded"
                  onChange={handleChange} />
              </div>
              <div>
                <label className="text-[#D2AA64] text-sm">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full p-2 bg-[#0F2C55] border border-gray-400 rounded"
                  onChange={handleChange} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-[#D2AA64] text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-2 bg-[#0F2C55] border border-gray-400 rounded"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="text-[#D2AA64] text-sm">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="w-full p-2 bg-[#0F2C55] border border-gray-400 rounded"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label className="text-[#D2AA64] text-sm">City</label>
              <select
                name="city"
                className="w-full p-2 bg-[#0F2C55] border border-gray-400 rounded"
                onChange={handleChange}>
                <option value="">Enter City</option>
                <option value="New York">jodhpur</option>
                <option value="Los Angeles">jaipur</option>
                <option value="Los Angeles">ajmer</option>
                <option value="Los Angeles" className="">
                  pali
                </option>
              </select>
            </div>
            <div>
              <label className="text-[#D2AA64] text-sm">
                Preferred Home Size
              </label>
              <select
                name="homeSize"
                className="w-full p-2 bg-[#0F2C55] border border-gray-400 rounded"
                onChange={handleChange}>
                <option value="">Select Home Size</option>
                <option value="1BHK">1BHK</option>
                <option value="2BHK">2BHK</option>
                <option value="3BHK">3BHK</option>
              </select>
            </div>
            <div>
              <label className="text-[#D2AA64] text-sm">
                Are you a broker?
              </label>
              <select
                name="broker"
                className="w-full p-2 bg-[#0F2C55] border border-gray-400 rounded"
                onChange={handleChange}>
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label className="text-[#D2AA64] text-sm">
                How did you hear about us?
              </label>
              <select
                name="source"
                className="w-full p-2 bg-[#0F2C55] border border-gray-400 rounded"
                onChange={handleChange}>
                <option value="">Select</option>
                <option value="Social Media">Social Media</option>
                <option value="Website">Website</option>
              </select>
            </div>
            <div>
              <label className="text-[#D2AA64] text-sm">Message</label>
              <textarea
                name="message"
                placeholder="Message"
                className="w-full p-2 bg-transparent border border-gray-400 rounded"
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-[181px] p-2 bg-[#D2AA64] text-black  rounded text-[20.42px] leading-[24.51px] hover:bg-yellow-500 transition-all duration-300 mx-auto block"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}