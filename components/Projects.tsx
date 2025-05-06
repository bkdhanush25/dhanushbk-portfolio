"use client"
import React from "react";
import PortfolioMockup from "../public/portfolio-project-mockup.png";
import ColdEmailAIMockup from "../public/coldemailai-project-mockup.png";
import NutrientAIMockup from "../public/nutrientai-project-mockup.png";
import TourismMockup from "../public/tourism-project-mockup.png";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div>
      <div className="text-center md:mx-20 mx-2 mt-5 mb-10">
        <h1 className="text-5xl font-bold md:font-medium max-sm:text-4xl max-sm:text-left mb-5 md:mb-10">
          My <span className="text-primary-color">Projects</span>
        </h1>
        <ul className="flex flex-col lg:gap-5 gap-10">
          <li onClick={() => window.open('https://smart-healthcare-assist.streamlit.app/','_blank')} className="lg:flex justify-center gap-5 py-5 px-2 rounded-3xl group cursor-pointer bg-zinc-100 md:bg-white hover:bg-zinc-100">
            <div className="w-full mb-2 flex justify-center">
              <Image
                width={100}
                height={100}
                src={NutrientAIMockup}
                alt="nutrientai-project-mockup"
                className="w-full md:w-[500px] md:min-w-[400px] min-w-[280px] h-fit rounded-md md:rounded-[26px]"
                unoptimized
              />
            </div>
            <div className="lg:text-left md:text-center text-left">
              <h2 className="font-semibold md:text-3xl text-2xl group-hover:underline">
                AI-Powered Smart Healthcare Assistant
              </h2>
              <p className="mb-5 mt-3 md:mt-0">
                AI-driven Streamlit-based web tool designed to estimate the
                nutritional content of Indian dishes. It leverages Groq&apos;s
                LLaMA-3 large language model to extract ingredients and their
                quantities from user-inputted dish names. The extracted data is
                matched against a vector database (ChromaDB) that stores
                nutritional details, enabling accurate retrieval of calories,
                protein, fat, and carbohydrates. The app also classifies dishes
                into categories such as Dal, Sabzi, Snack, or Sweet using
                LLM-based inference. Users can understand the nutritional value
                of their meals without manually entering ingredients or
                quantities.
              </p>
              {/* Date, Categories, Likes and Comments */}
              <div className="flex flex-wrap md:text-base text-sm justify-start items-center gap-5">
                {/* Categories */}
                <div>
                  <ul className="flex gap-2">
                    <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                      Python
                    </li>
                    <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                      Groq&apos;s LLaMA-3 Model
                    </li>
                    <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                      LangChain
                    </li>
                    <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                      ChromaDB
                    </li>
                    <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                      Streamlit
                    </li>
                    <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                      Groq
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li onClick={() => window.open('https://dhanushbk-portfolio.vercel.app/','_blank')} className="lg:flex justify-center gap-5 py-5 px-2 rounded-3xl group cursor-pointer bg-zinc-100 md:bg-white hover:bg-zinc-100">
            <div className="w-full mb-2 flex justify-center">
              <Image
                width={100}
                height={100}
                src={PortfolioMockup}
                alt="portfolio-project-mockup"
                className="w-full md:w-[500px] md:min-w-[400px] min-w-[280px] h-fit rounded-md md:rounded-[26px]"
                unoptimized
              />
            </div>
            <div className="lg:text-left md:text-center text-left">
              <h2 className="font-semibold md:text-3xl text-2xl group-hover:underline">
                Full-Stack Developer Portfolio Website
              </h2>
              <p className="mb-5 mt-3 md:mt-0">
                portfolio web application is built using Next.js, Tailwind CSS,
                and Prisma with MongoDB for dynamic content management. It
                features an integrated admin dashboard for easy management of
                the portfolio&apos;s content and blogs. Blogs are directly fetched
                from the MongoDB database, providing flexibility for real-time
                updates. Prisma ORM is used to interact with MongoDB, ensuring
                efficient data querying and management. Zustand manages the
                global state, and TypeScript ensures type safety across the
                project. The app is deployed on Vercel for fast, reliable, and
                globally accessible hosting.
              </p>
              {/* Date, Categories, Likes and Comments */}
              <div className="flex flex-wrap md:text-base text-sm justify-start items-center gap-5">
                {/* Categories */}
                <div>
                  <ul className="flex gap-2">
                    <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                      Next.js
                    </li>
                    <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                      React
                    </li>
                    <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                      Tailwind CSS
                    </li>
                    <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                      TypeScript
                    </li>
                    <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                      Prisma
                    </li>
                    <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                      MongoDB
                    </li>
                    <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                      Zustand
                    </li>
                    <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                      Vercel
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li onClick={() => window.open('https://github.com/bkdhanush25/cold_email_generator','_blank')} className="lg:flex justify-center gap-5 py-5 px-2 rounded-3xl group cursor-pointer bg-zinc-100 md:bg-white hover:bg-zinc-100">
            <div className="w-full mb-2 flex justify-center">
              <Image
                width={100}
                height={100}
                src={ColdEmailAIMockup}
                alt="coldemailai-project-mockup"
                className="w-full md:w-[500px] md:min-w-[400px] min-w-[280px] h-fit rounded-md md:rounded-[26px]"
                unoptimized
              />
            </div>
            <div className="lg:text-left md:text-center text-left">
              <h2 className="font-semibold md:text-3xl text-2xl group-hover:underline">
                Personalized Job Application Email Generator AI
              </h2>
              <p className="mb-5 mt-3 md:mt-0">
                This web application uses Streamlit to provide an interactive
                interface for generating personalized cold emails for job
                applications. It leverages Groq&apos;s LLaMA-3.3-70B Versatile model
                to extract key details from user-provided resumes and job
                descriptions, automatically generating tailored emails. The tool
                also integrates PyMuPDF for extracting text from PDF resumes and
                BeautifulSoup for scraping job details from URLs. The backend is
                powered by Python, with key libraries such as Requests and
                Pydantic for web scraping, data handling, and validation.
              </p>
              {/* Date, Categories, Likes and Comments */}
              <div className="flex flex-wrap md:text-base text-sm justify-start items-center gap-5">
                {/* Categories */}
                <div>
                  <ul className="flex flex-wrap gap-2">
                    <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                      Groq
                    </li>
                    <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                      PyMuPDF
                    </li>
                    <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                      Python
                    </li>

                    <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                      ChromaDB
                    </li>
                    <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                      LangChain
                    </li>
                    <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                      BeautifulSoup
                    </li>
                    <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                      Streamlit
                    </li>
                    <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                      LLaMA-3.3-70B Model
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li onClick={() => window.open('https://github.com/bkdhanush25/TouristProject','_blank')} className="lg:flex justify-center gap-5 py-5 px-2 rounded-3xl group cursor-pointer bg-zinc-100 md:bg-white hover:bg-zinc-100">
            <div className="w-full mb-2 flex justify-center">
              <Image
                width={100}
                height={100}
                src={TourismMockup}
                alt="tourism-project-mockup"
                className="w-full md:w-[500px] md:min-w-[400px] min-w-[280px] h-fit rounded-md md:rounded-[26px]"
                unoptimized
              />
            </div>
            <div className="lg:text-left md:text-center text-left">
              <h2 className="font-semibold md:text-3xl text-2xl group-hover:underline">
                Full Stack Tour Booking Web Application
              </h2>
              <p className="mb-5 mt-3 md:mt-0">
                This web application is built with Node.js and Express to
                facilitate online tour bookings. It features a user-friendly
                interface developed using EJS templating engine and styled with
                CSS. The application integrates MongoDB for efficient data
                storage and management. Users can browse available tours, view
                details, and make bookings. The backend handles user
                authentication, session management, and email notifications for
                booking confirmations. The project is designed to provide a
                seamless and interactive experience for users seeking to book
                tours online.
              </p>
              {/* Date, Categories, Likes and Comments */}
              <div className="flex flex-wrap md:text-base text-sm justify-start items-center gap-5">
                {/* Categories */}
                <div>
                  <ul className="flex gap-2">
                    <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                    EJS 
                    </li>
                    <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                    Node.js
                    </li>
                    <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                    Express
                    </li>
                    <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                    Mongoose
                    </li>
                    <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                    MongoDB
                    </li>
                    <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                    Npm
                    </li>
                    <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                    Cookie Parser
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
