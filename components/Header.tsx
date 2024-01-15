"use client";
import React from "react";
import Link from "next/link";
import { motion as m } from "framer-motion";

const Header = () => {
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
          className="px-6 lg:px-8 py-2 cursor-pointer bg-primary-color hover:bg-hover-black rounded-full"
        >
          <Link href="/" className="font-bold">
            Home
          </Link>
        </m.div>
        <m.div
          whileHover={{ scale: 1.1 }}
          className="px-6 lg:px-8 py-2 cursor-pointer rounded-full hover:bg-hover-black"
        >
          <Link href="/about">About</Link>
        </m.div>
        <m.div
          whileHover={{ scale: 1.1 }}
          className="px-6 lg:px-8 py-2 cursor-pointer rounded-full hover:bg-hover-black"
        >
          <Link href="/services">Services</Link>
        </m.div>
        <m.div whileHover={{ scale: 1.1 }}>
          <Link href="/" className="flex items-center gap-1 cursor-pointer">
            <h2 className="bg-primary-color px-1.5 py-1 rounded-full font-bold text-lg">
              BK
            </h2>
            <h2 className="font-bold text-lg">Dhanush</h2>
          </Link>
        </m.div>
        <m.div
          whileHover={{ scale: 1.1 }}
          className="px-6 lg:px-8 py-2 cursor-pointer rounded-full hover:bg-hover-black"
        >
          <Link href="/resume">Resume</Link>
        </m.div>
        <m.div
          whileHover={{ scale: 1.1 }}
          className="px-6 lg:px-8 py-2 cursor-pointer rounded-full hover:bg-hover-black"
        >
          <Link href="/projects">Projects</Link>
        </m.div>
        <m.div
          whileHover={{ scale: 1.1 }}
          className="px-6 lg:px-8 py-2 cursor-pointer rounded-full hover:bg-hover-black"
        >
          <Link href="/contact">Contact</Link>
        </m.div>
      </div>
    </div>
  );
};

export default Header;
