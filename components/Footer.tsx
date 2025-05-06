"use client";
import React from "react";
import Link from "next/link";
import { motion as m } from "framer-motion";

const Footer = () => {
  return (
    <div className="block rounded-tl-3xl rounded-tr-3xl bg-light-black text-white lg:px-20 md:px-10 px-5 pt-10 pb-6">
      {/* Let's connect there and hire me button */}
      <div className="flex items-center justify-between flex-wrap lg:gap-3 gap-1">
        <h4 className="text-5xl max-sm:text-2xl">Let&apos;s Connect there</h4>
        <div>
          <Link href="https://wa.me/+916374151627" target="_blank">
            <m.button
              className="rounded-full bg-primary-color py-1 px-4 max-sm:px-2 max-sm:py-0.5 text-2xl max-sm:text-xl flex items-center font-medium"
              whileHover={{ scale: 1.1 }}
            >
              <p>Hire me </p>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.75 29.8311L30.25 12.3311"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.75 12.3311H30.25V29.8311"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </m.button>
          </Link>
        </div>
      </div>
      <hr className="lg:my-14 my-7" />
      {/* 4 div flex section */}
      <div className="md:grid lg:grid-cols-5 lg:justify-items-center max-lg:grid-cols-3 justify-around gap-2 md:gap-10">
        {/* BK Dhanush section */}
        <div className="col-span-2">
          <Link href="https://wa.me/+916374151627" target="_blank">
            <m.div
              className="flex items-center gap-1 cursor-pointer mb-8 max-sm:mb-2"
              whileHover={{ scale: 1.1, x: 15 }}
            >
              <h2 className="bg-primary-color px-2.5 py-2.5 rounded-full font-bold text-3xl">
                BK
              </h2>
              <h2 className="font-bold text-3xl">Dhanush</h2>
            </m.div>
          </Link>

          <p className="text-lg max-sm:text-base">
            Thank you sincerely for the wonderful opportunity to work together.
            It has been a privilege contributing to your project, and I am
            genuinely grateful for the trust you&apos;e placed in my skills.
            Your support and collaboration have made this experience truly
            rewarding, and I look forward to continued success together.
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed lobortis orci elementum egestas lobortis. */}
          </p>
          {/* Facebook Icon */}
          <div className="flex mt-5 gap-2 mb-5">
            {/* <m.svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              whileHover={{scale: 1.3}}
              className="cursor-pointer text-white hover:text-blue-500"
            >
              <path
                d="M22 16.2711C22 19.9111 19.83 22.0811 16.19 22.0811H15C14.45 22.0811 14 21.6311 14 21.0811V15.3111C14 15.0411 14.22 14.8111 14.49 14.8111L16.25 14.7811C16.39 14.7711 16.51 14.6711 16.54 14.5311L16.89 12.6211C16.92 12.4411 16.78 12.2711 16.59 12.2711L14.46 12.3011C14.18 12.3011 13.96 12.0811 13.95 11.8111L13.91 9.36105C13.91 9.20105 14.04 9.06107 14.21 9.06107L16.61 9.02106C16.78 9.02106 16.91 8.89107 16.91 8.72107L16.87 6.32104C16.87 6.15104 16.74 6.02106 16.57 6.02106L13.87 6.06107C12.21 6.09107 10.89 7.45105 10.92 9.11105L10.97 11.8611C10.98 12.1411 10.76 12.3611 10.48 12.3711L9.28 12.3911C9.11 12.3911 8.98001 12.521 8.98001 12.691L9.01001 14.5911C9.01001 14.7611 9.14 14.8911 9.31 14.8911L10.51 14.8711C10.79 14.8711 11.01 15.0911 11.02 15.3611L11.11 21.0611C11.12 21.6211 10.67 22.0811 10.11 22.0811H7.81C4.17 22.0811 2 19.911 2 16.261V7.89105C2 4.25105 4.17 2.08105 7.81 2.08105H16.19C19.83 2.08105 22 4.25105 22 7.89105V16.2711Z"
                fill="currentColor"
              />
            </m.svg> */}
            {/* Youtube Icon */}
            {/* <m.svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              whileHover={{scale: 1.3}}
              className="cursor-pointer text-white hover:text-red-500"
            >
              <path
                d="M17 4.08105H7C4 4.08105 2 6.08105 2 9.08105V15.0811C2 18.0811 4 20.0811 7 20.0811H17C20 20.0811 22 18.0811 22 15.0811V9.08105C22 6.08105 20 4.08105 17 4.08105ZM13.89 13.1111L11.42 14.5911C10.42 15.1911 9.59998 14.7311 9.59998 13.5611V10.5911C9.59998 9.42106 10.42 8.96107 11.42 9.56107L13.89 11.041C14.84 11.621 14.84 12.5411 13.89 13.1111Z"
                fill="currentColor"
              />
            </m.svg> */}
            {/* Linkedin Icon */}
            <Link href="https://www.linkedin.com/in/dhanush-bk" target="_blank">
              <m.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                whileHover={{ scale: 1.3 }}
                className="cursor-pointer text-white hover:text-blue-400"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </m.svg>
            </Link>
            <Link href="https://wa.me/+916374151627" target="_blank">
              <m.svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ scale: 1.3 }}
                className="cursor-pointer text-white hover:text-green-500"
              >
                <path
                  d="M21.98 11.491C21.64 5.69101 16.37 1.22102 10.3 2.22102C6.12004 2.91102 2.77005 6.301 2.12005 10.481C1.74005 12.901 2.24007 15.191 3.33007 17.081L2.44006 20.391C2.24006 21.141 2.93004 21.821 3.67004 21.611L6.93005 20.711C8.41005 21.581 10.14 22.081 11.99 22.081C17.63 22.081 22.31 17.111 21.98 11.491ZM16.8801 15.801C16.7901 15.981 16.68 16.151 16.54 16.311C16.29 16.581 16.02 16.781 15.72 16.901C15.42 17.031 15.09 17.091 14.74 17.091C14.23 17.091 13.68 16.971 13.11 16.721C12.53 16.471 11.9601 16.141 11.3901 15.731C10.8101 15.311 10.2701 14.841 9.75005 14.331C9.23005 13.811 8.77003 13.261 8.35003 12.691C7.94003 12.121 7.61005 11.551 7.37005 10.981C7.13005 10.411 7.01006 9.86101 7.01006 9.34101C7.01006 9.00101 7.07006 8.67101 7.19006 8.37101C7.31006 8.06101 7.50007 7.78101 7.77007 7.53101C8.09007 7.21101 8.44005 7.06101 8.81005 7.06101C8.95005 7.06101 9.09002 7.09101 9.22002 7.15101C9.35002 7.21101 9.47005 7.30101 9.56005 7.43101L10.72 9.07099C10.81 9.20099 10.88 9.311 10.92 9.421C10.97 9.531 10.99 9.631 10.99 9.731C10.99 9.851 10.9501 9.97101 10.8801 10.091C10.8101 10.211 10.72 10.331 10.6 10.451L10.22 10.851C10.16 10.911 10.1401 10.971 10.1401 11.051C10.1401 11.091 10.15 11.131 10.16 11.171C10.18 11.211 10.1901 11.241 10.2001 11.271C10.2901 11.441 10.45 11.651 10.67 11.911C10.9 12.171 11.1401 12.441 11.4001 12.701C11.6701 12.971 11.9301 13.211 12.2001 13.441C12.4601 13.661 12.68 13.811 12.85 13.901C12.88 13.911 12.9101 13.931 12.9401 13.941C12.9801 13.961 13.0201 13.961 13.0701 13.961C13.1601 13.961 13.2201 13.931 13.2801 13.871L13.66 13.491C13.79 13.361 13.9101 13.271 14.0201 13.211C14.1401 13.141 14.2501 13.101 14.3801 13.101C14.4801 13.101 14.5801 13.121 14.6901 13.171C14.8001 13.221 14.92 13.281 15.04 13.371L16.7001 14.551C16.8301 14.641 16.92 14.751 16.98 14.871C17.03 15.001 17.0601 15.121 17.0601 15.261C17.0001 15.431 16.9601 15.621 16.8801 15.801Z"
                  fill="currentColor"
                />
              </m.svg>
            </Link>
            {/* Instagram Icon */}
            <Link
              href="https://www.instagram.com/dhanushfreelancer"
              target="_blank"
            >
              <m.svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ scale: 1.3 }}
                className="cursor-pointer text-white hover:text-pink-500"
              >
                <path
                  d="M16.19 2.08105H7.81C4.17 2.08105 2 4.25105 2 7.89105V16.2611C2 19.9111 4.17 22.0811 7.81 22.0811H16.18C19.82 22.0811 21.99 19.9111 21.99 16.2711V7.89105C22 4.25105 19.83 2.08105 16.19 2.08105ZM12 15.9611C9.86 15.9611 8.12 14.2211 8.12 12.0811C8.12 9.94105 9.86 8.20105 12 8.20105C14.14 8.20105 15.88 9.94105 15.88 12.0811C15.88 14.2211 14.14 15.9611 12 15.9611ZM17.92 6.96105C17.87 7.08105 17.8 7.19105 17.71 7.29105C17.61 7.38105 17.5 7.45105 17.38 7.50105C17.26 7.55105 17.13 7.58105 17 7.58105C16.73 7.58105 16.48 7.48105 16.29 7.29105C16.2 7.19105 16.13 7.08105 16.08 6.96105C16.03 6.84105 16 6.71105 16 6.58105C16 6.45105 16.03 6.32105 16.08 6.20105C16.13 6.07105 16.2 5.97105 16.29 5.87105C16.52 5.64105 16.87 5.53105 17.19 5.60105C17.26 5.61105 17.32 5.63105 17.38 5.66105C17.44 5.68105 17.5 5.71105 17.56 5.75105C17.61 5.78105 17.66 5.83105 17.71 5.87105C17.8 5.97105 17.87 6.07105 17.92 6.20105C17.97 6.32105 18 6.45105 18 6.58105C18 6.71105 17.97 6.84105 17.92 6.96105Z"
                  fill="currentColor"
                />
              </m.svg>
            </Link>
            <Link href="https://github.com/bkdhanush25" target="_blank">
              <m.svg
                width="25"
                height="24"
                viewBox="0 0 78 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ scale: 1.3 }}
                className="cursor-pointer text-white hover:text-fuchsia-700"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M39 0.5C17.8208 0.5 0.666672 17.6542 0.666672 38.8333C0.666672 55.7958 11.6396 70.1229 26.8771 75.2021C28.7938 75.5375 29.5125 74.3875 29.5125 73.3812C29.5125 72.4708 29.4646 69.4521 29.4646 66.2417C19.8333 68.0146 17.3417 63.8937 16.575 61.7375C16.1438 60.6354 14.275 57.2333 12.6458 56.3229C11.3042 55.6042 9.38751 53.8312 12.5979 53.7833C15.6167 53.7354 17.7729 56.5625 18.4917 57.7125C21.9417 63.5104 27.4521 61.8812 29.6563 60.875C29.9917 58.3833 30.9979 56.7062 32.1 55.7479C23.5708 54.7896 14.6583 51.4833 14.6583 36.8208C14.6583 32.6521 16.1438 29.2021 18.5875 26.5187C18.2042 25.5604 16.8625 21.6312 18.9708 16.3604C18.9708 16.3604 22.1813 15.3542 29.5125 20.2896C32.5792 19.4271 35.8375 18.9958 39.0958 18.9958C42.3542 18.9958 45.6125 19.4271 48.6792 20.2896C56.0104 15.3062 59.2208 16.3604 59.2208 16.3604C61.3292 21.6312 59.9875 25.5604 59.6042 26.5187C62.0479 29.2021 63.5333 32.6042 63.5333 36.8208C63.5333 51.5312 54.5729 54.7896 46.0438 55.7479C47.4333 56.9458 48.6313 59.2458 48.6313 62.8396C48.6313 67.9667 48.5833 72.0875 48.5833 73.3812C48.5833 74.3875 49.3021 75.5854 51.2188 75.2021C66.3604 70.1229 77.3333 55.7479 77.3333 38.8333C77.3333 17.6542 60.1792 0.5 39 0.5Z"
                  fill="currentColor"
                />
              </m.svg>
            </Link>
            {/* Twitter Icon */}
            {/* <m.svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              whileHover={{scale: 1.3}}
              className="cursor-pointer text-white hover:text-blue-500"
            >
              <path
                d="M20.1066 8.71529C20.0826 8.49182 20.0546 8.31274 20.0316 8.18511L21.9161 5.3584C22.0345 5.18068 22.027 4.94731 21.8974 4.77756C21.7677 4.60781 21.5446 4.53917 21.3419 4.60671L18.7212 5.48027C18.5827 5.27371 18.3773 5.00125 18.1036 4.7275C17.5491 4.173 16.6794 3.58105 15.5 3.58105C14.2775 3.58105 13.3727 3.92323 12.7266 4.485C12.0872 5.041 11.75 5.76974 11.5775 6.45979C11.4052 7.14894 11.3898 7.82716 11.4147 8.32477C11.422 8.46989 11.4327 8.60123 11.4444 8.71489C10.1893 8.9818 8.87591 8.57293 7.58934 7.8094C6.17064 6.96746 4.87015 5.74406 3.85358 4.7275C3.71259 4.58651 3.50131 4.54277 3.31593 4.61618C3.13054 4.6896 3.0065 4.86614 3.00027 5.06544C2.87287 9.14225 3.71338 14.0768 7.51119 16.5791C5.9138 17.4432 4.34766 17.8462 2.43801 18.0849C2.21938 18.1122 2.04441 18.2795 2.00721 18.4966C1.97001 18.7138 2.07935 18.9297 2.27642 19.0283C7.43512 21.6076 14.1199 21.4212 17.9 16.3811C19.467 14.2917 19.9921 12.197 20.1233 10.6226C20.1888 9.83625 20.1563 9.17914 20.1066 8.71529Z"
                fill="currentColor"
              />
            </m.svg> */}
          </div>
        </div>
        {/* Navigation section */}
        <div className="text-xl flex flex-col">
          <h5 className="text-primary-color font-semibold mb-7">Navigation</h5>
          <m.div whileHover={{ scale: 1.1 }} className="mb-5">
            <Link href="/">Home</Link>
          </m.div>
          <m.div whileHover={{ scale: 1.1 }} className="mb-5">
            <Link href="/about">About Us</Link>
          </m.div>
          <m.div whileHover={{ scale: 1.1 }} className="mb-5">
            <Link href="/services">Service</Link>
          </m.div>
          <m.div whileHover={{ scale: 1.1 }} className="mb-5">
            <Link href="/resume">Resume</Link>
          </m.div>
          <m.div whileHover={{ scale: 1.1 }} className="mb-5">
            <Link href="/projects">Project</Link>
          </m.div>
        </div>
        {/* Contact section */}
        <div className="text-xl flex flex-col">
          <h5 className="text-primary-color font-semibold mb-7">Contact</h5>
          <Link href="tel:+916374151627" target="_blank">
            <p className="mb-7">+91 6374151627</p>
          </Link>
          <Link href="https://dhanushbk-portfolio.vercel.app/" className="mb-7">
            dhanushbk-portfolio
          </Link>
          <p className="mb-7">bkdhanushofficial@gmail.com</p>
        </div>
        {/* Get the latest information section */}
        <div className="text-xl flex flex-col">
          <h5 className="text-primary-color font-semibold mb-7">
            Get the latest information
          </h5>
          <Link
            href="https://www.mailto:dhanushbk.freelancer@gmail.com"
            target="_blank"
          >
            <m.div
              className="flex justify-between bg-white rounded-xl items-center cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <p className="text-light-black text-base px-3.5 pl-[13px]">
                Email Us
              </p>
              <div className="bg-primary-color px-3.5 py-[13px] rounded-r-xl">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/ text-white hover:text-2000/svg"
                >
                  <path
                    d="M6.29602 3.48708C3.91012 2.38589 1.36183 4.66673 2.19279 7.15964L3.45424 10.9007C3.59136 11.3074 3.97267 11.5812 4.40182 11.5812H13C13.5523 11.5812 14 12.0289 14 12.5812C14 13.1335 13.5523 13.5812 13 13.5812H4.40182C3.97267 13.5812 3.59136 13.855 3.45424 14.2617L2.19281 18.0028C1.36183 20.4957 3.91012 22.7765 6.29603 21.6754L20.0983 15.3051C22.422 14.2326 22.422 10.9299 20.0983 9.85737L6.29602 3.48708Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </m.div>
          </Link>
        </div>
      </div>
      <hr className="lg:my-14 my-7" />
      {/* copyright and use terms section */}
      <div className="flex justify-between">
        <p className="lg:text-xl md:text-sm text-xs">
          Copyright© 2024 Dhanush. All Rights Reserved.
        </p>
        <p className="lg:text-xl md:text-sm text-xs">
          User Terms & Conditions | Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
