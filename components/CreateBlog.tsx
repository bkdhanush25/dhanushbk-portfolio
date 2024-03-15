"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
// @ts-ignore
import { verify } from 'jsonwebtoken';
import { GetServerSideProps } from 'next';
import axios from "axios";
interface CreateBlogProps {
  loggedIn: boolean;
}

const CreateBlog = (
  // { loggedIn }: CreateBlogProps
  ) => {

  // Route for LoginIn
  // const router = useRouter();
  // useEffect(() => {
  //   // Redirect to login page if not logged in
  //   if (!loggedIn) {
  //     router.push('/admin/login');
  //   }
  // }, [loggedIn]);

  const renderParagraphs = () => {
    const paragraphs = blogContent.split('\n');
    return paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>);
  };

  // UseState Inputs
  const [blogTitle, setBlogTitle] = useState("");
  const [blogBannerImage, setBlogBannerImage] = useState<File | String | null>(null);
  const [blogContent, setBlogContent] = useState("");
  const [blogCategory, setBlogCategory] = useState("");
  const [blogCategories, setBlogCategories] = useState<string[]>([]);
  const [blogAuthor, setBlogAuthor] = useState("");

  const uploadFile = async() => {
    const data= new FormData();
    if(blogBannerImage) {
// @ts-ignore
    data.append("file", blogBannerImage);
    data.append("upload_preset",'dhanush-portfolio-blogs-preset');
    try{
      const cloudName =process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

      const res = await axios.post(api, data);
      const {secure_url} = res.data;
      console.log(secure_url);
      return secure_url;
    }catch(err){
      console.log(err);
    }
  }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const imgUrl = await uploadFile();
      const response = await fetch("/api/admin/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          blogTitle,
          blogBannerImage: imgUrl,
          blogContent,
          category: blogCategories,
          blogAuthor,
        }),
      });
      // Clear the form fields after successful submission
      setBlogTitle("");
      setBlogContent("");
      setBlogAuthor("");
      setBlogBannerImage(null);
      alert("Blog is added!!!");
      // Handle response as needed
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const addBlogCategory= (event:any) =>{
    event.preventDefault();
    setBlogCategories([...blogCategories,blogCategory]);
    setBlogCategory("");
  }

  return (
    // <div>
    //   {loggedIn ? (
    //     <h1>Welcome to the Example Page!</h1>
    //   ) : (
    //     <h1>You are not logged in. Please log in first.</h1>
    //   )}
    // </div>
    <div>
      {" "}
      Blogs
      <form>
        <input
          type="text"
          placeholder="Enter your Blog title"
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
        />
        <br />
        <input type="file" onChange={(e)  => {e.target.files && setBlogBannerImage(e.target.files[0])}} />
        <br />
        <textarea
          placeholder="Enter your Blog Content"
          value={blogContent}
          onChange={(e) => setBlogContent(e.target.value)}
        ></textarea>
        <br />
        <input
          type="text"
          placeholder="Enter the author name"
          value={blogAuthor}
          onChange={(e) => setBlogAuthor(e.target.value)}
        /><br/>
        <input type="text" placeholder="enter the category" value={blogCategory} onChange={(e) => setBlogCategory(e.target.value)} />
        <button onClick={(e) => addBlogCategory(e)}>Add Category</button><br/>
        {blogCategories}
        <br/>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <div>
        {renderParagraphs()}
      </div>
      {/* <input type="text" placeholder="Enter your comments"/> */}
    </div>
  );
};

//Verification Login
export const getServerSideProps: GetServerSideProps<CreateBlogProps> = async (context) => {
  const { req } = context;

  // Get JWT token from cookies or headers
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

  if (!token) {
    return {
      props: {
        loggedIn: false,
      },
    };
  }

  try {
    // Verify JWT token
    verify(token, process.env.JWT_SECRET);

    return {
      props: {
        loggedIn: true,
      },
    };
  } catch (error) {
    return {
      props: {
        loggedIn: false,
      },
    };
  }
};

export default CreateBlog;

// const CreateBlog = () => {
//   const [blogTitle, setBlogTitle] = useState("");
//   const [blogBannerImage, setBlogBannerImage] = useState<string>("");
//   const [blogContent, setBlogContent] = useState("");
//   const [blogCategories, setBlogCategories] = useState([]);
//   const [blogAuthor, setBlogAuthor] = useState("");

//   const imageToString = (file: any) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();

//       reader.onload = () => {
//         const result = reader.result;
//         if (typeof result === "string") {
//           resolve(result);
//         } else {
//           reject(new Error("Failed to convert image to string"));
//         }
//       };

//       reader.onerror = reject;

//       reader.readAsDataURL(file);
//     });
//   };

//   const handleBlogBannerImageChange = async (event: any) => {
//     const file = event.target.files[0];
//     try {
//       const imageDataUrl: string = (await imageToString(file)) as string;
//       console.log(imageDataUrl);
//       setBlogBannerImage(imageDataUrl);
//     } catch (error) {
//       console.error("Error converting image to string:", error);
//     }
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//     try {
//       const response = await fetch("/api/blog", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           blogTitle,
//           blogBannerImage,
//           blogContent,
//           blogAuthor,
//         }),
//       });
//       // Clear the form fields after successful submission
//       setBlogTitle("");
//       setBlogContent("");
//       setBlogAuthor("");
//       setBlogBannerImage("");
//       alert("you're email has been added to the list!!!");
//       // Handle response as needed
//     } catch (error) {
//       console.error("Error:", error);
//     }

//     return (
//       <div>
//         Blogs
//         <form>
//           <input
//             type="text"
//             placeholder="Enter your Blog title"
//             value={blogTitle}
//             onChange={(e) => setBlogTitle(e.target.value)}
//           />
//           <br />
//           <input type="file" onChange={handleBlogBannerImageChange} />
//           <br />
//           <input
//             type="text"
//             placeholder="Enter your Blog Content"
//             value={blogContent}
//             onChange={(e) => setBlogContent(e.target.value)}
//           />
//           <br />
//           <input
//             type="text"
//             placeholder="Enter the author name"
//             value={blogAuthor}
//             onChange={(e) => setBlogAuthor(e.target.value)}
//           />
//           <button onClick={handleSubmit}>Submit</button>
//         </form>
//         {/* <input type="text" placeholder="Enter your comments"/> */}
//       </div>
//     );
//   };
// };

// export default CreateBlog;
