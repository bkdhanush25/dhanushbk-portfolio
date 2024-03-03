"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

type Blog = {
  id: string;
  blogTitle: string;
  blogBannerImage: string;
  blogContent: string;
  blogAuthor: string;
};


const Blogs = () => {
  
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [blogBannerImage, setBlogBannerImage] = useState<string>("");

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch('/api/blog');
        if (response.ok) {
          const data = await response.json();
          setBlogs(data);
        } else {
          console.error('Failed to fetch blogs:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    }
  
    fetchBlogs();
  }, []);
  

  // Blog Inputs
  
    
    // try {
    //   const formData = new FormData();
    //   formData.append("blogTitle", blogTitle);
    //   if (blogBannerImage) {
    //     formData.append("blogBannerImage", blogBannerImage);
    //   }
    //   formData.append("blogContent", blogContent);
    //   formData.append("blogAuthor", blogAuthor);
     
    //   const response = await fetch("/api/blog", {
    //     method: "POST",
    //     body: formData,
    //   });

    //   if (!response.ok) {
    //     throw new Error("Failed to create blog post");
    //   }

    //   // Clear the form fields after successful submission
    //   setBlogTitle("");
    //   setBlogContent("");
    //   setBlogAuthor("");
    //   setBlogBannerImage(null);

    //   alert("Blog post created successfully!");
    // } catch (error) {
    //   console.error("Error:", error);
    //   alert("Failed to create blog post. Please try again.");
    // }
  

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <h2>{blog.blogTitle}</h2>
            {/* <width={100} height={100} src={blogBannerImage} alt="blog-banner" /> */}
            <Image src={blogBannerImage} alt="hello"/>
            <p>{blog.blogContent}</p>
            <p>{blog.blogAuthor}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
