"use client";
import React from 'react'
import { useAuth } from "@/store/dataStore";

const AdminBlogs = () => {
  const [isLoggedIn, setIsLoggedIn] = useAuth((state) => [
    state.isLoggedIn,
    state.setIsLoggedIn,
  ]);

  return (
    <div>
      {isLoggedIn ? (<div>
        <h1>Welcome to Admin Blog Page!</h1>
        <br/> <button onClick={() => setIsLoggedIn(false)}>Sign out</button>
        </div>
      ) : (
        <h1>You are not authorized to access this page. Please login first.</h1>
      )}
    </div>
  );
}

export default AdminBlogs
