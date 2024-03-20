"use client";
import React from "react";
import MobilePhoneSvg from "@/public/mobile-phone.svg";
import LocationSvg from "@/public/location.svg";
import EmailSvg from "@/public/mail.svg";
import WorkingSvg from "@/public/working.svg";
import Image from "next/image";
import { motion as m } from "framer-motion";

const ContactCard = () => {
  return (
    <div className="text-center md:mx-20 mx-2 mt-5 mb-10">
      <h1 className="text-5xl font-bold md:font-medium max-sm:text-4xl max-sm:text-left mb-0 lg:mb-10">
        Contact <span className="text-primary-color">Us</span>
      </h1>
      <div className="lg:grid grid-cols-2 gap-10">
        <div className="col-span-1 md:p-5">
          <form>
            <table className="w-full">
              <tr className="">
                <td className="py-2 md:py-5">
                  <label className="text-lg font-medium">
                    Name<span className="text-primary-color">*</span>
                  </label>
                </td>
                <td className="py-2 md:py-5">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="md:w-96 lg:w-72 xl:w-96 rounded-lg border-transparent focus:border-transparent focus:ring-primary-color focus:border focus:border-primary-color shadow-inner bg-zinc-100 focus:bg-white"
                    required
                  />
                </td>
              </tr>
              <tr className="">
                <td className="py-2 md:py-5">
                  <p className="text-lg font-medium block">
                    Mobile Number<span className="text-primary-color">*</span>
                  </p>
                </td>
                <td className="py-2 md:py-5">
                  <input
                    type="text"
                    placeholder="Enter your mobile number"
                    className="md:w-96 lg:w-72 xl:w-96 rounded-lg border-transparent focus:border-transparent focus:ring-primary-color focus:border focus:border-primary-color shadow-inner bg-zinc-100 focus:bg-white"
                    required
                  />
                </td>
              </tr>
              <tr className="">
                <td className="py-2 md:py-5">
                  <p className="text-lg font-medium block">
                    Email<span className="text-primary-color">*</span>
                  </p>
                </td>
                <td className="py-2 md:py-5">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="md:w-96 lg:w-72 xl:w-96 rounded-lg border-transparent focus:border-transparent focus:ring-primary-color focus:border focus:border-primary-color shadow-inner bg-zinc-100 focus:bg-white"
                    required
                  />
                </td>
              </tr>
              <tr className="">
                <td className="py-2 md:py-5">
                  <p className="text-lg font-medium block">
                    Message<span className="text-primary-color">*</span>
                  </p>
                </td>
                <td className="py-2 md:py-5">
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={5}
                    placeholder="enter your message"
                    className="w-52 md:w-96 lg:w-72 xl:w-96 rounded-lg border-transparent focus:border-transparent focus:ring-primary-color focus:border focus:border-primary-color shadow-inner bg-zinc-100 focus:bg-white"
                    required
                  ></textarea>
                </td>
              </tr>
            </table>
            <button
              type="submit"
              className="rounded-full mb-5 md:my-5 border border-primary-color px-10 py-3 text-lg text-primary-color font-medium hover:text-white hover:bg-primary-color"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="col-span-1">
          <iframe
            className="rounded-lg"
            width="100%"
            height="600"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=chennai+(Bk%20Dhanush)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps devices</a>
          </iframe>
        </div>
        </div>
        <div className="flex flex-wrap gap-y-10 w-full justify-around md:justify-between mt-10">
          {/* Mobile Card */}
          <m.div whileHover={{scale:1.1, y:-10}} className="p-10 flex flex-col justify-center items-center shadow-lg rounded-2xl w-[250px] cursor-pointer group hover:bg-primary-color/50 duration-100">
            <Image className="mb-5" width={100} height={100} src={MobilePhoneSvg} alt="" />
            <h4 className="text-3xl font-bold mb-2">Mobile</h4>
            <p className="text-base">+91 6374151627</p>
          </m.div>
          {/* Location Card */}
          <m.div whileHover={{scale:1.1, y:-10}} className="py-10 flex flex-col justify-center items-center shadow-lg rounded-2xl w-[250px] cursor-pointer group hover:bg-primary-color/50 duration-100">
            <Image className="mb-5" width={100} height={100} src={LocationSvg} alt="" />
            <h4 className="text-3xl font-bold mb-2">Location</h4>
            <p className="text-base">Thiruvottiyur,<br/> Chennai - 600019,<br /> Tamilnadu, India</p>
          </m.div>
          {/* Working Card */}
          <m.div whileHover={{scale:1.1, y:-10}} className="p-10 flex flex-col justify-center items-center shadow-lg rounded-2xl w-[250px] cursor-pointer group hover:bg-primary-color/50 duration-100">
            <Image className="mb-5" width={100} height={100} src={WorkingSvg} alt="" />
            <h4 className="text-3xl font-bold mb-2">Working</h4>
            <p className="text-base">Monday - Sunday<br /> 09:00 - 23:00</p>
          </m.div>
          {/* Email Card */}
          <m.div whileHover={{scale:1.1, y:-10}} className="p-10 flex flex-col justify-center items-center shadow-lg rounded-2xl w-[250px] cursor-pointer group hover:bg-primary-color/50 duration-100">
            <Image className="mb-5" width={100} height={100} src={EmailSvg} alt="" />
            <h4 className="text-3xl font-bold mb-2">Email</h4>
            <p className="text-base">bkdhanushofficial@gmail.com</p>
          </m.div>
        </div>
      
    </div>
  );
};

export default ContactCard;
