"use client";
import React from "react";
import Link from "next/link";
import { motion as m } from "framer-motion";
import { useNavigation } from "@/store/dataStore";

const Header = () => {
  const [selectNav, setSelectNav] = useNavigation((state) => [
    state.selectNav,
    state.setSelectNav,
  ]);
  return (
    <div>
      {/* Mobile hamburger menu */}
      {/* <div className="hidden max-sm:flex justify-end m-2">
        <div className="inline-block text-white bg-primary-color hover:bg-light-black p-1 rounded-lg justify-self-end">
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
        </div>
      </div> */}
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
