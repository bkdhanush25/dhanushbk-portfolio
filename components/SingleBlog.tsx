"use client";
import React from "react";
import Image from "next/image";
import { useBlog } from "@/store/dataStore";
// @ts-ignore 
import { DateTime } from 'luxon';

const SingleBlog = () => {

  const renderParagraphs = () => {
    const paragraphs = blogContent.split('\n');
    return paragraphs.map((paragraph, index) => <p key={index}>{paragraph}<br/></p>);
  };

  const [
    blogTitle,
    blogContent,
    category,
    blogAuthor,
    likes,
    comments,
    createdAt,
  ] = useBlog((state) => [
    state.blogTitle,
    state.blogContent,
    state.category,
    state.blogAuthor,
    state.likes,
    state.comments,
    state.createdAt,
  ]);

  return (
    <div className="mx-56">
      {/* Banner Image */}
      <div className="w-full flex justify-center mt-20">
        <Image
          src="https://img.freepik.com/premium-vector/trendy-event-banner-template_85212-590.jpg"
          width={100}
          height={100}
          alt="blog-banner"
          className="w-full h-[35vw] object-cover rounded-lg"
          unoptimized
        />
      </div>
      <div className="mt-10">
        <h2 className="text-5xl font-bold underline">{blogTitle}</h2>
        {/* Date, Categories, Likes and Comments */}
        <div className="flex flex-wrap md:text-base text-sm items-center gap-5 my-5">
          {/* Date of posted */}
          <div>
            <p className="text-zinc-500 font-medium">{DateTime.fromISO(createdAt).monthLong} {DateTime.fromISO(createdAt).day}, {DateTime.fromISO(createdAt).year}</p>
          </div>
          {/* Categories */}
          <div>
            <ul className="flex gap-2">
              {category.map((item) => (
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
            <p>{likes}</p>
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
            <p>{comments.length}</p>
            <p>Comments</p>
          </div>
        </div>
        {/* Blog Content */}
        <p className="text-lg mb-10">{renderParagraphs()}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
