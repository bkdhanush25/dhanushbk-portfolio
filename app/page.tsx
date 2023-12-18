"use client";
import React, { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import Profile1 from "../public/profile1.png";
import Profile2 from "../public/profile2.png";
import TransitionRing from "../public/transition-ring.png";
import HalfCircle from "../public/primary-half-circle.png";
import SpringTransition from "../public/spring-transition.png";
import Image from "next/image";
import CountUp from 'react-countup';
import { Carousel } from 'flowbite-react';

function Page() {
  const [hoverProfile1, setHoverProfile1] = useState<Boolean>(false);
  const [hoverHiremeButton, setHoverHiremeButton] = useState<Boolean>(false);
  const [hoverProfile2, setHoverProfile2] = useState<Boolean>(false);
  const [hoverProjectCard, setHoverProjectCard] = useState<Number>(0);

  return (
    <div>
      {/* Hello and intro section */}
      <div className="relative py-[120px] flex justify-center">
        <AnimatePresence>
          {!hoverProfile1 && (
            <m.div
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: 200,
                transition: {
                  type: "spring",
                  delay: 0.2,
                  stiffness: 260,
                  damping: 20,
                },
              }}
              transition={{
                type: "spring",
                duration: 0,
                stiffness: 260,
                damping: 20,
              }}
              className="absolute top-[10px] text-light-black flex flex-col justify-center text-center mt-10 -z-20"
            >
              <div>
                <button className="border hover:border-2 hover:font-semibold border-light-black rounded-full px-6 py-1.5 text-xl font-medium">
                  Hello!
                </button>
              </div>
              <h2 className="text-7xl font-semibold mt-2 -z-20">
                I&apos;m <span className="text-primary-color">Dhanush</span>,
                <br />
                Web Developer<span className="text-primary-color">.</span>
              </h2>
            </m.div>
          )}
        </AnimatePresence>
      </div>
      {/* Testimonials and rating section */}
      <div>
        <AnimatePresence>
          <m.div
            animate={
              (hoverProfile1 && { y: -200 }) || (!hoverProfile1 && { y: 0 })
            }
            transition={{
              type: "spring",
              delay: 0.2,
              stiffness: 260,
              damping: 20,
            }}
            className="flex justify-between mx-20 mt-14"
          >
            {/* Testimonials section */}
            <div>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.135 17.445H5.1C5.22 10.44 6.6 9.285 10.905 6.735C11.4 6.435 11.565 5.805 11.265 5.295C10.98 4.8 10.335 4.635 9.84 4.935C4.77 7.935 3 9.765 3 18.48V26.565C3 29.13 5.085 31.2 7.635 31.2H12.135C14.775 31.2 16.77 29.205 16.77 26.565V22.065C16.77 19.44 14.775 17.445 12.135 17.445Z"
                  fill="#344054"
                />
                <path
                  d="M28.365 17.445H21.33C21.45 10.44 22.83 9.285 27.135 6.735C27.63 6.435 27.795 5.805 27.495 5.295C27.195 4.8 26.565 4.635 26.055 4.935C20.985 7.935 19.215 9.765 19.215 18.495V26.58C19.215 29.145 21.3 31.215 23.85 31.215H28.35C30.99 31.215 32.985 29.22 32.985 26.58V22.08C33 19.44 31.005 17.445 28.365 17.445Z"
                  fill="#344054"
                />
              </svg>
              <p className="text-xl font-medium">
                Jenny&apos;s Exceptional product design
                <br />
                ensure our website&apos;s success.
                <br />
                Highly Recommended
              </p>
            </div>
            {/* Rating section */}
            <div className="flex flex-col">
              <div className="flex ml-auto">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.8912 19.0933C23.5459 19.428 23.3872 19.912 23.4659 20.3867L24.6512 26.9467C24.7512 27.5027 24.5165 28.0653 24.0512 28.3867C23.5952 28.72 22.9885 28.76 22.4912 28.4933L16.5858 25.4133C16.3805 25.304 16.1525 25.2453 15.9192 25.2387H15.5578C15.4325 25.2573 15.3099 25.2973 15.1979 25.3587L9.29118 28.4533C8.99918 28.6 8.66852 28.652 8.34452 28.6C7.55518 28.4507 7.02852 27.6987 7.15785 26.9053L8.34452 20.3453C8.42318 19.8667 8.26452 19.38 7.91918 19.04L3.10452 14.3733C2.70185 13.9827 2.56185 13.396 2.74585 12.8667C2.92452 12.3387 3.38052 11.9533 3.93118 11.8667L10.5578 10.9053C11.0619 10.8533 11.5045 10.5467 11.7312 10.0933L14.6512 4.10668C14.7205 3.97334 14.8099 3.85068 14.9179 3.74668L15.0378 3.65334C15.1005 3.58401 15.1725 3.52668 15.2525 3.48001L15.3979 3.42668L15.6245 3.33334H16.1859C16.6872 3.38534 17.1285 3.68534 17.3592 4.13334L20.3179 10.0933C20.5312 10.5293 20.9459 10.832 21.4245 10.9053L28.0512 11.8667C28.6112 11.9467 29.0792 12.3333 29.2645 12.8667C29.4392 13.4013 29.2885 13.988 28.8779 14.3733L23.8912 19.0933Z"
                    fill="#FD853A"
                  />
                </svg>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.8912 19.0933C23.5459 19.428 23.3872 19.912 23.4659 20.3867L24.6512 26.9467C24.7512 27.5027 24.5165 28.0653 24.0512 28.3867C23.5952 28.72 22.9885 28.76 22.4912 28.4933L16.5858 25.4133C16.3805 25.304 16.1525 25.2453 15.9192 25.2387H15.5578C15.4325 25.2573 15.3099 25.2973 15.1979 25.3587L9.29118 28.4533C8.99918 28.6 8.66852 28.652 8.34452 28.6C7.55518 28.4507 7.02852 27.6987 7.15785 26.9053L8.34452 20.3453C8.42318 19.8667 8.26452 19.38 7.91918 19.04L3.10452 14.3733C2.70185 13.9827 2.56185 13.396 2.74585 12.8667C2.92452 12.3387 3.38052 11.9533 3.93118 11.8667L10.5578 10.9053C11.0619 10.8533 11.5045 10.5467 11.7312 10.0933L14.6512 4.10668C14.7205 3.97334 14.8099 3.85068 14.9179 3.74668L15.0378 3.65334C15.1005 3.58401 15.1725 3.52668 15.2525 3.48001L15.3979 3.42668L15.6245 3.33334H16.1859C16.6872 3.38534 17.1285 3.68534 17.3592 4.13334L20.3179 10.0933C20.5312 10.5293 20.9459 10.832 21.4245 10.9053L28.0512 11.8667C28.6112 11.9467 29.0792 12.3333 29.2645 12.8667C29.4392 13.4013 29.2885 13.988 28.8779 14.3733L23.8912 19.0933Z"
                    fill="#FD853A"
                  />
                </svg>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.8912 19.0933C23.5459 19.428 23.3872 19.912 23.4659 20.3867L24.6512 26.9467C24.7512 27.5027 24.5165 28.0653 24.0512 28.3867C23.5952 28.72 22.9885 28.76 22.4912 28.4933L16.5858 25.4133C16.3805 25.304 16.1525 25.2453 15.9192 25.2387H15.5578C15.4325 25.2573 15.3099 25.2973 15.1979 25.3587L9.29118 28.4533C8.99918 28.6 8.66852 28.652 8.34452 28.6C7.55518 28.4507 7.02852 27.6987 7.15785 26.9053L8.34452 20.3453C8.42318 19.8667 8.26452 19.38 7.91918 19.04L3.10452 14.3733C2.70185 13.9827 2.56185 13.396 2.74585 12.8667C2.92452 12.3387 3.38052 11.9533 3.93118 11.8667L10.5578 10.9053C11.0619 10.8533 11.5045 10.5467 11.7312 10.0933L14.6512 4.10668C14.7205 3.97334 14.8099 3.85068 14.9179 3.74668L15.0378 3.65334C15.1005 3.58401 15.1725 3.52668 15.2525 3.48001L15.3979 3.42668L15.6245 3.33334H16.1859C16.6872 3.38534 17.1285 3.68534 17.3592 4.13334L20.3179 10.0933C20.5312 10.5293 20.9459 10.832 21.4245 10.9053L28.0512 11.8667C28.6112 11.9467 29.0792 12.3333 29.2645 12.8667C29.4392 13.4013 29.2885 13.988 28.8779 14.3733L23.8912 19.0933Z"
                    fill="#FD853A"
                  />
                </svg>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.8912 19.0933C23.5459 19.428 23.3872 19.912 23.4659 20.3867L24.6512 26.9467C24.7512 27.5027 24.5165 28.0653 24.0512 28.3867C23.5952 28.72 22.9885 28.76 22.4912 28.4933L16.5858 25.4133C16.3805 25.304 16.1525 25.2453 15.9192 25.2387H15.5578C15.4325 25.2573 15.3099 25.2973 15.1979 25.3587L9.29118 28.4533C8.99918 28.6 8.66852 28.652 8.34452 28.6C7.55518 28.4507 7.02852 27.6987 7.15785 26.9053L8.34452 20.3453C8.42318 19.8667 8.26452 19.38 7.91918 19.04L3.10452 14.3733C2.70185 13.9827 2.56185 13.396 2.74585 12.8667C2.92452 12.3387 3.38052 11.9533 3.93118 11.8667L10.5578 10.9053C11.0619 10.8533 11.5045 10.5467 11.7312 10.0933L14.6512 4.10668C14.7205 3.97334 14.8099 3.85068 14.9179 3.74668L15.0378 3.65334C15.1005 3.58401 15.1725 3.52668 15.2525 3.48001L15.3979 3.42668L15.6245 3.33334H16.1859C16.6872 3.38534 17.1285 3.68534 17.3592 4.13334L20.3179 10.0933C20.5312 10.5293 20.9459 10.832 21.4245 10.9053L28.0512 11.8667C28.6112 11.9467 29.0792 12.3333 29.2645 12.8667C29.4392 13.4013 29.2885 13.988 28.8779 14.3733L23.8912 19.0933Z"
                    fill="#FD853A"
                  />
                </svg>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.8912 19.0933C23.5459 19.428 23.3872 19.912 23.4659 20.3867L24.6512 26.9467C24.7512 27.5027 24.5165 28.0653 24.0512 28.3867C23.5952 28.72 22.9885 28.76 22.4912 28.4933L16.5858 25.4133C16.3805 25.304 16.1525 25.2453 15.9192 25.2387H15.5578C15.4325 25.2573 15.3099 25.2973 15.1979 25.3587L9.29118 28.4533C8.99918 28.6 8.66852 28.652 8.34452 28.6C7.55518 28.4507 7.02852 27.6987 7.15785 26.9053L8.34452 20.3453C8.42318 19.8667 8.26452 19.38 7.91918 19.04L3.10452 14.3733C2.70185 13.9827 2.56185 13.396 2.74585 12.8667C2.92452 12.3387 3.38052 11.9533 3.93118 11.8667L10.5578 10.9053C11.0619 10.8533 11.5045 10.5467 11.7312 10.0933L14.6512 4.10668C14.7205 3.97334 14.8099 3.85068 14.9179 3.74668L15.0378 3.65334C15.1005 3.58401 15.1725 3.52668 15.2525 3.48001L15.3979 3.42668L15.6245 3.33334H16.1859C16.6872 3.38534 17.1285 3.68534 17.3592 4.13334L20.3179 10.0933C20.5312 10.5293 20.9459 10.832 21.4245 10.9053L28.0512 11.8667C28.6112 11.9467 29.0792 12.3333 29.2645 12.8667C29.4392 13.4013 29.2885 13.988 28.8779 14.3733L23.8912 19.0933Z"
                    fill="#FD853A"
                  />
                </svg>
              </div>
              <p className="text-5xl font-bold">10 Years</p>
              <p className="text-xl font-medium ml-auto">Experience</p>
            </div>
          </m.div>
        </AnimatePresence>
      </div>
      {/* Image */}
      <div className="relative flex justify-center">
        <div className="absolute bottom-[-240px] -z-10">
          <Image
            className=""
            src={Profile1}
            width={700}
            height={700}
            alt="profile1"
          />
        </div>
        <div className="absolute bottom-[-240px] -z-30">
          <Image
            className=""
            src={HalfCircle}
            width={700}
            height={100}
            alt="Half circle"
          />
        </div>
        <AnimatePresence>
          {hoverProfile1 && (
            <m.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{
                type: "spring",
                delay: 0.2,
                stiffness: 260,
                damping: 20,
              }}
              className="absolute top-[-210px] -z-20"
            >
              <Image
                className=""
                src={SpringTransition}
                width={700}
                height={100}
                alt="Half circle"
              />
            </m.div>
          )}
        </AnimatePresence>
      </div>
      {/* Portfolio & Hire me button */}
      <div
        className="flex pt-40 pb-7 lg:mx-96"
        onMouseOver={() => {
          setHoverProfile1(true);
        }}
        onMouseOut={() => {
          setHoverProfile1(false);
        }}
      >
        {/* Portfolio button */}
        <div className="border border-white rounded-full backdrop-blur-md text-white mx-auto p-1 flex gap-2">
          <button
            className={`flex rounded-full items-center px-3 ${
              hoverHiremeButton
                ? ""
                : "bg-primary-color ease-in-out duration-100"
            }`}
          >
            Portfolio
            {!hoverHiremeButton && (
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-7"
              >
                <path
                  d="M12.25 29.75L29.75 12.25"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.25 12.25H29.75V29.75"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </button>
          {/* Hire me button */}
          <button
            className={`flex rounded-full items-center px-3 ${
              hoverHiremeButton
                ? "bg-primary-color ease-in-out duration-75"
                : ""
            }`}
            onMouseOver={() => {
              setHoverHiremeButton(true);
            }}
            onMouseOut={() => {
              setHoverHiremeButton(false);
            }}
          >
            Hire me
            {hoverHiremeButton && (
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-7"
              >
                <path
                  d="M12.25 29.75L29.75 12.25"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.25 12.25H29.75V29.75"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* My services section */}
      <div className="block bg-blackbg-gif py-28 px-20 bg-cover bg-no-repeat bg-center rounded-[50px] text-white">
        {/* Heading My services section */}
        <div className="flex justify-between items-center">
          <h3 className="text-5xl font-medium">
            My <span className="text-primary-color">Services</span>
          </h3>
          <p className="text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            <br /> lacus nunc, posuere in justo vulputate, bibendum sodales{" "}
          </p>
        </div>
        {/* Carasouel section */}
        <div className="grid grid-cols-3 gap-2 mt-24">
          <div className="border border-white rounded-[35px] backdrop-blur-md text-white">
            <h4 className="text-3xl font-medium mt-11 mx-9">UI/UX design</h4>
            <hr className="opacity-50 my-6" />
          </div>
        </div>
      </div>
      {/* My work experience section */}
      <div className="mb-28">
        <h3 className="text-6xl text-light-black font-medium text-center my-20">
          My <span className="text-primary-color">Work Experience</span>
        </h3>
        <div className="flex justify-between mx-20">
          {/* Company's section */}
          <div className="flex flex-col gap-20">
            <div>
              <h4 className="text-4xl text-light-black font-semibold">
                Cognizant, Mumbai
              </h4>
              <p className="text-primary-gray text-2xl mt-3.5">
                Sep 2016- July 2020
              </p>
            </div>
            <div>
              <h4 className="text-4xl text-light-black font-semibold">
                Sugee Pvt limited, Mumbai
              </h4>
              <p className="text-primary-gray text-2xl mt-3.5">
                Sep 2020- July 2023
              </p>
            </div>
            <div>
              <h4 className="text-4xl text-light-black font-semibold">
                Cinetstox, Mumbai
              </h4>
              <p className="text-primary-gray text-2xl mt-3.5">Sep 2023</p>
            </div>
          </div>
          {/* Road diagram section */}
          <div className="flex flex-col justify-items-center ">
            <div className="rounded-full p-1.5 border-2 border-light-black border-dashed">
              <div className="bg-primary-color w-9 h-9 rounded-full">
                <p className="invisible">.</p>
              </div>
            </div>
            <div className="h-28 w-0 mx-auto border-r-[3px] border-dashed border-light-black">
              <p className="invisible">.</p>
            </div>
            <div className="rounded-full p-1.5 border-2 border-light-black border-dashed">
              <div className="bg-light-black w-9 h-9 rounded-full">
                <p className="invisible">.</p>
              </div>
            </div>
            <div className="h-28 w-0 mx-auto border-r-[3px] border-dashed border-light-black">
              <p className="invisible">.</p>
            </div>
            <div className="rounded-full p-1.5 border-2 border-light-black border-dashed">
              <div className="bg-primary-color w-9 h-9 rounded-full">
                <p className="invisible">.</p>
              </div>
            </div>
          </div>
          {/* Role's section */}
          <div className="flex flex-col gap-8">
            <div>
              <h4 className="text-4xl text-light-black font-semibold">
                Experince Designer
              </h4>
              <p className="text-primary-gray text-xl mt-3.5">
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit. Duis lacus nunc, posuere in justo
                <br /> vulputate, bibendum sodales{" "}
              </p>
            </div>
            <div>
              <h4 className="text-4xl text-light-black font-semibold">
                UI/UX Designer
              </h4>
              <p className="text-primary-gray text-xl mt-3.5">
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit. Duis lacus nunc, posuere in justo
                <br /> vulputate, bibendum sodales{" "}
              </p>
            </div>
            <div>
              <h4 className="text-4xl text-light-black font-semibold">
                Lead UX Designer
              </h4>
              <p className="text-primary-gray text-xl mt-3.5">Sep 2023</p>
            </div>
          </div>
        </div>
      </div>
      {/* Why hire me? section */}
      <div className="py-28 px-20 bg-gray-100 rounded-[50px] flex justify-center gap-20">
        {/* Profile photo section */}
        <div className="relative flex">
          <AnimatePresence>
            {hoverProfile2 && (
              <m.div
                className="absolute top-0 z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <Image
                  src={TransitionRing}
                  width={500}
                  height={500}
                  alt="profile2"
                />
              </m.div>
            )}
          </AnimatePresence>
          <m.div className="cursor-pointer z-20" whileHover={{ y: 10 }}>
            <Image
              src={Profile2}
              width={500}
              height={500}
              alt="profile2"
              onMouseOver={() => {
                setHoverProfile2(true);
              }}
              onMouseOut={() => {
                setHoverProfile2(false);
              }}
            />
          </m.div>
        </div>
        {/* Why hire me text section */}
        <div className="flex flex-col gap-12 text-light-black">
          <h4 className="text-6xl font-semibold">
            Why <span className="text-primary-color">Hire me</span>?
          </h4>
          <p className="text-primary-gray text-xl">
            Lorem ipsum dolor sit amet, consectetur
            <br /> adipiscing elit. Duis lacus nunc, posuere in justo
            <br /> vulputate, bibendum sodales{" "}
          </p>
          <div className="flex justify-between">
            <div className="flex flex-col gap-2.5">
              <h5 className="text-4xl font-medium flex">
                <CountUp start={0} end={450} duration={4}/>+
              </h5>
              <p className="text-gray-500 text-xl">Project Completed</p>
            </div>
            <div className="flex flex-col gap-2.5">
              <h5 className="text-4xl font-medium flex">
                <CountUp start={0} end={450} duration={4}/>+
              </h5>
              <p className="text-gray-500 text-xl">Project Completed</p>
            </div>
          </div>
          <div className="mx-auto">
            <button className="px-14 py-8 border rounded-[32px] border-light-black inline-block text-2xl font-semibold hover:text-white hover:bg-light-black duration-200">
              Hire me
            </button>
          </div>
        </div>
      </div>
      {/* Lets have a look at my Projects */}
      <div className="px-20 py-24">
        {/* Heading Projects section */}
        <div className="flex justify-between items-center">
          <h4 className="text-slate-black text-6xl font-semibold">
            Lets have a look at
            <br />
            my <span className="text-primary-color">Projects</span>
          </h4>
          <div className="items-center">
            <button className="text-white text-xl font-bold px-10 py-5 bg-primary-color rounded-[60px] hover:text-primary-color hover:bg-white border-2 border-white duration-200 hover:border-primary-color">
              See All
            </button>
          </div>
        </div>
        {/* Carousel Section */}
        <div className="flex justify-around pt-12">
          <div
            className="relative h-[300px] w-[600px] bg-product-image1 rounded-[20px] bg-cover bg-no-repeat bg-center vertical-boxshadow cursor-pointer"
            onMouseOver={() => {
              setHoverProjectCard(1);
            }}
            onMouseOut={() => {
              setHoverProjectCard(0);
            }}
          >
            <div
              className={`absolute bottom-0 left-0 w-[96%] m-3  ${
                hoverProjectCard == 1
                  ? "p-3 bg-black bg-opacity-30 rounded-2xl backdrop-blur-[25px] duration-200"
                  : "duration-200"
              }`}
            >
              <h5 className="text-5xl text-stone-50 font-bold mb-2">Lirante</h5>
              <AnimatePresence>
                {hoverProjectCard == 1 && (
                  <m.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.2, transition:{duration:0.1} }}
                  >
                    <p className="text-orange-100 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed congue interdum ligula a dignissim. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Sed lobortis orci
                      elementum egestas lobortis.
                    </p>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div
            className="relative h-[300px] w-[600px] bg-product-image1 rounded-[20px] bg-cover bg-no-repeat bg-center vertical-boxshadow cursor-pointer"
            onMouseOver={() => {
              setHoverProjectCard(2);
            }}
            onMouseOut={() => {
              setHoverProjectCard(0);
            }}
          >
            <div
              className={`absolute bottom-0 left-0 w-[96%] m-3  ${
                hoverProjectCard == 2
                  ? "p-3 bg-black bg-opacity-30 rounded-2xl backdrop-blur-[25px] duration-200"
                  : "duration-200"
              }`}
            >
              <h5 className="text-5xl text-stone-50 font-bold mb-2">Lirante</h5>
              <AnimatePresence>
                {hoverProjectCard == 2 && (
                  <m.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100, transition:{duration:0.1} }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-orange-100 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed congue interdum ligula a dignissim. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Sed lobortis orci
                      elementum egestas lobortis.
                    </p>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
    </div>
  );
}

export default Page;
