"use client";
import React, { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import Profile1 from "../public/profile1.png";
import Profile2 from "../public/profile2.png";
import TransitionRing from "../public/transition-ring.png";
import HalfCircle from "../public/primary-half-circle.png";
import SpringTransition from "../public/spring-transition.png";
import TestimonialProfile from "../public/testimonial-profile.png";
import Image from "next/image";
import CountUp from "react-countup";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

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
                <CountUp start={0} end={450} duration={4} />+
              </h5>
              <p className="text-gray-500 text-xl">Project Completed</p>
            </div>
            <div className="flex flex-col gap-2.5">
              <h5 className="text-4xl font-medium flex">
                <CountUp start={0} end={450} duration={4} />+
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
          <h4 className="text-light-black text-6xl font-semibold">
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
        {/* <div className="flex justify-around pt-12">
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
                    transition={{
                      duration: 0.2,
                      transition: { duration: 0.1 },
                    }}
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
                    exit={{ opacity: 0, y: 100, transition: { duration: 0.1 } }}
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
        </div> */}
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          // customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px mb-10"
          className="mb-10 pl-20 py-12"
        >
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
                    transition={{
                      duration: 0.2,
                      transition: { duration: 0.1 },
                    }}
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
                    exit={{ opacity: 0, y: 100 }}
                    transition={{
                      duration: 0.2,
                      transition: { duration: 0.1 },
                    }}
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
              setHoverProjectCard(3);
            }}
            onMouseOut={() => {
              setHoverProjectCard(0);
            }}
          >
            <div
              className={`absolute bottom-0 left-0 w-[96%] m-3  ${
                hoverProjectCard == 3
                  ? "p-3 bg-black bg-opacity-30 rounded-2xl backdrop-blur-[25px] duration-200"
                  : "duration-200"
              }`}
            >
              <h5 className="text-5xl text-stone-50 font-bold mb-2">Lirante</h5>
              <AnimatePresence>
                {hoverProjectCard == 3 && (
                  <m.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{
                      duration: 0.2,
                      transition: { duration: 0.1 },
                    }}
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
              setHoverProjectCard(4);
            }}
            onMouseOut={() => {
              setHoverProjectCard(0);
            }}
          >
            <div
              className={`absolute bottom-0 left-0 w-[96%] m-3  ${
                hoverProjectCard == 4
                  ? "p-3 bg-black bg-opacity-30 rounded-2xl backdrop-blur-[25px] duration-200"
                  : "duration-200"
              }`}
            >
              <h5 className="text-5xl text-stone-50 font-bold mb-2">Lirante</h5>
              <AnimatePresence>
                {hoverProjectCard == 4 && (
                  <m.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{
                      duration: 0.2,
                      transition: { duration: 0.1 },
                    }}
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
              setHoverProjectCard(5);
            }}
            onMouseOut={() => {
              setHoverProjectCard(0);
            }}
          >
            <div
              className={`absolute bottom-0 left-0 w-[96%] m-3  ${
                hoverProjectCard == 5
                  ? "p-3 bg-black bg-opacity-30 rounded-2xl backdrop-blur-[25px] duration-200"
                  : "duration-200"
              }`}
            >
              <h5 className="text-5xl text-stone-50 font-bold mb-2">Lirante</h5>
              <AnimatePresence>
                {hoverProjectCard == 5 && (
                  <m.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{
                      duration: 0.2,
                      transition: { duration: 0.1 },
                    }}
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
              setHoverProjectCard(6);
            }}
            onMouseOut={() => {
              setHoverProjectCard(0);
            }}
          >
            <div
              className={`absolute bottom-0 left-0 w-[96%] m-3  ${
                hoverProjectCard == 6
                  ? "p-3 bg-black bg-opacity-30 rounded-2xl backdrop-blur-[25px] duration-200"
                  : "duration-200"
              }`}
            >
              <h5 className="text-5xl text-stone-50 font-bold mb-2">Lirante</h5>
              <AnimatePresence>
                {hoverProjectCard == 6 && (
                  <m.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{
                      duration: 0.2,
                      transition: { duration: 0.1 },
                    }}
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
              setHoverProjectCard(7);
            }}
            onMouseOut={() => {
              setHoverProjectCard(0);
            }}
          >
            <div
              className={`absolute bottom-0 left-0 w-[96%] m-3  ${
                hoverProjectCard == 7
                  ? "p-3 bg-black bg-opacity-30 rounded-2xl backdrop-blur-[25px] duration-200"
                  : "duration-200"
              }`}
            >
              <h5 className="text-5xl text-stone-50 font-bold mb-2">Lirante</h5>
              <AnimatePresence>
                {hoverProjectCard == 7 && (
                  <m.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{
                      duration: 0.2,
                      transition: { duration: 0.1 },
                    }}
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
              setHoverProjectCard(8);
            }}
            onMouseOut={() => {
              setHoverProjectCard(0);
            }}
          >
            <div
              className={`absolute bottom-0 left-0 w-[96%] m-3  ${
                hoverProjectCard == 8
                  ? "p-3 bg-black bg-opacity-30 rounded-2xl backdrop-blur-[25px] duration-200"
                  : "duration-200"
              }`}
            >
              <h5 className="text-5xl text-stone-50 font-bold mb-2">Lirante</h5>
              <AnimatePresence>
                {hoverProjectCard == 8 && (
                  <m.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{
                      duration: 0.2,
                      transition: { duration: 0.1 },
                    }}
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
              setHoverProjectCard(9);
            }}
            onMouseOut={() => {
              setHoverProjectCard(0);
            }}
          >
            <div
              className={`absolute bottom-0 left-0 w-[96%] m-3  ${
                hoverProjectCard == 9
                  ? "p-3 bg-black bg-opacity-30 rounded-2xl backdrop-blur-[25px] duration-200"
                  : "duration-200"
              }`}
            >
              <h5 className="text-5xl text-stone-50 font-bold mb-2">Lirante</h5>
              <AnimatePresence>
                {hoverProjectCard == 9 && (
                  <m.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{
                      duration: 0.2,
                      transition: { duration: 0.1 },
                    }}
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
        </Carousel>
      </div>
      {/* Testimonial section */}
      <div className="py-28 bg-cover bg-no-repeat bg-center bg-black-primary-bg text-white rounded-[50px]">
        {/* Heading and description section */}
        <div className="flex flex-col text-center">
          <h3 className="text-5xl font-medium text-white mb-3.5">
            Testimonials That
            <br />
            Speak to <span className="text-primary-color">My Results</span>
          </h3>
          <p className="text-xl font-medium text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum
            <br />
            ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed
            <br />
            lobortis orci elementum egestas lobortis.
          </p>
        </div>
        {/* Carousel section */}
        <div className="flex pt-24 mx-20">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          // customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={[ "desktop", "tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="p-5 bg-white bg-opacity-20 backdrop-blur-md rounded-3xl">
            {/* Heading section */}
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <div>
                    <Image
                      className=""
                      src={TestimonialProfile}
                      width={50}
                      height={50}
                      alt="testimonial profile"
                    />
                  </div>
                  <div className="">
                    <p className="text-2xl font-bold">Jayesh Patil</p>
                    <p className="text-lg">CEO, Lirante</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8912 20.0095C23.5459 20.3442 23.3872 20.8282 23.4659 21.3028L24.6512 27.8628C24.7512 28.4188 24.5165 28.9815 24.0512 29.3028C23.5952 29.6362 22.9885 29.6762 22.4912 29.4095L16.5858 26.3295C16.3805 26.2202 16.1525 26.1615 15.9192 26.1548H15.5578C15.4325 26.1735 15.3099 26.2135 15.1979 26.2748L9.29118 29.3695C8.99918 29.5162 8.66852 29.5682 8.34452 29.5162C7.55518 29.3668 7.02852 28.6148 7.15785 27.8215L8.34452 21.2615C8.42318 20.7828 8.26452 20.2962 7.91918 19.9562L3.10452 15.2895C2.70185 14.8988 2.56185 14.3122 2.74585 13.7828C2.92452 13.2548 3.38052 12.8695 3.93118 12.7828L10.5578 11.8215C11.0619 11.7695 11.5045 11.4628 11.7312 11.0095L14.6512 5.02284C14.7205 4.88951 14.8099 4.76685 14.9179 4.66285L15.0378 4.56951C15.1005 4.50018 15.1725 4.44285 15.2525 4.39618L15.3979 4.34285L15.6245 4.24951H16.1859C16.6872 4.30151 17.1285 4.60151 17.3592 5.04951L20.3179 11.0095C20.5312 11.4455 20.9459 11.7482 21.4245 11.8215L28.0512 12.7828C28.6112 12.8628 29.0792 13.2495 29.2645 13.7828C29.4392 14.3175 29.2885 14.9042 28.8779 15.2895L23.8912 20.0095Z"
                      fill="#FD853A"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8912 20.0095C23.5459 20.3442 23.3872 20.8282 23.4659 21.3028L24.6512 27.8628C24.7512 28.4188 24.5165 28.9815 24.0512 29.3028C23.5952 29.6362 22.9885 29.6762 22.4912 29.4095L16.5858 26.3295C16.3805 26.2202 16.1525 26.1615 15.9192 26.1548H15.5578C15.4325 26.1735 15.3099 26.2135 15.1979 26.2748L9.29118 29.3695C8.99918 29.5162 8.66852 29.5682 8.34452 29.5162C7.55518 29.3668 7.02852 28.6148 7.15785 27.8215L8.34452 21.2615C8.42318 20.7828 8.26452 20.2962 7.91918 19.9562L3.10452 15.2895C2.70185 14.8988 2.56185 14.3122 2.74585 13.7828C2.92452 13.2548 3.38052 12.8695 3.93118 12.7828L10.5578 11.8215C11.0619 11.7695 11.5045 11.4628 11.7312 11.0095L14.6512 5.02284C14.7205 4.88951 14.8099 4.76685 14.9179 4.66285L15.0378 4.56951C15.1005 4.50018 15.1725 4.44285 15.2525 4.39618L15.3979 4.34285L15.6245 4.24951H16.1859C16.6872 4.30151 17.1285 4.60151 17.3592 5.04951L20.3179 11.0095C20.5312 11.4455 20.9459 11.7482 21.4245 11.8215L28.0512 12.7828C28.6112 12.8628 29.0792 13.2495 29.2645 13.7828C29.4392 14.3175 29.2885 14.9042 28.8779 15.2895L23.8912 20.0095Z"
                      fill="#FD853A"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8912 20.0095C23.5459 20.3442 23.3872 20.8282 23.4659 21.3028L24.6512 27.8628C24.7512 28.4188 24.5165 28.9815 24.0512 29.3028C23.5952 29.6362 22.9885 29.6762 22.4912 29.4095L16.5858 26.3295C16.3805 26.2202 16.1525 26.1615 15.9192 26.1548H15.5578C15.4325 26.1735 15.3099 26.2135 15.1979 26.2748L9.29118 29.3695C8.99918 29.5162 8.66852 29.5682 8.34452 29.5162C7.55518 29.3668 7.02852 28.6148 7.15785 27.8215L8.34452 21.2615C8.42318 20.7828 8.26452 20.2962 7.91918 19.9562L3.10452 15.2895C2.70185 14.8988 2.56185 14.3122 2.74585 13.7828C2.92452 13.2548 3.38052 12.8695 3.93118 12.7828L10.5578 11.8215C11.0619 11.7695 11.5045 11.4628 11.7312 11.0095L14.6512 5.02284C14.7205 4.88951 14.8099 4.76685 14.9179 4.66285L15.0378 4.56951C15.1005 4.50018 15.1725 4.44285 15.2525 4.39618L15.3979 4.34285L15.6245 4.24951H16.1859C16.6872 4.30151 17.1285 4.60151 17.3592 5.04951L20.3179 11.0095C20.5312 11.4455 20.9459 11.7482 21.4245 11.8215L28.0512 12.7828C28.6112 12.8628 29.0792 13.2495 29.2645 13.7828C29.4392 14.3175 29.2885 14.9042 28.8779 15.2895L23.8912 20.0095Z"
                      fill="#FD853A"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8912 20.0095C23.5459 20.3442 23.3872 20.8282 23.4659 21.3028L24.6512 27.8628C24.7512 28.4188 24.5165 28.9815 24.0512 29.3028C23.5952 29.6362 22.9885 29.6762 22.4912 29.4095L16.5858 26.3295C16.3805 26.2202 16.1525 26.1615 15.9192 26.1548H15.5578C15.4325 26.1735 15.3099 26.2135 15.1979 26.2748L9.29118 29.3695C8.99918 29.5162 8.66852 29.5682 8.34452 29.5162C7.55518 29.3668 7.02852 28.6148 7.15785 27.8215L8.34452 21.2615C8.42318 20.7828 8.26452 20.2962 7.91918 19.9562L3.10452 15.2895C2.70185 14.8988 2.56185 14.3122 2.74585 13.7828C2.92452 13.2548 3.38052 12.8695 3.93118 12.7828L10.5578 11.8215C11.0619 11.7695 11.5045 11.4628 11.7312 11.0095L14.6512 5.02284C14.7205 4.88951 14.8099 4.76685 14.9179 4.66285L15.0378 4.56951C15.1005 4.50018 15.1725 4.44285 15.2525 4.39618L15.3979 4.34285L15.6245 4.24951H16.1859C16.6872 4.30151 17.1285 4.60151 17.3592 5.04951L20.3179 11.0095C20.5312 11.4455 20.9459 11.7482 21.4245 11.8215L28.0512 12.7828C28.6112 12.8628 29.0792 13.2495 29.2645 13.7828C29.4392 14.3175 29.2885 14.9042 28.8779 15.2895L23.8912 20.0095Z"
                      fill="#FD853A"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8912 20.0095C23.5459 20.3442 23.3872 20.8282 23.4659 21.3028L24.6512 27.8628C24.7512 28.4188 24.5165 28.9815 24.0512 29.3028C23.5952 29.6362 22.9885 29.6762 22.4912 29.4095L16.5858 26.3295C16.3805 26.2202 16.1525 26.1615 15.9192 26.1548H15.5578C15.4325 26.1735 15.3099 26.2135 15.1979 26.2748L9.29118 29.3695C8.99918 29.5162 8.66852 29.5682 8.34452 29.5162C7.55518 29.3668 7.02852 28.6148 7.15785 27.8215L8.34452 21.2615C8.42318 20.7828 8.26452 20.2962 7.91918 19.9562L3.10452 15.2895C2.70185 14.8988 2.56185 14.3122 2.74585 13.7828C2.92452 13.2548 3.38052 12.8695 3.93118 12.7828L10.5578 11.8215C11.0619 11.7695 11.5045 11.4628 11.7312 11.0095L14.6512 5.02284C14.7205 4.88951 14.8099 4.76685 14.9179 4.66285L15.0378 4.56951C15.1005 4.50018 15.1725 4.44285 15.2525 4.39618L15.3979 4.34285L15.6245 4.24951H16.1859C16.6872 4.30151 17.1285 4.60151 17.3592 5.04951L20.3179 11.0095C20.5312 11.4455 20.9459 11.7482 21.4245 11.8215L28.0512 12.7828C28.6112 12.8628 29.0792 13.2495 29.2645 13.7828C29.4392 14.3175 29.2885 14.9042 28.8779 15.2895L23.8912 20.0095Z"
                      fill="#FD853A"
                    />
                  </svg>
                  <p className="text-[25.69px] font-medium">5.0</p>
                </div>
              </div>
              <svg
                width="128"
                height="129"
                viewBox="0 0 128 129"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M84.8532 66.0542H109.867C109.44 90.9609 104.533 95.0676 89.2266 104.134C87.4666 105.201 86.8799 107.441 87.9466 109.254C89.0132 111.014 91.2532 111.601 93.0666 110.534C111.093 99.8676 117.387 93.3609 117.387 62.3209V33.5742C117.387 24.4542 109.973 17.0942 100.907 17.0942H84.9066C75.5199 17.0942 68.4266 24.1876 68.4266 33.5742V49.5742C68.3732 58.9609 75.4666 66.0542 84.8532 66.0542Z"
                  fill="#667085"
                  fill-opacity="0.3"
                />
                <path
                  d="M27.1466 66.0542H52.16C51.7333 90.9609 46.8266 95.0676 31.52 104.134C29.76 105.201 29.1733 107.441 30.24 109.254C31.3066 111.014 33.5466 111.601 35.36 110.534C53.3866 99.8676 59.68 93.3609 59.68 62.3209V33.5742C59.68 24.4542 52.2666 17.0942 43.2 17.0942H27.2C17.76 17.0942 10.6666 24.1876 10.6666 33.5742V49.5742C10.6666 58.9609 17.76 66.0542 27.1466 66.0542Z"
                  fill="#667085"
                  fill-opacity="0.3"
                />
              </svg>
            </div>
            <p className="text-xl">
              consectetur adipiscing elit. Sed congue interdum ligula a
              dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis
              orci elementum egestas lobortis.Sed lobortis orci elementum
              egestas lobortis. consectetur adipiscing elit. Sed congue interdum ligula a
              dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis
              orci elementum egestas lobortis.Sed lobortis orci elementum
              egestas lobortis. consectetur adipiscing elit. Sed congue interdum ligula a
              dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis
              orci elementum egestas lobortis.Sed lobortis orci elementum
              egestas lobortis.
            </p>
          </div>
          <div className="p-5 bg-white bg-opacity-20 backdrop-blur-md rounded-3xl">
            {/* Heading section */}
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <div>
                    <Image
                      className=""
                      src={TestimonialProfile}
                      width={50}
                      height={50}
                      alt="testimonial profile"
                    />
                  </div>
                  <div className="">
                    <p className="text-2xl font-bold">Jayesh Patil</p>
                    <p className="text-lg">CEO, Lirante</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8912 20.0095C23.5459 20.3442 23.3872 20.8282 23.4659 21.3028L24.6512 27.8628C24.7512 28.4188 24.5165 28.9815 24.0512 29.3028C23.5952 29.6362 22.9885 29.6762 22.4912 29.4095L16.5858 26.3295C16.3805 26.2202 16.1525 26.1615 15.9192 26.1548H15.5578C15.4325 26.1735 15.3099 26.2135 15.1979 26.2748L9.29118 29.3695C8.99918 29.5162 8.66852 29.5682 8.34452 29.5162C7.55518 29.3668 7.02852 28.6148 7.15785 27.8215L8.34452 21.2615C8.42318 20.7828 8.26452 20.2962 7.91918 19.9562L3.10452 15.2895C2.70185 14.8988 2.56185 14.3122 2.74585 13.7828C2.92452 13.2548 3.38052 12.8695 3.93118 12.7828L10.5578 11.8215C11.0619 11.7695 11.5045 11.4628 11.7312 11.0095L14.6512 5.02284C14.7205 4.88951 14.8099 4.76685 14.9179 4.66285L15.0378 4.56951C15.1005 4.50018 15.1725 4.44285 15.2525 4.39618L15.3979 4.34285L15.6245 4.24951H16.1859C16.6872 4.30151 17.1285 4.60151 17.3592 5.04951L20.3179 11.0095C20.5312 11.4455 20.9459 11.7482 21.4245 11.8215L28.0512 12.7828C28.6112 12.8628 29.0792 13.2495 29.2645 13.7828C29.4392 14.3175 29.2885 14.9042 28.8779 15.2895L23.8912 20.0095Z"
                      fill="#FD853A"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8912 20.0095C23.5459 20.3442 23.3872 20.8282 23.4659 21.3028L24.6512 27.8628C24.7512 28.4188 24.5165 28.9815 24.0512 29.3028C23.5952 29.6362 22.9885 29.6762 22.4912 29.4095L16.5858 26.3295C16.3805 26.2202 16.1525 26.1615 15.9192 26.1548H15.5578C15.4325 26.1735 15.3099 26.2135 15.1979 26.2748L9.29118 29.3695C8.99918 29.5162 8.66852 29.5682 8.34452 29.5162C7.55518 29.3668 7.02852 28.6148 7.15785 27.8215L8.34452 21.2615C8.42318 20.7828 8.26452 20.2962 7.91918 19.9562L3.10452 15.2895C2.70185 14.8988 2.56185 14.3122 2.74585 13.7828C2.92452 13.2548 3.38052 12.8695 3.93118 12.7828L10.5578 11.8215C11.0619 11.7695 11.5045 11.4628 11.7312 11.0095L14.6512 5.02284C14.7205 4.88951 14.8099 4.76685 14.9179 4.66285L15.0378 4.56951C15.1005 4.50018 15.1725 4.44285 15.2525 4.39618L15.3979 4.34285L15.6245 4.24951H16.1859C16.6872 4.30151 17.1285 4.60151 17.3592 5.04951L20.3179 11.0095C20.5312 11.4455 20.9459 11.7482 21.4245 11.8215L28.0512 12.7828C28.6112 12.8628 29.0792 13.2495 29.2645 13.7828C29.4392 14.3175 29.2885 14.9042 28.8779 15.2895L23.8912 20.0095Z"
                      fill="#FD853A"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8912 20.0095C23.5459 20.3442 23.3872 20.8282 23.4659 21.3028L24.6512 27.8628C24.7512 28.4188 24.5165 28.9815 24.0512 29.3028C23.5952 29.6362 22.9885 29.6762 22.4912 29.4095L16.5858 26.3295C16.3805 26.2202 16.1525 26.1615 15.9192 26.1548H15.5578C15.4325 26.1735 15.3099 26.2135 15.1979 26.2748L9.29118 29.3695C8.99918 29.5162 8.66852 29.5682 8.34452 29.5162C7.55518 29.3668 7.02852 28.6148 7.15785 27.8215L8.34452 21.2615C8.42318 20.7828 8.26452 20.2962 7.91918 19.9562L3.10452 15.2895C2.70185 14.8988 2.56185 14.3122 2.74585 13.7828C2.92452 13.2548 3.38052 12.8695 3.93118 12.7828L10.5578 11.8215C11.0619 11.7695 11.5045 11.4628 11.7312 11.0095L14.6512 5.02284C14.7205 4.88951 14.8099 4.76685 14.9179 4.66285L15.0378 4.56951C15.1005 4.50018 15.1725 4.44285 15.2525 4.39618L15.3979 4.34285L15.6245 4.24951H16.1859C16.6872 4.30151 17.1285 4.60151 17.3592 5.04951L20.3179 11.0095C20.5312 11.4455 20.9459 11.7482 21.4245 11.8215L28.0512 12.7828C28.6112 12.8628 29.0792 13.2495 29.2645 13.7828C29.4392 14.3175 29.2885 14.9042 28.8779 15.2895L23.8912 20.0095Z"
                      fill="#FD853A"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8912 20.0095C23.5459 20.3442 23.3872 20.8282 23.4659 21.3028L24.6512 27.8628C24.7512 28.4188 24.5165 28.9815 24.0512 29.3028C23.5952 29.6362 22.9885 29.6762 22.4912 29.4095L16.5858 26.3295C16.3805 26.2202 16.1525 26.1615 15.9192 26.1548H15.5578C15.4325 26.1735 15.3099 26.2135 15.1979 26.2748L9.29118 29.3695C8.99918 29.5162 8.66852 29.5682 8.34452 29.5162C7.55518 29.3668 7.02852 28.6148 7.15785 27.8215L8.34452 21.2615C8.42318 20.7828 8.26452 20.2962 7.91918 19.9562L3.10452 15.2895C2.70185 14.8988 2.56185 14.3122 2.74585 13.7828C2.92452 13.2548 3.38052 12.8695 3.93118 12.7828L10.5578 11.8215C11.0619 11.7695 11.5045 11.4628 11.7312 11.0095L14.6512 5.02284C14.7205 4.88951 14.8099 4.76685 14.9179 4.66285L15.0378 4.56951C15.1005 4.50018 15.1725 4.44285 15.2525 4.39618L15.3979 4.34285L15.6245 4.24951H16.1859C16.6872 4.30151 17.1285 4.60151 17.3592 5.04951L20.3179 11.0095C20.5312 11.4455 20.9459 11.7482 21.4245 11.8215L28.0512 12.7828C28.6112 12.8628 29.0792 13.2495 29.2645 13.7828C29.4392 14.3175 29.2885 14.9042 28.8779 15.2895L23.8912 20.0095Z"
                      fill="#FD853A"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8912 20.0095C23.5459 20.3442 23.3872 20.8282 23.4659 21.3028L24.6512 27.8628C24.7512 28.4188 24.5165 28.9815 24.0512 29.3028C23.5952 29.6362 22.9885 29.6762 22.4912 29.4095L16.5858 26.3295C16.3805 26.2202 16.1525 26.1615 15.9192 26.1548H15.5578C15.4325 26.1735 15.3099 26.2135 15.1979 26.2748L9.29118 29.3695C8.99918 29.5162 8.66852 29.5682 8.34452 29.5162C7.55518 29.3668 7.02852 28.6148 7.15785 27.8215L8.34452 21.2615C8.42318 20.7828 8.26452 20.2962 7.91918 19.9562L3.10452 15.2895C2.70185 14.8988 2.56185 14.3122 2.74585 13.7828C2.92452 13.2548 3.38052 12.8695 3.93118 12.7828L10.5578 11.8215C11.0619 11.7695 11.5045 11.4628 11.7312 11.0095L14.6512 5.02284C14.7205 4.88951 14.8099 4.76685 14.9179 4.66285L15.0378 4.56951C15.1005 4.50018 15.1725 4.44285 15.2525 4.39618L15.3979 4.34285L15.6245 4.24951H16.1859C16.6872 4.30151 17.1285 4.60151 17.3592 5.04951L20.3179 11.0095C20.5312 11.4455 20.9459 11.7482 21.4245 11.8215L28.0512 12.7828C28.6112 12.8628 29.0792 13.2495 29.2645 13.7828C29.4392 14.3175 29.2885 14.9042 28.8779 15.2895L23.8912 20.0095Z"
                      fill="#FD853A"
                    />
                  </svg>
                  <p className="text-[25.69px] font-medium">5.0</p>
                </div>
              </div>
              <svg
                width="128"
                height="129"
                viewBox="0 0 128 129"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M84.8532 66.0542H109.867C109.44 90.9609 104.533 95.0676 89.2266 104.134C87.4666 105.201 86.8799 107.441 87.9466 109.254C89.0132 111.014 91.2532 111.601 93.0666 110.534C111.093 99.8676 117.387 93.3609 117.387 62.3209V33.5742C117.387 24.4542 109.973 17.0942 100.907 17.0942H84.9066C75.5199 17.0942 68.4266 24.1876 68.4266 33.5742V49.5742C68.3732 58.9609 75.4666 66.0542 84.8532 66.0542Z"
                  fill="#667085"
                  fill-opacity="0.3"
                />
                <path
                  d="M27.1466 66.0542H52.16C51.7333 90.9609 46.8266 95.0676 31.52 104.134C29.76 105.201 29.1733 107.441 30.24 109.254C31.3066 111.014 33.5466 111.601 35.36 110.534C53.3866 99.8676 59.68 93.3609 59.68 62.3209V33.5742C59.68 24.4542 52.2666 17.0942 43.2 17.0942H27.2C17.76 17.0942 10.6666 24.1876 10.6666 33.5742V49.5742C10.6666 58.9609 17.76 66.0542 27.1466 66.0542Z"
                  fill="#667085"
                  fill-opacity="0.3"
                />
              </svg>
            </div>
            <p className="text-xl">
              consectetur adipiscing elit. Sed congue interdum ligula a
              dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis
              orci elementum egestas lobortis.Sed lobortis orci elementum
              egestas lobortis. consectetur adipiscing elit. Sed congue interdum ligula a
              dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis
              orci elementum egestas lobortis.Sed lobortis orci elementum
              egestas lobortis. consectetur adipiscing elit. Sed congue interdum ligula a
              dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis
              orci elementum egestas lobortis.Sed lobortis orci elementum
              egestas lobortis.
            </p>
          </div>
          <div className="p-5 bg-white bg-opacity-20 backdrop-blur-md rounded-3xl">
            {/* Heading section */}
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <div>
                    <Image
                      className=""
                      src={TestimonialProfile}
                      width={50}
                      height={50}
                      alt="testimonial profile"
                    />
                  </div>
                  <div className="">
                    <p className="text-2xl font-bold">Jayesh Patil</p>
                    <p className="text-lg">CEO, Lirante</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8912 20.0095C23.5459 20.3442 23.3872 20.8282 23.4659 21.3028L24.6512 27.8628C24.7512 28.4188 24.5165 28.9815 24.0512 29.3028C23.5952 29.6362 22.9885 29.6762 22.4912 29.4095L16.5858 26.3295C16.3805 26.2202 16.1525 26.1615 15.9192 26.1548H15.5578C15.4325 26.1735 15.3099 26.2135 15.1979 26.2748L9.29118 29.3695C8.99918 29.5162 8.66852 29.5682 8.34452 29.5162C7.55518 29.3668 7.02852 28.6148 7.15785 27.8215L8.34452 21.2615C8.42318 20.7828 8.26452 20.2962 7.91918 19.9562L3.10452 15.2895C2.70185 14.8988 2.56185 14.3122 2.74585 13.7828C2.92452 13.2548 3.38052 12.8695 3.93118 12.7828L10.5578 11.8215C11.0619 11.7695 11.5045 11.4628 11.7312 11.0095L14.6512 5.02284C14.7205 4.88951 14.8099 4.76685 14.9179 4.66285L15.0378 4.56951C15.1005 4.50018 15.1725 4.44285 15.2525 4.39618L15.3979 4.34285L15.6245 4.24951H16.1859C16.6872 4.30151 17.1285 4.60151 17.3592 5.04951L20.3179 11.0095C20.5312 11.4455 20.9459 11.7482 21.4245 11.8215L28.0512 12.7828C28.6112 12.8628 29.0792 13.2495 29.2645 13.7828C29.4392 14.3175 29.2885 14.9042 28.8779 15.2895L23.8912 20.0095Z"
                      fill="#FD853A"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8912 20.0095C23.5459 20.3442 23.3872 20.8282 23.4659 21.3028L24.6512 27.8628C24.7512 28.4188 24.5165 28.9815 24.0512 29.3028C23.5952 29.6362 22.9885 29.6762 22.4912 29.4095L16.5858 26.3295C16.3805 26.2202 16.1525 26.1615 15.9192 26.1548H15.5578C15.4325 26.1735 15.3099 26.2135 15.1979 26.2748L9.29118 29.3695C8.99918 29.5162 8.66852 29.5682 8.34452 29.5162C7.55518 29.3668 7.02852 28.6148 7.15785 27.8215L8.34452 21.2615C8.42318 20.7828 8.26452 20.2962 7.91918 19.9562L3.10452 15.2895C2.70185 14.8988 2.56185 14.3122 2.74585 13.7828C2.92452 13.2548 3.38052 12.8695 3.93118 12.7828L10.5578 11.8215C11.0619 11.7695 11.5045 11.4628 11.7312 11.0095L14.6512 5.02284C14.7205 4.88951 14.8099 4.76685 14.9179 4.66285L15.0378 4.56951C15.1005 4.50018 15.1725 4.44285 15.2525 4.39618L15.3979 4.34285L15.6245 4.24951H16.1859C16.6872 4.30151 17.1285 4.60151 17.3592 5.04951L20.3179 11.0095C20.5312 11.4455 20.9459 11.7482 21.4245 11.8215L28.0512 12.7828C28.6112 12.8628 29.0792 13.2495 29.2645 13.7828C29.4392 14.3175 29.2885 14.9042 28.8779 15.2895L23.8912 20.0095Z"
                      fill="#FD853A"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8912 20.0095C23.5459 20.3442 23.3872 20.8282 23.4659 21.3028L24.6512 27.8628C24.7512 28.4188 24.5165 28.9815 24.0512 29.3028C23.5952 29.6362 22.9885 29.6762 22.4912 29.4095L16.5858 26.3295C16.3805 26.2202 16.1525 26.1615 15.9192 26.1548H15.5578C15.4325 26.1735 15.3099 26.2135 15.1979 26.2748L9.29118 29.3695C8.99918 29.5162 8.66852 29.5682 8.34452 29.5162C7.55518 29.3668 7.02852 28.6148 7.15785 27.8215L8.34452 21.2615C8.42318 20.7828 8.26452 20.2962 7.91918 19.9562L3.10452 15.2895C2.70185 14.8988 2.56185 14.3122 2.74585 13.7828C2.92452 13.2548 3.38052 12.8695 3.93118 12.7828L10.5578 11.8215C11.0619 11.7695 11.5045 11.4628 11.7312 11.0095L14.6512 5.02284C14.7205 4.88951 14.8099 4.76685 14.9179 4.66285L15.0378 4.56951C15.1005 4.50018 15.1725 4.44285 15.2525 4.39618L15.3979 4.34285L15.6245 4.24951H16.1859C16.6872 4.30151 17.1285 4.60151 17.3592 5.04951L20.3179 11.0095C20.5312 11.4455 20.9459 11.7482 21.4245 11.8215L28.0512 12.7828C28.6112 12.8628 29.0792 13.2495 29.2645 13.7828C29.4392 14.3175 29.2885 14.9042 28.8779 15.2895L23.8912 20.0095Z"
                      fill="#FD853A"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8912 20.0095C23.5459 20.3442 23.3872 20.8282 23.4659 21.3028L24.6512 27.8628C24.7512 28.4188 24.5165 28.9815 24.0512 29.3028C23.5952 29.6362 22.9885 29.6762 22.4912 29.4095L16.5858 26.3295C16.3805 26.2202 16.1525 26.1615 15.9192 26.1548H15.5578C15.4325 26.1735 15.3099 26.2135 15.1979 26.2748L9.29118 29.3695C8.99918 29.5162 8.66852 29.5682 8.34452 29.5162C7.55518 29.3668 7.02852 28.6148 7.15785 27.8215L8.34452 21.2615C8.42318 20.7828 8.26452 20.2962 7.91918 19.9562L3.10452 15.2895C2.70185 14.8988 2.56185 14.3122 2.74585 13.7828C2.92452 13.2548 3.38052 12.8695 3.93118 12.7828L10.5578 11.8215C11.0619 11.7695 11.5045 11.4628 11.7312 11.0095L14.6512 5.02284C14.7205 4.88951 14.8099 4.76685 14.9179 4.66285L15.0378 4.56951C15.1005 4.50018 15.1725 4.44285 15.2525 4.39618L15.3979 4.34285L15.6245 4.24951H16.1859C16.6872 4.30151 17.1285 4.60151 17.3592 5.04951L20.3179 11.0095C20.5312 11.4455 20.9459 11.7482 21.4245 11.8215L28.0512 12.7828C28.6112 12.8628 29.0792 13.2495 29.2645 13.7828C29.4392 14.3175 29.2885 14.9042 28.8779 15.2895L23.8912 20.0095Z"
                      fill="#FD853A"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8912 20.0095C23.5459 20.3442 23.3872 20.8282 23.4659 21.3028L24.6512 27.8628C24.7512 28.4188 24.5165 28.9815 24.0512 29.3028C23.5952 29.6362 22.9885 29.6762 22.4912 29.4095L16.5858 26.3295C16.3805 26.2202 16.1525 26.1615 15.9192 26.1548H15.5578C15.4325 26.1735 15.3099 26.2135 15.1979 26.2748L9.29118 29.3695C8.99918 29.5162 8.66852 29.5682 8.34452 29.5162C7.55518 29.3668 7.02852 28.6148 7.15785 27.8215L8.34452 21.2615C8.42318 20.7828 8.26452 20.2962 7.91918 19.9562L3.10452 15.2895C2.70185 14.8988 2.56185 14.3122 2.74585 13.7828C2.92452 13.2548 3.38052 12.8695 3.93118 12.7828L10.5578 11.8215C11.0619 11.7695 11.5045 11.4628 11.7312 11.0095L14.6512 5.02284C14.7205 4.88951 14.8099 4.76685 14.9179 4.66285L15.0378 4.56951C15.1005 4.50018 15.1725 4.44285 15.2525 4.39618L15.3979 4.34285L15.6245 4.24951H16.1859C16.6872 4.30151 17.1285 4.60151 17.3592 5.04951L20.3179 11.0095C20.5312 11.4455 20.9459 11.7482 21.4245 11.8215L28.0512 12.7828C28.6112 12.8628 29.0792 13.2495 29.2645 13.7828C29.4392 14.3175 29.2885 14.9042 28.8779 15.2895L23.8912 20.0095Z"
                      fill="#FD853A"
                    />
                  </svg>
                  <p className="text-[25.69px] font-medium">5.0</p>
                </div>
              </div>
              <svg
                width="128"
                height="129"
                viewBox="0 0 128 129"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M84.8532 66.0542H109.867C109.44 90.9609 104.533 95.0676 89.2266 104.134C87.4666 105.201 86.8799 107.441 87.9466 109.254C89.0132 111.014 91.2532 111.601 93.0666 110.534C111.093 99.8676 117.387 93.3609 117.387 62.3209V33.5742C117.387 24.4542 109.973 17.0942 100.907 17.0942H84.9066C75.5199 17.0942 68.4266 24.1876 68.4266 33.5742V49.5742C68.3732 58.9609 75.4666 66.0542 84.8532 66.0542Z"
                  fill="#667085"
                  fill-opacity="0.3"
                />
                <path
                  d="M27.1466 66.0542H52.16C51.7333 90.9609 46.8266 95.0676 31.52 104.134C29.76 105.201 29.1733 107.441 30.24 109.254C31.3066 111.014 33.5466 111.601 35.36 110.534C53.3866 99.8676 59.68 93.3609 59.68 62.3209V33.5742C59.68 24.4542 52.2666 17.0942 43.2 17.0942H27.2C17.76 17.0942 10.6666 24.1876 10.6666 33.5742V49.5742C10.6666 58.9609 17.76 66.0542 27.1466 66.0542Z"
                  fill="#667085"
                  fill-opacity="0.3"
                />
              </svg>
            </div>
            <p className="text-xl">
              consectetur adipiscing elit. Sed congue interdum ligula a
              dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis
              orci elementum egestas lobortis.Sed lobortis orci elementum
              egestas lobortis. consectetur adipiscing elit. Sed congue interdum ligula a
              dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis
              orci elementum egestas lobortis.Sed lobortis orci elementum
              egestas lobortis. consectetur adipiscing elit. Sed congue interdum ligula a
              dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis
              orci elementum egestas lobortis.Sed lobortis orci elementum
              egestas lobortis.
            </p>
          </div>
          <div className="p-5 bg-white bg-opacity-20 backdrop-blur-md rounded-3xl">
            {/* Heading section */}
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <div>
                    <Image
                      className=""
                      src={TestimonialProfile}
                      width={50}
                      height={50}
                      alt="testimonial profile"
                    />
                  </div>
                  <div className="">
                    <p className="text-2xl font-bold">Jayesh Patil</p>
                    <p className="text-lg">CEO, Lirante</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8912 20.0095C23.5459 20.3442 23.3872 20.8282 23.4659 21.3028L24.6512 27.8628C24.7512 28.4188 24.5165 28.9815 24.0512 29.3028C23.5952 29.6362 22.9885 29.6762 22.4912 29.4095L16.5858 26.3295C16.3805 26.2202 16.1525 26.1615 15.9192 26.1548H15.5578C15.4325 26.1735 15.3099 26.2135 15.1979 26.2748L9.29118 29.3695C8.99918 29.5162 8.66852 29.5682 8.34452 29.5162C7.55518 29.3668 7.02852 28.6148 7.15785 27.8215L8.34452 21.2615C8.42318 20.7828 8.26452 20.2962 7.91918 19.9562L3.10452 15.2895C2.70185 14.8988 2.56185 14.3122 2.74585 13.7828C2.92452 13.2548 3.38052 12.8695 3.93118 12.7828L10.5578 11.8215C11.0619 11.7695 11.5045 11.4628 11.7312 11.0095L14.6512 5.02284C14.7205 4.88951 14.8099 4.76685 14.9179 4.66285L15.0378 4.56951C15.1005 4.50018 15.1725 4.44285 15.2525 4.39618L15.3979 4.34285L15.6245 4.24951H16.1859C16.6872 4.30151 17.1285 4.60151 17.3592 5.04951L20.3179 11.0095C20.5312 11.4455 20.9459 11.7482 21.4245 11.8215L28.0512 12.7828C28.6112 12.8628 29.0792 13.2495 29.2645 13.7828C29.4392 14.3175 29.2885 14.9042 28.8779 15.2895L23.8912 20.0095Z"
                      fill="#FD853A"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8912 20.0095C23.5459 20.3442 23.3872 20.8282 23.4659 21.3028L24.6512 27.8628C24.7512 28.4188 24.5165 28.9815 24.0512 29.3028C23.5952 29.6362 22.9885 29.6762 22.4912 29.4095L16.5858 26.3295C16.3805 26.2202 16.1525 26.1615 15.9192 26.1548H15.5578C15.4325 26.1735 15.3099 26.2135 15.1979 26.2748L9.29118 29.3695C8.99918 29.5162 8.66852 29.5682 8.34452 29.5162C7.55518 29.3668 7.02852 28.6148 7.15785 27.8215L8.34452 21.2615C8.42318 20.7828 8.26452 20.2962 7.91918 19.9562L3.10452 15.2895C2.70185 14.8988 2.56185 14.3122 2.74585 13.7828C2.92452 13.2548 3.38052 12.8695 3.93118 12.7828L10.5578 11.8215C11.0619 11.7695 11.5045 11.4628 11.7312 11.0095L14.6512 5.02284C14.7205 4.88951 14.8099 4.76685 14.9179 4.66285L15.0378 4.56951C15.1005 4.50018 15.1725 4.44285 15.2525 4.39618L15.3979 4.34285L15.6245 4.24951H16.1859C16.6872 4.30151 17.1285 4.60151 17.3592 5.04951L20.3179 11.0095C20.5312 11.4455 20.9459 11.7482 21.4245 11.8215L28.0512 12.7828C28.6112 12.8628 29.0792 13.2495 29.2645 13.7828C29.4392 14.3175 29.2885 14.9042 28.8779 15.2895L23.8912 20.0095Z"
                      fill="#FD853A"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8912 20.0095C23.5459 20.3442 23.3872 20.8282 23.4659 21.3028L24.6512 27.8628C24.7512 28.4188 24.5165 28.9815 24.0512 29.3028C23.5952 29.6362 22.9885 29.6762 22.4912 29.4095L16.5858 26.3295C16.3805 26.2202 16.1525 26.1615 15.9192 26.1548H15.5578C15.4325 26.1735 15.3099 26.2135 15.1979 26.2748L9.29118 29.3695C8.99918 29.5162 8.66852 29.5682 8.34452 29.5162C7.55518 29.3668 7.02852 28.6148 7.15785 27.8215L8.34452 21.2615C8.42318 20.7828 8.26452 20.2962 7.91918 19.9562L3.10452 15.2895C2.70185 14.8988 2.56185 14.3122 2.74585 13.7828C2.92452 13.2548 3.38052 12.8695 3.93118 12.7828L10.5578 11.8215C11.0619 11.7695 11.5045 11.4628 11.7312 11.0095L14.6512 5.02284C14.7205 4.88951 14.8099 4.76685 14.9179 4.66285L15.0378 4.56951C15.1005 4.50018 15.1725 4.44285 15.2525 4.39618L15.3979 4.34285L15.6245 4.24951H16.1859C16.6872 4.30151 17.1285 4.60151 17.3592 5.04951L20.3179 11.0095C20.5312 11.4455 20.9459 11.7482 21.4245 11.8215L28.0512 12.7828C28.6112 12.8628 29.0792 13.2495 29.2645 13.7828C29.4392 14.3175 29.2885 14.9042 28.8779 15.2895L23.8912 20.0095Z"
                      fill="#FD853A"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8912 20.0095C23.5459 20.3442 23.3872 20.8282 23.4659 21.3028L24.6512 27.8628C24.7512 28.4188 24.5165 28.9815 24.0512 29.3028C23.5952 29.6362 22.9885 29.6762 22.4912 29.4095L16.5858 26.3295C16.3805 26.2202 16.1525 26.1615 15.9192 26.1548H15.5578C15.4325 26.1735 15.3099 26.2135 15.1979 26.2748L9.29118 29.3695C8.99918 29.5162 8.66852 29.5682 8.34452 29.5162C7.55518 29.3668 7.02852 28.6148 7.15785 27.8215L8.34452 21.2615C8.42318 20.7828 8.26452 20.2962 7.91918 19.9562L3.10452 15.2895C2.70185 14.8988 2.56185 14.3122 2.74585 13.7828C2.92452 13.2548 3.38052 12.8695 3.93118 12.7828L10.5578 11.8215C11.0619 11.7695 11.5045 11.4628 11.7312 11.0095L14.6512 5.02284C14.7205 4.88951 14.8099 4.76685 14.9179 4.66285L15.0378 4.56951C15.1005 4.50018 15.1725 4.44285 15.2525 4.39618L15.3979 4.34285L15.6245 4.24951H16.1859C16.6872 4.30151 17.1285 4.60151 17.3592 5.04951L20.3179 11.0095C20.5312 11.4455 20.9459 11.7482 21.4245 11.8215L28.0512 12.7828C28.6112 12.8628 29.0792 13.2495 29.2645 13.7828C29.4392 14.3175 29.2885 14.9042 28.8779 15.2895L23.8912 20.0095Z"
                      fill="#FD853A"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8912 20.0095C23.5459 20.3442 23.3872 20.8282 23.4659 21.3028L24.6512 27.8628C24.7512 28.4188 24.5165 28.9815 24.0512 29.3028C23.5952 29.6362 22.9885 29.6762 22.4912 29.4095L16.5858 26.3295C16.3805 26.2202 16.1525 26.1615 15.9192 26.1548H15.5578C15.4325 26.1735 15.3099 26.2135 15.1979 26.2748L9.29118 29.3695C8.99918 29.5162 8.66852 29.5682 8.34452 29.5162C7.55518 29.3668 7.02852 28.6148 7.15785 27.8215L8.34452 21.2615C8.42318 20.7828 8.26452 20.2962 7.91918 19.9562L3.10452 15.2895C2.70185 14.8988 2.56185 14.3122 2.74585 13.7828C2.92452 13.2548 3.38052 12.8695 3.93118 12.7828L10.5578 11.8215C11.0619 11.7695 11.5045 11.4628 11.7312 11.0095L14.6512 5.02284C14.7205 4.88951 14.8099 4.76685 14.9179 4.66285L15.0378 4.56951C15.1005 4.50018 15.1725 4.44285 15.2525 4.39618L15.3979 4.34285L15.6245 4.24951H16.1859C16.6872 4.30151 17.1285 4.60151 17.3592 5.04951L20.3179 11.0095C20.5312 11.4455 20.9459 11.7482 21.4245 11.8215L28.0512 12.7828C28.6112 12.8628 29.0792 13.2495 29.2645 13.7828C29.4392 14.3175 29.2885 14.9042 28.8779 15.2895L23.8912 20.0095Z"
                      fill="#FD853A"
                    />
                  </svg>
                  <p className="text-[25.69px] font-medium">5.0</p>
                </div>
              </div>
              <svg
                width="128"
                height="129"
                viewBox="0 0 128 129"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M84.8532 66.0542H109.867C109.44 90.9609 104.533 95.0676 89.2266 104.134C87.4666 105.201 86.8799 107.441 87.9466 109.254C89.0132 111.014 91.2532 111.601 93.0666 110.534C111.093 99.8676 117.387 93.3609 117.387 62.3209V33.5742C117.387 24.4542 109.973 17.0942 100.907 17.0942H84.9066C75.5199 17.0942 68.4266 24.1876 68.4266 33.5742V49.5742C68.3732 58.9609 75.4666 66.0542 84.8532 66.0542Z"
                  fill="#667085"
                  fill-opacity="0.3"
                />
                <path
                  d="M27.1466 66.0542H52.16C51.7333 90.9609 46.8266 95.0676 31.52 104.134C29.76 105.201 29.1733 107.441 30.24 109.254C31.3066 111.014 33.5466 111.601 35.36 110.534C53.3866 99.8676 59.68 93.3609 59.68 62.3209V33.5742C59.68 24.4542 52.2666 17.0942 43.2 17.0942H27.2C17.76 17.0942 10.6666 24.1876 10.6666 33.5742V49.5742C10.6666 58.9609 17.76 66.0542 27.1466 66.0542Z"
                  fill="#667085"
                  fill-opacity="0.3"
                />
              </svg>
            </div>
            <p className="text-xl">
              consectetur adipiscing elit. Sed congue interdum ligula a
              dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis
              orci elementum egestas lobortis.Sed lobortis orci elementum
              egestas lobortis. consectetur adipiscing elit. Sed congue interdum ligula a
              dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis
              orci elementum egestas lobortis.Sed lobortis orci elementum
              egestas lobortis. consectetur adipiscing elit. Sed congue interdum ligula a
              dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis
              orci elementum egestas lobortis.Sed lobortis orci elementum
              egestas lobortis.
            </p>
          </div>
          <div className="p-5 bg-white bg-opacity-20 backdrop-blur-md rounded-3xl">
            {/* Heading section */}
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <div>
                    <Image
                      className=""
                      src={TestimonialProfile}
                      width={50}
                      height={50}
                      alt="testimonial profile"
                    />
                  </div>
                  <div className="">
                    <p className="text-2xl font-bold">Jayesh Patil</p>
                    <p className="text-lg">CEO, Lirante</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8912 20.0095C23.5459 20.3442 23.3872 20.8282 23.4659 21.3028L24.6512 27.8628C24.7512 28.4188 24.5165 28.9815 24.0512 29.3028C23.5952 29.6362 22.9885 29.6762 22.4912 29.4095L16.5858 26.3295C16.3805 26.2202 16.1525 26.1615 15.9192 26.1548H15.5578C15.4325 26.1735 15.3099 26.2135 15.1979 26.2748L9.29118 29.3695C8.99918 29.5162 8.66852 29.5682 8.34452 29.5162C7.55518 29.3668 7.02852 28.6148 7.15785 27.8215L8.34452 21.2615C8.42318 20.7828 8.26452 20.2962 7.91918 19.9562L3.10452 15.2895C2.70185 14.8988 2.56185 14.3122 2.74585 13.7828C2.92452 13.2548 3.38052 12.8695 3.93118 12.7828L10.5578 11.8215C11.0619 11.7695 11.5045 11.4628 11.7312 11.0095L14.6512 5.02284C14.7205 4.88951 14.8099 4.76685 14.9179 4.66285L15.0378 4.56951C15.1005 4.50018 15.1725 4.44285 15.2525 4.39618L15.3979 4.34285L15.6245 4.24951H16.1859C16.6872 4.30151 17.1285 4.60151 17.3592 5.04951L20.3179 11.0095C20.5312 11.4455 20.9459 11.7482 21.4245 11.8215L28.0512 12.7828C28.6112 12.8628 29.0792 13.2495 29.2645 13.7828C29.4392 14.3175 29.2885 14.9042 28.8779 15.2895L23.8912 20.0095Z"
                      fill="#FD853A"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8912 20.0095C23.5459 20.3442 23.3872 20.8282 23.4659 21.3028L24.6512 27.8628C24.7512 28.4188 24.5165 28.9815 24.0512 29.3028C23.5952 29.6362 22.9885 29.6762 22.4912 29.4095L16.5858 26.3295C16.3805 26.2202 16.1525 26.1615 15.9192 26.1548H15.5578C15.4325 26.1735 15.3099 26.2135 15.1979 26.2748L9.29118 29.3695C8.99918 29.5162 8.66852 29.5682 8.34452 29.5162C7.55518 29.3668 7.02852 28.6148 7.15785 27.8215L8.34452 21.2615C8.42318 20.7828 8.26452 20.2962 7.91918 19.9562L3.10452 15.2895C2.70185 14.8988 2.56185 14.3122 2.74585 13.7828C2.92452 13.2548 3.38052 12.8695 3.93118 12.7828L10.5578 11.8215C11.0619 11.7695 11.5045 11.4628 11.7312 11.0095L14.6512 5.02284C14.7205 4.88951 14.8099 4.76685 14.9179 4.66285L15.0378 4.56951C15.1005 4.50018 15.1725 4.44285 15.2525 4.39618L15.3979 4.34285L15.6245 4.24951H16.1859C16.6872 4.30151 17.1285 4.60151 17.3592 5.04951L20.3179 11.0095C20.5312 11.4455 20.9459 11.7482 21.4245 11.8215L28.0512 12.7828C28.6112 12.8628 29.0792 13.2495 29.2645 13.7828C29.4392 14.3175 29.2885 14.9042 28.8779 15.2895L23.8912 20.0095Z"
                      fill="#FD853A"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8912 20.0095C23.5459 20.3442 23.3872 20.8282 23.4659 21.3028L24.6512 27.8628C24.7512 28.4188 24.5165 28.9815 24.0512 29.3028C23.5952 29.6362 22.9885 29.6762 22.4912 29.4095L16.5858 26.3295C16.3805 26.2202 16.1525 26.1615 15.9192 26.1548H15.5578C15.4325 26.1735 15.3099 26.2135 15.1979 26.2748L9.29118 29.3695C8.99918 29.5162 8.66852 29.5682 8.34452 29.5162C7.55518 29.3668 7.02852 28.6148 7.15785 27.8215L8.34452 21.2615C8.42318 20.7828 8.26452 20.2962 7.91918 19.9562L3.10452 15.2895C2.70185 14.8988 2.56185 14.3122 2.74585 13.7828C2.92452 13.2548 3.38052 12.8695 3.93118 12.7828L10.5578 11.8215C11.0619 11.7695 11.5045 11.4628 11.7312 11.0095L14.6512 5.02284C14.7205 4.88951 14.8099 4.76685 14.9179 4.66285L15.0378 4.56951C15.1005 4.50018 15.1725 4.44285 15.2525 4.39618L15.3979 4.34285L15.6245 4.24951H16.1859C16.6872 4.30151 17.1285 4.60151 17.3592 5.04951L20.3179 11.0095C20.5312 11.4455 20.9459 11.7482 21.4245 11.8215L28.0512 12.7828C28.6112 12.8628 29.0792 13.2495 29.2645 13.7828C29.4392 14.3175 29.2885 14.9042 28.8779 15.2895L23.8912 20.0095Z"
                      fill="#FD853A"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8912 20.0095C23.5459 20.3442 23.3872 20.8282 23.4659 21.3028L24.6512 27.8628C24.7512 28.4188 24.5165 28.9815 24.0512 29.3028C23.5952 29.6362 22.9885 29.6762 22.4912 29.4095L16.5858 26.3295C16.3805 26.2202 16.1525 26.1615 15.9192 26.1548H15.5578C15.4325 26.1735 15.3099 26.2135 15.1979 26.2748L9.29118 29.3695C8.99918 29.5162 8.66852 29.5682 8.34452 29.5162C7.55518 29.3668 7.02852 28.6148 7.15785 27.8215L8.34452 21.2615C8.42318 20.7828 8.26452 20.2962 7.91918 19.9562L3.10452 15.2895C2.70185 14.8988 2.56185 14.3122 2.74585 13.7828C2.92452 13.2548 3.38052 12.8695 3.93118 12.7828L10.5578 11.8215C11.0619 11.7695 11.5045 11.4628 11.7312 11.0095L14.6512 5.02284C14.7205 4.88951 14.8099 4.76685 14.9179 4.66285L15.0378 4.56951C15.1005 4.50018 15.1725 4.44285 15.2525 4.39618L15.3979 4.34285L15.6245 4.24951H16.1859C16.6872 4.30151 17.1285 4.60151 17.3592 5.04951L20.3179 11.0095C20.5312 11.4455 20.9459 11.7482 21.4245 11.8215L28.0512 12.7828C28.6112 12.8628 29.0792 13.2495 29.2645 13.7828C29.4392 14.3175 29.2885 14.9042 28.8779 15.2895L23.8912 20.0095Z"
                      fill="#FD853A"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8912 20.0095C23.5459 20.3442 23.3872 20.8282 23.4659 21.3028L24.6512 27.8628C24.7512 28.4188 24.5165 28.9815 24.0512 29.3028C23.5952 29.6362 22.9885 29.6762 22.4912 29.4095L16.5858 26.3295C16.3805 26.2202 16.1525 26.1615 15.9192 26.1548H15.5578C15.4325 26.1735 15.3099 26.2135 15.1979 26.2748L9.29118 29.3695C8.99918 29.5162 8.66852 29.5682 8.34452 29.5162C7.55518 29.3668 7.02852 28.6148 7.15785 27.8215L8.34452 21.2615C8.42318 20.7828 8.26452 20.2962 7.91918 19.9562L3.10452 15.2895C2.70185 14.8988 2.56185 14.3122 2.74585 13.7828C2.92452 13.2548 3.38052 12.8695 3.93118 12.7828L10.5578 11.8215C11.0619 11.7695 11.5045 11.4628 11.7312 11.0095L14.6512 5.02284C14.7205 4.88951 14.8099 4.76685 14.9179 4.66285L15.0378 4.56951C15.1005 4.50018 15.1725 4.44285 15.2525 4.39618L15.3979 4.34285L15.6245 4.24951H16.1859C16.6872 4.30151 17.1285 4.60151 17.3592 5.04951L20.3179 11.0095C20.5312 11.4455 20.9459 11.7482 21.4245 11.8215L28.0512 12.7828C28.6112 12.8628 29.0792 13.2495 29.2645 13.7828C29.4392 14.3175 29.2885 14.9042 28.8779 15.2895L23.8912 20.0095Z"
                      fill="#FD853A"
                    />
                  </svg>
                  <p className="text-[25.69px] font-medium">5.0</p>
                </div>
              </div>
              <svg
                width="128"
                height="129"
                viewBox="0 0 128 129"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M84.8532 66.0542H109.867C109.44 90.9609 104.533 95.0676 89.2266 104.134C87.4666 105.201 86.8799 107.441 87.9466 109.254C89.0132 111.014 91.2532 111.601 93.0666 110.534C111.093 99.8676 117.387 93.3609 117.387 62.3209V33.5742C117.387 24.4542 109.973 17.0942 100.907 17.0942H84.9066C75.5199 17.0942 68.4266 24.1876 68.4266 33.5742V49.5742C68.3732 58.9609 75.4666 66.0542 84.8532 66.0542Z"
                  fill="#667085"
                  fill-opacity="0.3"
                />
                <path
                  d="M27.1466 66.0542H52.16C51.7333 90.9609 46.8266 95.0676 31.52 104.134C29.76 105.201 29.1733 107.441 30.24 109.254C31.3066 111.014 33.5466 111.601 35.36 110.534C53.3866 99.8676 59.68 93.3609 59.68 62.3209V33.5742C59.68 24.4542 52.2666 17.0942 43.2 17.0942H27.2C17.76 17.0942 10.6666 24.1876 10.6666 33.5742V49.5742C10.6666 58.9609 17.76 66.0542 27.1466 66.0542Z"
                  fill="#667085"
                  fill-opacity="0.3"
                />
              </svg>
            </div>
            <p className="text-xl">
              consectetur adipiscing elit. Sed congue interdum ligula a
              dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis
              orci elementum egestas lobortis.Sed lobortis orci elementum
              egestas lobortis. consectetur adipiscing elit. Sed congue interdum ligula a
              dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis
              orci elementum egestas lobortis.Sed lobortis orci elementum
              egestas lobortis. consectetur adipiscing elit. Sed congue interdum ligula a
              dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis
              orci elementum egestas lobortis.Sed lobortis orci elementum
              egestas lobortis.
            </p>
          </div>
          </Carousel>
        </div>
      </div>
      {/* Mail us section */}
      <div className="flex flex-col mx-auto text-center py-28">
        <h3 className="text-6xl font-semibold">
          Have an Awsome Project
          <br />
          Idea? <span className="text-primary-color">Let&apos;s Discuss</span>
        </h3>
        <div>
          <div className="relative inline-block mt-2.5">
            <svg
              width="47"
              height="48"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-2 left-2 p-2 bg-orange-100 rounded-full"
            >
              <path
                d="M22.6666 4.74756H9.33329C5.33329 4.74756 2.66663 6.74756 2.66663 11.4142V20.7476C2.66663 25.4142 5.33329 27.4142 9.33329 27.4142H22.6666C26.6666 27.4142 29.3333 25.4142 29.3333 20.7476V11.4142C29.3333 6.74756 26.6666 4.74756 22.6666 4.74756ZM23.2933 12.8676L19.12 16.2009C18.24 16.9076 17.12 17.2542 16 17.2542C14.88 17.2542 13.7466 16.9076 12.88 16.2009L8.70663 12.8676C8.27996 12.5209 8.21329 11.8809 8.54663 11.4542C8.89329 11.0276 9.51996 10.9476 9.94663 11.2942L14.12 14.6276C15.1333 15.4409 16.8533 15.4409 17.8666 14.6276L22.04 11.2942C22.4666 10.9476 23.1066 11.0142 23.44 11.4542C23.7866 11.8809 23.72 12.5209 23.2933 12.8676Z"
                fill="#FD853A"
              />
            </svg>
            <button className="absolute top-1 right-2 text-white text-xl px-10 py-3 bg-primary-color rounded-[60px] hover:text-primary-color hover:bg-white border-2 border-white duration-200 hover:border-primary-color">
              Send
            </button>
            <input
              type="text"
              className="rounded-full w-[750px] h-16 pl-16"
              placeholder="Enter Email Address"
            />
          </div>
          <div className="flex justify-between mx-96 mt-1.5">
            <div className="flex gap-0.5">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3899 5.29084L16.7999 8.11084C16.9899 8.50084 17.4999 8.87084 17.9299 8.95084L20.4799 9.37084C22.1099 9.64084 22.4899 10.8208 21.3199 12.0008L19.3299 13.9908C18.9999 14.3208 18.8099 14.9708 18.9199 15.4408L19.4899 17.9008C19.9399 19.8408 18.8999 20.6008 17.1899 19.5808L14.7999 18.1608C14.3699 17.9008 13.6499 17.9008 13.2199 18.1608L10.8299 19.5808C9.11994 20.5908 8.07994 19.8408 8.52994 17.9008L9.09994 15.4408C9.18994 14.9608 8.99994 14.3108 8.66994 13.9808L6.67994 11.9908C5.50994 10.8208 5.88994 9.64084 7.51994 9.36084L10.0699 8.94084C10.4999 8.87084 11.0099 8.49084 11.1999 8.10084L12.6099 5.28084C13.3799 3.76084 14.6199 3.76084 15.3899 5.29084Z"
                  fill="#292D32"
                />
                <path
                  d="M8 5.83105H2C1.59 5.83105 1.25 5.49105 1.25 5.08105C1.25 4.67105 1.59 4.33105 2 4.33105H8C8.41 4.33105 8.75 4.67105 8.75 5.08105C8.75 5.49105 8.41 5.83105 8 5.83105Z"
                  fill="#292D32"
                />
                <path
                  d="M5 19.8311H2C1.59 19.8311 1.25 19.4911 1.25 19.0811C1.25 18.6711 1.59 18.3311 2 18.3311H5C5.41 18.3311 5.75 18.6711 5.75 19.0811C5.75 19.4911 5.41 19.8311 5 19.8311Z"
                  fill="#292D32"
                />
                <path
                  d="M3 12.8311H2C1.59 12.8311 1.25 12.4911 1.25 12.0811C1.25 11.6711 1.59 11.3311 2 11.3311H3C3.41 11.3311 3.75 11.6711 3.75 12.0811C3.75 12.4911 3.41 12.8311 3 12.8311Z"
                  fill="#292D32"
                />
              </svg>
              <p className="text-light-black text-base">
                4.9/5 Average Ratings
              </p>
            </div>
            <div className="flex gap-0.5">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8099 5.57105V6.31105L14.2699 4.26105C12.9299 3.49105 11.0599 3.49105 9.72994 4.26105L6.18994 6.32105V5.57105C6.18994 3.32105 7.41994 2.08105 9.66994 2.08105H14.3299C16.5799 2.08105 17.8099 3.32105 17.8099 5.57105Z"
                  fill="#292D32"
                />
                <path
                  d="M17.84 8.05129L17.7 7.98129L16.34 7.20129L13.52 5.57129C12.66 5.07129 11.34 5.07129 10.48 5.57129L7.66 7.19129L6.3 7.99129L6.12 8.08129C4.37 9.26129 4.25 9.48129 4.25 11.3713V15.8913C4.25 17.7813 4.37 18.0013 6.16 19.2113L10.48 21.7013C10.91 21.9613 11.45 22.0713 12 22.0713C12.54 22.0713 13.09 21.9513 13.52 21.7013L17.88 19.1813C19.64 18.0013 19.75 17.7913 19.75 15.8913V11.3713C19.75 9.48129 19.63 9.26129 17.84 8.05129ZM14.79 13.5813L14.18 14.3313C14.08 14.4413 14.01 14.6513 14.02 14.8013L14.08 15.7613C14.12 16.3513 13.7 16.6513 13.15 16.4413L12.26 16.0813C12.12 16.0313 11.89 16.0313 11.75 16.0813L10.86 16.4313C10.31 16.6513 9.89 16.3413 9.93 15.7513L9.99 14.7913C10 14.6413 9.93 14.4313 9.83 14.3213L9.21 13.5813C8.83 13.1313 9 12.6313 9.57 12.4813L10.5 12.2413C10.65 12.2013 10.82 12.0613 10.9 11.9413L11.42 11.1413C11.74 10.6413 12.25 10.6413 12.58 11.1413L13.1 11.9413C13.18 12.0713 13.36 12.2013 13.5 12.2413L14.43 12.4813C15 12.6313 15.17 13.1313 14.79 13.5813Z"
                  fill="#292D32"
                />
              </svg>
              <p className="text-light-black text-base">25+ Winning Awards</p>
            </div>
            <div className="flex gap-0.5">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.54 4.2009L13.04 2.1409C12.47 1.9309 11.54 1.9309 10.97 2.1409L5.47005 4.2009C4.41005 4.6009 3.55005 5.8409 3.55005 6.9709V15.0709C3.55005 15.8809 4.08005 16.9509 4.73005 17.4309L10.23 21.5409C11.2 22.2709 12.79 22.2709 13.76 21.5409L19.26 17.4309C19.91 16.9409 20.4401 15.8809 20.4401 15.0709V6.9709C20.4501 5.8409 19.59 4.6009 18.54 4.2009ZM15.48 9.8009L11.18 14.1009C11.03 14.2509 10.84 14.3209 10.65 14.3209C10.46 14.3209 10.27 14.2509 10.12 14.1009L8.52005 12.4809C8.23005 12.1909 8.23005 11.7109 8.52005 11.4209C8.81005 11.1309 9.29005 11.1309 9.58005 11.4209L10.66 12.5009L14.43 8.7309C14.72 8.4409 15.2 8.4409 15.49 8.7309C15.78 9.0209 15.78 9.5109 15.48 9.8009Z"
                  fill="#292D32"
                />
              </svg>
              <p className="text-light-black text-base">
                Certified Product Designer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
