"use client";
import Image from "next/image";
import React from "react";
import { motion as m } from "framer-motion";
import ClgImage from "@/public/clg-image.jpg";
import SecBanner from "@/public/second-banner.png";
import LeadershipChar1 from "@/public/leadershipcha1.png";
import CuriousLearnerChar2 from "@/public/curiouslearnerchar2.jpg";
import PublicSpeakingChar3 from "@/public/publicspeakingchar3.jpg";
import ProblemSolvingChar4 from "@/public/problemsolvingchar4.jpg";
import MERNStackImg from "@/public/Mern_stack_img.png";
import MongoDBImg from "@/public/mongodg_img.jpg";
import ExpressJSImg from "@/public/expressJS_img.png";
import ReactJSImg from "@/public/ReactJS_img.png";
import NodeJSImg from "@/public/nodejs_img.png";
import NextJSImg from "@/public/nextJS_img.jpg";
import TailwindCSSImg from "@/public/tailwindcss_img.webp";
import TypescriptImg from "@/public/typescript_img.png";
import RestAPIImg from "@/public/restAPI_img.jpg";
import ZustandImg from "@/public/Zustand_img.jpg";
import RadixUIImg from "@/public/radix_ui_img.jpg";
import MaterialUIImg from "@/public/material_ui_img.png";

const AboutCard = () => {
  return (
    <>
      {/* About Details */}
      <div className="py-0 md:py-5 lg:py-10 px-3 md:px-5 xl:px-20">
        <div className="lg:grid grid-cols-2 gap-10 xl:gap-2">
          <div className="col-span-1 flex justify-center">
            <Image
              width={100}
              height={100}
              src={ClgImage}
              alt="College-Image"
              className="w-[500px] h-fit rounded-[26px] mb-5 lg:mb-0"
              unoptimized
            />
          </div>
          <div className="col-span-1">
            <h3 className="text-5xl font-bold max-sm:text-4xl max-sm:text-left mb-3">
              About <span className="text-primary-color">Me</span>
            </h3>

            <p className="text-lg lg:mr-14">
              <span className="text-xl font-medium mb-5">
                Hai all, Myself BK Dhanush
              </span>
              <br /> I am the person who is passionate in Computer Science Field
              and Entrepreneurship. I am Full Stack Web developer, who develops
              website for people. I am Curious in learning Global trends like
              4.O technologies. Passionate on Startup and having hungry mindset
              to take Entrepreneurship in future. I am the person who is aware
              and curious about emerging technologies. I am self-motivated
              person who loves to inspire people and motivates through the quote
              ,&quot;STAY HUNGRY, STAY FOOLISH&quot; .
            </p>
            <div>
              <div className="flex mt-5 items-end">
                <div className="text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m9 5 7 7-7 7"
                    />
                  </svg>
                </div>
                <h5 className="font-semibold text-primary-color text-xl mr-3">
                  Date of Birth<span className="text-black">:</span>
                </h5>
                <p className="text-lg">25 Jan 2003</p>
              </div>
              <div className="flex mt-5 items-end">
                <div className="text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m9 5 7 7-7 7"
                    />
                  </svg>
                </div>
                <h5 className="font-semibold text-primary-color text-xl mr-3">
                  City<span className="text-black">:</span>
                </h5>
                <p className="text-lg">Chennai, TamilNadu, India</p>
              </div>
              <div className="flex mt-5 items-start md:items-end">
                <div className="text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m9 5 7 7-7 7"
                    />
                  </svg>
                </div>
                <h5 className="font-semibold text-primary-color text-xl mr-3">
                  Degree<span className="text-black">:</span>
                </h5>
                <p className="text-lg">
                  Bachelor of Engineering in Computer Science
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Secondary Banner Image */}
      <Image
        src={SecBanner}
        width={100}
        height={100}
        alt="secondary-banner"
        className="h-40 w-full object-cover md:h-fit md:w-[100vw] my-0 mt-5 md:my-10"
        unoptimized
      />
      {/* Characteristics Cards */}
      <div className="p-5">
        <h3 className="text-primary-color text-4xl md:text-5xl text-center font-bold mb-5 md:mb-10">
          Unique <span className="text-black">Qualities</span>
        </h3>
        <div className="flex flex-wrap gap-y-5 justify-around xl:justify-between">
          <m.div
            whileHover={{ scale: 1.1 }}
            className="border shadow-lg rounded-3xl max-w-[350px]"
          >
            <Image
              src={LeadershipChar1}
              width={100}
              height={100}
              alt="leadership"
              className="w-full rounded-t-3xl h-48"
              unoptimized
            />
            <div className="p-5">
              <h4 className="text-center text-3xl font-bold mb-3">
                Leadership
              </h4>
              <p className="text-center">
                Empathetic, visionary, and decisive leader, fostering growth,
                inspiring action, and achieving collective success.
              </p>
            </div>
          </m.div>
          <m.div
            whileHover={{ scale: 1.1 }}
            className="border shadow-lg rounded-3xl max-w-[350px]"
          >
            <Image
              src={PublicSpeakingChar3}
              width={100}
              height={100}
              alt="leadership"
              className="w-full rounded-t-3xl h-48"
              unoptimized
            />
            <div className="p-5">
              <h4 className="text-center text-3xl font-bold mb-3">
                Public Speaking
              </h4>
              <p className="text-center">
                Engaging speaker with clarity, charisma, and confidence,
                captivating audiences and conveying ideas effectively.
              </p>
            </div>
          </m.div>
          <m.div
            whileHover={{ scale: 1.1 }}
            className="border shadow-lg rounded-3xl max-w-[350px]"
          >
            <Image
              src={CuriousLearnerChar2}
              width={100}
              height={100}
              alt="leadership"
              className="w-full rounded-t-3xl h-48 object-cover"
              unoptimized
            />
            <div className="p-5">
              <h4 className="text-center text-3xl font-bold mb-3">
                Curious Learner
              </h4>
              <p className="text-center">
                Passionate, inquisitive learner, constantly seeking knowledge,
                embracing challenges, and expanding horizons with curiosity.
              </p>
            </div>
          </m.div>
          <m.div
            whileHover={{ scale: 1.1 }}
            className="border shadow-lg rounded-3xl max-w-[350px]"
          >
            <Image
              src={ProblemSolvingChar4}
              width={100}
              height={100}
              alt="leadership"
              className="w-full rounded-t-3xl"
              unoptimized
            />
            <div className="p-5">
              <h4 className="text-center text-3xl font-bold mb-3">
                Problem Solving
              </h4>
              <p className="text-center">
                Resourceful problem solver, adept at analyzing situations,
                generating innovative solutions, and overcoming obstacles with
                resilience.
              </p>
            </div>
          </m.div>
        </div>
      </div>
      {/* Technical Skills */}
      <div className="p-5 mb-10">
        <h3 className="text-primary-color text-4xl md:text-5xl text-center font-bold mb-5 md:mb-10">
          Technical <span className="text-black">Skills</span>
        </h3>
        <div className="flex flex-wrap gap-y-5 justify-around xl:justify-between">
          <m.div
            whileHover={{ scale: 1.1 }}
            className="border shadow-lg rounded-3xl max-w-[350px]"
          >
            <Image
              src={MERNStackImg}
              width={100}
              height={100}
              alt="leadership"
              className="w-full rounded-t-3xl h-48"
              unoptimized
            />
            <div className="p-5">
              <h4 className="text-center text-3xl font-bold mb-3">
                MERN Stack
              </h4>
              <p className="text-center">
                A popular full-stack framework comprising MongoDB, Express.js,
                React, and Node.js, enabling rapid and efficient web
                development.
              </p>
            </div>
          </m.div>
          <m.div
            whileHover={{ scale: 1.1 }}
            className="border shadow-lg rounded-3xl max-w-[350px]"
          >
            <Image
              src={MongoDBImg}
              width={100}
              height={100}
              alt="leadership"
              className="w-full rounded-t-3xl h-48"
              unoptimized
            />
            <div className="p-5">
              <h4 className="text-center text-3xl font-bold mb-3">MongoDB</h4>
              <p className="text-center">
                A powerful, flexible NoSQL database, ideal for modern
                applications requiring scalable and efficient data storage and
                retrieval.
              </p>
            </div>
          </m.div>
          <m.div
            whileHover={{ scale: 1.1 }}
            className="border shadow-lg rounded-3xl max-w-[350px]"
          >
            <Image
              src={ExpressJSImg}
              width={100}
              height={100}
              alt="leadership"
              className="w-full rounded-t-3xl h-48 object-cover"
              unoptimized
            />
            <div className="p-5">
              <h4 className="text-center text-3xl font-bold mb-3">ExpressJS</h4>
              <p className="text-center">
                {" "}
                A minimalist web framework for Node.js, offering robust features
                and middleware support to streamline server-side development.
              </p>
            </div>
          </m.div>
          <m.div
            whileHover={{ scale: 1.1 }}
            className="border shadow-lg rounded-3xl max-w-[350px]"
          >
            <Image
              src={ReactJSImg}
              width={100}
              height={100}
              alt="leadership"
              className="w-full rounded-t-3xl"
              unoptimized
            />
            <div className="p-5">
              <h4 className="text-center text-3xl font-bold mb-3">ReactJS</h4>
              <p className="text-center">
                A JavaScript library for building user interfaces, known for its
                component-based architecture, virtual DOM, and declarative
                syntax.
              </p>
            </div>
          </m.div>
          <m.div
            whileHover={{ scale: 1.1 }}
            className="border shadow-lg rounded-3xl max-w-[350px]"
          >
            <Image
              src={NodeJSImg}
              width={100}
              height={100}
              alt="leadership"
              className="w-full rounded-t-3xl h-48"
              unoptimized
            />
            <div className="p-5">
              <h4 className="text-center text-3xl font-bold mb-3">NodeJS</h4>
              <p className="text-center">
                A JavaScript runtime environment that allows developers to run
                JavaScript code outside the browser, ideal for building scalable
                server-side applications.
              </p>
            </div>
          </m.div>
          <m.div
            whileHover={{ scale: 1.1 }}
            className="border shadow-lg rounded-3xl max-w-[350px]"
          >
            <Image
              src={TailwindCSSImg}
              width={100}
              height={100}
              alt="leadership"
              className="w-full rounded-t-3xl h-48"
              unoptimized
            />
            <div className="p-5">
              <h4 className="text-center text-3xl font-bold mb-3">
                TailwindCSS
              </h4>
              <p className="text-center">
                EA utility-first CSS framework for building custom designs
                quickly, providing a low-level utility approach to styling web
                applications.
              </p>
            </div>
          </m.div>
          <m.div
            whileHover={{ scale: 1.1 }}
            className="border shadow-lg rounded-3xl max-w-[350px]"
          >
            <Image
              src={NextJSImg}
              width={100}
              height={100}
              alt="leadership"
              className="w-full rounded-t-3xl h-48"
              unoptimized
            />
            <div className="p-5">
              <h4 className="text-center text-3xl font-bold mb-3">Nest.js</h4>
              <p className="text-center">
                A React framework for building server-rendered applications,
                offering features like static exporting, TypeScript support, and
                API routes.
              </p>
            </div>
          </m.div>
          <m.div
            whileHover={{ scale: 1.1 }}
            className="border shadow-lg rounded-3xl max-w-[350px]"
          >
            <Image
              src={TypescriptImg}
              width={100}
              height={100}
              alt="leadership"
              className="w-full rounded-t-3xl h-48"
              unoptimized
            />
            <div className="p-5">
              <h4 className="text-center text-3xl font-bold mb-3">
                Typescript
              </h4>
              <p className="text-center">
                A statically typed superset of JavaScript, enhancing code
                reliability and developer productivity through type checking.
              </p>
            </div>
          </m.div>
          <m.div
            whileHover={{ scale: 1.1 }}
            className="border shadow-lg rounded-3xl max-w-[350px]"
          >
            <Image
              src={RestAPIImg}
              width={100}
              height={100}
              alt="leadership"
              className="w-full rounded-t-3xl h-48"
              unoptimized
            />
            <div className="p-5">
              <h4 className="text-center text-3xl font-bold mb-3">Rest API</h4>
              <p className="text-center">
                {" "}
                An architectural style for designing networked applications,
                providing a standardized approach for communication between
                clients and servers.
              </p>
            </div>
          </m.div>
          <m.div
            whileHover={{ scale: 1.1 }}
            className="border shadow-lg rounded-3xl max-w-[350px]"
          >
            <Image
              src={ZustandImg}
              width={100}
              height={100}
              alt="leadership"
              className="w-full rounded-t-3xl h-48"
              unoptimized
            />
            <div className="p-5">
              <h4 className="text-center text-3xl font-bold mb-3">Zustand</h4>
              <p className="text-center">
                A simple and flexible state management solution for React
                applications, offering easy setup and efficient global state
                management.
              </p>
            </div>
          </m.div>
          <m.div
            whileHover={{ scale: 1.1 }}
            className="border shadow-lg rounded-3xl max-w-[350px]"
          >
            <Image
              src={RadixUIImg}
              width={100}
              height={100}
              alt="leadership"
              className="w-full rounded-t-3xl h-48"
              unoptimized
            />
            <div className="p-5">
              <h4 className="text-center text-3xl font-bold mb-3">Radix UI</h4>
              <p className="text-center">
                A collection of accessible and composable UI components,
                designed to streamline web development and enhance user
                experiences.
              </p>
            </div>
          </m.div>
          <m.div
            whileHover={{ scale: 1.1 }}
            className="border shadow-lg rounded-3xl max-w-[350px]"
          >
            <Image
              src={MaterialUIImg}
              width={100}
              height={100}
              alt="leadership"
              className="w-full rounded-t-3xl h-48"
              unoptimized
            />
            <div className="p-5">
              <h4 className="text-center text-3xl font-bold mb-3">
                Material UI
              </h4>
              <p className="text-center">
                A versatile and customizable React component library, offering a
                wide range of pre-designed UI elements for efficient web
                development.
              </p>
            </div>
          </m.div>
        </div>
      </div>
    </>
  )
}

export default AboutCard
