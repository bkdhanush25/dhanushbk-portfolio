"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion as m } from "framer-motion";
import { useNavigation } from "@/store/dataStore";

const svgVariants = {
  hidden: { rotate: -180, opacity: 0 },
  visible: { rotate: 0, opacity: 100 },
};

const Header = () => {
  // Mobile Navbar Open Variable
  const [isOpenNav, setisOpenNav] = useState<boolean>(false);
  //Navbar Zustand Variable
  const [selectNav, setSelectNav] = useNavigation((state) => [
    state.selectNav,
    state.setSelectNav,
  ]);
  return (
    <div>
      {/* Mobile hamburger menu */}
      <div className="hidden max-sm:flex justify-end">
        <div
          className={`inline-block text-white p-1 rounded-lg justify-self-end z-10 absolute top-2 right-2 ${
            isOpenNav ? "bg-light-black border-white border" : "bg-primary-color border-primary-color border"
          } `}
          onClick={() => setisOpenNav(!isOpenNav)}
        >
          {!isOpenNav ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12H21"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6H21"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 18H21"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <m.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              variants={svgVariants}
              initial="hidden"
              animate="visible"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18 17.94 6M18 18 6.06 6"
              />
            </m.svg>
          )}
        </div>
        <AnimatePresence>
        {isOpenNav && (
          <m.div initial={{y:-100, opacity:0}} animate={{y:0, opacity:1}} exit={{y:-100, opacity:0}} transition={{type:"tween"}} className="absolute top-0 left-0 flex flex-col bg-black pt-7 text-center pb-5 px-5 rounded-b-md w-full text-white">
            <Link
              href="/"
              className={`p-2 ${selectNav === "Home"? "font-bold text-lg text-primary-color": ""}`}
              onClick={() => {setSelectNav("Home"); setisOpenNav(false);} }
            >
              Home
            </Link>
            <hr className=""/>
            <Link href="/about" onClick={() => { setSelectNav("About"); setisOpenNav(false);} } className={`p-2 ${selectNav === "About"? "font-bold text-lg text-primary-color": ""}`}>
            About
          </Link><hr className=""/>
          <Link href="/blogs" onClick={() => { setSelectNav("Blogs"); setisOpenNav(false);} } className={`p-2 ${selectNav === "Blogs"? "font-bold text-lg text-primary-color": ""}`}>
            Blogs
          </Link><hr className=""/>
          <Link href="/resume" onClick={() => { setSelectNav("Resume"); setisOpenNav(false);} } className={`p-2 ${selectNav === "Resume"? "font-bold text-lg text-primary-color": ""}`}>
            Resume
          </Link><hr className=""/>
          <Link href="/projects" onClick={() => { setSelectNav("Projects"); setisOpenNav(false);} } className={`p-2 ${selectNav === "Projects"? "font-bold text-lg text-primary-color": ""}`}>
            Projects
          </Link><hr className=""/>
          <Link href="/contact" onClick={() => { setSelectNav("Contact"); setisOpenNav(false);} } className={`p-2 ${selectNav === "Contact"? "font-bold text-lg text-primary-color": ""}`}>
            Contact
          </Link>
          </m.div>
        )}
        </AnimatePresence>
      </div>
      {/* Nabigation bar */}
      <div className="rounded-full bg-light-black sm:mx-2 lg:mx-[10%] hidden sm:flex  p-1 text-white mt-2 justify-between text-base items-center">
        <m.div
          whileHover={{ scale: 1.1 }}
          className={`px-6 lg:px-8 py-2 cursor-pointer rounded-full ${
            selectNav === "Home" ? "bg-primary-color" : ""
          }`}
        >
          <Link
            href="/"
            className="font-bold"
            onClick={() => setSelectNav("Home")}
          >
            Home
          </Link>
        </m.div>
        <m.div
          whileHover={{ scale: 1.1 }}
          className={`px-6 lg:px-8 py-2 cursor-pointer rounded-full ${
            selectNav === "About" ? "bg-primary-color" : ""
          }`}
        >
          <Link href="/about" onClick={() => setSelectNav("About")}>
            About
          </Link>
        </m.div>
        <m.div
          whileHover={{ scale: 1.1 }}
          className={`px-6 lg:px-8 py-2 cursor-pointer rounded-full ${
            selectNav === "Blogs" ? "bg-primary-color" : ""
          }`}
        >
          <Link href="/blogs" onClick={() => setSelectNav("Blogs")}>
            Blogs
          </Link>
        </m.div>
        <m.div>
          <Link href="/" className="flex items-center gap-1 cursor-pointer">
            <h2 className="bg-primary-color px-1.5 py-1 rounded-full font-bold text-lg">
              BK
            </h2>
            <h2 className="font-bold text-lg">Dhanush</h2>
          </Link>
        </m.div>
        <m.div
          whileHover={{ scale: 1.1 }}
          className={`px-6 lg:px-8 py-2 cursor-pointer rounded-full ${
            selectNav === "Resume" ? "bg-primary-color" : ""
          }`}
        >
          <Link href="/resume" onClick={() => setSelectNav("Resume")}>
            Resume
          </Link>
        </m.div>
        <m.div
          whileHover={{ scale: 1.1 }}
          className={`px-6 lg:px-8 py-2 cursor-pointer rounded-full ${
            selectNav === "Projects" ? "bg-primary-color" : ""
          }`}
        >
          <Link href="/projects" onClick={() => setSelectNav("Projects")}>
            Projects
          </Link>
        </m.div>
        <m.div
          whileHover={{ scale: 1.1 }}
          className={`px-6 lg:px-8 py-2 cursor-pointer rounded-full ${
            selectNav === "Contact" ? "bg-primary-color" : ""
          }`}
        >
          <Link href="/contact" onClick={() => setSelectNav("Contact")}>
            Contact
          </Link>
        </m.div>
      </div>
    </div>
  );
};

export default Header;
