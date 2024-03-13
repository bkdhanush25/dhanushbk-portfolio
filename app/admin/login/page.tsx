"use client";
import react, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/store/dataStore";
// @ts-ignore
import { sign } from 'jsonwebtoken';

function signToken(payload: { username: string }) {
  return sign(payload, process.env.JWT_SEC, { expiresIn: '1h' });
}

export default function LoginPage() {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useAuth((state) => [
    state.isLoggedIn,
    state.setIsLoggedIn,
  ]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const userName = formData.get('userName')?.toString();
    const password = formData.get('password')?.toString();
    try {
    const response = await fetch("/api/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, password }),
    });
    setIsLoggedIn(true);
    const token = signToken({ username: userName as string });
      router.push("/admin/blogs");
  } catch (error) {
    
      alert("Username or password is wrong!!"+ error);
  }
}

  return (
    <form onSubmit={handleSubmit}>
      <h1>Admin Login</h1>
      <br />
      <input type="text" name="userName" placeholder="userName" required />
      <br />
      <input type="password" name="password" placeholder="Password" required />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}