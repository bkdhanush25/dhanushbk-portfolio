"use client"
import React from 'react';
import AdminBlogs from '@/components/AdminBlogs';
import { useAuth } from "@/store/dataStore";

const Page = () => {

  const [isLoggedIn, setIsLoggedIn] = useAuth((state) => [
    state.isLoggedIn,
    state.setIsLoggedIn,
  ]);
  
  return (
    <>
    {isLoggedIn?(<div><AdminBlogs/></div>):(<div>Do not Access</div>)}
    </>
  )
}

export default Page
