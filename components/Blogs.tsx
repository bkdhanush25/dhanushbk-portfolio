"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
// @ts-ignore
import { DateTime } from "luxon";
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

  const [isBlogLoading, setIsBlogLoading] = useState(false);

  useEffect(() => {
    async function fetchBlogs() {
      setIsBlogLoading(true);
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
      setIsBlogLoading(false);
    }

    fetchBlogs();
  }, []);

  const [
    setBlogTitle,
    setBlogBannerImage,
    setBlogContent,
    setCategory,
    setBlogAuthor,
    setLikes,
    setComments,
    setCreatedAt,
  ] = useBlog((state) => [
    state.setBlogTitle,
    state.setBlogBannerImage,
    state.setBlogContent,
    state.setCategory,
    state.setBlogAuthor,
    state.setLikes,
    state.setComments,
    state.setCreatedAt,
  ]);

  return (
    <div className="text-center md:mx-20 mx-2 mt-5 mb-10">
      <h1 className="text-5xl font-bold md:font-medium max-sm:text-4xl max-sm:text-left mb-5 md:mb-10">
        My <span className="text-primary-color">Blogs</span>
      </h1>
      <ul className="flex flex-col lg:gap-5 gap-10">
        
      </ul>
    </div>
  );
};

export default Blogs;
