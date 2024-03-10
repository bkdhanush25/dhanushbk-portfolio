"use client";
import React from "react";

const AdminLogin = () => {
  return (
    <div>
      <h1>Admin Login</h1>
      <form>
        <input type="text" placeholder="Enter username" required />
        <br />
        <input type="password" placeholder="Enter password" required />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminLogin;
