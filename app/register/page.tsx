"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col justify-center itmes-center bg-white px-16">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Enter email.."
            className="w-full border rounded-lg px-4 py-3 mb-4 text-gray-700 border-gray-200"
          />
          <input
            type="text"
            name="password"
            placeholder="Enter password.."
            className="w-full border rounded-lg px-4 py-3 mb-4 text-gray-700 border-gray-200"
          />
          <button className="w-full border rounded-lg px-4 py-3 mb-4 text-gray-700 border-gray-200">
            Register
          </button>
          <Link href="/login">
            {" "}
            <button className="w-full border rounded-lg px-4 py-3 mb-4 text-white border-gray-200 bg-blue-400">
              Login
            </button>
          </Link>
        </form>
      </div>
      <div className="w-1/2 relative">
        <Image
          src="/Rectangle 2775.png"
          alt="background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex flex-col justify-center items-center text-white px-16">
          <p className="text-2xl font-light text-center">
            The future belongs to those who{" "}
            <span className="font-bold text-blue-300">believe</span> in the
            beauty of their dreams.
          </p>
          <p className="mt-4">- Eleanor Roosevelt</p>
        </div>
      </div>
    </div>
  );
}
