"use client";
import react, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/store/dataStore";

export default function LoginPage() {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useAuth((state) => [
    state.isLoggedIn,
    state.setIsLoggedIn,
  ]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const userName = formData.get("userName");
    const password = formData.get("password");

    const response = await fetch("/api/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, password }),
    });

    if (response.ok) {
      setIsLoggedIn(true);
      router.push("/admin/blogs");
    } else {
      alert("Username or password is wrong!!");
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