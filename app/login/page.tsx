"use client";

import { useAuth } from "@/lib/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function Page() {
  const auth = useAuth();
  const router = useRouter();

  if (!auth) return null;

  const { login } = auth;

  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await login(email, password);
    router.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="text" placeholder="Enter email.." />
      <input name="password" type="text" placeholder="Enter password.." />
      <button>Login</button>
    </form>
  );
}
