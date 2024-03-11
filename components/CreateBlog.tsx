"use client"
import React, { useState, useEffect } from "react";

const CreateBlog = () => {

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
        if (typeof result === "string") {
          resolve(result);
        } else {
          reject(new Error("Failed to convert image to string"));
        }
      };

      reader.onerror = reject;

      reader.readAsDataURL(file);
    });
  };

  const handleBlogBannerImageChange = async (event: any) => {
    const file = event.target.files[0];
    try {
      const imageDataUrl: string = (await imageToString(file)) as string;
      console.log(imageDataUrl);
      setBlogBannerImage(imageDataUrl);
    } catch (error) {
      console.error("Error converting image to string:", error);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/admin/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          blogTitle,
          blogBannerImage,
          blogContent,
          blogAuthor,
        }),
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
};

  return (
    <div>       Blogs
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
      </div>
  )
}

export default CreateBlog

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

