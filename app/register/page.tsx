"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    await fetch("/api/auth/register/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    router.push("/login");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="email" placeholder="Enter email.." />
      <input type="text" name="password" placeholder="Enter password.." />
      <button>Submit</button>
    </form>
  );
}
