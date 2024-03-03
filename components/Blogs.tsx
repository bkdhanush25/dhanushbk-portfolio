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
  const [blogTitle, setBlogTitle] = useState("");
  const [blogBannerImage, setBlogBannerImage] = useState<string>("");
  const [blogContent, setBlogContent] = useState("");
  const [blogCategories, setBlogCategories] = useState([]);
  const [blogAuthor, setBlogAuthor] = useState("");

  const imageToString = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = () => {
        const result = reader.result;
        if (typeof result === 'string') {
          resolve(result);
        } else {
          reject(new Error('Failed to convert image to string'));
        }
      };
  
      reader.onerror = reject;
  
      reader.readAsDataURL(file);
    });
  };

  const handleBlogBannerImageChange = async (event: any) => {
    const file = event.target.files[0];
    try {
      const imageDataUrl: string = await imageToString(file) as string;
      console.log(imageDataUrl);
      setBlogBannerImage(imageDataUrl)
    } catch (error) {
      console.error('Error converting image to string:', error);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ blogTitle, blogBannerImage, blogContent, blogAuthor }),
      });
            // Clear the form fields after successful submission
      setBlogTitle("");
      setBlogContent("");
      setBlogAuthor("");
      setBlogBannerImage("");
      alert("you're email has been added to the list!!!");
      // Handle response as needed
    } catch (error) {
      console.error("Error:", error);
    }
    
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
  };

  return (
    <div>
      Blogs
      <form>
        <input
          type="text"
          placeholder="Enter your Blog title"
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
        />
        <br />
        <input type="file" onChange={handleBlogBannerImageChange} />
        <br />
        <input
          type="text"
          placeholder="Enter your Blog Content"
          value={blogContent}
          onChange={(e) => setBlogContent(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter the author name"
          value={blogAuthor}
          onChange={(e) => setBlogAuthor(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {/* <input type="text" placeholder="Enter your comments"/> */}
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
