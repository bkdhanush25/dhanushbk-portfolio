"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
// @ts-ignore 
import { DateTime } from 'luxon';
import { useBlog } from "@/store/dataStore";
import { useRouter } from "next/navigation";

type Blog = {
  id: string;
  blogTitle: string;
  blogBannerImage: string;
  blogContent: string;
  category: string[];
  blogAuthor: string;
  likes: number;
  comments: string[];
  createdAt: DateTime;
  updatedAt: DateTime;
};

const Blogs = () => {
  const router = useRouter();

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [blogBannerImage, setBlogBannerImage] = useState<string>("");

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch("/api/blog");
        if (response.ok) {
          const data = await response.json();
          setBlogs(data);
        } else {
          console.error("Failed to fetch blogs:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }

    fetchBlogs();
  }, []);

  const [setBlogTitle, setBlogContent, setCategory, setBlogAuthor, setLikes, setComments, setCreatedAt] = useBlog((state) => [
    state.setBlogTitle,
    state.setBlogContent,
    state.setCategory,
    state.setBlogAuthor,
    state.setLikes,
    state.setComments,
    state.setCreatedAt,
  ]);

  return (
    <div className="text-center md:mx-20 mx-5 mt-5 mb-10">
      <h1 className="text-5xl font-medium max-sm:text-3xl max-sm:text-left mb-10">
        My <span className="text-primary-color">Blogs</span>
      </h1>
      <ul className="flex flex-col lg:gap-5 gap-10">
        {blogs.map((blog) => (
          // <li key={blog.id} className="border inline-block">
          //   <h2>{blog.blogTitle}</h2>
          //   <Image src={blogBannerImage} alt="hello"/>
          //   <p>{blog.blogContent}</p>
          //   <p>{blog.blogAuthor}</p>
          // </li>
<li onClick={()=>{
  setBlogTitle(blog.blogTitle)
  setBlogContent(blog.blogContent)
  setCategory(blog.category)
  setBlogAuthor(blog.blogAuthor)
  setLikes(blog.likes)
  setComments(blog.comments)
  setCreatedAt(blog.createdAt)
  router.push(`/blogs/${blog.blogTitle}`);
}} className="lg:flex justify-center gap-5 p-5 rounded-3xl group cursor-pointer hover:bg-zinc-100" key={blog.id}>
            <div className="w-full mb-2 flex justify-center">
              <Image
                width={100}
                height={100}
                src="https://img.freepik.com/premium-vector/trendy-event-banner-template_85212-590.jpg"
                alt="College-Image"
                className="w-[500px] md:min-w-[400px] min-w-[300px] h-fit rounded-[26px]"
                unoptimized
              />
            </div>
            <div className="lg:text-left md:text-center text-left">
              <h2 className="font-semibold md:text-3xl text-2xl group-hover:underline">
                {blog.blogTitle}
              </h2>
              <p className="text-zinc-500 lg:mb-5 md:mb-2">
                - by {blog.blogAuthor}
              </p>
              <p className="line-clamp-4 mb-5">{blog.blogContent}</p>
              {/* Date, Categories, Likes and Comments */}
              <div className="flex flex-wrap md:text-base text-sm justify-center items-center gap-5">
                {/* Date of posted */}
                <div>
                  <p className="text-zinc-500 font-medium">{DateTime.fromISO(blog.createdAt).monthLong} {DateTime.fromISO(blog.createdAt).day}, {DateTime.fromISO(blog.createdAt).year}</p>
                </div>
                {/* Categories */}
                <div>
                  <ul className="flex gap-2">
                    {blog.category.map((item) => (
                      <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Likes */}
                <div className="flex gap-1 items-center">
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
                      stroke-width="1"
                      d="M7 11c.889-.086 1.416-.543 2.156-1.057a22.323 22.323 0 0 0 3.958-5.084 1.6 1.6 0 0 1 .582-.628 1.549 1.549 0 0 1 1.466-.087c.205.095.388.233.537.406a1.64 1.64 0 0 1 .384 1.279l-1.388 4.114M7 11H4v6.5A1.5 1.5 0 0 0 5.5 19v0A1.5 1.5 0 0 0 7 17.5V11Zm6.5-1h4.915c.286 0 .372.014.626.15.254.135.472.332.637.572a1.874 1.874 0 0 1 .215 1.673l-2.098 6.4C17.538 19.52 17.368 20 16.12 20c-2.303 0-4.79-.943-6.67-1.475"
                    />
                  </svg>
                  <p>{blog.likes}</p>
                  <p>Likes</p>
                </div>
                {/* Comments */}
                <div className="flex gap-1 items-center">
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
                      stroke-width="1"
                      d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <p>{blog.comments.length}</p>
                  <p>Comments</p>
                </div>
              </div>
            </div>
          </li>
        ))}
        <li className="lg:flex justify-center gap-5 p-5 rounded-3xl group cursor-pointer hover:bg-zinc-100">
          <div className="w-full mb-2 flex justify-center">
            <Image
              width={100}
              height={100}
              src="https://img.freepik.com/premium-vector/trendy-event-banner-template_85212-590.jpg"
              alt="College-Image"
              className="w-[500px] md:min-w-[400px] min-w-[300px] h-fit rounded-[26px]"
              unoptimized
            />
          </div>
          <div className="lg:text-left">
            <h2 className="font-semibold md:text-3xl text-2xl lg:mb-5 md:mb-2 group-hover:underline">
              One of the Best Event Int The World
            </h2>
            <p className="line-clamp-4 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="flex flex-wrap md:text-base text-sm justify-center items-center gap-5">
              {/* Date of posted */}
              <div>
                <p className="text-zinc-500 font-medium">August 19, 2022</p>
              </div>
              {/* Categories */}
              <div>
                <ul className="flex gap-2">
                  <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                    Lifestyle
                  </li>
                  <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                    Pets & animals
                  </li>
                  <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                    Fun & Entertainment
                  </li>
                </ul>
              </div>
              {/* Likes */}
              <div className="flex gap-1 items-center">
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
                    stroke-width="1"
                    d="M7 11c.889-.086 1.416-.543 2.156-1.057a22.323 22.323 0 0 0 3.958-5.084 1.6 1.6 0 0 1 .582-.628 1.549 1.549 0 0 1 1.466-.087c.205.095.388.233.537.406a1.64 1.64 0 0 1 .384 1.279l-1.388 4.114M7 11H4v6.5A1.5 1.5 0 0 0 5.5 19v0A1.5 1.5 0 0 0 7 17.5V11Zm6.5-1h4.915c.286 0 .372.014.626.15.254.135.472.332.637.572a1.874 1.874 0 0 1 .215 1.673l-2.098 6.4C17.538 19.52 17.368 20 16.12 20c-2.303 0-4.79-.943-6.67-1.475"
                  />
                </svg>
                <p>1</p>
                <p>Likes</p>
              </div>
              {/* Comments */}
              <div className="flex gap-1 items-center">
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
                    stroke-width="1"
                    d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <p>1</p>
                <p>Comments</p>
              </div>
            </div>
          </div>
        </li>
        <li className="lg:flex justify-center gap-5 p-5 rounded-3xl group cursor-pointer hover:bg-zinc-100">
          <div className="w-full mb-2 flex justify-center">
            <Image
              width={100}
              height={100}
              src="https://img.freepik.com/premium-vector/trendy-event-banner-template_85212-590.jpg"
              alt="College-Image"
              className="w-[500px] md:min-w-[400px] min-w-[300px] h-fit rounded-[26px]"
              unoptimized
            />
          </div>
          <div className="lg:text-left">
            <h2 className="font-semibold md:text-3xl text-2xl lg:mb-5 md:mb-2 group-hover:underline">
              One of the Best Event Int The World
            </h2>
            <p className="line-clamp-4 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="flex flex-wrap md:text-base text-sm justify-center items-center gap-5">
              {/* Date of posted */}
              <div>
                <p className="text-zinc-500 font-medium">August 19, 2022</p>
              </div>
              {/* Categories */}
              <div>
                <ul className="flex gap-2">
                  <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                    Lifestyle
                  </li>
                  <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                    Pets & animals
                  </li>
                  <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                    Fun & Entertainment
                  </li>
                </ul>
              </div>
              {/* Likes */}
              <div className="flex gap-1 items-center">
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
                    stroke-width="1"
                    d="M7 11c.889-.086 1.416-.543 2.156-1.057a22.323 22.323 0 0 0 3.958-5.084 1.6 1.6 0 0 1 .582-.628 1.549 1.549 0 0 1 1.466-.087c.205.095.388.233.537.406a1.64 1.64 0 0 1 .384 1.279l-1.388 4.114M7 11H4v6.5A1.5 1.5 0 0 0 5.5 19v0A1.5 1.5 0 0 0 7 17.5V11Zm6.5-1h4.915c.286 0 .372.014.626.15.254.135.472.332.637.572a1.874 1.874 0 0 1 .215 1.673l-2.098 6.4C17.538 19.52 17.368 20 16.12 20c-2.303 0-4.79-.943-6.67-1.475"
                  />
                </svg>
                <p>1</p>
                <p>Likes</p>
              </div>
              {/* Comments */}
              <div className="flex gap-1 items-center">
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
                    stroke-width="1"
                    d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <p>1</p>
                <p>Comments</p>
              </div>
            </div>
          </div>
        </li>
        <li className="lg:flex justify-center gap-5 p-5 rounded-3xl group cursor-pointer hover:bg-zinc-100">
          <div className="w-full mb-2 flex justify-center">
            <Image
              width={100}
              height={100}
              src="https://img.freepik.com/premium-vector/trendy-event-banner-template_85212-590.jpg"
              alt="College-Image"
              className="w-[500px] md:min-w-[400px] min-w-[300px] h-fit rounded-[26px]"
              unoptimized
            />
          </div>
          <div className="lg:text-left">
            <h2 className="font-semibold md:text-3xl text-2xl lg:mb-5 md:mb-2 group-hover:underline">
              One of the Best Event Int The World
            </h2>
            <p className="line-clamp-4 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="flex flex-wrap md:text-base text-sm justify-center items-center gap-5">
              {/* Date of posted */}
              <div>
                <p className="text-zinc-500 font-medium">August 19, 2022</p>
              </div>
              {/* Categories */}
              <div>
                <ul className="flex gap-2">
                  <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                    Lifestyle
                  </li>
                  <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                    Pets & animals
                  </li>
                  <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                    Fun & Entertainment
                  </li>
                </ul>
              </div>
              {/* Likes */}
              <div className="flex gap-1 items-center">
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
                    stroke-width="1"
                    d="M7 11c.889-.086 1.416-.543 2.156-1.057a22.323 22.323 0 0 0 3.958-5.084 1.6 1.6 0 0 1 .582-.628 1.549 1.549 0 0 1 1.466-.087c.205.095.388.233.537.406a1.64 1.64 0 0 1 .384 1.279l-1.388 4.114M7 11H4v6.5A1.5 1.5 0 0 0 5.5 19v0A1.5 1.5 0 0 0 7 17.5V11Zm6.5-1h4.915c.286 0 .372.014.626.15.254.135.472.332.637.572a1.874 1.874 0 0 1 .215 1.673l-2.098 6.4C17.538 19.52 17.368 20 16.12 20c-2.303 0-4.79-.943-6.67-1.475"
                  />
                </svg>
                <p>1</p>
                <p>Likes</p>
              </div>
              {/* Comments */}
              <div className="flex gap-1 items-center">
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
                    stroke-width="1"
                    d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <p>1</p>
                <p>Comments</p>
              </div>
            </div>
          </div>
        </li>
        <li className="lg:flex justify-center gap-5 p-5 rounded-3xl group cursor-pointer hover:bg-zinc-100">
          <div className="w-full mb-2 flex justify-center">
            <Image
              width={100}
              height={100}
              src="https://img.freepik.com/premium-vector/trendy-event-banner-template_85212-590.jpg"
              alt="College-Image"
              className="w-[500px] md:min-w-[400px] min-w-[300px] h-fit rounded-[26px]"
              unoptimized
            />
          </div>
          <div className="lg:text-left">
            <h2 className="font-semibold md:text-3xl text-2xl lg:mb-5 md:mb-2 group-hover:underline">
              One of the Best Event Int The World
            </h2>
            <p className="line-clamp-4 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="flex flex-wrap md:text-base text-sm justify-center items-center gap-5">
              {/* Date of posted */}
              <div>
                <p className="text-zinc-500 font-medium">August 19, 2022</p>
              </div>
              {/* Categories */}
              <div>
                <ul className="flex gap-2">
                  <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                    Lifestyle
                  </li>
                  <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                    Pets & animals
                  </li>
                  <li className="bg-zinc-200 rounded-full px-3 py-1 text-center items-center flex">
                    Fun & Entertainment
                  </li>
                </ul>
              </div>
              {/* Likes */}
              <div className="flex gap-1 items-center">
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
                    stroke-width="1"
                    d="M7 11c.889-.086 1.416-.543 2.156-1.057a22.323 22.323 0 0 0 3.958-5.084 1.6 1.6 0 0 1 .582-.628 1.549 1.549 0 0 1 1.466-.087c.205.095.388.233.537.406a1.64 1.64 0 0 1 .384 1.279l-1.388 4.114M7 11H4v6.5A1.5 1.5 0 0 0 5.5 19v0A1.5 1.5 0 0 0 7 17.5V11Zm6.5-1h4.915c.286 0 .372.014.626.15.254.135.472.332.637.572a1.874 1.874 0 0 1 .215 1.673l-2.098 6.4C17.538 19.52 17.368 20 16.12 20c-2.303 0-4.79-.943-6.67-1.475"
                  />
                </svg>
                <p>1</p>
                <p>Likes</p>
              </div>
              {/* Comments */}
              <div className="flex gap-1 items-center">
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
                    stroke-width="1"
                    d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <p>1</p>
                <p>Comments</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Blogs;
