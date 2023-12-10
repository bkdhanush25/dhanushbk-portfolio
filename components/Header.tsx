import React from "react";
import Link from "next/link";
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div>
      <div className="rounded-full bg-light-black sm:mx-2 lg:mx-[10%] hidden sm:flex  p-1 text-white mt-2 justify-between text-base items-center">
        <div className="px-6 lg:px-8 py-2 cursor-pointer bg-primary-color rounded-full">
          {/* <motion.div></motion.div> */}
          <Link href="/" className="font-bold">
            Home
          </Link>
        </div>
        <div className="px-6 lg:px-8 py-2 cursor-pointer rounded-full">
          <Link href="/about">About</Link>
        </div>
        <div className="px-6 lg:px-8 py-2 cursor-pointer rounded-full">
          <Link href="/services">Services</Link>
        </div>
        <Link href="/" className="flex items-center gap-1 cursor-pointer">
          <h2 className="bg-primary-color px-1.5 py-1 rounded-full font-bold text-lg">
            BK
          </h2>
          <h2 className="font-bold text-lg">Dhanush</h2>
        </Link>
        <div className="px-6 lg:px-8 py-2 cursor-pointer rounded-full">
          <Link href="/resume">Resume</Link>
        </div>
        <div className="px-6 lg:px-8 py-2 cursor-pointer rounded-full">
          <Link href="/projects">Projects</Link>
        </div>
        <div className="px-6 lg:px-8 py-2 cursor-pointer rounded-full">
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
