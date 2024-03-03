import Image from "next/image";
import React from "react";
import ClgImage from "@/public/clg-image.jpg";
export const metadata = {
  title: "About",
};

function page() {
  return (
    <div className="py-[50px] max-sm:py-[90px] px-3 md:px-5 lg:px-20">
      <div className="lg:grid grid-cols-2 gap-2">
        <div className="col-span-1 flex justify-center">
          <Image
            width={100}
            height={100}
            src={ClgImage}
            alt="College-Image"
            className="w-[500px] rounded-[26px]"
            unoptimized
          />
        </div>
        <div className="col-span-1">
          <h3 className="text-5xl font-medium max-sm:text-3xl max-sm:text-left">
            About <span className="text-primary-color">Me</span>
          </h3>
          <br />
          <p className="text-lg lg:mr-14">
            <span className="text-xl font-medium mb-5">
              Hai all, Myself BK Dhanush
            </span>
            <br /> I am the person who is passionate in Computer Science Field
            and Entrepreneurship. I am Full Stack Web developer, who develops
            website for people. I am Curious in learning Global trends like 4.O
            technologies. Passionate on Startup and having hungry mindset to
            take Entrepreneurship in future. I am the person who is aware and
            curious about emerging technologies. I am self-motivated person who
            loves to inspire people and motivates through the quote ,&quot;STAY
            HUNGRY, STAY FOOLISH&quot; .
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
              <h5 className="font-semibold text-primary-color text-xl mr-3">Date of Birth<span className="text-black">:</span></h5>
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
              <h5 className="font-semibold text-primary-color text-xl mr-3">City<span className="text-black">:</span></h5>
              <p className="text-lg">Chennai, TamilNadu, India</p>
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
              <h5 className="font-semibold text-primary-color text-xl mr-3">Degree<span className="text-black">:</span></h5>
              <p className="text-lg">Bachelor of Engineering in Computer Science</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
